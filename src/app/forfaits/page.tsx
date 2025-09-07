"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Star, Sparkles, CheckCircle, Phone, Contact, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import FormModal from "@/components/models/ContactModel";

export default function ForfaitsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const forfaits = [
    {
      title: "Matinée Confort+",
      price: "$160",
      description: "Service matinal complet pour commencer la journée en toute sérénité",
      features: [
        "Réveil et préparation matinale",
        "Assistance pour l'hygiène",
        "Préparation du petit-déjeuner",
        "Accompagnement personnalisé",
        "Service flexible selon vos besoins"
      ],
      icon: Star,
      color: "from-emerald-100 to-teal-100"
    },
    {
      title: "Cap Confort+",
      price: "$160",
      description: "Accompagnement quotidien pour maintenir votre autonomie",
      features: [
        "Support dans les activités quotidiennes",
        "Assistance mobilité et transferts",
        "Préparation des repas",
        "Soins personnels adaptés",
        "Présence rassurante et disponible"
      ],
      icon: Sparkles,
      color: "from-teal-100 to-cyan-100"
    },
    {
      title: "L'Odyssée Confort+",
      price: "$256",
      description: "Programme complet d'accompagnement personnalisé",
      features: [
        "Accompagnement quotidien complet",
        "Activités de loisirs et sociales",
        "Sorties et promenades",
        "Support nutritionnel",
        "Suivi personnalisé de santé"
      ],
      icon: Star,
      color: "from-cyan-100 to-emerald-100"
    },
    {
      title: "Mobilité Confort+",
      price: "$80",
      description: "Assistance spécialisée pour votre mobilité",
      features: [
        "Aide aux déplacements",
        "Accompagnement lors de sorties",
        "Support pour les courses",
        "Assistance médicale légère",
        "Sécurité et confort priorisés"
      ],
      icon: Sparkles,
      color: "from-emerald-100 to-green-100"
    },
    {
      title: "Mémoire Confort+",
      price: "$120",
      description: "Programme de stimulation cognitive et soutien",
      features: [
        "Activités de stimulation mentale",
        "Exercices de mémoire adaptés",
        "Accompagnement quotidien",
        "Support émotionnel",
        "Activités sociales stimulantes"
      ],
      icon: Star,
      color: "from-green-100 to-emerald-100"
    },
    {
      title: "Horizon Confort+",
      price: "$256",
      description: "Programme premium d'accompagnement complet",
      features: [
        "Service 24/7 disponible",
        "Accompagnement personnalisé intensif",
        "Activités enrichissantes",
        "Support nutritionnel complet",
        "Suivi médical coordonné"
      ],
      icon: Sparkles,
      color: "from-teal-100 to-emerald-100"
    }
  ];

  const benefits = [
    "Équipe qualifiée et expérimentée",
    "Service flexible et adapté",
    "Accompagnement personnalisé",
    "Sécurité et bien-être garantis",
    "Tarifs transparents et compétitifs",
    "Service disponible 7 jours sur 7"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[640px] flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/services/caregiver-embracing-senior-in-park-free-photo.jpg"
              alt="Forfaits de services Confort Plus 65"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/85 to-emerald-900/70"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-white/15 backdrop-blur-md p-4 rounded-2xl mr-6 shadow-lg border border-white/20">
                      <DollarSign className="h-12 w-12 text-white" />
                    </div>
                    <div>
                      <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Forfaits
                        <span className="text-emerald-300 block">Confort+</span>
                      </h1>
                    </div>
                  </div>

                  <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                    Six forfaits adaptés à vos besoins quotidiens, conçus pour
                    votre confort et votre autonomie.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-emerald-500 hover:bg-emerald-600 text-lg h-14 px-8 rounded-xl shadow-lg cursor-pointer"
                      onClick={openModal}
                    >
                      <Contact className="h-5 w-5 mr-3" />
                      Demander un devis
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white bg-white text-emerald-900 hover:bg-white/80  text-lg h-14 px-8 rounded-xl backdrop-blur-sm font-semibold transition-all duration-300"
                      asChild
                    >
                      <a href="tel:5142228271">
                        <Phone className="h-5 w-5 mr-3" />
                        514 222 8271
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">
                    Nos Forfaits
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {forfaits.slice(0, 4).map((forfait, index) => (
                      <div key={index} className="text-center">
                        <div
                          className={`bg-gradient-to-br ${forfait.color} rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-3 shadow-md`}
                        >
                          <forfait.icon className="h-8 w-8 text-emerald-700" />
                        </div>
                        <div className="font-semibold text-white text-sm mb-1">
                          {forfait.title}
                        </div>
                        <div className="text-lg font-bold text-emerald-300">
                          {forfait.price}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 text-emerald-300" />
                      Service personnalisé et de qualité
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Forfaits Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nos Forfaits de Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des programmes adaptés à vos besoins quotidiens, conçus pour
                votre confort et votre bien-être.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {forfaits.map((forfait, index) => (
                <Card
                  key={index}
                  className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-emerald-50 overflow-hidden group flex flex-col h-full"
                >
                  <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 pb-6 flex-shrink-0">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`bg-gradient-to-br ${forfait.color} p-3 rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                      >
                        <forfait.icon className="h-8 w-8 text-emerald-700" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-emerald-600">
                          {forfait.price}
                        </div>
                        <div className="text-sm text-gray-600">par service</div>
                      </div>
                    </div>
                    <CardTitle className="text-emerald-800 text-2xl mb-2 min-h-[3rem] flex items-center">
                      {forfait.title}
                    </CardTitle>
                    <p className="text-gray-700 text-lg min-h-[3.5rem] flex items-center">
                      {forfait.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-6 flex-grow flex flex-col">
                    <ul className="space-y-4 mb-6 flex-grow">
                      {forfait.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Button
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-3 font-medium"
                        onClick={openModal}
                      >
                        <Contact className="h-5 w-5 mr-2" />
                        Choisir ce forfait
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi Choisir Nos Forfaits ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des services de qualité professionnelle avec un accompagnement
                personnalisé pour votre bien-être.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à découvrir nos forfaits ?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Contactez-nous pour une consultation gratuite et trouvez le
              forfait qui correspond parfaitement à vos besoins.
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
        serviceName="Forfaits"
      />
      <Footer />
    </div>
  );
}
