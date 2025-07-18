"use client"

import Image from "next/image";
import { Heart, Shield, BadgeCheck, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import FormModal from "../models/ContactModel";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
  <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-30 min-h-[700px]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
            Des soins qui font <br className="hidden lg:block"/>
            <span className="text-emerald-600">Une Vraie Différence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Spécialisé dans les soins personnalisés et les services pour les personnes âgées de 65 ans et plus. Nous aidons les seniors
            à maintenir leur indépendance et leur bien-être dans le comfort de leur propre maison.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg h-14 px-8" onClick={openModal}>
              <Heart className="h-6 w-6 mr-3" />
              Commencez dès aujourd'hui
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent text-lg h-14 px-8"
              asChild
            >
              <a href="tel:5142228271">
                <Phone className="h-6 w-6 mr-3" />
                Appelez le 514 222 8271
              </a>
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center">
              <BadgeCheck className="h-5 w-5 text-emerald-600 mr-2"/>
              <span className="text-gray-700">Professionnels Agréés</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-emerald-600 mr-2"/>
              <span className="text-gray-700">Disponibilité 24/7</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/Hero.jpg"
            alt="Soignant compatissant aidant une femme âgée à marcher chez elle"
            width={600}
            height={500}
            className="rounded-2xl shadow-2xl"
            priority
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-100 p-2 rounded-full">
                <Shield className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Soins de Confiance</p>
                <p className="text-sm text-gray-600">Professionnel & Fiable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FormModal
      isOpen={isModalOpen}
      onClose={closeModal}
      formType="consultation"
    />
  </section>
);
};

export default HeroSection;
