"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, DollarSign, GraduationCap, Heart, Shield, Mail } from "lucide-react";
import { useState } from "react";
import FormModal from "../models/JobContactModel";

export const JobOpportunitySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const qualifications = [
    "Diplôme en Assistance à la personne à domicile (formation reconnue)",
    "Certification PDSB à jour",
    "RCR à jour",
    "Minimum 6 mois d'expérience dans un poste similaire"
  ];

  const requirements = [
    "Vérification des références professionnelles",
    "Vérification des antécédents judiciaires",
    "Minimum de disponibilité requis : Blocks de 4 heures par quart de travail"
  ];

  const idealCandidate = [
    "Vous êtes préposé(e) aux bénéficiaires, auxiliaire familiale",
    "Vous êtes patient(e), fiable, honnête et soucieux(se) du bien-être des personnes âgées",
    "Vous souhaitez travailler selon votre propre horaire",
    "Vous êtes la personne qu'il nous faut"
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-emerald-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="careers-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-emerald-600"/>
            </pattern>
            <rect width="100" height="100" fill="url(#careers-pattern)"/>
          </svg>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Offre d&apos;emploi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rejoignez Notre Équipe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confort Plus 65 se spécialise dans l&apos;offre de soins et de services destinés aux personnes âgées de 65 ans et plus, les aidant à demeurer dans le confort de leur domicile. Nous recherchons actuellement des préposés aux bénéficiaires pour renforcer notre équipe et offrir un soutien de qualité à notre précieuse clientèle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Card className="border-emerald-200 h-full bg-white/80 backdrop-blur-sm shadow-lg hover:border-emerald-400 transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Heart className="h-6 w-6 text-emerald-600" />
                  <CardTitle className="text-xl">Êtes-vous notre candidat(e) idéal(e) ?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {idealCandidate.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 hover:bg-emerald-50/50 p-2 rounded-lg transition-colors duration-200">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-semibold text-emerald-900 mt-6">
                  Si c&apos;est le cas, vous êtes la personne qu&apos;il nous faut !
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-emerald-200 h-full bg-white/80 backdrop-blur-sm shadow-lg hover:border-emerald-400 transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <GraduationCap className="h-6 w-6 text-emerald-600" />
                  <CardTitle className="text-xl">Qualifications Professionnelles</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {qualifications.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 hover:bg-emerald-50/50 p-2 rounded-lg transition-colors duration-200">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="border-emerald-200 text-center bg-white/80 backdrop-blur-sm shadow-lg hover:border-emerald-400 transition-colors duration-300">
            <CardHeader>
              <DollarSign className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Salaire</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 font-semibold">Supérieur à la moyenne</p>
                             <p className="text-md text-gray-600 mt-2">Nombre d&apos;heures : Selon disponibilité blocks de 4 heures</p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 text-center bg-white/80 backdrop-blur-sm shadow-lg hover:border-emerald-400 transition-colors duration-300">
            <CardHeader>
              <Clock className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Horaires</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 font-semibold">Selon disponibilité</p>
              <p className="text-md text-gray-600 mt-2">Blocks de 4 heures par quart de travail</p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 text-center bg-white/80 backdrop-blur-sm shadow-lg hover:border-emerald-400 transition-colors duration-300">
            <CardHeader>
              <Shield className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Exigences</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 font-semibold">Vérifications requises</p>
              <p className="text-md text-gray-600 mt-2">Références professionnelles obligatoires</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-emerald-200 bg-white/80 backdrop-blur-sm shadow-lg hover:border-emerald-400 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-xl text-center">Conditions Diverses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {requirements.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 hover:bg-emerald-50/50 p-3 rounded-lg transition-colors duration-200">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Cette offre vous intéresse ?
          </h3>
          <Button 
            size="lg" 
            className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={openModal}
          >
            <Mail className="h-5 w-5 mr-2" />
            Contactez-nous
          </Button>
        </div>
      </div>
      <FormModal
        isOpen={isModalOpen}
        onClose={closeModal}
        formType="job"
      />
    </section>
  );
};

export default JobOpportunitySection;