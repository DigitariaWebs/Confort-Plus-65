import mongoose, { Document, Model } from "mongoose"

export interface IUser extends Document {
  name: string
  email: string
  password: string
  phone?: string
  address?: {
    street: string
    city: string
    province: string
    postalCode: string
  }
  dateOfBirth?: Date
  emergencyContact?: {
    name: string
    phone: string
    relationship: string
  }
  medicalInfo?: {
    conditions: string[]
    allergies: string[]
    medications: string[]
    notes: string
  }
  preferences?: {
    language: string
    notifications: boolean
    marketingEmails: boolean
  }
  membership?: {
    joinDate: Date
    status: 'active' | 'inactive' | 'suspended'
    plan: string
  }
  stats?: {
    totalVisits: number
    lastVisit: Date
    satisfaction: number
  }
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: [6, "Password should be at least 6 characters"],
    },
    phone: {
      type: String,
      trim: true,
    },
    address: {
      street: String,
      city: String,
      province: String,
      postalCode: String,
    },
    dateOfBirth: {
      type: Date,
    },
    emergencyContact: {
      name: String,
      phone: String,
      relationship: String,
    },
    medicalInfo: {
      conditions: [String],
      allergies: [String],
      medications: [String],
      notes: String,
    },
    preferences: {
      language: { type: String, default: 'fr' },
      notifications: { type: Boolean, default: true },
      marketingEmails: { type: Boolean, default: false },
    },
    membership: {
      joinDate: { type: Date, default: Date.now },
      status: { type: String, enum: ['active', 'inactive', 'suspended'], default: 'active' },
      plan: { type: String, default: 'standard' },
    },
    stats: {
      totalVisits: { type: Number, default: 0 },
      lastVisit: Date,
      satisfaction: { type: Number, min: 0, max: 100, default: 95 },
    },
  },
  {
    timestamps: true,
  }
)

// Prevent re-compilation of model in development
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema)

export default User
