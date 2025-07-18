import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Home, Clock, Shield, CheckCircle, Phone, ChefHat, Sparkles, Car, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AVDPage() {
  const services = [
    {
      icon: ChefHat,
      title: "Préparation des Repas",
      description: "Cuisine nutritive et savoureuse adaptée aux besoins alimentaires",
      details: [
        "Planification de menus équilibrés",
        "Préparation de repas frais et nutritifs",
        "Adaptation aux régimes spéciaux (diabétique, sans sel, etc.)",
        "Respect des préférences alimentaires",
        "Aide à l'alimentation si nécessaire",
        "Préparation de collations saines"
      ]
    },
    {
      icon: Sparkles,
      title: "Entretien Ménager",
      description: "Maintien d'un environnement propre et sécuritaire",
      details: [
        "Nettoyage des pièces de vie",
        "Entretien de la cuisine et salle de bain",
        "Aspiration et lavage des sols",
        "Dépoussiérage des meubles",
        "Nettoyage des vitres et miroirs",
        "Désinfection des surfaces"
      ]
    },
    {
      icon: Car,
      title: "Accompagnement",
      description: "Transport sécuritaire pour rendez-vous et sorties",
      details: [
        "Accompagnement aux rendez-vous médicaux",
        "Transport pour l'épicerie et les courses",
        "Sorties récréatives et sociales",
        "Aide à la marche et mobilité",
        "Assistance dans les transports publics",
        "Accompagnement pour les démarches administratives"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Courses et Commissions",
      description: "Gestion des achats et approvisionnements",
      details: [
        "Courses d'épicerie selon les préférences",
        "Achat de médicaments en pharmacie",
        "Commissions diverses",
        "Gestion du budget courses",
        "Vérification des dates d'expiration",
        "Rangement et organisation des achats"
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
      category: "Entretien Extérieur",
      services: [
        "Entretien du jardin et des plantes",
        "Nettoyage des entrées",
        "Déneigement léger",
        "Entretien des espaces extérieurs",
        "Arrosage des plantes",
        "Petit bricolage sécuritaire"
      ]
    }
  ];

  const benefits = [
    {
      title: "Maintien de l'Autonomie",
      description: "Permet aux seniors de rester chez eux plus longtemps"
    },
    {
      title: "Sécurité Renforcée",
      description: "Environnement propre et sécuritaire pour prévenir les accidents"
    },
    {
      title: "Nutrition Optimale",
      description: "Repas équilibrés adaptés aux besoins de santé"
    },
    {
      title: "Réduction du Stress",
      description: "Moins de préoccupations liées aux tâches ménagères"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section - Home & Domestic Theme */}
        <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 py-20 overflow-hidden">
          {/* Home-themed decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-24 h-24 border-4 border-blue-200 rounded-lg rotate-12 opacity-20"></div>
            <div className="absolute top-40 right-20 w-16 h-16 border-4 border-indigo-200 rounded-full opacity-30"></div>
            <div className="absolute bottom-32 left-1/3 w-20 h-20 border-4 border-cyan-200 rounded-lg -rotate-6 opacity-20"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-8">
                  <div className="bg-blue-100 p-4 rounded-2xl mr-6">
                    <Home className="h-12 w-12 text-blue-600" />
                  </div>
                  <div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                      Aide
                      <span className="text-blue-600 block">Domestique</span>
                    </h1>
                    <p className="text-lg text-blue-600 font-medium mt-2">Votre maison, notre priorité</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Des services complets d&apos;aide ménagère, courses et accompagnement pour maintenir votre autonomie à domicile.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl font-bold text-blue-600">12,99 $</div>
                    <div className="text-gray-600">par heure</div>
                  </div>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg h-16 px-8 rounded-2xl">
                    <Phone className="h-6 w-6 mr-3" />
                    Demander un devis
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Services Disponibles</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <ChefHat className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                      <div className="font-semibold text-gray-900">Préparation</div>
                      <div className="text-sm text-gray-600">de repas</div>
                    </div>
                    <div className="text-center">
                      <Sparkles className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                      <div className="font-semibold text-gray-900">Entretien</div>
                      <div className="text-sm text-gray-600">ménager</div>
                    </div>
                    <div className="text-center">
                      <Car className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                      <div className="font-semibold text-gray-900">Transport &</div>
                      <div className="text-sm text-gray-600">accompagnement</div>
                    </div>
                    <div className="text-center">
                      <ShoppingCart className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                      <div className="font-semibold text-gray-900">Courses &</div>
                      <div className="text-sm text-gray-600">commissions</div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <div className="flex justify-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-blue-600" />
                        Horaires flexibles
                      </span>
                      <span className="flex items-center">
                        <Shield className="h-4 w-4 mr-1 text-blue-600" />
                        Personnel fiable
                      </span>
                    </div>
                  </div>
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
                  <Link href="/" className="text-gray-500 hover:text-blue-600 transition-colors">
                    Accueil
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link href="/#services" className="text-gray-500 hover:text-blue-600 transition-colors">
                    Services
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-blue-600 font-medium">AVD</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Main Services - Icon-based Layout */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nos Services à Domicile
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une gamme complète de services pour vous aider à maintenir votre indépendance et votre confort chez vous.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 h-full border-2 border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-start mb-6">
                        <div className="bg-blue-100 p-4 rounded-2xl mr-6 group-hover:bg-blue-200 transition-colors">
                          <IconComponent className="h-8 w-8 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                          <p className="text-gray-600 text-lg mb-4">{service.description}</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <ul className="space-y-3">
                          {service.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Services Complémentaires
              </h2>
              <p className="text-xl text-gray-600">
                Entretien complet de votre domicile, intérieur et extérieur
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {domesticServices.map((category, index) => (
                <Card key={index} className="border-2 border-blue-100">
                  <CardHeader>
                    <CardTitle className="text-blue-800 text-2xl text-center">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Avantages de Nos Services AVD
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">
                  Tarification Transparente
                </h2>
                <p className="text-xl text-gray-600">
                  Prix abordable sans frais cachés
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">12,99 $</div>
                  <div className="text-gray-600">par heure</div>
                  <div className="text-sm text-gray-500 mt-2">Service régulier</div>
                </div>
                <div className="bg-white p-6 rounded-xl text-center shadow-sm border-2 border-blue-200">
                  <div className="text-2xl font-bold text-blue-600 mb-2">11,99 $</div>
                  <div className="text-gray-600">par heure</div>
                  <div className="text-sm text-gray-500 mt-2">Forfait 20h+/semaine</div>
                </div>
                <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Gratuit</div>
                  <div className="text-gray-600">Évaluation</div>
                  <div className="text-sm text-gray-500 mt-2">Consultation initiale</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-2xl rotate-12"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 border-4 border-white rounded-lg -rotate-12"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6">
              Retrouvez Votre Liberté à Domicile
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Profitez pleinement de votre chez-vous pendant que nous prenons soin des tâches quotidiennes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 text-lg h-16 px-8 rounded-2xl font-bold">
                <Phone className="h-6 w-6 mr-3" />
                514 222 8271
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg h-16 px-8 rounded-2xl font-bold">
                Évaluation gratuite
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
              <div className="text-3xl font-bold mb-2">12,99 $/h</div>
              <div className="opacity-90">Tarif transparent - Pas de frais cachés</div>
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
