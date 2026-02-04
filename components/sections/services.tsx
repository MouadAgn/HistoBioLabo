"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import Image from "next/image"

const services = [
  { title: "Histopathologie", description: "Large gamme de colorations spéciales pour une approche diagnostique complète.", image: "/images_defilement/2cfa7f09-071f-490b-b7e6-eea32fd60581.jpg" },
  { title: "Cytopathologie", description: "Analyse cellulaire précise pour le dépistage et le diagnostic précoce.", image: "/images_defilement/2e6f18d2-aa2c-463e-b074-3155174de2c8.jpg" },
  { title: "Immunohistochimie", description: "Large panel d'anticorps et biomarqueurs, utilisés de façon ciblée après étude du cas.", image: "/images_defilement/3b9c81cd-d1d4-4953-b0af-f7b18e766bbb.jpg" },
  { title: "Typage HPV", description: "Détection et typage du papillomavirus humain avec précision.", image: "/images_defilement/35e7ce6a-d694-4cc6-a0b7-84fba7ed75d4.jpg" },
  { title: "Pathologie moléculaire", description: "Analyses moléculaires avancées pour un diagnostic personnalisé.", image: "/images_defilement/36c9a97f-b5cf-489b-b177-6c9cc18fed13.jpg" },
  { title: "Circuit URGENT", description: "Prélèvements critiques traités avec délai priorisé selon indication.", image: "/images_defilement/17277272-d10e-4802-9c38-ee8e15c38d7d.jpg" },
  { title: "Matériel & techniques", description: "Plateau technique fiable et rassurant : automates, processeur, contrôle qualité.", image: "/images_defilement/a38c6ae9-cf35-4684-b2a6-c135b62a03d9.jpg" },
  { title: "Innovation & Suivi", description: "Intégration constante des dernières avancées technologiques pour vos diagnostics.", image: "/images_defilement/f8b77bfb-8822-4925-b0c0-eeb57135d5f4.jpg" },
  { title: "Rigueur Diagnostique", description: "Engagement total pour la précision de chaque lame analysée au microscope.", image: "/images_defilement/f503b57f-d339-4cd2-86ed-7d09124819c9.jpg" }
]

const documents = [
  { title: "Livret d'accueil Patient", category: "Information", description: "Consultez notre guide complet pour comprendre votre parcours de soin." },
  { title: "Manuel de prélèvements", category: "Technique", description: "Recommandations pré-analytiques pour les professionnels." },
  { title: "Accréditation COFRAC", category: "Qualité", description: "Preuve de notre engagement et conformité aux normes ISO." }
]

