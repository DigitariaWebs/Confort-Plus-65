"use client"

import { Heart, Shield, BadgeCheck, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import FormModal from "../models/ContactModel";
import Image from "next/image";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [videoLoaded, setVideoLoaded] = useState(false);
  // const [videoError, setVideoError] = useState(false);
  // const videoRef = useRef<HTMLVideoElement>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const handleVideoLoad = () => {
  //   setVideoLoaded(true);
  //   setVideoError(false);
  // };

  // const handleVideoError = () => {
  //   setVideoError(true);
  //   setVideoLoaded(false);
  // };

  return (
  <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-30 min-h-[700px]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-emerald-600 font-medium mb-2">
            Avec vous depuis 2013. Merci pour la confiance!
          </p>
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 my-4">
            Services d’aide pour les personnes <br className="hidden lg:block"/>
            <span className="text-emerald-600">âgées de 65 ans et plus</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Spécialisés dans les services d’aide pour les personnes âgées de 65 ans et plus, nous offrons un accompagnement personnalisé et professionnel pour préserver leur autonomie et leur bien-être au quotidien. Que ce soit à domicile, en résidence ou en CHSLD, notre équipe dévouée s&apos;engage à leur apporter réconfort, sécurité et qualité de vie. Confort Plus 65, des services d’aide qui font la différence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg h-14 px-8 cursor-pointer" onClick={openModal}>
              <Heart className="h-6 w-6 mr-3" />
              Commencez dès aujourd&apos;hui
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
          {/* {!videoError && isClient ? (
            <>
              {!videoLoaded && (
                <div className="absolute inset-0 bg-gray-200 rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="animate-pulse text-gray-500">Loading video...</div>
                </div>
              )}
              
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className={`rounded-2xl shadow-2xl w-full h-auto transition-opacity duration-500 ${
                  videoLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ maxHeight: '500px', objectFit: 'cover' }}
                onLoadedData={handleVideoLoad}
                onError={handleVideoError}
                onCanPlay={handleVideoLoad}
                poster="/Hero.jpg"
              >
                <source src="https://videos.pexels.com/video-files/7517068/uhd_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </>
          ) : (
            <div className="bg-gray-200 rounded-2xl shadow-2xl flex items-center justify-center" style={{ height: '500px' }}>
              <div className="text-gray-500">
                {videoError ? 'Video unavailable' : 'Loading...'}
              </div>
            </div>
          )} */}
          <Image
            src="/Hero.png"
            alt="Soignant compatissant aidant une personne âgée"
            width={600}
            height={500}
            className="rounded-2xl shadow-2xl w-full h-90"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
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
    />
  </section>
);
};

export default HeroSection;
