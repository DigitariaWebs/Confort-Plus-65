import { Heart, Home, Users, Clock, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ServicesSection = () => (
  <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
          Nous offrons tous les services nécessaires pour permettre aux personnes âgées de rester dans leur domicile.
          Nos services sont assurés par des professionnels qualifiés qui agissent avec bienveillance, écoute et respect.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 bg-gradient-to-br from-white to-emerald-50 hover:shadow-xl flex flex-col h-full">
          <CardHeader className="text-center">
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Heart className="h-8 w-8 text-emerald-700" />
            </div>
            <CardTitle className="text-emerald-800 min-h-[60px] flex items-center justify-center">Les services d’aides pour activités de la vie quotidienne (AVQ)</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow justify-between">
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Bain/Douche</p>
                  <p className="text-sm text-gray-600">Se laver, y compris entrer et sortir de la baignoire ou de la douche</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Habillement</p>
                  <p className="text-sm text-gray-600">Mettre et enlever ses vêtements</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Alimentation</p>
                  <p className="text-sm text-gray-600">Se nourrir de manière autonome</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Toilette</p>
                  <p className="text-sm text-gray-600">Gérer les fonctions intestinales et urinaires, se rendre aux toilettes, les utiliser correctement et se nettoyer</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Mobilité/Transferts</p>
                  <p className="text-sm text-gray-600">Se déplacer d’un endroit à un autre, marcher, se lever et s’asseoir</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Hygiène personnelle</p>
                  <p className="text-sm text-gray-600">Soins corporels, bucco-dentaires, capillaires et des ongles</p>
                </div>
              </div>
            </div>
            <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 mt-auto">
              <Link href="/services/avq">En savoir plus</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 bg-gradient-to-br from-white to-emerald-50 hover:shadow-xl flex flex-col h-full">
          <CardHeader className="text-center">
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Home className="h-8 w-8 text-emerald-700" />
            </div>
            <CardTitle className="text-emerald-800 min-h-[60px] flex items-center justify-center">Les services d’aide pour activités de la vie domestique ( AVD)</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow justify-between">
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Gestion des finances</p>
                  <p className="text-sm text-gray-600">Payer les factures, gérer un budget et un compte bancaire</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Courses</p>
                  <p className="text-sm text-gray-600">Faire l’épicerie et acheter les produits nécessaires</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Préparation des repas</p>
                  <p className="text-sm text-gray-600">Planifier, cuisiner et nettoyer après les repas</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Entretien ménager</p>
                  <p className="text-sm text-gray-600">Nettoyer, faire la lessive et assurer un environnement sécuritaire</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Transport</p>
                  <p className="text-sm text-gray-600">Se déplacer en voiture, en transport en commun ou organiser des trajets</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Communication</p>
                  <p className="text-sm text-gray-600">Utiliser le téléphone, écrire des courriels ou des lettres et gérer son courrier</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Gestion des médicaments</p>
                  <p className="text-sm text-gray-600">Prendre ses médicaments selon les prescriptions et renouveler ses ordonnances</p>
                </div>
              </div>
            </div>
            <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 mt-auto">
              <Link href="/services/avd">En savoir plus</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 bg-gradient-to-br from-white to-emerald-50 hover:shadow-xl flex flex-col h-full">
          <CardHeader className="text-center">
            <div className="bg-gradient-to-br from-cyan-100 to-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Users className="h-8 w-8 text-emerald-700" />
            </div>
            <CardTitle className="text-emerald-800 min-h-[60px] flex items-center justify-center">Soins spécialisés</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow justify-between">
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Activités physiques à domicile</p>
                  <p className="text-sm text-gray-600">Programmes d'exercices adaptés à vos capacités</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Animation et loisirs</p>
                  <p className="text-sm text-gray-600">Activités récréatives et de stimulation cognitive</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Aide administrative</p>
                  <p className="text-sm text-gray-600">Accompagnement pour les démarches et documents administratifs</p>
                </div>
              </div>
              {/* <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Soins médicaux spécialisés</p>
                  <p className="text-sm text-gray-600">Personnel OIIQ/OIIAQ accrédité pour soins avancés</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">Accompagnement pour sorties</p>
                  <p className="text-sm text-gray-600">Sorties sécurisées pour rendez-vous et activités</p>
                </div>
              </div> */}
            </div>
            <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 mt-auto">
              <Link href="/services/soins-specialises">En savoir plus</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Additional Resources Section */}
      <div className="mt-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ressources Additionnelles</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Informations et guides pour mieux comprendre et accompagner les personnes atteintes de troubles cognitifs
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <Card className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-xl">
            <CardHeader className="text-center">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Brain className="h-8 w-8 text-emerald-700" />
              </div>
              <CardTitle className="text-emerald-800">Difficultés Cognitives</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Guide complet pour comprendre et communiquer avec les personnes atteintes de troubles cognitifs
              </p>
              <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                <Link href="/cognitif">Consulter le guide</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-2xl inline-block shadow-xl">
          <Clock className="h-8 w-8 mx-auto mb-2" />
          <p className="text-2xl font-bold">Service 24h/7</p>
          <p className="text-emerald-100">Disponible quand vous en avez besoin</p>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;