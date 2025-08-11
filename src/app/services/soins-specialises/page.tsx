"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Users, CheckCircle, Phone, Contact, Activity, Brain, Music, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import FormModal from "@/components/models/ContactModel";

export default function SpecializedCarePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const services = [
    {
      icon: Activity,
      title: "Activités Physiques",
      description: "Des séances adaptées à votre mobilité pour personnes autonomes, semi-autonomes ou alitées",
      details: [
        "Séances d'activité physique sur mesure",
        "Programmes adaptés à votre niveau de mobilité",
        "Exercices pour personnes autonomes et semi-autonomes",
        "Activités spécialisées pour personnes alitées",
        "Encadrement par des professionnels qualifiés",
        "À votre rythme dans le confort de votre domicile"
      ],
      color: "emerald"
    },
    {
      icon: Brain,
      title: "Stimulation Cognitive",
      description: "Activités pour maintenir et stimuler les capacités mentales",
      details: [
        "Jeux de mémoire et exercices cognitifs",
        "Activités de lecture et discussion",
        "Puzzles et jeux de société adaptés",
        "Exercices de calcul et logique",
        "Thérapie par la réminiscence",
        "Programmes personnalisés selon les besoins"
      ],
      color: "blue"
    },
    {
      icon: Music,
      title: "Animation et Loisirs",
      description: "Redonnez du piquant à votre quotidien avec des animations sur mesure",
      details: [
        "Animations sur mesure à domicile",
        "Briser l'isolement social",
        "Création de moments de plaisir",
        "Activités de créativité",
        "Lien social dans votre environnement familier",
        "Programmes personnalisés selon vos intérêts"
      ],
      color: "purple"
    },
    {
      icon: FileText,
      title: "Accompagnement",
      description: "Liberté retrouvée pour vos déplacements et sorties",
      details: [
        "Accompagnement pour rendez-vous médicaux",
        "Sorties à la bibliothèque",
        "Sorties culturelles et loisirs",
        "Assistance avec des professionnels dédiés",
        "Mobilité sereine et sécurisée",
        "Service bienveillant et personnalisé"
      ],
      color: "orange"
    }
  ];

  const specializedCare = [
    {
      title: "Soins Spécialisés",
      description: "Expertise médicale à domicile avec tranquillité d'esprit garantie",
      features: [
        "Prise de médicaments par des infirmières accréditées OIIQ/OIIAQ",
        "Injections réalisées par des professionnels qualifiés",
        "Soins médicaux spécialisés à domicile",
        "Surveillance médicale professionnelle",
        "Coordination avec l'équipe médicale",
        "Respect des protocoles de soins"
      ]
    },
    {
      title: "Soins Post-Hospitalisation",
      description: "Accompagnement personnalisé pour une récupération optimale",
      features: [
        "Suivi des prescriptions médicales",
        "Aide à la rééducation fonctionnelle",
        "Surveillance des signes vitaux",
        "Coordination avec l'équipe médicale",
        "Adaptation de l'environnement",
        "Prévention des complications"
      ]
    },
    
  ];

  const qualifications = [
    {
      title: "Personnel Spécialisé",
      description: "Formation continue en soins spécialisés et approches thérapeutiques"
    },
    {
      title: "Équipement Professionnel",
      description: "Matériel adapté pour chaque type d'activité et de soin"
    },
    {
      title: "Approche Multidisciplinaire",
      description: "Collaboration avec médecins, physiothérapeutes et autres professionnels"
    },
    {
      title: "Plans de Soins Personnalisés",
      description: "Adaptation constante selon l'évolution des besoins"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: { bg: "bg-gradient-to-br from-emerald-100 to-teal-100", text: "text-emerald-700", border: "border-emerald-200 hover:border-emerald-300" },
      blue: { bg: "bg-gradient-to-br from-teal-100 to-cyan-100", text: "text-emerald-700", border: "border-emerald-200 hover:border-emerald-300" },
      purple: { bg: "bg-gradient-to-br from-cyan-100 to-emerald-100", text: "text-emerald-700", border: "border-emerald-200 hover:border-emerald-300" },
      orange: { bg: "bg-gradient-to-br from-emerald-100 to-green-100", text: "text-emerald-700", border: "border-emerald-200 hover:border-emerald-300" }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section - Modern Medical Theme */}
        <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/services/carousel2.jpg"
              alt="Soins spécialisés et thérapies avancées"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-emerald-900/70"></div>
          </div>
          
          {/* Modern geometric patterns */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-2xl rotate-45 opacity-30"></div>
            <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-cyan-200 to-emerald-200 rounded-full opacity-15"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white/20">
                  <Users className="h-16 w-16 text-emerald-400" />
                </div>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Soins
                <span className="text-emerald-400 block">
                  Spécialisés
                </span>
              </h1>
              <p className="text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
                Thérapies avancées et soins professionnels pour optimiser votre bien-être physique et mental
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-white to-emerald-50 backdrop-blur-sm rounded-2xl p-6 text-center border border-emerald-100 shadow-md">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Activity className="h-8 w-8 text-emerald-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Activités Physiques</h3>
                <p className="text-gray-600 text-sm">Programmes adaptés</p>
              </div>
              <div className="bg-gradient-to-br from-white to-emerald-50 backdrop-blur-sm rounded-2xl p-6 text-center border border-emerald-100 shadow-md">
                <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Brain className="h-8 w-8 text-emerald-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Stimulation Cognitive</h3>
                <p className="text-gray-600 text-sm">Exercices mentaux</p>
              </div>
              <div className="bg-gradient-to-br from-white to-emerald-50 backdrop-blur-sm rounded-2xl p-6 text-center border border-emerald-100 shadow-md">
                <div className="bg-gradient-to-br from-cyan-100 to-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Music className="h-8 w-8 text-emerald-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Thérapies Créatives</h3>
                <p className="text-gray-600 text-sm">Art et musique</p>
              </div>
              
            </div>

            {/* Pricing Card */}
            <div className="max-w-md mx-auto">
              <div className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl shadow-2xl p-8 border-2 border-emerald-200">
                <div className="text-center">
                  {/* <div className="text-5xl  font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-8">
                    16,99 $/h
                  </div> */}
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-lg h-16 rounded-2xl shadow-lg cursor-pointer"
                    onClick={openModal}
                  >
                    <Phone className="h-6 w-6 mr-3" />
                    Consultation spécialisée
                  </Button>
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
                Thérapies et Activités Spécialisées
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des approches thérapeutiques innovantes pour stimuler, accompagner et améliorer la qualité de vie.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const colors = getColorClasses(service.color);
                return (
                  <Card key={index} className={`border-2 ${colors.border} transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-emerald-50 overflow-hidden`}>
                    <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 pb-6">
                      <div className="flex items-center mb-4">
                        <div className={`${colors.bg} p-3 rounded-2xl mr-4 shadow-md`}>
                          <IconComponent className={`h-8 w-8 ${colors.text}`} />
                        </div>
                        <CardTitle className="text-emerald-800 text-2xl">{service.title}</CardTitle>
                      </div>
                      <p className="text-gray-700 text-lg">{service.description}</p>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-4">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-emerald-600 mr-4 mt-0.5 flex-shrink-0" />
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

        {/* Specialized Medical Care */}
        <section className="py-20 bg-gradient-to-br from-white to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Soins Médicaux Spécialisés
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Accompagnement médical professionnel pour les situations complexes nécessitant une expertise particulière.
              </p>
            </div>

            <div className="space-y-16">
              {specializedCare.map((care, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'}`}>
                  {/* Content Side */}
                  <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-200 shadow-xl">
                      <h3 className="text-3xl font-bold text-emerald-900 mb-4">{care.title}</h3>
                      <p className="text-lg text-gray-700 mb-6">{care.description}</p>
                      <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-6 shadow-md border border-emerald-100">
                        <ul className="space-y-3">
                          {care.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={
                          index === 0 ? "/services/aide-a-la-marche-senior.jpg" :
                          index === 1 ? "/services/blog-banner-caregiver-help-2.jpg" :
                          index === 2 ? "/services/caregiver-embracing-senior-in-park-free-photo.jpg" :
                          "/services/soins-personnalises.jpg"
                        }
                        alt={`${care.title} - Soins médicaux spécialisés`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-emerald-900/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                          <h3 className="text-2xl font-bold text-white mb-2">{care.title}</h3>
                          <p className="text-emerald-100">{care.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Excellence et Expertise
              </h2>
              <p className="text-xl text-gray-600">
                Notre engagement envers la qualité des soins spécialisés
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualifications.map((qualification, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-emerald-100">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full mb-4 shadow-md">
                    <CheckCircle className="h-8 w-8 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{qualification.title}</h3>
                  <p className="text-gray-600">{qualification.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Care CTA */}
        <section className="py-20 bg-gradient-to-br from-white to-emerald-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 lg:p-12 text-white text-center shadow-xl">
              <h2 className="text-4xl font-bold mb-6">
                Soins Avancés, Résultats Exceptionnels
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Bénéficiez de notre expertise en soins spécialisés pour optimiser votre bien-être et votre qualité de vie.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-emerald-600 hover:bg-emerald-50 hover:text-black text-lg h-16 px-8 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  asChild
                >
                  <a href="tel:5142228271">
                    <Phone className="h-6 w-6 mr-3" />
                    Appelez-nous
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-emerald-600 bg-white hover:bg-emerald-50 hover:text-black text-lg h-16 px-8 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={openModal}
                >
                  <Contact className="h-6 w-6 mr-3" />
                  Demander une consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Contact Modal */}
      <FormModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        formType="service"
        serviceName="Soins Spécialisés"
      />
      <Footer />
    </div>
  );
}
