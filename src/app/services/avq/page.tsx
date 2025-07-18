import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Heart, Clock, Shield, Users, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AVQPage() {
  const services = [
    {
      title: "Toilette et Hygiène Personnelle",
      description: "Aide complète ou partielle pour maintenir une hygiène optimale",
      details: [
        "Toilette complète au lit ou en position assise",
        "Toilette partielle (visage, mains, zones intimes)",
        "Aide au bain ou à la douche sécurisée",
        "Soins bucco-dentaires",
        "Rasage et coiffure",
        "Soins des ongles"
      ]
    },
    {
      title: "Habillage et Déshabillage",
      description: "Assistance pour s'habiller avec dignité et confort",
      details: [
        "Choix des vêtements appropriés selon la météo",
        "Aide pour enfiler et retirer les vêtements",
        "Assistance avec les sous-vêtements",
        "Aide avec les chaussures et accessoires",
        "Respect des préférences vestimentaires",
        "Adaptation aux limitations physiques"
      ]
    },
    {
      title: "Soins d'Incontinence",
      description: "Gestion discrète et professionnelle de l'incontinence",
      details: [
        "Changement de protections hygiéniques",
        "Nettoyage et soins préventifs",
        "Gestion des cathéters externes",
        "Surveillance des signes d'irritation",
        "Conseils en matière d'hygiène",
        "Maintien de la dignité du client"
      ]
    },
    {
      title: "Soins de Confort",
      description: "Services pour améliorer le bien-être quotidien",
      details: [
        "Positionnement et mobilisation au lit",
        "Massage de confort et détente",
        "Application de crèmes et lotions",
        "Soins des pieds et des mains",
        "Aide à la marche et aux transferts",
        "Exercices de mobilité douce"
      ]
    }
  ];

  const qualifications = [
    "Personnel formé et certifié en soins personnels",
    "Respect strict des protocoles d'hygiène",
    "Approche bienveillante et respectueuse",
    "Adaptation aux besoins individuels",
    "Service disponible 24h/7j",
    "Équipement professionnel fourni"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section - Personal Care Focused */}
        <section className="relative bg-gradient-to-r from-pink-50 via-rose-50 to-red-50 py-20 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-30"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-rose-200 rounded-full opacity-40"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-red-200 rounded-full opacity-30"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-100 rounded-full mb-6">
                <Heart className="h-16 w-16 text-pink-600" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
                Soins
                <span className="text-pink-600 block">Personnels</span>
              </h1>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Préserver votre dignité et votre confort avec des soins attentionnés et respectueux
              </p>
            </div>

            {/* Pricing Card */}
            <div className="max-w-md mx-auto mb-12">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-pink-100">
                <div className="text-center">
                  <div className="text-5xl font-bold text-pink-600 mb-2">13,99 $</div>
                  <div className="text-gray-600 text-lg mb-6">par heure</div>
                  <Button size="lg" className="w-full bg-pink-600 hover:bg-pink-700 text-lg h-16 rounded-2xl">
                    <Phone className="h-6 w-6 mr-3" />
                    Appelez maintenant
                  </Button>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6">
                <Clock className="h-12 w-12 mx-auto mb-4 text-pink-600" />
                <h3 className="font-bold text-gray-900 mb-2">24h/7 Disponible</h3>
                <p className="text-gray-600">Quand vous en avez besoin</p>
              </div>
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6">
                <Shield className="h-12 w-12 mx-auto mb-4 text-pink-600" />
                <h3 className="font-bold text-gray-900 mb-2">Personnel Certifié</h3>
                <p className="text-gray-600">Formation spécialisée</p>
              </div>
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-pink-600" />
                <h3 className="font-bold text-gray-900 mb-2">Approche Humaine</h3>
                <p className="text-gray-600">Respect et bienveillance</p>
              </div>
            </div>
          </div>
        </section>


        {/* Services Details - Card Layout */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nos Services de Soins
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Chaque service est personnalisé selon vos besoins spécifiques, avec respect et professionnalisme.
              </p>
            </div>

            <div className="grid gap-8">
              {services.map((service, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-8 items-center bg-gradient-to-r ${index % 2 === 0 ? 'from-pink-50 to-rose-50' : 'from-rose-50 to-red-50'} rounded-3xl p-8 lg:p-12`}>
                  <div className="lg:w-1/2">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-2xl mb-6">
                      <Heart className="h-8 w-8 text-pink-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <ul className="space-y-4">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-pink-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-lg">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi Nous Choisir ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Notre équipe met l&apos;humain au centre de chaque soin, avec professionnalisme et bienveillance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {qualifications.map((qualification, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full mb-4">
                    <CheckCircle className="h-6 w-6 text-pink-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{qualification}</p>
                </div>
              ))}
            </div>

            {/* Testimonial-style section */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-100 rounded-full mb-6">
                <Heart className="h-10 w-10 text-pink-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                &ldquo;Chaque client mérite des soins exceptionnels&rdquo;
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Nous croyons que chaque personne mérite d&apos;être traitée avec dignité, respect et compassion. 
                Nos services sont conçus pour préserver votre autonomie tout en vous offrant le soutien dont vous avez besoin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-pink-50 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-pink-600">13,99 $/h</div>
                  <div className="text-gray-600">Tarif transparent</div>
                </div>
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-lg h-16 px-8 rounded-2xl">
                  Consultation gratuite
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Commencez Votre Parcours de Soins
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez-nous pour une consultation personnalisée et découvrez comment nous pouvons vous accompagner au quotidien.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-50 text-lg h-16 px-8 rounded-2xl font-bold">
                <Phone className="h-6 w-6 mr-3" />
                514 222 8271
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-pink-600 text-lg h-16 px-8 rounded-2xl font-bold">
                Évaluation gratuite
              </Button>
            </div>
            
            {/* Back to Services */}
            <div className="mt-8">
              <Link href="/#services" className="text-white/80 hover:text-white font-medium transition-colors">
                ← Découvrir tous nos services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
