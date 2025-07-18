import { Heart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => (
  <header className="bg-white shadow-sm border-b fixed top-0 left-0 w-full z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <a href="#" className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-emerald-600" fill="#059669" />
          <span className="text-2xl font-bold text-gray-900">Confort Plus 65</span>
        </a>
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Accueil</a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">À propos</a>
            <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
          </nav>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Phone className="h-4 w-4 mr-2" />
            Call Now
          </Button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
