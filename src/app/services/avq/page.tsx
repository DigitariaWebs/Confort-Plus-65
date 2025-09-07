"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Clock, Shield, CheckCircle, Phone, Contact, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import FormModal from "@/components/models/ContactModel";

export default function AVQPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const services = [
    {
      title: "Bain/Douche",
      description: "Assistance pour l'hygiène corporelle",
      details: [
        "Se laver de manière sécurisée",
        "Entrer et sortir de la baignoire",
        "Utilisation de la douche",
        "Support pendant la toilette",
        "Assistance adaptée aux capacités",
        "Maintien de la dignité"
      ]
    },
    {
      title: "Habillement",
      description: "Assistance pour l'habillage quotidien",
      details: [
        "Mettre ses vêtements",
        "Enlever ses vêtements",
        "Choix approprié des tenues",
        "Aide à l'habillage adapté",
        "Support pour les boutons et fermetures",
        "Respect de l'indépendance"
      ]
    },
    {
      title: "Alimentation",
      description: "Support pour une alimentation autonome",
      details: [
        "Se nourrir de manière autonome",
        "Assistance aux repas",
        "Aide à la prise des aliments",
        "Position confortable pour manger",
        "Support pour boire",
        "Maintien de la dignité pendant les repas"
      ]
    },
    {
      title: "Toilette",
      description: "Assistance pour les besoins naturels",
      details: [
        "Gérer les fonctions intestinales et urinaires",
        "Se rendre aux toilettes",
        "Utiliser correctement les toilettes",
        "Se nettoyer après usage",
        "Maintien de l'hygiène",
        "Respect de l'intimité"
      ]
    },
    {
      title: "Mobilité/Transferts",
      description: "Assistance pour les déplacements",
      details: [
        "Se déplacer d'un endroit à un autre",
        "Marcher de façon sécurisée",
        "Se lever en toute sécurité",
        "S'asseoir correctement",
        "Transferts sécurisés",
        "Support à la mobilité"
      ]
    },
    {
      title: "Hygiène personnelle",
      description: "Soins corporels essentiels",
      details: [
        "Soins corporels quotidiens",
        "Soins bucco-dentaires",
        "Soins capillaires",
        "Soins des ongles",
        "Maintien de la propreté",
        "Respect des habitudes personnelles"
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
        {/* Hero Section - Match AVD model */}
        <section className="relative min-h-[600px] flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/services/soins-personnalises.jpg"
              alt="Soins personnalisés AVQ"
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
                    <Star className="h-12 w-12 text-white" />
                  </div>
                  <div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                      Activités de la vie
                      <span className="text-emerald-400 block">Quotidienne (AVQ)</span>
                    </h1>
                    <p className="text-lg text-emerald-200 font-medium mt-2">Soutien essentiel pour votre autonomie</p>
                  </div>
                </div>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Un accompagnement professionnel pour vous aider dans les activités essentielles de la vie quotidienne.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 mb-8">
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Services AVQ Disponibles</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                        <Sparkles className="h-8 w-8 text-emerald-700" />
                      </div>
                      <div className="font-semibold text-gray-900">Hygiène</div>
                      <div className="text-sm text-gray-900 font-semibold">bain/douche</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                        <Star className="h-8 w-8 text-emerald-700" />
                      </div>
                      <div className="font-semibold text-gray-900">Habillement</div>
                      <div className="text-sm text-gray-900 font-semibold">quotidien</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-cyan-100 to-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                        <Phone className="h-8 w-8 text-emerald-700" />
                      </div>
                      <div className="font-semibold text-gray-900">Alimentation</div>
                      <div className="text-sm text-gray-900 font-semibold">assistance</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                        <Clock className="h-8 w-8 text-emerald-700" />
                      </div>
                      <div className="font-semibold text-gray-900">Mobilité</div>
                      <div className="text-sm text-gray-900 font-semibold">et transferts</div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <div className="flex justify-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center bg-gradient-to-r from-emerald-50 to-teal-50 px-3 py-1 rounded-full">
                        <Shield className="h-4 w-4 mr-1 text-emerald-600" />
                        Support sécurisé
                      </span>
                      <span className="flex items-center bg-gradient-to-r from-teal-50 to-cyan-50 px-3 py-1 rounded-full">
                        <Sparkles className="h-4 w-4 mr-1 text-emerald-600" />
                        Service de qualité
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Services with Color-coded Layout (match AVD) */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Services d&apos;aide à la vie quotidienne
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un accompagnement complet pour maintenir votre autonomie dans les activités essentielles.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-emerald-50 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 pb-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-3 rounded-2xl mr-4 shadow-md">
                        <Sparkles className="h-8 w-8 text-emerald-700" />
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
        serviceName="AVQ"
      />
      <Footer />
    </div>
  );
}
