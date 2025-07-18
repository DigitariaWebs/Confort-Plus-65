import { Heart, Home, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-xl text-gray-600">
          Comprehensive care services to help seniors maintain their independence at home
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="border-2 border-emerald-100 hover:border-emerald-200 transition-colors">
          <CardHeader className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-emerald-600" />
            </div>
            <CardTitle className="text-emerald-800">Activités de la Vie Quotidienne (AVQ)</CardTitle>
            <div className="text-2xl font-bold text-emerald-600">$13.99/h</div>
          </CardHeader>
          <CardContent>
            <ul className="text-gray-600 space-y-2">
              <li>• Toilette partielle et complète</li>
              <li>• Aide à l&apos;habillement</li>
              <li>• Soins liés à l&apos;incontinence</li>
              <li>• Entretien de la personne</li>
              <li>• Répit aux aidants</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-emerald-100 hover:border-emerald-200 transition-colors">
          <CardHeader className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="h-8 w-8 text-emerald-600" />
            </div>
            <CardTitle className="text-emerald-800">Activités de la Vie Domestique (AVD)</CardTitle>
            <div className="text-2xl font-bold text-emerald-600">$12.99/h</div>
          </CardHeader>
          <CardContent>
            <ul className="text-gray-600 space-y-2">
              <li>• Préparation des repas</li>
              <li>• Entretien ménager</li>
              <li>• Entretien extérieur</li>
              <li>• Accompagnement (rendez-vous, épicerie)</li>
              <li>• Rangement, lessive</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-emerald-100 hover:border-emerald-200 transition-colors">
          <CardHeader className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-emerald-600" />
            </div>
            <CardTitle className="text-emerald-800">Soins Spécialisés</CardTitle>
            <div className="text-2xl font-bold text-emerald-600">$16.99/h</div>
          </CardHeader>
          <CardContent>
            <ul className="text-gray-600 space-y-2">
              <li>• Activités physiques adaptées</li>
              <li>• Animation, loisirs</li>
              <li>• Activités pour personnes alitées</li>
              <li>• Accompagnement spécifique</li>
              <li>• Aide administrative</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <div className="bg-emerald-600 text-white p-6 rounded-2xl inline-block">
          <Clock className="h-8 w-8 mx-auto mb-2" />
          <p className="text-2xl font-bold">Service 24h/7</p>
          <p className="text-emerald-100">Disponible quand vous en avez besoin</p>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;