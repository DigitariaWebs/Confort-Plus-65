"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Home, Clock, Shield, CheckCircle, Phone, Contact, ChefHat, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import FormModal from "@/components/models/ContactModel";

export default function AVDPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const services = [
    {
      icon: Sparkles,
      title: "Gestion des finances",
      description: "Assistance pour la gestion financière quotidienne",
      details: [
        "Paiement des factures",
        "Gestion du budget",
        "Suivi des comptes bancaires",
        "Organisation des documents financiers",
        "Aide aux transactions courantes",
        "Planification financière simple"
      ]
    },
    {
      icon: ChefHat,
      title: "Courses et approvisionnement",
      description: "Support pour vos achats et courses quotidiennes",
      details: [
        "Faire l'épicerie",
        "Achat des produits nécessaires",
        "Liste de courses personnalisée",
        "Transport des achats",
        "Rangement des provisions",
        "Vérification des stocks"
      ]
    },
    {
      icon: Home,
      title: "Préparation des repas",
      description: "Service complet de préparation culinaire",
      details: [
        "Planification des menus",
        "Cuisine des repas",
        "Nettoyage après les repas",
        "Respect des préférences alimentaires",
        "Organisation de la cuisine",
        "Stockage approprié des aliments"
      ]
    },
    {
      icon: Sparkles,
      title: "Entretien ménager",
      description: "Maintien d'un environnement propre et sécuritaire",
      details: [
        "Nettoyage des espaces de vie",
        "Service de lessive complet",
        "Repassage des vêtements",
        "Entretien régulier",
        "Organisation des espaces",
        "Maintien de la propreté"
      ]
    },
    {
      icon: Clock,
      title: "Transport",
      description: "Solutions de transport adaptées à vos besoins",
      details: [
        "Transport en voiture",
        "Accompagnement en transport en commun",
        "Organisation des trajets",
        "Planification des déplacements",
        "Transport sécuritaire",
        "Assistance porte-à-porte"
      ]
    },
    {
      icon: Phone,
      title: "Communication",
      description: "Aide à la gestion des communications",
      details: [
        "Utilisation du téléphone",
        "Rédaction d'emails",
        "Écriture de lettres",
        "Gestion du courrier",
        "Organisation des documents",
        "Suivi des correspondances"
      ]
    },
    {
      icon: Shield,
      title: "Gestion des médicaments",
      description: "Suivi et gestion de la médication",
      details: [
        "Prise des médicaments selon prescriptions",
        "Renouvellement des ordonnances",
        "Suivi des doses",
        "Organisation du pilulier",
        "Coordination avec la pharmacie",
        "Rappels de médication"
      ]
    }
  ];

  const domesticServices = [
    {
      category: "Services Essentiels",
      services: [
        "Gestion des finances et budget",
        "Préparation des repas quotidiens",
        "Entretien ménager régulier",
        "Organisation du transport",
        "Communication et correspondance",
        "Suivi des médicaments"
      ]
    },
    {
      category: "Accompagnement Personnalisé",
      services: [
        "Assistance aux rendez-vous",
        "Support administratif",
        "Gestion des documents importants",
        "Coordination des services",
        "Planification des activités",
        "Soutien à l'autonomie"
      ]
    }
  ];

  const benefits = [
    {
      title: "Autonomie Préservée",
      description: "Maintien de votre indépendance dans les activités quotidiennes"
    },
    {
      title: "Support Personnalisé",
      description: "Accompagnement adapté à vos besoins spécifiques"
    },
    {
      title: "Tranquillité d'Esprit",
      description: "Gestion simplifiée de vos activités domestiques"
    },
    {
      title: "Qualité de Vie",
      description: "Maintien de votre mode de vie et de votre bien-être"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section with Full-width Image Background */}
        <section className="relative min-h-[600px] flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/services/blog-banner-caregiver-help-2.jpg"
              alt="Service d'entretien ménager professionnel"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-emerald-900/60"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-8">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl mr-6 shadow-lg border border-white/20">
                    <Home className="h-12 w-12 text-white" />
                  </div>
                  <div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                      Activités de la vie
                      <span className="text-emerald-400 block">Domestique (AVD)</span>
                    </h1>
                    <p className="text-lg text-emerald-200 font-medium mt-2">Support quotidien pour votre autonomie</p>
                  </div>
                </div>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Un accompagnement complet pour vous aider dans les activités de la vie quotidienne et maintenir votre indépendance.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                  {/* <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl text-center border border-white/20 flex items-center justify-center h-16">
                    <div className="text-4xl font-bold text-white">12,99 $/h</div>
                  </div> */}
                  <Button 
                    size="lg" 
                    className="bg-emerald-500 hover:bg-emerald-600 text-lg h-16 px-8 rounded-2xl shadow-lg cursor-pointer"
                    onClick={openModal}
                  >
                    <Contact className="h-6 w-6 mr-3" />
                    Demander un devis
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Services AVD Disponibles</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                        <Sparkles className="h-8 w-8 text-emerald-700" />
                      </div>
                      <div className="font-semibold text-gray-900">Gestion</div>
                      <div className="text-sm text-gray-600">financière</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                        <ChefHat className="h-8 w-8 text-emerald-700" />
                      </div>
                      <div className="font-semibold text-gray-900">Courses</div>
                      <div className="text-sm text-gray-600">et repas</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-cyan-100 to-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                        <Phone className="h-8 w-8 text-emerald-700" />
                      </div>
                      <div className="font-semibold text-gray-900">Communication</div>
                      <div className="text-sm text-gray-600">et gestion</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                        <Shield className="h-8 w-8 text-emerald-700" />
                      </div>
                      <div className="font-semibold text-gray-900">Médicaments</div>
                      <div className="text-sm text-gray-600">et suivi</div>
                    </div>

                  </div>
                  <div className="mt-6 text-center">
                    <div className="flex justify-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center bg-gradient-to-r from-emerald-50 to-teal-50 px-3 py-1 rounded-full">
                        <Clock className="h-4 w-4 mr-1 text-emerald-600" />
                        Service régulier
                      </span>
                      <span className="flex items-center bg-gradient-to-r from-teal-50 to-cyan-50 px-3 py-1 rounded-full">
                        <Shield className="h-4 w-4 mr-1 text-emerald-600" />
                        Support adapté
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



                {/* Services with Color-coded Layout */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Services d&apos;aide à la vie domestique
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un accompagnement complet pour maintenir votre autonomie dans les activités quotidiennes.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-emerald-50 overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 pb-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-3 rounded-2xl mr-4 shadow-md">
                          <IconComponent className="h-8 w-8 text-emerald-700" />
                        </div>
                        <CardTitle className="text-emerald-800 text-2xl">{service.title}</CardTitle>
                      </div>
                      <p className="text-gray-700 text-lg">{service.description}</p>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-4">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-lg">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Service Images Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Image 1 */}
              <div className="relative h-[400px] rounded-3xl overflow-hidden group">
                <Image
                  src="/services/caregiver-embracing-senior-in-park-free-photo.jpg"
                  alt="Nettoyage professionnel"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Gestion quotidienne</h3>
                  <p className="text-emerald-100 text-sm">Support pour les tâches administratives et financières</p>
                </div>
              </div>

              {/* Image 2 */}
              <div className="relative h-[400px] rounded-3xl overflow-hidden group">
                <Image
                  src="/services/aide-a-la-marche-senior.jpg"
                  alt="Assistance au quotidien"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Accompagnement quotidien</h3>
                  <p className="text-emerald-100 text-sm">Aide pour toutes les activités domestiques</p>
                </div>
              </div>

              {/* Image 3 */}
              <div className="relative h-[400px] rounded-3xl overflow-hidden group">
                <Image
                  src="/services/caregiver-help-and-care-asian-senior-or-elderly-old-lady-woman-patient-sitting-on-wheelchair-at-home-photo.jpg"
                  alt="Support médical"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Suivi médical</h3>
                  <p className="text-emerald-100 text-sm">Gestion des médicaments et ordonnances</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Domestic Services Grid */}
        <section className="py-20 bg-gradient-to-br from-white to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Services Domestiques Complémentaires
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Au-delà de l&apos;entretien ménager, nous vous proposons des services pour faciliter votre quotidien.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {domesticServices.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
                  <div className="grid gap-4">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center bg-gradient-to-br from-white to-emerald-50 rounded-xl p-4 shadow-md border border-emerald-100">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section with Image */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Benefits Content */}
              <div>
                <div className="mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Les Avantages des Services AVD
                  </h2>
                  <p className="text-xl text-gray-600">
                    Découvrez comment nos services AVD peuvent améliorer votre quotidien et maintenir votre autonomie.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full mb-4 shadow-md">
                        <CheckCircle className="h-6 w-6 text-emerald-700" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Image */}
              <div className="relative h-[600px] rounded-3xl overflow-hidden group">
                <Image
                  src="/services/carousel2.jpg"
                  alt="Notre équipe d'entretien ménager au travail"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <h3 className="text-2xl font-bold text-white mb-2">Notre Engagement</h3>
                    <p className="text-emerald-100">Une équipe dévouée pour votre confort et votre tranquillité d&apos;esprit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Besoin d&apos;aide pour vos activités quotidiennes ?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Contactez-nous pour une évaluation personnalisée de vos besoins en services AVD et découvrez comment nous pouvons vous aider à maintenir votre autonomie.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-4 rounded-2xl bg-white text-emerald-600 hover:bg-emerald-50 hover:text-black shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                asChild
              >
                <a href="tel:5142228271">
                  <Phone className="h-6 w-6 mr-3" />
                  Appelez maintenant
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 rounded-2xl border-2 border-white text-emerald-600 bg-white hover:bg-emerald-50 hover:text-black shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={openModal}
              >
                <Contact className="h-6 w-6 mr-3" />
                Demander un devis
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Contact Modal */}
      <FormModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        formType="service"
        serviceName="AVD"
      />
      <Footer />
    </div>
  );
}

