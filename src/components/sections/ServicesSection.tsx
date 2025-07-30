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
        <Card className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 bg-gradient-to-br from-white to-emerald-50 hover:shadow-xl">
          <CardHeader className="text-center">
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Heart className="h-8 w-8 text-emerald-700" />
            </div>
            <CardTitle className="text-emerald-800">Soins personnalisés</CardTitle>
            {/* <div className="text-2xl font-bold text-emerald-600">13,99 $/h</div> */}
          </CardHeader>
          <CardContent>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Aide quotidienne respectueuse</li>
              <li>• Préservation de votre autonomie</li>
              <li>• Soins personnalisés sur mesure</li>
              <li>• Accompagnement bienveillant</li>
              <li>• Répit aux aidants</li>
            </ul>
            <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
              <Link href="/services/soins-personnalises">En savoir plus</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 bg-gradient-to-br from-white to-emerald-50 hover:shadow-xl">
          <CardHeader className="text-center">
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Home className="h-8 w-8 text-emerald-700" />
            </div>
            <CardTitle className="text-emerald-800">Entretien ménager</CardTitle>
            {/* <div className="text-2xl font-bold text-emerald-600">12,99 $/h</div> */}
          </CardHeader>
          <CardContent>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Intérieur impeccable sans effort</li>
              <li>• Service sécurisé et respectueux</li>
              <li>• Bien-être et sérénité garantis</li>
              <li>• Personnel qualifié et de confiance</li>
              <li>• Entretien préventif et régulier</li>
            </ul>
            <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
              <Link href="/services/entretien-menager">En savoir plus</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 bg-gradient-to-br from-white to-emerald-50 hover:shadow-xl">
          <CardHeader className="text-center">
            <div className="bg-gradient-to-br from-cyan-100 to-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Users className="h-8 w-8 text-emerald-700" />
            </div>
            <CardTitle className="text-emerald-800">Soins Spécialisés</CardTitle>
            {/* <div className="text-2xl font-bold text-emerald-600">16,99 $/h</div> */}
          </CardHeader>
          <CardContent>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Activités physiques adaptées</li>
              <li>• Animation et loisirs sur mesure</li>
              <li>• Accompagnement pour sorties</li>
              <li>• Soins médicaux spécialisés</li>
              <li>• Personnel OIIQ/OIIAQ accrédité</li>
            </ul>
            <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
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