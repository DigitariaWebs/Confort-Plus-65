"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Home, Clock, Shield, CheckCircle, Phone, Contact, ChefHat, Sparkles, Wrench, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import FormModal from "@/components/models/ContactModel";

export default function EntretienMenagerPage() {
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
      title: "Entretien Ménager",
      description: "Tranquillité garantie avec un intérieur impeccable sans effort",
      details: [
        "Service sécurisé et respectueux de vos besoins",
        "Assure bien-être et sérénité à domicile",
        "Nettoyage complet et professionnel",
        "Entretien régulier et préventif",
        "Respect de votre environnement familier",
        "Personnel qualifié et de confiance"
      ]
    },
    {
      icon: ChefHat,
      title: "Préparation des Repas",
      description: "Cuisine nutritive et savoureuse adaptée à vos goûts",
      details: [
        "Planification de menus équilibrés",
        "Préparation de repas frais",
        "Adaptation aux régimes spéciaux",
        "Respect des préférences alimentaires",
        "Aide à l'alimentation si nécessaire",
        "Préparation de collations saines"
      ]
    },
    {
      icon: Wrench,
      title: "Entretien Préventif",
      description: "Maintenance régulière pour préserver votre intérieur",
      details: [
        "Entretien des appareils ménagers",
        "Maintenance préventive",
        "Petit bricolage sécuritaire",
        "Vérification des systèmes",
        "Nettoyage en profondeur",
        "Organisation des espaces"
      ]
    },
    {
      icon: Leaf,
      title: "Entretien Extérieur",
      description: "Soin de vos espaces extérieurs et jardin",
      details: [
        "Entretien du jardin et des plantes",
        "Nettoyage des entrées",
        "Déneigement léger",
        "Arrosage des plantes",
        "Entretien des espaces extérieurs",
        "Petits travaux d'extérieur"
      ]
    }
  ];

  const domesticServices = [
    {
      category: "Entretien Intérieur",
      services: [
        "Lessive et repassage",
        "Rangement et organisation",
        "Changement de literie",
        "Entretien des appareils ménagers",
        "Nettoyage en profondeur périodique",
        "Maintenance préventive"
      ]
    },
    {
      category: "Services Complémentaires",
      services: [
        "Courses d'épicerie",
        "Achat de produits ménagers",
        "Accompagnement aux rendez-vous",
        "Gestion des tâches administratives",
        "Organisation des documents",
        "Support pour les démarches"
      ]
    }
  ];

  const benefits = [
    {
      title: "Maison Impeccable",
      description: "Un environnement propre et bien entretenu pour votre confort"
    },
    {
      title: "Gain de Temps",
      description: "Libérez-vous des tâches ménagères pour vos activités préférées"
    },
    {
      title: "Sécurité Renforcée",
      description: "Environnement propre et sécuritaire pour prévenir les accidents"
    },
    {
      title: "Bien-être Optimal",
      description: "Un intérieur sain et agréable pour votre qualité de vie"
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
                      Entretien
                      <span className="text-emerald-400 block">Ménager</span>
                    </h1>
                    <p className="text-lg text-emerald-200 font-medium mt-2">Votre maison, notre expertise</p>
                  </div>
                </div>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Des services complets d&apos;entretien ménager pour maintenir votre intérieur impeccable et votre bien-être au quotidien.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl text-center border border-white/20 flex items-center justify-center h-16">
                    <div className="text-4xl font-bold text-white">12,99 $/h</div>
                  </div>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Services Disponibles</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                        <Sparkles className="h-8 w-8 text-emerald-700" />
                      </div>
                      <div className="font-semibold text-gray-900">Nettoyage</div>
                      <div className="text-sm text-gray-600">complet</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                        <ChefHat className="h-8 w-8 text-emerald-700" />
                      </div>
                      <div className="font-semibold text-gray-900">Préparation</div>
                      <div className="text-sm text-gray-600">de repas</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-cyan-100 to-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                        <Wrench className="h-8 w-8 text-emerald-700" />
                      </div>
                      <div className="font-semibold text-gray-900">Entretien</div>
                      <div className="text-sm text-gray-600">préventif</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                        <Leaf className="h-8 w-8 text-emerald-700" />
                      </div>
                      <div className="font-semibold text-gray-900">Extérieur</div>
                      <div className="text-sm text-gray-600">et jardin</div>
                    </div>

                  </div>
                  <div className="mt-6 text-center">
                    <div className="flex justify-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center bg-gradient-to-r from-emerald-50 to-teal-50 px-3 py-1 rounded-full">
                        <Clock className="h-4 w-4 mr-1 text-emerald-600" />
                        Horaires flexibles
                      </span>
                      <span className="flex items-center bg-gradient-to-r from-teal-50 to-cyan-50 px-3 py-1 rounded-full">
                        <Shield className="h-4 w-4 mr-1 text-emerald-600" />
                        Personnel fiable
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
                Services d&apos;Entretien Complets
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des solutions d&apos;entretien ménager professionnelles pour maintenir votre intérieur impeccable.
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
                  <h3 className="text-xl font-bold text-white mb-2">Nettoyage Professionnel</h3>
                  <p className="text-emerald-100 text-sm">Des équipements et produits de qualité</p>
                </div>
              </div>

              {/* Image 2 */}
              <div className="relative h-[400px] rounded-3xl overflow-hidden group">
                <Image
                  src="/services/aide-a-la-marche-senior.jpg"
                  alt="Organisation et rangement"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Organisation & Rangement</h3>
                  <p className="text-emerald-100 text-sm">Des espaces optimisés et fonctionnels</p>
                </div>
              </div>

              {/* Image 3 */}
              <div className="relative h-[400px] rounded-3xl overflow-hidden group">
                <Image
                  src="/services/caregiver-help-and-care-asian-senior-or-elderly-old-lady-woman-patient-sitting-on-wheelchair-at-home-photo.jpg"
                  alt="Entretien spécialisé"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Entretien Spécialisé</h3>
                  <p className="text-emerald-100 text-sm">Pour tous types de surfaces</p>
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
                    Avantages de Nos Services
                  </h2>
                  <p className="text-xl text-gray-600">
                    Découvrez pourquoi choisir nos services d&apos;entretien ménager professionnels.
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
              Prêt pour un intérieur impeccable ?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Contactez-nous pour un devis personnalisé et découvrez comment nos services d&apos;entretien ménager peuvent transformer votre quotidien.
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
        serviceName="Entretien Ménager"
      />
      <Footer />
    </div>
  );
}

