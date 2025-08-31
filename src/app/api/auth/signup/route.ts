import { NextRequest, NextResponse } from "next/server"
import { hashPassword, validatePassword, sanitizeInput } from "@/lib/security"
import User from "@/models/User"
import connectToDatabase from "@/lib/connectToDatabase"

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase()

    const { name, email, password } = await request.json()

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = email.toLowerCase().trim()

    // Validate input
    if (!sanitizedName || !sanitizedEmail || !password) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 }
      )
    }

    // Validate password strength
    const passwordValidation = validatePassword(password)
    if (!passwordValidation.isValid) {
      return NextResponse.json(
        { error: passwordValidation.errors.join(", ") },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: sanitizedEmail })
    if (existingUser) {
      return NextResponse.json(
        { error: "Un utilisateur avec cet email existe déjà" },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Create user
    const user = await User.create({
      name: sanitizedName,
      email: sanitizedEmail,
      password: hashedPassword,
    })

    // Return user without password
    const userObj = user.toObject()
    const { password: _password, ...userWithoutPassword } = userObj
    void _password // Explicitly mark as intentionally unused

    return NextResponse.json(
      {
        message: "Utilisateur créé avec succès",
        user: userWithoutPassword
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json(
      { error: "Erreur lors de la création du compte" },
      { status: 500 }
    )
  }
}
