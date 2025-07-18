"use client"

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MessageSquare, CheckCircle2, Home, Briefcase, Award, Upload, Handshake, X } from 'lucide-react';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType: 'consultation' | 'service' | 'job' | 'partnership';
  serviceName?: string;
}

const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose, formType, serviceName }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setFileName('');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Add ESC key listener
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
  };

  const titles = {
    consultation: {
      icon: <X className="w-8 h-8 text-white" />,
      title: 'Parlons de vos besoins',
      subtitle: 'Un membre de notre équipe vous contactera.',
      formTitle: 'Consultation gratuite',
      formSubtitle: 'Prenons contact.'
    },
    service: {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: 'Planifions votre service',
      subtitle: 'Nous confirmerons les détails avec vous rapidement.',
      formTitle: `Planifier : ${serviceName}`,
      formSubtitle: 'Organisons cela ensemble.'
    },
    job: {
      icon: <Award className="w-8 h-8 text-white" />,
      title: 'Rejoignez notre équipe',
      subtitle: 'Nous sommes ravis de l\'intérêt que vous portez à Confort Plus65.',
      formTitle: 'Postuler maintenant',
      formSubtitle: 'Faites le premier pas vers une carrière enrichissante.'
    },
    partnership: {
      icon: <Handshake className="w-8 h-8 text-white" />,
      title: 'Devenons partenaires',
      subtitle: 'Collaborons pour offrir le meilleur service possible.',
      formTitle: 'Demande de partenariat',
      formSubtitle: 'Ensemble, nous sommes plus forts.'
    }
  };

  const currentContent = titles[formType];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
            initial={{ y: -50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Left Column - Form */}
            <div className="p-10 min-h-[600px] flex flex-col justify-center order-1">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <div
                    key="thankyou"
                    className="flex flex-col items-center justify-center text-center"
                  >
                    <div>
                      <CheckCircle2 className="w-20 h-20 text-emerald-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mt-5">Candidature envoyée !</h2>
                    <p className="text-gray-500 mt-2">Merci pour votre intérêt. Notre équipe RH examinera votre candidature et vous contactera prochainement.</p>
                    <button onClick={onClose} className="mt-6 bg-emerald-100 text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-200 transition-colors">Fermer</button>
                  </div>
                ) : (
                  <div key="form">
                    <div className="text-left mb-8">
                      <h2 className="text-3xl font-bold text-gray-800">{currentContent.formTitle}</h2>
                      <p className="text-gray-500 mt-1">{currentContent.formSubtitle}</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input type="text" placeholder="Prénom" required className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 focus:bg-gray-50 transition-all" />
                        </div>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input type="text" placeholder="Nom de famille" required className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 focus:bg-gray-50 transition-all" />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="email" placeholder="Adresse email" required className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 focus:bg-gray-50 transition-all" />
                      </div>
                      
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="tel" placeholder="Numéro de téléphone" required className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 focus:bg-gray-50 transition-all" />
                      </div>

                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 focus:bg-gray-50 transition-all appearance-none">
                          <option value="">Sélectionnez un poste</option>
                          <option value="aide-soignant">Aide-soignant(e)</option>
                          <option value="infirmier">Infirmier(ère)</option>
                          <option value="accompagnateur">Accompagnateur(trice)</option>
                          <option value="auxiliaire-vie">Auxiliaire de vie</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                      
                      <div className="relative">
                        <label htmlFor="resume-upload" className="w-full flex items-center px-4 py-4 bg-emerald-50 border-2 border-emerald-200 rounded-lg cursor-pointer hover:bg-emerald-100 transition-all group">
                          <Upload className="w-6 h-6 text-emerald-500 mr-4" />
                          <div className="flex-1">
                            <span className={`block font-medium ${fileName ? 'text-emerald-700' : 'text-emerald-600'}`}>
                              {fileName || 'Télécharger votre CV'}
                            </span>
                            <span className="text-sm text-emerald-500">PDF, DOC, DOCX (max 5MB)</span>
                          </div>
                          {fileName && (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          )}
                        </label>
                        <input id="resume-upload" type="file" onChange={handleFileChange} className="hidden" accept=".pdf,.doc,.docx" />
                      </div>
                      
                      <div className="pt-2">
                        <button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
                        >
                          Postuler maintenant
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column - Info Panel */}
            <div className="hidden md:flex flex-col justify-between p-10 bg-gradient-to-br from-emerald-500 to-teal-600 text-white order-2">
               <div>
                  <button 
                    onClick={onClose}
                    className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm hover:bg-white/30 transition-colors duration-200 cursor-pointer ml-auto"
                  >
                    <X className="w-8 h-8 text-white" />
                  </button>
                  <h2 className="text-3xl font-bold">{currentContent.title}</h2>
                  <p className="mt-2 opacity-80">{currentContent.subtitle}</p>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5" />
                      <span className="text-sm">Opportunités de carrière</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Briefcase className="w-5 h-5" />
                      <span className="text-sm">Environnement bienveillant</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Home className="w-5 h-5" />
                      <span className="text-sm">Travail flexible</span>
                    </div>
                  </div>
              </div>
               <div className="text-sm opacity-70">© {new Date().getFullYear()} Confort Plus65.</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormModal;