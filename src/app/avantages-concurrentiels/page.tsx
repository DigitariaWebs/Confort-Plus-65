"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Heart, Star, Clock, CheckCircle, Award, Sparkles, Brain, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import FormModal from "@/components/models/ContactModel";

export default function AvantagesConcurrentielsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const mainAdvantages = [
    {
      icon: Users,
      title: "Activités Physiques Adaptées",
      description: "Programmes d'exercices personnalisés à domicile par des professionnels certifiés en kinésiologie",
      features: [
        "Évaluation des capacités physiques",
        "Exercices adaptés aux limitations",
        "Amélioration de l'équilibre et de la force",
        "Prévention des chutes",
        "Suivi de progression personnalisé"
      ],
      gradient: "from-emerald-100 to-teal-100"
    },
    {
      icon: Heart,
      title: "Services Exclusifs 65+",
      description: "Solutions spécialement conçues pour les besoins uniques des personnes âgées",
      features: [
        "Protocoles adaptés à l'âge",
        "Approche gériatrique spécialisée",
        "Respect du rythme individuel",
        "Soins préventifs ciblés",
        "Support émotionnel adapté"
      ],
      gradient: "from-teal-100 to-cyan-100"
    },
    {
      icon: Star,
      title: "Système de Jumelage Innovant",
      description: "Association personnalisée entre chaque client et son intervenant dédié",
      features: [
        "Analyse des affinités personnelles",
        "Matching basé sur les besoins",
        "Continuité des soins assurée",
        "Relation de confiance privilégiée",
        "Accompagnement à long terme"
      ],
      gradient: "from-cyan-100 to-blue-100"
    }
  ];

  const competitiveEdges = [
    {
      icon: Shield,
      title: "Certification et Qualité",
      description: "Personnel 100% certifié et formation continue",
      stats: "100% Personnel Agréé"
    },
    {
      icon: Clock,
      title: "Disponibilité 24/7",
      description: "Support et urgences disponibles en tout temps",
      stats: "24h/7j Disponible"
    },
    {
      icon: Award,
      title: "Excellence Reconnue",
      description: "Standards de qualité supérieurs à l'industrie",
      stats: "98% Satisfaction Client"
    },
    {
      icon: Brain,
      title: "Approche Holistique",
      description: "Soins physiques, cognitifs et émotionnels intégrés",
      stats: "3 Dimensions de Soins"
    }
  ];

  const testimonials = [
    {
      name: "Marie-Claire Dubois",
      age: 72,
      text: "Le système de jumelage a changé ma vie. Mon intervenante comprend parfaitement mes besoins et nous avons développé une belle complicité.",
      rating: 5
    },
    {
      name: "Robert Tremblay",
      age: 68,
      text: "Les activités physiques adaptées m'ont redonné confiance en mes capacités. Je me sens plus fort et en sécurité chez moi.",
      rating: 5
    },
    {
      name: "Famille Bergeron",
      age: null,
      text: "Confort Plus 65 nous a donné la tranquillité d'esprit. Papa reçoit des soins exceptionnels dans le confort de sa maison.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
              Ce qui nous distingue
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Nos <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Avantages Concurrentiels</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Découvrez pourquoi plus de 1000 familles nous font confiance pour l&apos;accompagnement de leurs proches âgés de 65 ans et plus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={openModal}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg shadow-lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                Découvrir nos services
              </Button>
              <Button 
                variant="outline" 
                asChild
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg"
              >
                <Link href="/#about">En savoir plus</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trois <span className="text-emerald-600">Avantages Uniques</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre expertise exclusive qui fait la différence dans la qualité de vie de nos clients
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {mainAdvantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <Card key={index} className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 overflow-hidden group">
                  <CardHeader className="text-center pb-8">
                    <div className={`bg-gradient-to-br ${advantage.gradient} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-10 w-10 text-emerald-700" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                      {advantage.title}
                    </CardTitle>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {advantage.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Competitive Edges Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Notre <span className="text-emerald-600">Excellence</span> en Chiffres
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des résultats mesurables qui témoignent de notre engagement envers la qualité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {competitiveEdges.map((edge, index) => {
              const IconComponent = edge.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-emerald-100">
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="h-8 w-8 text-emerald-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-600 mb-2">{edge.stats}</h3>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{edge.title}</h4>
                  <p className="text-gray-600">{edge.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Témoignages de <span className="text-emerald-600">Satisfaction</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L&apos;expérience de nos clients parle d&apos;elle-même
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-emerald-200 hover:border-emerald-300 transition-all duration-300 bg-gradient-to-br from-white to-emerald-50">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="border-t border-emerald-200 pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    {testimonial.age && (
                      <p className="text-emerald-600">{testimonial.age} ans</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi Choisir <span className="text-emerald-600">Confort Plus 65</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                  <tr>
                    <th className="px-8 py-6 text-left text-lg font-semibold">Caractéristiques</th>
                    <th className="px-8 py-6 text-center text-lg font-semibold">Confort Plus 65</th>
                    <th className="px-8 py-6 text-center text-lg font-semibold">Concurrents</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="px-8 py-6 font-medium text-gray-900">Activités physiques adaptées</td>
                    <td className="px-8 py-6 text-center">
                      <CheckCircle className="h-6 w-6 text-emerald-600 mx-auto" />
                    </td>
                    <td className="px-8 py-6 text-center text-gray-400">—</td>
                  </tr>
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="px-8 py-6 font-medium text-gray-900">Système de jumelage personnalisé</td>
                    <td className="px-8 py-6 text-center">
                      <CheckCircle className="h-6 w-6 text-emerald-600 mx-auto" />
                    </td>
                    <td className="px-8 py-6 text-center text-gray-400">—</td>
                  </tr>
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="px-8 py-6 font-medium text-gray-900">Spécialisation 65+ exclusivement</td>
                    <td className="px-8 py-6 text-center">
                      <CheckCircle className="h-6 w-6 text-emerald-600 mx-auto" />
                    </td>
                    <td className="px-8 py-6 text-center text-gray-400">Limité</td>
                  </tr>
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="px-8 py-6 font-medium text-gray-900">Personnel 100% certifié</td>
                    <td className="px-8 py-6 text-center">
                      <CheckCircle className="h-6 w-6 text-emerald-600 mx-auto" />
                    </td>
                    <td className="px-8 py-6 text-center">
                      <CheckCircle className="h-6 w-6 text-gray-400 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="px-8 py-6 font-medium text-gray-900">Support 24/7</td>
                    <td className="px-8 py-6 text-center">
                      <CheckCircle className="h-6 w-6 text-emerald-600 mx-auto" />
                    </td>
                    <td className="px-8 py-6 text-center text-gray-400">Limité</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à Découvrir la Différence ?
          </h2>
          <p className="text-xl text-emerald-100 mb-12 leading-relaxed">
            Rejoignez plus de 1000 familles qui ont choisi l&apos;excellence pour leurs proches
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={openModal}
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold shadow-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              Consultation Gratuite
            </Button>
            <Button 
              variant="outline" 
              asChild
              className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg"
            >
              <Link href="/#services">Voir nos services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Contact Modal */}
      <FormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