export function ServicesSection() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const docsRef = useRef<HTMLDivElement>(null)
  
  const [activeSrv, setActiveSrv] = useState(0)
  const [activeDoc, setActiveDoc] = useState(0)

  // Configuration plus réactive : stiffness augmenté et damping réduit pour moins de latence
  const springConfig = { stiffness: 150, damping: 25, restDelta: 0.001 }

  // -- LOGIQUE SERVICES --
  const { scrollYProgress: srvScrollRaw } = useScroll({
    target: servicesRef,
    offset: ["start start", "end end"]
  })
  const srvScroll = useSpring(srvScrollRaw, springConfig)

  useEffect(() => {
    return srvScroll.on("change", (v) => {
      const index = Math.min(Math.floor(v * services.length), services.length - 1)
      if (index !== activeSrv) setActiveSrv(index)
    })
  }, [srvScroll, activeSrv])

  // -- LOGIQUE DOCUMENTS --
  const { scrollYProgress: docScrollRaw } = useScroll({
    target: docsRef,
    offset: ["start start", "end end"]
  })
  const docScroll = useSpring(docScrollRaw, springConfig)

  useEffect(() => {
    return docScroll.on("change", (v) => {
      const index = Math.min(Math.floor(v * documents.length), documents.length - 1)
      if (index !== activeDoc) setActiveDoc(index)
    })
  }, [docScroll, activeDoc])

  return (
    <div className="flex flex-col bg-white">
      
      {/* --- SECTION 1 : SERVICES --- */}
      {/* Réduit à 500vh pour un défilement ~2x plus rapide */}
      <section ref={servicesRef} className="relative h-[500vh]">
        <div className="sticky top-0 min-h-screen flex flex-col justify-start md:justify-center overflow-hidden bg-white pt-24 md:pt-0">
          <div className="max-w-7xl mx-auto w-full px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2 md:mb-4 tracking-tight">
                Nos <span className="text-primary italic font-light">Activités</span>
              </h2>
              <div className="w-12 h-1 bg-primary/30 mx-auto rounded-full" />
            </div>

            <div className="relative min-h-[400px] md:h-[500px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSrv}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col lg:flex-row gap-6 md:gap-24 items-center w-full"
                >
                  <div className="w-full lg:w-3/5">
                    <div className="relative h-[220px] sm:h-[300px] md:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                      <Image src={services[activeSrv].image} alt={services[activeSrv].title} fill className="object-cover" priority />
                    </div>
                  </div>

                  <div className="w-full lg:w-2/5 space-y-4 md:space-y-6 text-center lg:text-left">
                    <span className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-[0.3em]">
                      Expertise {activeSrv + 1} / {services.length}
                    </span>
                    <h3 className="text-2xl md:text-5xl font-bold text-slate-900 leading-tight">
                      {services[activeSrv].title}
                    </h3>
                    <p className="text-sm md:text-lg text-slate-500 leading-relaxed line-clamp-4 md:line-clamp-none">
                      {services[activeSrv].description}
                    </p>
                    <div className="flex justify-center lg:justify-start gap-1.5 md:gap-2">
                      {services.map((_, i) => (
                        <div key={i} className={`h-1 rounded-full transition-all duration-300 ${activeSrv === i ? "w-8 md:w-10 bg-primary" : "w-1.5 bg-slate-200"}`} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2 : DOCUMENTS --- */}
      {/* Réduit à 250vh pour les documents (très rapide) */}
      <section ref={docsRef} className="relative h-[250vh]">
        <div className="sticky top-0 min-h-screen flex flex-col justify-start md:justify-center bg-slate-50 overflow-hidden border-t border-slate-200 pt-24 md:pt-0">
          <div className="max-w-7xl mx-auto w-full px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2 md:mb-4 tracking-tight">
                Espace <span className="text-primary italic font-light">Documentaire</span>
              </h2>
              <div className="w-12 h-1 bg-primary/30 mx-auto rounded-full" />
            </div>

            <div className="relative min-h-[400px] md:h-[450px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDoc}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col lg:flex-row items-center gap-8 md:gap-24 w-full"
                >
                  <div className="w-full lg:w-2/5 flex justify-center">
                    <div className="relative h-[250px] w-[180px] md:h-[480px] md:w-[340px] bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                       <div className="w-10 h-10 md:w-16 md:h-16 bg-primary/5 rounded-full flex items-center justify-center mb-4 md:mb-6">
                          <svg className="w-6 h-6 md:w-8 md:h-8 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                       </div>
                       <p className="text-slate-900 font-bold text-xs md:text-lg leading-tight">{documents[activeDoc].title}</p>
                    </div>
                  </div>

                  <div className="w-full lg:w-3/5 text-center lg:text-left space-y-4 md:space-y-6">
                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
                      <span className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest">{documents[activeDoc].category}</span>
                    </div>
                    <h3 className="text-2xl md:text-6xl font-bold text-slate-900 leading-none">{documents[activeDoc].title}</h3>
                    <p className="text-sm md:text-xl text-slate-500 leading-relaxed max-w-xl">{documents[activeDoc].description}</p>
                    <div className="flex justify-center lg:justify-start gap-2">
                      {documents.map((_, i) => (
                        <div key={i} className={`h-1 rounded-full transition-all duration-300 ${activeDoc === i ? "w-8 md:w-12 bg-slate-400" : "w-2 bg-slate-200"}`} />
                      ))}
                    </div>
                    <div className="pt-2 md:pt-6">
                      <button className="w-full md:w-auto px-8 py-3 md:px-10 md:py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-primary transition-all shadow-lg text-sm md:text-base active:scale-95">
                        Consulter le PDF
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}