"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Heart, Clock, Shield, Users, CheckCircle, Phone, Contact, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import FormModal from "@/components/models/ContactModel";

export default function SoinsPersonnalisesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const services = [
    {
      title: "Soins Personnalisés",
      description: "Préservation de votre autonomie avec notre accompagnement personnalisé à domicile",
      details: [
        "Aide quotidienne respectueuse (toilette, habillage, repas)",
        "Préservation de votre dignité et sécurité",
        "Accompagnement bienveillant et professionnel",
        "Respect de vos préférences et habitudes",
        "Coordination avec votre famille",
        "Adaptation selon vos besoins spécifiques"
      ]
    },
    {
      title: "Répit aux Aidants",
      description: "Votre pause méritée pour recharger vos batteries en toute quiétude",
      details: [
        "Confiez-nous votre proche âgé le temps d'une pause",
        "Relève à domicile professionnelle et sécurisée",
        "Permet aux aidants de souffler et se ressourcer",
        "Service disponible selon vos besoins",
        "Accompagnement bienveillant et respectueux",
        "Tranquillité d'esprit garantie"
      ]
    },
    {
      title: "Soins de Confort Avancés",
      description: "Techniques spécialisées pour votre bien-être optimal",
      details: [
        "Massages thérapeutiques",
        "Techniques de relaxation",
        "Gestion de la douleur",
        "Soins de confort",
        "Positionnement optimal",
        "Techniques de respiration"
      ]
    },
    {
      title: "Services Adaptatifs",
      description: "Flexibilité totale selon vos besoins du moment",
      details: [
        "Horaires personnalisés",
        "Services à la demande",
        "Adaptation en temps réel",
        "Planification flexible",
        "Services d'urgence",
        "Accompagnement ponctuel"
      ]
    }
  ];

  const qualifications = [
    "Équipe formée en soins personnalisés",
    "Approche centrée sur la personne",
    "Flexibilité et adaptabilité",
    "Communication exceptionnelle",
    "Service disponible selon vos besoins",
    "Équipement moderne et confortable"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section - Personalized Care Focused */}
        <section className="relative bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/services/soins-personnalises.jpg"
              alt="Soins personnalisés pour personnes âgées"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-emerald-900/70"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-30"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-teal-200 rounded-full opacity-40"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-200 rounded-full opacity-30"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                <Star className="h-16 w-16 text-emerald-400" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Soins
                <span className="text-emerald-400 block">Personnalisés</span>
              </h1>
              <p className="text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
                Des soins sur mesure, adaptés à vos besoins uniques, avec une approche humaine et bienveillante
              </p>
            </div>

            {/* Pricing Card */}
            <div className="max-w-md mx-auto mb-12">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-emerald-100">
                <div className="text-center">
                  <div className="text-5xl font-bold text-emerald-600 mb-8">16,99 $/h</div>
                  <Button 
                    size="lg" 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg h-16 rounded-2xl cursor-pointer"
                    onClick={openModal}
                  >
                    <Contact className="h-6 w-6 mr-3" />
                    Consultation personnalisée
                  </Button>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6">
                <Clock className="h-12 w-12 mx-auto mb-4 text-emerald-600" />
                <h3 className="font-bold text-gray-900 mb-2">Horaires Flexibles</h3>
                <p className="text-gray-600">Adaptés à vos besoins</p>
              </div>
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6">
                <Shield className="h-12 w-12 mx-auto mb-4 text-emerald-600" />
                <h3 className="font-bold text-gray-900 mb-2">Personnel Expert</h3>
                <p className="text-gray-600">Formation spécialisée</p>
              </div>
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-emerald-600" />
                <h3 className="font-bold text-gray-900 mb-2">Service Premium</h3>
                <p className="text-gray-600">Qualité exceptionnelle</p>
              </div>
            </div>
          </div>
        </section>



        {/* Services Details - Card Layout */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nos Services Personnalisés
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Chaque service est conçu spécialement pour vous, avec une approche unique et adaptée à vos besoins.
              </p>
            </div>

            <div className="grid gap-8">
              {services.map((service, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-8 items-center bg-gradient-to-r ${index % 2 === 0 ? 'from-emerald-50 to-teal-50' : 'from-teal-50 to-cyan-50'} rounded-3xl p-8 lg:p-12`}>
                  <div className="lg:w-1/2">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-6">
                      <Star className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <ul className="space-y-4">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
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
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi Choisir Nos Soins Personnalisés ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Notre équipe met l&apos;humain au centre de chaque soin, avec professionnalisme et bienveillance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {qualifications.map((qualification, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{qualification}</p>
                </div>
              ))}
            </div>

            {/* Testimonial-style section */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
                <Star className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                &ldquo;Des soins vraiment personnalisés qui font toute la différence&rdquo;
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Notre approche unique combine expertise professionnelle et chaleur humaine pour des soins exceptionnels.
              </p>
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-4 rounded-2xl cursor-pointer"
                onClick={openModal}
              >
                <Contact className="h-6 w-6 mr-3" />
                Découvrir nos soins
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt pour des soins vraiment personnalisés ?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Contactez-nous pour une consultation gratuite et découvrez comment nos soins personnalisés peuvent améliorer votre qualité de vie.
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
        serviceName="Soins Personnalisés"
      />
      <Footer />
    </div>
  );
}
