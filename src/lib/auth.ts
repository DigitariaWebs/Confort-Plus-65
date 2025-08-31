import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcryptjs"
import connectToDatabase from "@/lib/connectToDatabase"
import User from "@/models/User"
import type { NextAuthOptions, User as NextAuthUser, Session } from "next-auth"
import type { JWT } from "next-auth/jwt"

interface Credentials {
  email: string
  password: string
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: Credentials | undefined): Promise<NextAuthUser | null> {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          // Ensure database connection
          await connectToDatabase()

          const user = await User.findOne({ email: credentials.email.toLowerCase() })

          if (!user) {
            return null
          }

          const isPasswordValid = await compare(credentials.password, user.password)

          if (!isPasswordValid) {
            return null
          }

          return {
            id: (user._id as unknown as string).toString(),
            email: user.email,
            name: user.name,
          }
        } catch (error) {
          console.error("Auth error:", error)
          return null
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: NextAuthUser }): Promise<JWT> {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }: { session: Session; token: JWT }): Promise<Session> {
      if (token && session.user) {
        // Add id to the user object in a type-safe way
        (session.user as typeof session.user & { id: string }).id = token.id as string
      }
      return session
    },
  },
  debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
export const { auth, signIn, signOut } = handler
