"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServicesDropdown = () => setIsServicesDropdownOpen(!isServicesDropdownOpen);

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150); // 150ms delay before closing
    setDropdownTimeout(timeout);
  };

  const menuItems = [
    { href: "/", label: "Accueil" },
    { href: "/#about", label: "À propos" },
    { 
      href: "/#services", 
      label: "Services",
      hasDropdown: true,
      dropdownItems: [
        { href: "/services/soins-personnalises", label: "Soins personnalisés" },
        { href: "/services/entretien-menager", label: "Entretien ménager" },
        { href: "/services/soins-specialises", label: "Soins Spécialisés" }
      ]
    },
    { href: "/#careers", label: "Carrières" },
    { href: "/cognitif", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-sm border-b fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <Image 
              src="/Logo.svg" 
              alt="Confort Plus 65 Logo" 
              width={32} 
              height={32} 
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              <span className="hidden sm:inline">Confort Plus 65</span>
              <span className="sm:hidden flex flex-col leading-tight">
                <span>Confort</span>
                <span>Plus 65</span>
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <nav className="flex space-x-6 xl:space-x-8">
              {menuItems.map((item) => (
                <div key={item.href} className="relative group">
                  {item.hasDropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href="/#services"
                        className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                      >
                        {item.label}
                        <ChevronDown className="h-4 w-4 ml-1" />
                      </Link>
                      {isServicesDropdownOpen && (
                        <div 
                          className="absolute top-full left-0 mt-0 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors text-sm"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile/Tablet Navigation */}
          <div className="lg:hidden flex items-center">
            {/* Menu button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="h-10 w-10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="py-4 space-y-3">
              {menuItems.map((item) => (
                <div key={item.href}>
                  {item.hasDropdown ? (
                    <div>
                      <div className="flex items-center">
                        <Link
                          href="/#services"
                          className="flex-1 px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 transition-colors font-medium rounded-md mx-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                        <button
                          className="px-2 py-2 text-gray-700 hover:text-emerald-600 transition-colors"
                          onClick={toggleServicesDropdown}
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      {isServicesDropdownOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-gray-50 transition-colors rounded-md mx-2 text-sm"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 transition-colors font-medium rounded-md mx-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
