import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Home, Clock, Shield, CheckCircle, Phone, ChefHat, Sparkles, Car, ShoppingCart, Wrench, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EntretienMenagerPage() {
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
        {/* Hero Section - Housekeeping Theme */}
        <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 overflow-hidden">
          {/* Home-themed decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-24 h-24 border-4 border-orange-200 rounded-lg rotate-12 opacity-20"></div>
            <div className="absolute top-40 right-20 w-16 h-16 border-4 border-amber-200 rounded-full opacity-30"></div>
            <div className="absolute bottom-32 left-1/3 w-20 h-20 border-4 border-yellow-200 rounded-lg -rotate-6 opacity-20"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-8">
                  <div className="bg-orange-100 p-4 rounded-2xl mr-6">
                    <Home className="h-12 w-12 text-orange-600" />
                  </div>
                  <div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                      Entretien
                      <span className="text-orange-600 block">Ménager</span>
                    </h1>
                    <p className="text-lg text-orange-600 font-medium mt-2">Votre maison, notre expertise</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Des services complets d&apos;entretien ménager pour maintenir votre intérieur impeccable et votre bien-être au quotidien.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl font-bold text-orange-600">14,99 $</div>
                    <div className="text-gray-600">par heure</div>
                  </div>
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg h-16 px-8 rounded-2xl">
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
                      <Sparkles className="h-10 w-10 mx-auto mb-3 text-orange-600" />
                      <div className="font-semibold text-gray-900">Nettoyage</div>
                      <div className="text-sm text-gray-600">complet</div>
                    </div>
                    <div className="text-center">
                      <ChefHat className="h-10 w-10 mx-auto mb-3 text-orange-600" />
                      <div className="font-semibold text-gray-900">Préparation</div>
                      <div className="text-sm text-gray-600">de repas</div>
                    </div>
                    <div className="text-center">
                      <Wrench className="h-10 w-10 mx-auto mb-3 text-orange-600" />
                      <div className="font-semibold text-gray-900">Entretien</div>
                      <div className="text-sm text-gray-600">préventif</div>
                    </div>
                    <div className="text-center">
                      <Leaf className="h-10 w-10 mx-auto mb-3 text-orange-600" />
                      <div className="font-semibold text-gray-900">Extérieur</div>
                      <div className="text-sm text-gray-600">et jardin</div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <div className="flex justify-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-orange-600" />
                        Horaires flexibles
                      </span>
                      <span className="flex items-center">
                        <Shield className="h-4 w-4 mr-1 text-orange-600" />
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
                  <Link href="/" className="text-gray-500 hover:text-orange-600 transition-colors">
                    Accueil
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link href="/#services" className="text-gray-500 hover:text-orange-600 transition-colors">
                    Services
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-orange-600 font-medium">Entretien Ménager</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Services with Color-coded Layout */}
        <section className="py-20 bg-gray-50">
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
                  <Card key={index} className="border-2 border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl bg-white overflow-hidden">
                    <CardHeader className="bg-orange-50 pb-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-orange-100 p-3 rounded-2xl mr-4">
                          <IconComponent className="h-8 w-8 text-orange-600" />
                        </div>
                        <CardTitle className="text-orange-800 text-2xl">{service.title}</CardTitle>
                      </div>
                      <p className="text-gray-700 text-lg">{service.description}</p>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-4">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
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

        {/* Domestic Services Grid */}
        <section className="py-20 bg-white">
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
                <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
                  <div className="grid gap-4">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center bg-white rounded-xl p-4 shadow-sm">
                        <CheckCircle className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Avantages de Nos Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez pourquoi choisir nos services d&apos;entretien ménager professionnels.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt pour un intérieur impeccable ?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Contactez-nous pour un devis personnalisé et découvrez comment nos services d&apos;entretien ménager peuvent transformer votre quotidien.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 rounded-2xl">
                <Phone className="h-6 w-6 mr-3" />
                Appelez maintenant
              </Button>
              <Link href="/#contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 rounded-2xl border-white text-white hover:bg-white hover:text-orange-600">
                  Demander un devis
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
