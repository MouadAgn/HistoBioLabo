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

const documents = [
  {
    title: "Livret d'accueil Patient",
    category: "Information",
    description: "Consultez notre guide complet pour comprendre votre parcours de soin et nos engagements qualité.",
  },
  {
    title: "Manuel de prélèvements",
    category: "Technique",
    description: "Toutes les recommandations pré-analytiques destinées aux professionnels de santé.",
  },
  {
    title: "Accréditation COFRAC",
    category: "Qualité",
    description: "Portée d'accréditation et certificats de conformité de notre plateau technique.",
  }
]

export function ServicesSection() {
  const [index, setIndex] = useState(0)
  const [docIndex, setDocIndex] = useState(0)

  // Auto-play Bloc 1 (Activités)
  useEffect(() => {
    const srvTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length)
    }, 5000)
    return () => clearInterval(srvTimer)
  }, [])

  // Auto-play Bloc 2 (Documents)
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

          <div className="relative min-h-[550px] lg:min-h-[500px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
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
                  </div>
                </div>

                <div className="w-full lg:w-2/5 space-y-6 text-center lg:text-left">
                  <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">
                    Expertise {index + 1} / {services.length}
                  </span>
                  <h3 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight">
                    {services[index].title}
                  </h3>
                  <p className="text-lg text-slate-500 leading-relaxed min-h-[80px]">
                    {services[index].description}
                  </p>
                  
                  {/* Petit indicateur de ligne pour le service actif */}
                  <div className="pt-6 flex justify-center lg:justify-start">
                    <motion.div 
                      key={`line-${index}`}
                      initial={{ width: 0 }} 
                      animate={{ width: 48 }} 
                      className="h-px bg-primary" 
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RETOUR DES BARRES DE NAVIGATION POUR LES SERVICES */}
          <div className="mt-16 flex justify-center gap-3">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === i ? "w-12 bg-primary" : "w-2 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={`Aller au service ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2 : DOCUMENTS (Vertical Slide) --- */}
      <section className="py-24 lg:py-32 bg-slate-50 overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Espace <span className="text-primary italic font-light">Documentaire</span>
            </h2>
            <p className="text-slate-400 font-medium italic underline decoration-primary/30 underline-offset-8">Ressources & Guides Techniques</p>
          </div>

          <div className="relative h-[650px] md:h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={docIndex}
                initial={{ opacity: 0, y: 120 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -120 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 70, 
                  damping: 15, 
                  mass: 1 
                }}
                className="absolute inset-0 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full"
              >
                {/* Image du PDF */}
                <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
                  <div className="relative h-[380px] w-[270px] md:h-[500px] md:w-[350px] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white flex flex-col items-center justify-center p-10 text-center">
                       <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                          <svg className="w-8 h-8 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                       </div>
                       <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2">PDF Prévisualisation</p>
                       <p className="text-slate-900 font-bold px-4">{documents[docIndex].title}</p>
                    </div>
                  </div>
                </div>

                {/* Texte du PDF */}
                <div className="w-full lg:w-3/5 text-center lg:text-left space-y-8">
                  <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest">
                      {documents[docIndex].category}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                    {documents[docIndex].title}
                  </h3>
                  
                  <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
                    {documents[docIndex].description}
                  </p>
                  
                  <div className="pt-4">
                    <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-primary transition-all active:scale-95 shadow-xl shadow-slate-900/10">
                      Consulter le PDF
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* NAVIGATION POUR LES DOCUMENTS (Barres horizontales aussi) */}
          <div className="mt-20 flex justify-center gap-3">
            {documents.map((_, i) => (
              <button
                key={i}
                onClick={() => setDocIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  docIndex === i ? "w-10 bg-slate-400" : "w-2 bg-slate-200"
                }`}
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}