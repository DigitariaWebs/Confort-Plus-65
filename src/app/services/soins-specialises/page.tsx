import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Users, Heart, CheckCircle, Phone, Activity, Brain, Music, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SpecializedCarePage() {
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
    {
      title: "Soins Palliatifs à Domicile",
      description: "Accompagnement en fin de vie avec dignité et confort",
      features: [
        "Soins de confort et bien-être",
        "Gestion de la douleur",
        "Support émotionnel",
        "Accompagnement de la famille",
        "Respect des volontés du patient",
        "Disponibilité 24h/24 si nécessaire"
      ]
    }
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
      emerald: { bg: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-100 hover:border-emerald-200" },
      blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-100 hover:border-blue-200" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-100 hover:border-purple-200" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-100 hover:border-orange-200" }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section - Modern Medical Theme */}
        <section className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 py-20 overflow-hidden">
          {/* Modern geometric patterns */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl rotate-45 opacity-30"></div>
            <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full opacity-15"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-6 rounded-3xl">
                  <Users className="h-16 w-16 text-purple-600" />
                </div>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Soins
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent block">
                  Spécialisés
                </span>
              </h1>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                Thérapies avancées et soins professionnels pour optimiser votre bien-être physique et mental
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-purple-100">
                <Activity className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h3 className="font-bold text-gray-900 mb-2">Activités Physiques</h3>
                <p className="text-gray-600 text-sm">Programmes adaptés</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-indigo-100">
                <Brain className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
                <h3 className="font-bold text-gray-900 mb-2">Stimulation Cognitive</h3>
                <p className="text-gray-600 text-sm">Exercices mentaux</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-100">
                <Music className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-bold text-gray-900 mb-2">Thérapies Créatives</h3>
                <p className="text-gray-600 text-sm">Art et musique</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-purple-100">
                <Heart className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h3 className="font-bold text-gray-900 mb-2">Soins Palliatifs</h3>
                <p className="text-gray-600 text-sm">Accompagnement</p>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-purple-100">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    15,99 $
                  </div>
                  <div className="text-gray-600 text-lg mb-6">par heure</div>
                  <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-lg h-16 rounded-2xl">
                    <Phone className="h-6 w-6 mr-3" />
                    Consultation spécialisée
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <section className="py-6 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-purple-600 transition-colors">
                    Accueil
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link href="/#services" className="text-gray-500 hover:text-purple-600 transition-colors">
                    Services
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-purple-600 font-medium">Soins Spécialisés</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Services with Color-coded Layout */}
        <section className="py-20 bg-gray-50">
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
                  <Card key={index} className={`border-2 ${colors.border} transition-all duration-300 hover:shadow-xl bg-white overflow-hidden`}>
                    <CardHeader className={`${colors.bg.replace('100', '50')} pb-6`}>
                      <div className="flex items-center mb-4">
                        <div className={`${colors.bg} p-3 rounded-2xl mr-4`}>
                          <IconComponent className={`h-8 w-8 ${colors.text}`} />
                        </div>
                        <CardTitle className={`${colors.text.replace('600', '800')} text-2xl`}>{service.title}</CardTitle>
                      </div>
                      <p className="text-gray-700 text-lg">{service.description}</p>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-4">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <CheckCircle className={`h-6 w-6 ${colors.text} mr-4 mt-0.5 flex-shrink-0`} />
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Soins Médicaux Spécialisés
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Accompagnement médical professionnel pour les situations complexes nécessitant une expertise particulière.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {specializedCare.map((care, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-100">
                    <h3 className="text-3xl font-bold text-purple-900 mb-4">{care.title}</h3>
                    <p className="text-lg text-gray-700 mb-6">{care.description}</p>
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                      <ul className="space-y-3">
                        {care.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
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

        {/* Qualifications */}
        <section className="py-20 bg-purple-50">
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
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{qualification.title}</h3>
                  <p className="text-gray-600">{qualification.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Care CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">
                Soins Avancés, Résultats Exceptionnels
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Bénéficiez de notre expertise en soins spécialisés pour optimiser votre bien-être et votre qualité de vie.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-50 text-lg h-16 px-8 rounded-2xl font-bold">
                  <Phone className="h-6 w-6 mr-3" />
                  514 222 8271
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg h-16 px-8 rounded-2xl font-bold">
                  Évaluation personnalisée
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-purple-50 p-8 rounded-2xl">
              <div className="text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Commencez Votre Parcours de Soins Spécialisés
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Contactez-nous pour une évaluation personnalisée de vos besoins en soins spécialisés.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg h-14 px-8">
                    <Phone className="h-5 w-5 mr-2" />
                    514 222 8271
                  </Button>
                  <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 text-lg h-14 px-8">
                    Demander une consultation
                  </Button>
                </div>
                
                {/* Back to Services */}
                <div className="mt-8">
                  <Link href="/#services" className="text-purple-600 hover:text-purple-700 font-medium transition-colors">
                    ← Retour à tous nos services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
