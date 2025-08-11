import { Home, Users, Heart, BadgeCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const AboutSection = () => (
  <section id="about" className="py-20 bg-gradient-to-br from-white to-emerald-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Enhanced Header */}
      <div className="text-center mb-16">
        <span className="inline-block bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-md">
          Notre Engagement envers le Soin
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          À propos de <span className="text-emerald-600">Confort Plus 65</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          On accompagne les personnes âgées de 65 ans et plus dans leur quotidien à domicile. Nos intervenants formés assurent avec humanité et professionnalisme l&apos;aide aux tâches ménagères, la toilette, les repas et le soutien relationnel.
        </p>
      </div>

      {/* Two-Column Layout for Story + Stats */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <Image
            src="/About.jpg"
            alt="Notre équipe de soins aidant les seniors dans leurs activités"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Notre Mission</h3>
          <p className="text-gray-600 mb-6 text-lg">
            Notre mission est de préserver l&apos;autonomie et la sécurité des personnes âgées, tout en soulageant leurs proches. Une présence réconfortante, adaptée à chaque besoin.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-lg shadow-md">
              <p className="text-3xl font-bold text-emerald-700">24/7</p>
              <p className="text-gray-600">Support Disponible</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-4 rounded-lg shadow-md">
              <p className="text-3xl font-bold text-emerald-700">100%</p>
              <p className="text-gray-600">Personnel Agréé</p>
            </div>
          </div>
        </div>
      </div>

      {/* Competitive Advantage Section */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12 mb-16 shadow-xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Avantages concurrentiels</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 shadow-xl border border-emerald-100">
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Users className="h-8 w-8 text-emerald-700" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Activités Physiques Adaptées</h4>
            <p className="text-gray-600 text-lg leading-relaxed">
              Activités physiques adaptées à domicile par des professionnels qualifiés.
            </p>
          </div>
          <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 shadow-xl border border-emerald-100">
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Heart className="h-8 w-8 text-emerald-700" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Services Exclusifs pour les 65+</h4>
            <p className="text-gray-600 text-lg leading-relaxed">
              Services exclusifs spécialement conçus pour répondre aux besoins uniques des personnes âgées de 65 ans et plus.
            </p>
          </div>
          <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 shadow-xl border border-emerald-100">
            <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <BadgeCheck className="h-8 w-8 text-emerald-700" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Système de Jumelage Innovant</h4>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nous associons chaque personne âgée à un professionnel dédié, créant ainsi un lien de confiance unique pour une aide parfaitement adaptée à ses besoins.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Value Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Home className="h-8 w-8 text-emerald-600" />,
            title: "Soins à Domicile",
            content: "Un soutien professionnel dans le comfort et la familiarité de votre propre environnement domestique.",
            badge: "Le Plus Populaire"
          },
          {
            icon: <Heart className="h-8 w-8 text-emerald-600" />,
            title: "Soins Personnalisés",
            content: "Des services adaptés qui respectent les besoins, valeurs et dignité de chaque personne âgée.",
            badge: "Approche Sur Mesure"
          },
          {
            icon: <Users className="h-8 w-8 text-emerald-600" />,
            title: "Équipe Qualifiée",
            content: "Notre personnel est certifié, formé régulièrement et possède toutes les accréditations nécessaires pour offrir des soins de qualité supérieure.",
            badge: "Certifié"
          }
        ].map((item, index) => (
          <Card 
            key={index}
            className="border-2 border-emerald-200 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-emerald-50"
          >
            <CardHeader className="text-center">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                {item.icon}
              </div>
              <CardTitle className="text-emerald-800 text-2xl">{item.title}</CardTitle>
              {item.badge && (
                <span className="inline-block bg-emerald-600 text-white text-xs px-3 py-1 rounded-full mt-2">
                  {item.badge}
                </span>
              )}
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center text-lg leading-relaxed">
                {item.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Team Trust Section */}
      <div className="mt-20 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 text-center shadow-xl">
        <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
          <BadgeCheck className="h-12 w-12 text-emerald-700" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Engagement</h3>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-6">
          Nous croyons que des soins de qualité vont au-delà de la simple satisfaction des besoins de base. Notre équipe est dédiée à
          fournir un soutien complet qui améliore le bien-être général et le bonheur de chaque personne âgée que nous servons.
        </p>
        <p className="font-semibold">Fait confiance par des familles à travers la communauté</p>
      </div>
    </div>
  </section>
);

export default AboutSection;