"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Users, Building, TrendingUp, Target, CheckCircle, Star, ArrowRight, Heart, Shield, Award, Mail, Globe, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FormModal from "@/components/models/ContactModel";

export default function OffreDePartenariatPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const partnershipTypes = [
    {
      icon: Building,
      title: "Partenaire Institutionnel",
      description: "Collaboration avec établissements de santé et résidences",
      benefits: [
        "Amélioration des services aux résidents",
        "Formation du personnel spécialisée",
        "Programmes d'activités physiques sur mesure",
        "Support technique et consultation",
        "Accès à notre expertise gériatrique"
      ],
      idealFor: "CHSLD, résidences privées, centres de jour",
      commission: "Selon volume",
      gradient: "from-emerald-100 to-teal-100"
    },
    {
      icon: Users,
      title: "Réseau d'Influenceurs",
      description: "Ambassadeurs communautaires et leaders d'opinion",
      benefits: [
        "Commission attractive sur chaque référence",
        "Matériel marketing professionnel",
        "Formation sur nos services",
        "Support marketing continu",
        "Reconnaissance de performance"
      ],
      idealFor: "Professionnels de la santé, travailleurs sociaux, leaders communautaires",
      commission: "5-15% par client référé",
      gradient: "from-teal-100 to-cyan-100"
    },
    {
      icon: Heart,
      title: "Partenaire de Services",
      description: "Prestataires complémentaires dans l'écosystème de soins",
      benefits: [
        "Références croisées de clients",
        "Packages de services intégrés",
        "Formation mutuelle des équipes",
        "Protocoles de collaboration",
        "Marketing conjoint"
      ],
      idealFor: "Physiothérapeutes, nutritionnistes, psychologues, pharmacies",
      commission: "Collaboration mutuelle",
      gradient: "from-cyan-100 to-blue-100"
    },
    {
      icon: TrendingUp,
      title: "Distributeur Régional",
      description: "Expansion géographique avec partenaires locaux",
      benefits: [
        "Territoire exclusif garanti",
        "Formation complète du modèle",
        "Support opérationnel continu",
        "Partage des meilleures pratiques",
        "Croissance financière attractive"
      ],
      idealFor: "Entrepreneurs, professionnels expérimentés en soins",
      commission: "Jusqu'à 25% des revenus",
      gradient: "from-blue-100 to-purple-100"
    }
  ];

  const partnershipSteps = [
    {
      step: "01",
      title: "Candidature",
      description: "Soumettez votre demande via notre formulaire de partenariat",
      icon: Mail
    },
    {
      step: "02",
      title: "Évaluation",
      description: "Notre équipe évalue votre profil et vos objectifs",
      icon: Target
    },
    {
      step: "03",
      title: "Entretien",
      description: "Rencontre pour discuter des opportunités mutuelles",
      icon: Users
    },
    {
      step: "04",
      title: "Formation",
      description: "Formation sur nos services et méthodes de collaboration",
      icon: Award
    },
    {
      step: "05",
      title: "Lancement",
      description: "Démarrage officiel du partenariat avec support dédié",
      icon: Star
    }
  ];

  const partnerBenefits = [
    {
      icon: Shield,
      title: "Marque de Confiance",
      description: "Association avec une marque reconnue et respectée dans le domaine des soins aux aînés"
    },
    {
      icon: TrendingUp,
      title: "Croissance Garantie",
      description: "Marché en expansion avec demande croissante pour nos services spécialisés"
    },
    {
      icon: Award,
      title: "Formation Continue",
      description: "Accès à nos programmes de formation et certification professionnelle"
    },
    {
      icon: Globe,
      title: "Réseau National",
      description: "Intégration dans notre réseau de partenaires à travers le Québec"
    }
  ];

  const successStories = [
    {
      name: "Dr. Marie Lavoie",
      role: "Partenaire Influenceuse - Gériatre",
      text: "En 18 mois, j'ai référé plus de 50 familles à Confort Plus 65. La qualité de leurs services et le professionnalisme de l'équipe me permettent de recommander en toute confiance.",
      earnings: "12,500$ en commissions",
      image: "/services/caregiver-help-and-care-asian-senior-or-elderly-old-lady-woman-patient-sitting-on-wheelchair-at-home-photo.jpg"
    },
    {
      name: "Résidence Golden Age",
      role: "Partenaire Institutionnel",
      text: "Notre collaboration avec Confort Plus 65 a transformé l'expérience de nos résidents. Les activités physiques adaptées ont considérablement amélioré leur bien-être.",
      earnings: "Amélioration de 40% de la satisfaction",
      image: "/services/soins-personnalises.jpg"
    },
    {
      name: "Clinique Physio Plus",
      role: "Partenaire de Services",
      text: "Le partenariat nous a permis d'offrir un continuum de soins complet. Nos clients bénéficient maintenant d'un suivi intégré à domicile.",
      earnings: "30+ nouveaux clients/mois",
      image: "/services/blog-banner-caregiver-help-2.jpg"
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
              Rejoignez Notre Réseau
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Offre de <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Partenariat</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Développez votre activité en rejoignant le leader des soins à domicile pour les 65 ans et plus. 
              Ensemble, améliorons la qualité de vie des aînés tout en créant des opportunités de croissance mutuelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={openModal}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg shadow-lg"
              >
                <Handshake className="h-5 w-5 mr-2" />
                Devenir Partenaire
              </Button>
              <Button 
                variant="outline" 
                asChild
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg"
              >
                <Link href="#types-partenariat">Explorer les opportunités</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Journey - Step by Step */}
      <section id="types-partenariat" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Votre Parcours <span className="text-emerald-600">Partenaire</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nous pouvons grandir ensemble selon votre profil
            </p>
          </div>

          {/* Interactive Partnership Selector */}
          <div className="space-y-20">
            {partnershipTypes.map((partnership, index) => {
              const IconComponent = partnership.icon;
              const isOdd = index % 2 === 1;
              
              return (
                <div key={index} className="relative">
                  {/* Step Number */}
                  <div className="flex items-center justify-center mb-12">
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  <div className={`grid lg:grid-cols-2 gap-16 items-center ${isOdd ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <div className={`space-y-8 ${isOdd ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`bg-gradient-to-br ${partnership.gradient} w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl`}>
                          <IconComponent className="h-8 w-8 text-emerald-700" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">{partnership.title}</h3>
                          <p className="text-emerald-600 font-semibold">{partnership.commission}</p>
                        </div>
                      </div>

                      <p className="text-xl text-gray-600 leading-relaxed">{partnership.description}</p>

                      {/* Ideal For Badge */}
                      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                        <h4 className="text-lg font-semibold text-emerald-800 mb-2">Idéal pour:</h4>
                        <p className="text-emerald-700">{partnership.idealFor}</p>
                      </div>

                      {/* Benefits Checklist */}
                      <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-gray-900">Ce que vous obtenez:</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {partnership.benefits.slice(0, 4).map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-emerald-100">
                              <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-700 text-sm">{benefit}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button 
                        onClick={openModal}
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg shadow-lg"
                      >
                        <ArrowRight className="h-5 w-5 mr-2" />
                        Candidater pour ce type
                      </Button>
                    </div>

                    {/* Visual/Illustration */}
                    <div className={`${isOdd ? 'lg:col-start-1' : ''}`}>
                      <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                        <div className={`absolute inset-0 bg-gradient-to-br ${partnership.gradient}`}></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20"></div>
                        
                        {/* Partnership Visualization */}
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <div className="text-center text-white">
                            <IconComponent className="h-20 w-20 mx-auto mb-6 opacity-90" />
                            <h4 className="text-2xl font-bold mb-4">Niveau {index + 1}</h4>
                            
                            {/* Progress Indicators */}
                            <div className="space-y-4">
                              <div className="flex justify-between text-sm">
                                <span>Engagement requis</span>
                                <span>{index === 0 ? 'Minimal' : index === 1 ? 'Modéré' : index === 2 ? 'Standard' : 'Élevé'}</span>
                              </div>
                              <div className="h-2 bg-white/30 rounded-full">
                                <div className="h-2 bg-white rounded-full" style={{width: `${25 + index * 25}%`}}></div>
                              </div>
                              
                              <div className="flex justify-between text-sm">
                                <span>Potentiel de revenus</span>
                                <span>{index === 0 ? 'Bon' : index === 1 ? 'Très bon' : index === 2 ? 'Excellent' : 'Exceptionnel'}</span>
                              </div>
                              <div className="h-2 bg-white/30 rounded-full">
                                <div className="h-2 bg-white rounded-full" style={{width: `${30 + index * 20}%`}}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connection Line to Next Step */}
                  {index < partnershipTypes.length - 1 && (
                    <div className="flex justify-center mt-16">
                      <div className="h-16 w-0.5 bg-gradient-to-b from-emerald-600 to-teal-600"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Timeline Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Votre Parcours en <span className="text-emerald-600">5 Étapes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la candidature au succès - un processus simple et transparent
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative">
            {/* Main Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-200 via-teal-200 to-cyan-200"></div>
            
            <div className="space-y-16">
              {partnershipSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                      <div className={`bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 ${isEven ? 'lg:mr-8' : 'lg:ml-8'}`}>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-12 h-12 rounded-full flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-emerald-700" />
                          </div>
                          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                            Étape {step.step}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">{step.description}</p>
                        
                        {/* Step Details */}
                        <div className="space-y-3">
                          {index === 0 && (
                            <>
                              <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <Clock className="h-4 w-4" />
                                <span>Durée: 5 minutes</span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-emerald-600">
                                <CheckCircle className="h-4 w-4" />
                                <span>Formulaire simple et rapide</span>
                              </div>
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <Clock className="h-4 w-4" />
                                <span>Délai: 48-72h</span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-emerald-600">
                                <CheckCircle className="h-4 w-4" />
                                <span>Analyse personnalisée</span>
                              </div>
                            </>
                          )}
                          {index === 2 && (
                            <>
                              <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <Clock className="h-4 w-4" />
                                <span>Durée: 45-60 minutes</span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-emerald-600">
                                <CheckCircle className="h-4 w-4" />
                                <span>Échange constructif</span>
                              </div>
                            </>
                          )}
                          {index === 3 && (
                            <>
                              <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <Clock className="h-4 w-4" />
                                <span>Durée: 1-2 semaines</span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-emerald-600">
                                <CheckCircle className="h-4 w-4" />
                                <span>Certification incluse</span>
                              </div>
                            </>
                          )}
                          {index === 4 && (
                            <>
                              <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <Star className="h-4 w-4" />
                                <span>Support continu</span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-emerald-600">
                                <CheckCircle className="h-4 w-4" />
                                <span>Accompagnement personnalisé</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden lg:flex relative z-10 flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                        <span className="text-white text-xl font-bold">{step.step}</span>
                      </div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="flex-1 hidden lg:block"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi Nous <span className="text-emerald-600">Choisir</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les avantages exclusifs de notre réseau de partenaires
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-100">
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="h-8 w-8 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories - Interactive Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Partenaires qui <span className="text-emerald-600">Réussissent</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nos partenaires transforment leur activité avec nous
            </p>
          </div>

          <div className="relative">
            {/* Success Timeline */}
            <div className="space-y-16">
              {successStories.map((story, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                    {/* Story Content */}
                    <div className="flex-1">
                      <div className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-8 shadow-xl border border-emerald-100">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center">
                            <span className="text-emerald-700 font-bold text-xl">
                              {story.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{story.name}</h3>
                            <p className="text-emerald-600 font-semibold">{story.role}</p>
                          </div>
                        </div>
                        
                        <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic relative">
                          <span className="text-6xl text-emerald-200 absolute -top-4 -left-2">&ldquo;</span>
                          <span className="relative z-10">{story.text}</span>
                        </blockquote>
                        
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-emerald-100 mb-1">Résultat obtenu:</p>
                              <p className="text-2xl font-bold">{story.earnings}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-emerald-100 mb-1">Temps de collaboration:</p>
                              <p className="text-lg font-semibold">{index === 0 ? '18 mois' : index === 1 ? '2 ans' : '1 an'}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Visual Impact */}
                    <div className="flex-1">
                      <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                        <Image 
                          src={story.image} 
                          alt={story.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 to-teal-600/30"></div>
                        
                        {/* Success Metrics Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center">
                            <h4 className="text-3xl font-bold text-emerald-600 mb-2">
                              {index === 0 ? '+400%' : index === 1 ? '+250%' : '+180%'}
                            </h4>
                            <p className="text-gray-700 font-semibold">
                              {index === 0 ? 'Croissance des références' : 
                               index === 1 ? 'Amélioration satisfaction' : 
                               'Nouveaux clients/mois'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Questions <span className="text-emerald-600">Fréquentes</span>
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="border-emerald-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quelles sont les conditions pour devenir partenaire ?</h3>
                <p className="text-gray-600">Les conditions varient selon le type de partenariat. Généralement, nous recherchons des professionnels expérimentés dans le domaine de la santé ou des services aux aînés, avec une réputation établie et des valeurs alignées aux nôtres.</p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Comment les commissions sont-elles calculées ?</h3>
                <p className="text-gray-600">Les commissions sont calculées selon le type de partenariat et le volume d&apos;affaires généré. Pour les références, nous offrons entre 5% et 15% du montant facturé au client. Les partenaires distributeurs peuvent recevoir jusqu&apos;à 25% des revenus de leur territoire.</p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quel support est fourni aux nouveaux partenaires ?</h3>
                <p className="text-gray-600">Nous fournissons une formation complète, du matériel marketing professionnel, un support technique continu, et un accompagnement personnalisé par notre équipe dédiée aux partenariats.</p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Y a-t-il des territoires exclusifs ?</h3>
                <p className="text-gray-600">Oui, pour certains types de partenariats, notamment les distributeurs régionaux, nous offrons des territoires exclusifs garantis pour assurer le succès mutuel et éviter la concurrence interne.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Handshake className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à Démarrer Notre Collaboration ?
          </h2>
          <p className="text-xl text-emerald-100 mb-12 leading-relaxed">
            Rejoignez notre réseau de partenaires prospères et contribuez à améliorer la vie des aînés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={openModal}
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold shadow-lg"
            >
              <Mail className="h-5 w-5 mr-2" />
              Candidature Partenaire
            </Button>
            <Button 
              variant="outline" 
              asChild
              className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg"
            >
              <Link href="/#contact">Nous Contacter</Link>
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
