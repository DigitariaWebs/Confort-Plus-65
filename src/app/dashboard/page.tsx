"use client"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  User,
  LogOut,
  Settings,
  Calendar,
  Heart,
  Shield,
  Bell,
  Home,
  FileText,
  Phone
} from "lucide-react"
import Link from "next/link"

interface UserProfile {
  name: string
  email: string
  phone?: string
  address?: {
    street: string
    city: string
    province: string
    postalCode: string
  }
  membership?: {
    joinDate: string
    status: string
    plan: string
  }
  stats?: {
    totalVisits: number
    lastVisit: string
    satisfaction: number
  }
  preferences?: {
    language: string
    notifications: boolean
  }
}

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/profile')
        if (response.ok) {
          const data = await response.json()
          setProfile(data.user)
        }
      } catch (error) {
        console.error('Failed to fetch profile:', error)
      } finally {
        setLoading(false)
      }
    }

    if (session) {
      fetchProfile()
    }
  }, [session])

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-sm">Chargement...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" })
  }

  const navigationItems = [
    {
      title: "Accueil",
      description: "Retour à la page d'accueil",
      icon: Home,
      href: "/",
      color: "text-blue-600"
    },
    {
      title: "Services",
      description: "Découvrir nos services",
      icon: Heart,
      href: "/#services",
      color: "text-green-600"
    },
    {
      title: "Blogue",
      description: "Articles et conseils",
      icon: FileText,
      href: "/blogue",
      color: "text-purple-600"
    },
    {
      title: "Contact",
      description: "Nous contacter",
      icon: Phone,
      href: "/#contact",
      color: "text-orange-600"
    }
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-CA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Minimal Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {session.user?.name?.split(' ')[0] || 'Utilisateur'}
                </p>
                <p className="text-xs text-gray-500">Tableau de bord</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Bonjour, {session.user?.name?.split(' ')[0] || 'Utilisateur'}
          </h1>
          <p className="text-gray-600">
            Bienvenue sur votre espace Confort Plus 65
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Dernière visite</p>
                  <p className="text-lg font-semibold text-blue-600">
                    {profile?.stats?.lastVisit ? formatDate(profile.stats.lastVisit) : 'Aucune'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Satisfaction</p>
                  <p className="text-lg font-semibold text-green-600">
                    {profile?.stats?.satisfaction || 95}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Visites totales</p>
                  <p className="text-lg font-semibold text-purple-600">
                    {profile?.stats?.totalVisits || 0}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Grid */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {navigationItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* User Info */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Informations du compte</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-gray-600">Nom complet</span>
              <span className="text-sm font-medium text-gray-900">{profile?.name || session.user?.name}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-gray-600">Email</span>
              <span className="text-sm font-medium text-gray-900">{profile?.email || session.user?.email}</span>
            </div>
            {profile?.phone && (
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-gray-600">Téléphone</span>
                <span className="text-sm font-medium text-gray-900">{profile.phone}</span>
              </div>
            )}
            {profile?.address && (
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-gray-600">Adresse</span>
                <span className="text-sm font-medium text-gray-900">
                  {profile.address.street}, {profile.address.city}, {profile.address.province}
                </span>
              </div>
            )}
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-gray-600">Statut</span>
              <span className={`text-sm font-medium ${
                profile?.membership?.status === 'active' ? 'text-green-600' :
                profile?.membership?.status === 'inactive' ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {profile?.membership?.status === 'active' ? 'Actif' :
                 profile?.membership?.status === 'inactive' ? 'Inactif' : 'Suspendu'}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-gray-600">Plan</span>
              <span className="text-sm font-medium text-gray-900 capitalize">
                {profile?.membership?.plan || 'Standard'}
              </span>
            </div>
            {profile?.membership?.joinDate && (
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-gray-600">Membre depuis</span>
                <span className="text-sm font-medium text-gray-900">
                  {formatDate(profile.membership.joinDate)}
                </span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button variant="outline" className="flex-1">
            <Settings className="h-4 w-4 mr-2" />
            Paramètres
          </Button>
          <Button variant="outline" className="flex-1">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <Button variant="outline" className="flex-1">
            <Phone className="h-4 w-4 mr-2" />
            Support
          </Button>
        </div>
      </main>
    </div>
  )
}
