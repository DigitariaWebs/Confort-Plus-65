import { Home, Users, Heart, Shield, BadgeCheck } from "lucide-react";
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
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Notre équipe dévouée s'engage à offrir comfort, sécurité et une qualité de vie améliorée aux seniors,
          que ce soit à domicile, en résidences pour retraités ou en établissements de soins de longue durée.
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
            icon: <Users className="h-8 w-8 text-emerald-600" />,
            title: "Soins Personnalisés",
            content: "Des services adaptés qui respectent les besoins, valeurs et dignité de chaque senior.",
            badge: "Approche Sur Mesure"
          },
          {
            icon: <Heart className="h-8 w-8 text-emerald-600" />,
            title: "Équipe Bienveillante",
            content: "Des professionnels qualifiés qui agissent avec gentillesse, attention et respect.",
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