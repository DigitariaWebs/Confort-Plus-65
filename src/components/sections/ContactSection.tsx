"use client"

import { Phone, Printer, Mail, MapPin, Globe, Users } from "lucide-react";
import { useState } from "react";
import FormModal from "../models/ContactModel";

export const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'consultation' | 'service' | 'job' | 'partnership'>('consultation');

  const openModal = (type: 'consultation' | 'service' | 'job' | 'partnership') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section id="contact" className="py-32 bg-white">
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
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Téléphone</h4>
                    <a href="tel:5142228271" className="text-gray-600 hover:text-emerald-600 transition-colors">
                      514 222 8271
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                  <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center">
                    <Printer className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fax</h4>
                    <p className="text-gray-600">514 222-8271</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                  <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:confortplus65@gmail.com" className="text-gray-600 hover:text-emerald-600 transition-colors">
                      confortplus65@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Adresse</h4>
                    <p className="text-gray-600">
                      3242, Avenue Gonthier.Suite A<br />
                      Montréal.Qc. H1L 6J9
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Site web</h4>
                    <a href="https://www.confort-plus65.com" className="text-gray-600 hover:text-emerald-600 transition-colors">
                      www.confort-plus65.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 text-white text-center shadow-xl">
              <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-3xl font-bold mb-8">Consultation gratuite</h3>
              <p className="text-xl mb-8 opacity-90">
                Contactez-nous aujourd'hui pour une évaluation personnalisée de vos besoins. Notre équipe vous accompagnera dans la mise en place des services adaptés.
              </p>
              
              <div className="flex flex-col gap-6">
                <button 
                  onClick={() => openModal('consultation')}
                  className="bg-white text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 border-2 border-transparent hover:border-emerald-200 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  Demander une consultation
                </button>
                
                <a
                  href="tel:5142228271"
                  className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <FormModal
          isOpen={isModalOpen}
          onClose={closeModal}
          formType={modalType}
        />
      </div>
    </section>
  );
};

export default ContactSection;
