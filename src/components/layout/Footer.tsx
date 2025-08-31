import { Phone, Mail } from "lucide-react";
import Image from "next/image";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <Image
              src="/Logo.png"
              alt="Confort Plus 65 Logo"
              width={100}
              height={100}
              quality={100}
              className="h-14 w-14 object-contain"
            />
            <span className="text-2xl font-bold">Confort Plus 65</span>
          </div>
          <p className="text-gray-400 mb-4">
            Services d’aide pour les personnes âgées de 65 ans et plus
          </p>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2 text-gray-400">
              <Phone className="h-4 w-4" />
              <span>514 222 8271</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="h-4 w-4" />
              <span>info@confortplus65.com</span>
            </div>
          </div>
          <p className="text-gray-400 mt-4">
            Desservant la grande région de Montréal
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Activités de la Vie Quotidienne (AVQ)</li>
            <li>Activités de la Vie Domestique (AVD)</li>
            <li>Accompagnement personnalisé</li>
            <li>Répit aux aidants</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Entreprise</h3>
          <ul className="space-y-2 text-gray-400">
            <li>À propos de nous</li>
            <li>Carrières</li>
            <li>Contact</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Confort Plus 65. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
);

export default Footer;