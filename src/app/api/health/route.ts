import { NextResponse } from "next/server"
import connectToDatabase from "@/lib/connectToDatabase"

export async function GET() {
  try {
    console.log("Testing database connection...")
    await connectToDatabase()

    // Test if we can perform a simple query
    const mongoose = await import("mongoose")
    const db = mongoose.connection.db

    if (db) {
      console.log("Database connection test successful")
      return NextResponse.json({
        status: "success",
        message: "Database connection is working",
        readyState: mongoose.connection.readyState
      })
    } else {
      throw new Error("Database not available")
    }
  } catch (error) {
    console.error("Database connection test failed:", error)
    return NextResponse.json({
      status: "error",
      message: "Database connection failed",
      error: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 })
  }
}
