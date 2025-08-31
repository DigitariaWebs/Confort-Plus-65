import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI!

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local")
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
interface MongooseCache {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

declare global {
  var mongoose: MongooseCache | undefined
}

const cached: MongooseCache = global.mongoose || { conn: null, promise: null }

if (!global.mongoose) {
  global.mongoose = cached
}

async function connectToDatabase() {
  // Check if we have a connection and it's ready
  if (cached.conn && mongoose.connection.readyState === 1) {
    console.log("Using existing MongoDB connection")
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 2, // Reduce pool size for serverless
      serverSelectionTimeoutMS: 2000, // 2 second timeout
      socketTimeoutMS: 20000, // 20 second socket timeout
      maxIdleTimeMS: 15000, // Close connections after 15 seconds of inactivity
      family: 4, // Use IPv4
      retryWrites: true,
      retryReads: true,
    }

    console.log("Creating new MongoDB connection...")
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("MongoDB connected successfully")
      return mongoose
    }).catch((error) => {
      console.error("MongoDB connection error:", error)
      cached.promise = null
      throw error
    })
  }

  try {
    cached.conn = await cached.promise
    return cached.conn
  } catch (e) {
    cached.promise = null
    console.error("Failed to connect to MongoDB:", e)
    throw e
  }
}

export default connectToDatabase
