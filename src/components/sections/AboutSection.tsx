import { Home, Users, Heart, BadgeCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const AboutSection = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Enhanced Header */}
      <div className="text-center mb-16">
        <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Notre Engagement envers le Soin
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          À propos de <span className="text-emerald-600">Comfort Plus 65</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Spécialisés dans les soins et services pour les personnes âgées de 65 ans et plus, 
          nous leur offrons un accompagnement personnalisé, et professionnel pour préserver leur autonomie et leur bien-être au quotidien. 
          Que ce soit à domicile, en résidence ou en CHSLD, notre équipe dévouée s&apos;engage à leur apporter réconfort, sécurité et qualité de vie.
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
            Chez Comfort Plus 65, nous comprenons que chaque senior mérite de vivre avec dignité et indépendance.
            Notre approche bienveillante combine expertise professionnelle et véritable attention pour soutenir les seniors
            dans le maintien de leur qualité de vie.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <p className="text-3xl font-bold text-emerald-700">24/7</p>
              <p className="text-gray-600">Support Disponible</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <p className="text-3xl font-bold text-emerald-700">100%</p>
              <p className="text-gray-600">Personnel Agréé</p>
            </div>
          </div>
        </div>
      </div>

      {/* Competitive Advantage Section */}
      <div className="bg-emerald-50 rounded-3xl p-12 mb-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Un Avantage Concurrentiel Unique</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-emerald-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Services Exclusifs pour les 65+</h4>
            <p className="text-gray-600 text-lg leading-relaxed">
              Notre expertise est entièrement dédiée aux besoins spécifiques des personnes âgées de 65 ans et plus, 
              garantissant une compréhension approfondie de leurs besoins uniques.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-emerald-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Système de Jumelage Innovant</h4>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nous associons chaque personne âgée à un professionnel dédié, créant ainsi un lien de confiance unique 
              pour une aide parfaitement adaptée à ses besoins.
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
            content: "Des services adaptés qui respectent les besoins, valeurs et dignité de chaque senior.",
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
            className="border-2 border-emerald-50 hover:shadow-lg transition-all"
          >
            <CardHeader className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <div className="mt-20 bg-emerald-50 rounded-xl p-8 text-center">
        <BadgeCheck className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Engagement</h3>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-6">
          Nous croyons que des soins de qualité vont au-delà de la simple satisfaction des besoins de base. Notre équipe est dédiée à
          fournir un soutien complet qui améliore le bien-être général et le bonheur de chaque senior que nous servons.
        </p>
        <p className="font-semibold">Fait confiance par des familles à travers la communauté</p>
      </div>
    </div>
  </section>
);

export default AboutSection;