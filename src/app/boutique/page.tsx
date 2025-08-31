"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, Heart, Shield, Truck, Gift, CheckCircle, Package, Clock, Award, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FormModal from "@/components/models/ContactModel";

export default function BoutiquePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const categories = [
    {
      name: "Sécurité & Mobilité",
      description: "Équipements pour la sécurité et l'autonomie à domicile",
      icon: Shield,
      productCount: 12
    },
    {
      name: "Bien-être & Confort",
      description: "Produits pour améliorer le confort quotidien",
      icon: Heart,
      productCount: 8
    },
    {
      name: "Activités & Stimulation",
      description: "Jeux et activités pour stimuler les capacités cognitives",
      icon: Star,
      productCount: 15
    },
    {
      name: "Soins Personnels",
      description: "Produits d'hygiène et de soins adaptés",
      icon: Gift,
      productCount: 10
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Bracelet d'Urgence Connecté",
      description: "Dispositif d'alerte 24/7 avec géolocalisation et détection de chute automatique",
      price: "89.99",
      originalPrice: "119.99",
      image: "/services/aide-a-la-marche-senior.jpg",
      rating: 4.8,
      reviews: 127,
      category: "Sécurité & Mobilité",
      features: [
        "Alerte automatique de chute",
        "Géolocalisation GPS",
        "Étanche IP67",
        "Autonomie 7 jours",
        "Support 24/7"
      ],
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Kit d'Exercices Adaptés Seniors",
      description: "Programme complet d'activités physiques douces avec guide vidéo personnalisé",
      price: "64.99",
      originalPrice: null,
      image: "/services/20240806_180705_0000.png",
      rating: 4.9,
      reviews: 89,
      category: "Activités & Stimulation",
      features: [
        "Exercices adaptés aux 65+",
        "Guide vidéo inclus",
        "Équipements de qualité",
        "Suivi de progression",
        "Support professionnel"
      ],
      badge: "Nouveau"
    },
    {
      id: 3,
      name: "Coussin de Soutien Ergonomique",
      description: "Coussin thérapeutique pour soulager les douleurs dorsales et améliorer la posture",
      price: "45.99",
      originalPrice: "59.99",
      image: "/services/soins-personnalises.jpg",
      rating: 4.7,
      reviews: 156,
      category: "Bien-être & Confort",
      features: [
        "Mousse à mémoire de forme",
        "Housse lavable",
        "Support lombaire optimal",
        "Portable et léger",
        "Garantie 2 ans"
      ],
      badge: "Promo"
    },
    {
      id: 4,
      name: "Jeux Cognitifs Numériques",
      description: "Tablette avec application dédiée pour stimuler la mémoire et les fonctions cognitives",
      price: "129.99",
      originalPrice: null,
      image: "/services/blog-banner-caregiver-help-2.jpg",
      rating: 4.6,
      reviews: 203,
      category: "Activités & Stimulation",
      features: [
        "Interface simplifiée",
        "Exercices personnalisés",
        "Suivi des progrès",
        "Multijoueur en ligne",
        "Support technique inclus"
      ],
      badge: null
    },
    {
      id: 5,
      name: "Trousse de Soins Premium",
      description: "Kit complet de soins personnels avec produits hypoallergéniques et accessoires",
      price: "39.99",
      originalPrice: "54.99",
      image: "/services/caregiver-embracing-senior-in-park-free-photo.jpg",
      rating: 4.8,
      reviews: 74,
      category: "Soins Personnels",
      features: [
        "Produits hypoallergéniques",
        "Accessoires ergonomiques",
        "Formules douces",
        "Emballage pratique",
        "Guide d'utilisation"
      ],
      badge: "Promo"
    },
    {
      id: 6,
      name: "Détecteur de Mouvement Intelligent",
      description: "Système de surveillance discrète pour détecter les activités inhabituelles",
      price: "199.99",
      originalPrice: null,
      image: "/services/carousel2.jpg",
      rating: 4.5,
      reviews: 91,
      category: "Sécurité & Mobilité",
      features: [
        "Détection intelligente",
        "Alertes personnalisables",
        "Installation facile",
        "Application mobile",
        "Respect de la vie privée"
      ],
      badge: "Tech"
    }
  ];

  const services = [
    {
      icon: Truck,
      title: "Livraison Gratuite",
      description: "Livraison gratuite pour toute commande de 75$ et plus"
    },
    {
      icon: Shield,
      title: "Garantie Qualité",
      description: "Produits testés et approuvés par nos professionnels"
    },
    {
      icon: Clock,
      title: "Support 24/7",
      description: "Assistance technique et conseil disponible en tout temps"
    },
    {
      icon: Award,
      title: "Installation Incluse",
      description: "Service d'installation professionnel pour les équipements"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-66 pb-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
              Produits Sélectionnés par nos Experts
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Boutique</span> Confort Plus 65
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Découvrez nos services et notre sélection des produits spécialement choisis pour améliorer la qualité de vie, la sécurité et le bien-être des personnes âgées de 65 ans et plus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg shadow-lg"
              >
                <Link href="#produits-vedettes">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Découvrir les produits
                </Link>
              </Button>
              <Button 
                onClick={openModal}
                variant="outline" 
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                Conseil personnalisé
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nos <span className="text-emerald-600">Catégories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorez nos gammes de produits spécialement sélectionnés pour répondre aux besoins des aînés
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="border-emerald-200 hover:border-emerald-300 transition-all duration-300 bg-white hover:shadow-xl text-center group cursor-pointer">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-emerald-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{category.name}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="bg-emerald-50 rounded-full px-4 py-2 text-emerald-700 font-semibold text-sm">
                      {category.productCount} produits
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="produits-vedettes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Produits <span className="text-emerald-600">Vedettes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre sélection de produits les plus populaires et recommandés par nos professionnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white overflow-hidden group">
                <div className="relative h-64">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${
                      product.badge === 'Bestseller' ? 'bg-yellow-500' :
                      product.badge === 'Nouveau' ? 'bg-green-500' :
                      product.badge === 'Promo' ? 'bg-red-500' :
                      'bg-blue-500'
                    }`}>
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-gray-600">
                    {product.category}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-emerald-600">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-semibold">
                        Économie ${(parseFloat(product.originalPrice) - parseFloat(product.price)).toFixed(2)}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Découvrir
                    </Button>
                    <Button 
                      onClick={openModal}
                      variant="outline" 
                      className="flex-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                    >
                      Info & Prix
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Package className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Bientôt Disponible
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Notre boutique en ligne complète avec commande et paiement sécurisé sera bientôt disponible. 
            En attendant, contactez-nous pour découvrir nos produits et bénéficier de conseils personnalisés.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Services Actuels Disponibles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Conseil personnalisé</h4>
                  <p className="text-gray-600">Nos experts vous aident à choisir les produits adaptés</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Démonstration à domicile</h4>
                  <p className="text-gray-600">Test des produits dans le confort de votre foyer</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Installation professionnelle</h4>
                  <p className="text-gray-600">Mise en place et formation par nos techniciens</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Support après-vente</h4>
                  <p className="text-gray-600">Assistance continue et maintenance incluse</p>
                </div>
              </div>
            </div>
          </div>

          <Button 
            onClick={openModal}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg shadow-lg"
          >
            <Phone className="h-5 w-5 mr-2" />
            Nous Contacter
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gift className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Restez Informé
          </h2>
          <p className="text-xl text-emerald-100 mb-12 leading-relaxed">
            Inscrivez-vous à notre newsletter pour être les premiers informés du lancement de notre boutique en ligne 
            et bénéficier d&apos;offres exclusives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              onClick={openModal}
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold shadow-lg flex-1"
            >
              S&apos;inscrire à la Newsletter
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Contact Modal */}
      <FormModal isOpen={isModalOpen} onClose={closeModal} formType="service" serviceName="Boutique - Conseil produits" />
    </div>
  );
}
