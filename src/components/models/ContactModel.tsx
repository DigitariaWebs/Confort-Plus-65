"use client"

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MessageSquare, CheckCircle2, Briefcase, Award, Upload, Handshake, X, AlertCircle } from 'lucide-react';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType: 'consultation' | 'service' | 'job' | 'partnership';
  serviceName?: string;
}

const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose, formType, serviceName }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [apiError, setApiError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setFileName('');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsLoading(false);
        setErrors({});
        setApiError('');
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

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Veuillez entrer une adresse email valide';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le numéro de téléphone est requis';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Veuillez entrer un numéro de téléphone valide';
    }

    // Message is completely optional - no validation required

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError('');
    
    // Validate form first
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      console.log('Submitting form data:', { ...formData, formType, serviceName });
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType,
          serviceName,
          fileName: fileName || undefined,
        }),
      });

      const result = await response.json();
      console.log('API Response:', result);

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Error submitting form:', result);
        setApiError(result.error || 'Erreur lors de l\'envoi du formulaire. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setApiError('Erreur de connexion. Vérifiez votre connexion internet et réessayez.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear API error when user makes changes
    if (apiError) {
      setApiError('');
    }
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
              subtitle: 'Nous sommes ravis de l\'intérêt que vous portez à Confort Plus 65.',
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
            {/* Left Column */}
            <div className="hidden md:flex flex-col justify-between p-10 bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
               <div>
                  <button 
                    onClick={onClose}
                    className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm hover:bg-white/30 transition-colors duration-200 cursor-pointer"
                  >
                    {currentContent.icon}
                  </button>
                  <h2 className="text-3xl font-bold">{currentContent.title}</h2>
                  <p className="mt-2 opacity-80">{currentContent.subtitle}</p>
              </div>
               <div className="text-sm opacity-70">© {new Date().getFullYear()} Confort Plus 65.</div>
            </div>

            {/* Right Column */}
            <div className="p-10 min-h-[550px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="thankyou"
                    className="flex flex-col items-center justify-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1, rotate: 360 }} transition={{ type: 'spring', stiffness: 300, damping: 15 }}>
                      <CheckCircle2 className="w-20 h-20 text-emerald-500" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-gray-800 mt-5">Demande envoyée !</h2>
                    <p className="text-gray-500 mt-2">Merci. Nous reviendrons vers vous très prochainement.</p>
                    <button onClick={onClose} className="mt-6 bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold">Fermer</button>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="text-left mb-8">
                      <h2 className="text-3xl font-bold text-gray-800">{currentContent.formTitle}</h2>
                      <p className="text-gray-500 mt-1">{currentContent.formSubtitle}</p>
                    </div>
                    <motion.form onSubmit={handleSubmit} className="space-y-4" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 }}}}>
                      {/* API Error Display */}
                      {apiError && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600"
                        >
                          <AlertCircle className="w-5 h-5" />
                          <span className="text-sm">{apiError}</span>
                        </motion.div>
                      )}
                      
                      <motion.div variants={{hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 }}} className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                          type="text" 
                          name="name"
                          placeholder="Nom complet" 
                          required 
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:bg-gray-50 transition-all ${
                            errors.name 
                              ? 'border-red-300 focus:ring-red-400 focus:border-red-400' 
                              : 'border-gray-200 focus:ring-emerald-400 focus:border-emerald-400'
                          }`}
                        />
                      </motion.div>
                      
                      <motion.div variants={{hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 }}} className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                          type="email" 
                          name="email"
                          placeholder="Adresse email" 
                          required 
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:bg-gray-50 transition-all ${
                            errors.email 
                              ? 'border-red-300 focus:ring-red-400 focus:border-red-400' 
                              : 'border-gray-200 focus:ring-emerald-400 focus:border-emerald-400'
                          }`}
                        />
                      </motion.div>
                      
                      <motion.div variants={{hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 }}} className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                          type="tel" 
                          name="phone"
                          placeholder="Numéro de téléphone" 
                          required 
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:bg-gray-50 transition-all ${
                            errors.phone 
                              ? 'border-red-300 focus:ring-red-400 focus:border-red-400' 
                              : 'border-gray-200 focus:ring-emerald-400 focus:border-emerald-400'
                          }`}
                        />
                      </motion.div>
                      
                      {formType === 'job' && (
                        <motion.div variants={{hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 }}} className="relative">
                          <label htmlFor="resume-upload" className="w-full flex items-center px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 transition-all">
                            <Upload className="w-5 h-5 text-gray-400 mr-3" />
                            <span className={`truncate ${fileName ? 'text-gray-800' : 'text-gray-500'}`}>
                              {fileName || 'Télécharger votre CV'}
                            </span>
                          </label>
                          <input id="resume-upload" type="file" onChange={handleFileChange} className="hidden" accept=".pdf,.doc,.docx" />
                        </motion.div>
                      )}
                      
                      <motion.div variants={{hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 }}} className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                        <textarea 
                          name="message"
                          placeholder={formType === 'partnership' ? "Décrivez votre organisation et votre proposition..." : "Votre message ou lettre de motivation..."} 
                          rows={formType === 'job' ? 3 : 4} 
                          value={formData.message}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:bg-gray-50 transition-all ${
                            errors.message 
                              ? 'border-red-300 focus:ring-red-400 focus:border-red-400' 
                              : 'border-gray-200 focus:ring-emerald-400 focus:border-emerald-400'
                          }`}
                        ></textarea>
                      </motion.div>
                      <motion.div variants={{hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 }}} className="pt-2">
                        <motion.button 
                          type="submit" 
                          disabled={isLoading}
                          whileHover={{ scale: 1.05, y: -2 }} 
                          whileTap={{ scale: 0.98, y: 0 }} 
                          className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-4 rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isLoading ? 'Envoi en cours...' : 'Envoyer'}
                        </motion.button>
                      </motion.div>
                    </motion.form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormModal;