"use client"

import { Brain, Heart, Users, Eye, Shield, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import FormModal from "../models/ContactModel";

const CognitiveSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const communicationTips = [
    {
      icon: Eye,
      title: "Établir le Contact",
      description: "Approchez-vous par-devant, établissez un contact visuel et touchez doucement"
    },
    {
      icon: Heart,
      title: "Relation de Confiance",
      description: "Maintenez une relation chaleureuse - ils éprouvent encore des émotions"
    },
    {
      icon: Users,
      title: "Respecter la Dignité",
      description: "Votre proche reste un adulte, évitez de lui parler comme à un enfant"
    },
    {
      icon: Shield,
      title: "Maintenir l'Autonomie",
      description: "Laissez-le faire ce qu'il peut encore réaliser par lui-même"
    }
  ];

  const keyPrinciples = [
    "Votre proche possède une mémoire affective",
    "Il ressent votre état émotif (anxiété, joie, stress)",
    "Il désire communiquer même s'il s'exprime différemment",
    "Il a des périodes de lucidité malgré ses problèmes",
    "Évitez de parler comme s'il n'était pas là",
    "Les routines quotidiennes lui servent de repères"
  ];

  const emergencyNumbers = [
    { service: "Urgence", number: "911" },
    { service: "Info-santé", number: "811" },
    { service: "Ligne aide abus aînées", number: "1 888 489 2287" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
            <Brain className="h-10 w-10 text-emerald-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soutien pour les
            <span className="text-emerald-600 block">Difficultés Cognitives</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Accompagnement spécialisé pour les familles confrontées aux troubles cognitifs 
            comme Alzheimer, Parkinson et autres formes de démence.
          </p>
        </div>

        {/* What are Cognitive Difficulties */}
        <div className="mb-16">
          <Card className="border-2 border-emerald-200 bg-gradient-to-br from-white to-emerald-50 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-emerald-100 to-teal-100 pb-6">
              <CardTitle className="text-2xl text-emerald-800 text-center">
                Qu&apos;est-ce que les Difficultés Cognitives ?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                Les fonctions cognitives incluent le langage, la mémoire, le raisonnement, la coordination, 
                les reconnaissances et les fonctions exécutives. Dans certaines pathologies liées au vieillissement, 
                ces fonctions sont progressivement altérées, nécessitant une approche de communication adaptée.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Communication Tips Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Les Clés de la Communication
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communicationTips.map((tip, index) => {
              const IconComponent = tip.icon;
              const gradients = [
                "from-emerald-100 to-teal-100",
                "from-teal-100 to-cyan-100", 
                "from-cyan-100 to-emerald-100",
                "from-emerald-100 to-green-100"
              ];
              return (
                <Card key={index} className="border-2 border-emerald-200 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-emerald-50 hover:from-emerald-50 hover:to-teal-50">
                  <CardHeader className="text-center pb-4">
                    <div className={`bg-gradient-to-br ${gradients[index % gradients.length]} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-emerald-700" />
                    </div>
                    <CardTitle className="text-emerald-800 text-lg">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                      {tip.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Key Principles */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Points Importants à Retenir
              </h3>
              <div className="space-y-4">
                {keyPrinciples.map((principle, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full p-2 mr-4 mt-1 flex-shrink-0 shadow-md">
                      <Heart className="h-4 w-4 text-emerald-700" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-8 shadow-xl border-2 border-emerald-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Conseils Pratiques
              </h4>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-4 shadow-md">
                  <p className="text-gray-700 text-sm">
                    <strong>Avant de parler :</strong> Manifestez votre présence, éliminez les bruits inutiles, 
                    placez-vous face à lui à sa hauteur.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-4 shadow-md">
                  <p className="text-gray-700 text-sm">
                    <strong>Pendant la conversation :</strong> Maintenez la cohérence, ajustez vos attentes 
                    à ses capacités, évitez toute obstination.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-emerald-50 rounded-2xl p-4 shadow-md">
                  <p className="text-gray-700 text-sm">
                    <strong>Cherchez le sens :</strong> Ses comportements traduisent ses émotions et besoins, 
                    pas de la manipulation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Numbers */}
        <div className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-8 shadow-xl border-2 border-emerald-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Numéros Utiles
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {emergencyNumbers.map((contact, index) => (
              <div 
                key={index} 
                className="text-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 cursor-pointer hover:from-emerald-100 hover:to-teal-100 transition-all duration-300 hover:shadow-xl hover:scale-105 border border-emerald-100"
                onClick={() => window.open(`tel:${contact.number}`, '_self')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    window.open(`tel:${contact.number}`, '_self');
                  }
                }}
              >
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{contact.service}</h4>
                <p className="text-emerald-600 font-semibold text-lg">{contact.number}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-4 rounded-2xl"
              onClick={openModal}
            >
              <Phone className="h-6 w-6 mr-3" />
              Besoin d&apos;aide ? Contactez-nous
            </Button>
          </div>
        </div>
      </div>
      
      {/* Contact Modal */}
      <FormModal
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default CognitiveSection; 