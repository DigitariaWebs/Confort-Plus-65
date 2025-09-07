"use client"

import { Phone, Smartphone, Mail, MapPin, Users } from "lucide-react";
import { useState } from "react";
import FormModal from "../models/ContactModel";

export const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-br from-white to-emerald-50"
    >
      <div className="w-full px-6 lg:px-16 xl:px-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Contactez-nous
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Prêt à commencer ? Contactez-nous pour une consultation gratuite
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Informations de contact
              </h3>

              <div className="space-y-6">
                <a href="tel:5142228271" className="block group">
                  <div className="flex items-center space-x-4 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 p-3 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center shadow-md">
                      <Smartphone className="w-6 h-6 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Téléphone</h4>
                      <p className="text-gray-600 group-hover:text-emerald-600 transition-colors">
                        514 222 8271
                      </p>
                    </div>
                  </div>
                </a>

                <a href="tel:5142228271" className="block group">
                  <div className="flex items-center space-x-4 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 p-3 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center shadow-md">
                      <Phone className="w-6 h-6 text-teal-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fax</h4>
                      <p className="text-gray-600 group-hover:text-emerald-600 transition-colors">
                        514 222 8271
                      </p>
                    </div>
                  </div>
                </a>

                <a href="mailto:info@confortplus65.com" className="block group">
                  <div className="flex items-center space-x-4 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-emerald-50 p-3 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-emerald-100 rounded-2xl flex items-center justify-center shadow-md">
                      <Mail className="w-6 h-6 text-cyan-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600 group-hover:text-emerald-600 transition-colors">
                        info@confortplus65.com
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=204%20rue%20Saint-Sacrement%20300%20Montréal%20QC%20H2Y%201W8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="flex items-center space-x-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-emerald-50 p-3 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl flex items-center justify-center shadow-md">
                      <MapPin className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Adresse</h4>
                      <p className="text-gray-600 group-hover:text-emerald-600 transition-colors">
                        204, rue Saint-Sacrement, 300
                        <br />
                        Montréal, QC H2Y 1W8
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 text-white text-center shadow-xl">
              <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-3xl font-bold mb-8">Consultation gratuite</h3>
              <p className="text-xl mb-8 opacity-90">
                Contactez-nous aujourd&apos;hui pour une évaluation
                personnalisée de vos besoins. Notre équipe vous accompagnera
                dans la mise en place des services adaptés.
              </p>

              <div className="flex flex-col gap-6">
                <button
                  onClick={openModal}
                  className="bg-white text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 border-2 border-transparent hover:border-emerald-200 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  Demander une consultation
                </button>

                <a
                  href="tel:5142228271"
                  className="border-2 border-white text-white bg-white/10 hover:bg-white/80 hover:text-emerald-600 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </div>

        <FormModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
};

export default ContactSection;
