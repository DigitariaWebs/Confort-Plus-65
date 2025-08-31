import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import User from "@/models/User"
import mongoose from "mongoose"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Ensure database connection
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI!)
    }

    const user = await User.findOne({ email: session.user.email }).select('-password')

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({ user })
  } catch (error) {
    console.error("Profile fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const {
      name,
      phone,
      address,
      dateOfBirth,
      emergencyContact,
      medicalInfo,
      preferences
    } = body

    // Ensure database connection
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI!)
    }

    const updateData: Partial<{
      name: string
      phone: string
      address: {
        street: string
        city: string
        province: string
        postalCode: string
      }
      dateOfBirth: string
      emergencyContact: {
        name: string
        phone: string
        relationship: string
      }
      medicalInfo: {
        conditions: string[]
        allergies: string[]
        medications: string[]
        notes: string
      }
      preferences: {
        language: string
        notifications: boolean
        marketingEmails: boolean
      }
      stats: {
        lastVisit: Date
      }
    }> = {}

    if (name) updateData.name = name
    if (phone) updateData.phone = phone
    if (address) updateData.address = address
    if (dateOfBirth) updateData.dateOfBirth = dateOfBirth
    if (emergencyContact) updateData.emergencyContact = emergencyContact
    if (medicalInfo) updateData.medicalInfo = medicalInfo
    if (preferences) updateData.preferences = preferences

    updateData.stats = {
      ...updateData.stats,
      lastVisit: new Date()
    }

    const user = await User.findOneAndUpdate(
      { email: session.user.email },
      updateData,
      { new: true, runValidators: true }
    ).select('-password')

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({ user })
  } catch (error) {
    console.error("Profile update error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
