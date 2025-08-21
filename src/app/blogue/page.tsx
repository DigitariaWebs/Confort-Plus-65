"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Brain, Heart, Phone, Contact, CheckCircle, AlertCircle, Info, ArrowRight, Users } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import FormModal from "@/components/models/ContactModel";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Votre choix c&apos;est de rester dans le{" "}
                <span className="text-emerald-600">confort de votre foyer</span>
                ?
              </h1>
              <p className="text-3xl lg:text-4xl text-gray-600 max-w-3xl mx-auto mb-8">
                On peut vous aider!
              </p>
              <div className="text-2xl font-semibold text-emerald-700 mb-8">
                Confort Plus 65 des soins qui font la différence, une présence
                qui compte.
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="text-emerald-600 font-semibold mb-2">
                  La personne âgée
                </div>
                <p className="text-gray-600">
                  Ses besoins, ses valeurs, son confort, le respect de sa dignité, C'est notre priorité
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="text-emerald-600 font-semibold mb-2">
                  Des soins et services
                </div>
                <p className="text-gray-600">
                  De qualité et adaptés aux besoins spécifiques
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="text-emerald-600 font-semibold mb-2">
                  Accessibilité
                </div>
                <p className="text-gray-600">
                  Services accessibles et abordables
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="text-emerald-600 font-semibold mb-2">
                  À domicile
                </div>
                <p className="text-gray-600">Dans le confort de votre foyer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section - Cognitive Functions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Main Content */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Comprendre les fonctions cognitives
                  </h2>
                  <div className="prose prose-emerald max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      Le terme cognitif renvoie à l&apos;ensemble des processus
                      psychiques liés à l&apos;esprit. Ainsi le langage, la
                      mémoire, le raisonnement, la coordination des mouvements
                      (praxies), les reconnaissances (gnosies), les fonctions
                      exécutives regroupant le raisonnement, le jugement, la
                      planification, l&apos;organisation et les fonctions de
                      perception sont des fonctions cognitives. Ce sont des
                      fonctions orchestrées par le cerveau.
                    </p>
                    <p className="text-gray-600 mt-4">
                      Dans certaines pathologies liées au vieillissement
                      (Alzheimer, Parkinson, démence...) les fonctions
                      cognitives sont progressivement altérées.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Communication et troubles cognitifs
                  </h3>
                  <div className="bg-emerald-50 rounded-3xl p-8 mb-8">
                    <p className="text-gray-700 mb-6">
                      Si votre proche souffre de troubles cognitifs la
                      communication avec lui ne peut pas s&apos;établir de la
                      même façon qu&apos;avant, il faut savoir que malgré ses
                      problèmes cognitifs :
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <ArrowRight className="h-6 w-6 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          Votre proche possède une mémoire affective, il peut se
                          souvenir de l&apos;émotion vécue sans se souvenir de
                          l&apos;événement ayant provoqué cette émotion.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-6 w-6 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          Votre proche ressent votre état émotif et peut
                          percevoir votre anxiété, agitation, stress, tristesse,
                          mais aussi votre bonne humeur et votre joie.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-6 w-6 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          Votre proche désire communiquer même s&apos;il en est
                          incapable de la même façon qu&apos;avant.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-6 w-6 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          Votre proche est un adulte. Il est plus respectueux de
                          ne pas s&apos;adresser à lui comme à un enfant.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column - Tips and Keys */}
              <div className="space-y-12">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Les 6 clés de la communication
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <h4 className="font-semibold text-emerald-700 mb-2">
                        1. Établir une relation de confiance
                      </h4>
                      <p className="text-gray-600">
                        Maintenir une relation chaleureuse inspirant la
                        confiance.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <h4 className="font-semibold text-emerald-700 mb-2">
                        2. Comprendre les effets de la maladie
                      </h4>
                      <p className="text-gray-600">
                        Accepter la perte progressive des notions et des
                        repères.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <h4 className="font-semibold text-emerald-700 mb-2">
                        3. Interpréter les comportements
                      </h4>
                      <p className="text-gray-600">
                        Comprendre que les comportements traduisent des émotions
                        et des besoins.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <h4 className="font-semibold text-emerald-700 mb-2">
                        4. Maintenir la cohérence
                      </h4>
                      <p className="text-gray-600">
                        Établir des routines et maintenir un environnement
                        stable.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <h4 className="font-semibold text-emerald-700 mb-2">
                        5. Adapter les attentes
                      </h4>
                      <p className="text-gray-600">
                        Ajuster les attentes aux capacités actuelles.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <h4 className="font-semibold text-emerald-700 mb-2">
                        6. Encourager l&apos;autonomie
                      </h4>
                      <p className="text-gray-600">
                        Permettre de maintenir les activités encore possibles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Numbers Section */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-rose-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                <AlertCircle className="h-8 w-8 text-red-600 mr-3" />
                Numéros utiles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des ressources importantes à portée de main pour votre sécurité
                et votre bien-être
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-red-100 hover:border-red-200">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 ml-3">Urgence</h3>
                </div>
                <a
                  href="tel:911"
                  className="flex items-center justify-between group"
                >
                  <span className="text-2xl font-bold text-red-600 group-hover:text-red-700 transition-colors">
                    911
                  </span>
                  <Phone className="h-5 w-5 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-emerald-100 hover:border-emerald-200">
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Info className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 ml-3">Info-santé</h3>
                </div>
                <a
                  href="tel:811"
                  className="flex items-center justify-between group"
                >
                  <span className="text-2xl font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors">
                    811
                  </span>
                  <Phone className="h-5 w-5 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Info className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 ml-3">
                    Régie du rente
                  </h3>
                </div>
                <div className="space-y-1">
                  <a
                    href="tel:5148732433"
                    className="flex items-center justify-between group"
                  >
                    <span className="text-lg font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                      514 873-2433
                    </span>
                    <Phone className="h-5 w-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="tel:18004635185"
                    className="flex items-center justify-between group"
                  >
                    <span className="text-lg font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                      1 800 463-5185
                    </span>
                    <Phone className="h-5 w-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 ml-3">
                    Centre antipoison
                  </h3>
                </div>
                <a
                  href="tel:18004635060"
                  className="flex items-center justify-between group"
                >
                  <span className="text-lg font-bold text-purple-600 group-hover:text-purple-700 transition-colors">
                    1 800 463-5060
                  </span>
                  <Phone className="h-5 w-5 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 ml-3">
                    Ligne aide abus aînées
                  </h3>
                </div>
                <div className="space-y-2">
                  <a
                    href="tel:18884892287"
                    className="flex items-center justify-between group"
                  >
                    <span className="text-lg font-bold text-orange-600 group-hover:text-orange-700 transition-colors">
                      1 888 489-2287
                    </span>
                    <Phone className="h-5 w-5 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <Link
                    href="http://www.aideabusaines.ca"
                    className="text-orange-600 text-sm hover:underline block mt-1"
                  >
                    www.aideabusaines.ca
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Besoin d&apos;aide ou de conseils ?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Notre équipe est là pour vous accompagner et répondre à toutes vos
              questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4 rounded-2xl bg-white text-emerald-600 hover:bg-emerald-50 hover:text-black shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="tel:5142228271">
                  <Phone className="h-6 w-6 mr-3" />
                  Appelez maintenant
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 rounded-2xl border-2 border-white text-white hover:bg-white hover:text-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Contact className="h-6 w-6 mr-3" />
                Nous contacter
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const communicationKeys = [
    {
      title: "Établir une relation de confiance",
      description: "Mon proche continue à éprouver des émotions même s'il ne les exprime plus comme avant. Il faut donc que j'établisse avec lui une relation chaleureuse inspirant la confiance."
    },
    {
      title: "Me rappeler les effets de la maladie sur ses comportements",
      description: "Mon proche perd de plus en plus toutes sortes de notions : il oublie les normes, la bienséance, les façons d'agir, la fonction des objets, etc. Je ne dois pas montrer d'étonnement."
    },
    {
      title: "Chercher le sens de ses comportements",
      description: "Les comportements de mon proche traduisent ses émotions, ses besoins, ses tentatives d'adaptation avec les moyens dont il dispose. Ils ne sont pas le fruit de la manipulation ou de la malice : il faut éviter tout jugement négatif."
    },
    {
      title: "Maintenir la cohérence et la constance",
      description: "Comme il perd ses capacités d'adaptation, les routines quotidiennes servent de repères à mon proche. La cohérence entre mes paroles et mes gestes (faire ce que je dis et dire ce que je fais) ainsi que la constance dans l'environnement humain et physique sont essentielles."
    },
    {
      title: "Ajuster mes attentes aux capacités qui lui restent",
      description: "Pour que mon proche ne soit pas sans cesse confronté à l'échec et que je n'aille pas de déceptions en frustrations, je dois placer mes attentes au niveau de ce qu'il est en mesure de faire."
    },
    {
      title: "Maintenir son autonomie le plus longtemps possible",
      description: "Ses incapacités ne s'étendent pas d'un seul coup à tous les domaines d'activités. Je dois remarquer tout ce qu'il peut encore réaliser par lui-même et le laisser faire."
    }
  ];

  const attentionTips = [
    "Avant de lui adresser la parole, s'il ne me voit pas, je lui manifeste ma présence, soit en faisant un peu de bruit, soit en chantant. Il est toujours préférable de l'approcher par-devant… cela lui évite un sursaut.",
    "J'élimine les bruits inutiles comme la radio et le téléviseur avant d'engager la conversation avec mon proche… je capterai mieux son attention.",
    "Je bouge lentement et je me place face à lui. S'il est assis, je m'assois pour être à sa hauteur. J'établis un contact visuel et je le touche doucement… je ne devrais jamais engager une conversation dans un climat de précipitation."
  ];

  const importantPoints = [
    "Votre proche possède une mémoire affective, c'est-à-dire quil peut se souvenir de l'émotion vécue sans se souvenir de l'événement ayant provoqué cette émotion.",
    "Votre proche ressent votre état émotif. Vous pouvez donc lui communiquer, sans vous en rendre compte, votre anxiété, votre agitation, votre stress, votre tristesse. À linverse, vous pouvez aussi lui transmettre votre bonne humeur et votre joie.",
    "Votre proche désire communiquer même s'il en est incapable de la même façon qu'avant. S'il ne peut s'exprimer avec des mots, il le fait par ses comportements.",
    "Votre proche est un adulte. Il est plus respectueux de ne pas s'adresser à lui comme à un enfant.",
    "Votre proche a des périodes de lucidité malgré ses problèmes cognitifs. Vous devriez donc éviter de parler en sa présence comme s'il n'était pas là.",
    "Vous ne devriez pas essayer de raisonner votre proche parce qu'il n'est plus en mesure de le faire selon la logique commune. Il serait donc préférable d'éviter toute obstination."
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
                <Brain className="h-12 w-12 text-emerald-600" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Difficultés Cognitives
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Guide pour comprendre et communiquer avec les personnes atteintes de troubles cognitifs
              </p>
            </div>
          </div>
        </section>

        {/* Understanding Cognitive Functions */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Comprendre les Fonctions Cognitives
              </h2>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Le terme cognitif renvoie à l&apos;ensemble des processus psychiques liés à l&apos;esprit. Ainsi le langage, 
                la mémoire, le raisonnement, la coordination des mouvements (praxies), les reconnaissances (gnosies), 
                les fonctions exécutives regroupant le raisonnement, le jugement, la planification, l&apos;organisation et 
                les fonctions de perception sont des fonctions cognitives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ce sont des fonctions orchestrées par le cerveau. Dans certaines pathologies liées au vieillissement 
                (Alzheimer, Parkinson, démence...) les fonctions cognitives sont progressivement altérées.
              </p>
            </div>
          </div>
        </section>

        {/* Communication and Cognitive Disorders */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Communication et Troubles Cognitifs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Si votre proche souffre de troubles cognitifs la communication avec lui ne peut pas s&apos;établir de 
                la même façon qu&apos;avant, il faut savoir que malgré ses problèmes cognitifs :
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {importantPoints.map((point, index) => (
                <Card key={index} className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 bg-white hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Heart className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{point}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Attention Tips */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                             <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Des petits trucs pour capter l&apos;attention de mon proche
               </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {attentionTips.map((tip, index) => (
                <Card key={index} className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-xl">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-100 p-3 rounded-full mr-4">
                        <Users className="h-6 w-6 text-emerald-600" />
                      </div>
                      <CardTitle className="text-emerald-800">Conseil {index + 1}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{tip}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The 6 Keys of Communication */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Les 6 Clés de la Communication
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {communicationKeys.map((key, index) => (
                <Card key={index} className="border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 bg-white hover:shadow-xl">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-100 p-3 rounded-full mr-4">
                        <CheckCircle className="h-6 w-6 text-emerald-600" />
                      </div>
                      <CardTitle className="text-emerald-800 text-xl">{key.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{key.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Factors */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Facteurs Additionnels
              </h2>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                En plus des problèmes cognitifs qui peuvent perturber la communication de votre proche, sa 
                condition physique (vision, audition, effets secondaires des médicaments, constipation) et sa 
                condition psychologique (peur, anxiété, chagrin) peuvent rendre la communication plus ou moins facile.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Numbers */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
                <AlertCircle className="h-12 w-12 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Numéros Utiles
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-2 border-red-200 hover:border-red-300 transition-all duration-300 bg-white hover:shadow-xl">
                <CardHeader className="text-center">
                  <div className="bg-red-100 p-3 rounded-full mx-auto mb-4">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-red-800">Pour une urgence</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-red-600">911</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 bg-white hover:shadow-xl">
                <CardHeader className="text-center">
                  <div className="bg-blue-100 p-3 rounded-full mx-auto mb-4">
                    <Info className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-800">Info - santé et Info sociale</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-blue-600">811</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 hover:border-green-300 transition-all duration-300 bg-white hover:shadow-xl">
                <CardHeader className="text-center">
                  <div className="bg-green-100 p-3 rounded-full mx-auto mb-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-green-800">Régie du rente</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-bold text-green-600">Sans frais</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 bg-white hover:shadow-xl">
                <CardHeader className="text-center">
                  <div className="bg-purple-100 p-3 rounded-full mx-auto mb-4">
                    <AlertCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-purple-800">Centre antipoison</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-bold text-purple-600">1-800-463-5060</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                         <h2 className="text-4xl font-bold text-white mb-6">
               Besoin d&apos;aide supplémentaire ?
             </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Notre équipe est formée pour accompagner les personnes atteintes de troubles cognitifs et leurs familles. 
              Contactez-nous pour un soutien personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-4 rounded-2xl bg-white text-emerald-600 hover:bg-emerald-50 hover:text-black shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                asChild
              >
                <a href="tel:5142228271">
                  <Phone className="h-6 w-6 mr-3" />
                  Appelez maintenant
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 rounded-2xl border-2 border-white text-emerald-600 bg-white hover:bg-emerald-50 hover:text-black shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={openModal}
              >
                <Contact className="h-6 w-6 mr-3" />
                Demander un accompagnement
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Contact Modal */}
      <FormModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        formType="service"
        serviceName="Accompagnement Cognitif"
      />
      <Footer />
    </div>
  );
} 