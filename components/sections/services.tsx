"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const services = [
  {
    title: "Histopathologie",
    description: "Large gamme de colorations spéciales pour une approche diagnostique complète.",
    image: "/images_defilement/2cfa7f09-071f-490b-b7e6-eea32fd60581.jpg",
  },
  {
    title: "Cytopathologie",
    description: "Analyse cellulaire précise pour le dépistage et le diagnostic précoce.",
    image: "/images_defilement/2e6f18d2-aa2c-463e-b074-3155174de2c8.jpg",
  },
  {
    title: "Immunohistochimie",
    description: "Large panel d'anticorps et biomarqueurs, utilisés de façon ciblée après étude du cas.",
    image: "/images_defilement/3b9c81cd-d1d4-4953-b0af-f7b18e766bbb.jpg",
  },
  {
    title: "Typage HPV",
    description: "Détection et typage du papillomavirus humain avec précision.",
    image: "/images_defilement/35e7ce6a-d694-4cc6-a0b7-84fba7ed75d4.jpg",
  },
  {
    title: "Pathologie moléculaire",
    description: "Analyses moléculaires avancées pour un diagnostic personnalisé.",
    image: "/images_defilement/36c9a97f-b5cf-489b-b177-6c9cc18fed13.jpg",
  },
  {
    title: "Circuit URGENT",
    description: "Prélèvements critiques traités avec délai priorisé selon indication.",
    image: "/images_defilement/17277272-d10e-4802-9c38-ee8e15c38d7d.jpg",
  },
  {
    title: "Matériel & techniques",
    description: "Plateau technique fiable et rassurant : automates, processeur, contrôle qualité.",
    image: "/images_defilement/a38c6ae9-cf35-4684-b2a6-c135b62a03d9.jpg",
  },
  {
    title: "Innovation & Suivi",
    description: "Intégration constante des dernières avancées technologiques pour vos diagnostics.",
    image: "/images_defilement/f8b77bfb-8822-4925-b0c0-eeb57135d5f4.jpg",
  },
  {
    title: "Rigueur Diagnostique",
    description: "Engagement total pour la précision de chaque lame analysée au microscope.",
    image: "/images_defilement/f503b57f-d339-4cd2-86ed-7d09124819c9.jpg",
  }
]

// Squelette pour vos futurs PDFs
const documents = [
  {
    title: "Livret d'accueil",
    category: "Information",
    description: "Consultez notre guide complet pour comprendre votre parcours de soin et nos engagements qualité.",
    image: "/images/pdf-placeholder-1.jpg" // À remplacer par l'image de la couverture du PDF
  },
  {
    title: "Manuel de prélèvements",
    category: "Technique",
    description: "Toutes les recommandations pré-analytiques destinées aux professionnels de santé.",
    image: "/images/pdf-placeholder-2.jpg"
  },
  {
    title: "Accréditation COFRAC",
    category: "Qualité",
    description: "Portée d'accréditation et certificats de conformité de notre plateau technique.",
    image: "/images/pdf-placeholder-3.jpg"
  }
]

export function ServicesSection() {
  const [index, setIndex] = useState(0)
  const [docIndex, setDocIndex] = useState(0)

  // Changement automatique pour les services (5s)
  useEffect(() => {
    const srvTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length)
    }, 5000)
    return () => clearInterval(srvTimer)
  }, [])

  // Changement automatique pour les documents (6s)
  useEffect(() => {
    const docTimer = setInterval(() => {
      setDocIndex((prev) => (prev + 1) % documents.length)
    }, 6000)
    return () => clearInterval(docTimer)
  }, [])

  return (
    <div className="flex flex-col">
      
      {/* --- SECTION 1 : SERVICES --- */}
      <section id="services" className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Nos <span className="text-primary italic font-light">Activités</span>
            </h2>
            <div className="w-16 h-1 bg-primary/30 mx-auto rounded-full" />
          </div>

          <div className="relative min-h-[600px] lg:min-h-[500px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center w-full"
              >
                <div className="w-full lg:w-3/5">
                  <div className="relative h-[300px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                    <Image
                      src={services[index].image}
                      alt={services[index].title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent" />
                  </div>
                </div>

                <div className="w-full lg:w-2/5 space-y-6 text-center lg:text-left">
                  <div className="flex flex-col">
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4">
                      Expertise {index + 1} / {services.length}
                    </span>
                    <h3 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                      {services[index].title}
                    </h3>
                  </div>
                  <p className="text-lg text-slate-500 leading-relaxed min-h-[80px]">
                    {services[index].description}
                  </p>
                  <div className="pt-6 flex justify-center lg:justify-start">
                    <motion.div initial={{ width: 0 }} animate={{ width: 48 }} className="h-px bg-primary" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-16 flex justify-center gap-3">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${index === i ? "w-12 bg-primary" : "w-2 bg-slate-200 hover:bg-slate-300"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2 : DOCUMENTS PDF (Animation Verticale) --- */}
      <section className="py-24 lg:py-32 bg-slate-50 overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Espace <span className="text-primary italic font-light">Documentaire</span>
            </h2>
            <div className="w-16 h-1 bg-primary/30 mx-auto rounded-full" />
          </div>

          <div className="relative min-h-[600px] lg:min-h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={docIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-center w-full max-w-5xl"
              >
                {/* Image du PDF (Verticale/Portrait) */}
                <div className="w-full lg:w-2/5 flex justify-center">
                  <div className="relative h-[400px] w-[280px] md:h-[500px] md:w-[350px] bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden group">
                    {/* Placeholder si l'image n'existe pas encore */}
                    <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-300">
                      <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    {/* Décommenter quand vous aurez les images :
                    <Image
                      src={documents[docIndex].image}
                      alt={documents[docIndex].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    /> 
                    */}
                    <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.05)]" />
                  </div>
                </div>

                {/* Texte du PDF */}
                <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
                  <div className="flex flex-col">
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4">
                      {documents[docIndex].category}
                    </span>
                    <h3 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                      {documents[docIndex].title}
                    </h3>
                  </div>
                  <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                    {documents[docIndex].description}
                  </p>
                  
                  <div className="pt-8">
                    <button className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full font-medium transition-all hover:bg-primary hover:shadow-lg hover:shadow-primary/20 group">
                      Télécharger le document
                      <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation PDF */}
          <div className="mt-12 flex justify-center gap-3">
            {documents.map((_, i) => (
              <button
                key={i}
                onClick={() => setDocIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${docIndex === i ? "w-8 bg-slate-400" : "w-2 bg-slate-200"}`}
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}