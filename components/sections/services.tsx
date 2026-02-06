"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import Image from "next/image"

const services = [
  { title: "Macroscopie", description: "Analyse macroscopique rigoureuse des pièces pour une orientation précise.", image: "/images_defilement/1 Macroscopie/1.png" },
  { title: "Histopathologie", description: "Colorations et examens histologiques pour un diagnostic fiable.", image: "/images_defilement/2 Histopathologie/2.jpg" },
  { title: "Cytopathologie", description: "Étude cellulaire fine pour le dépistage et le diagnostic précoce.", image: "/images_defilement/3 Cytopathologie/3.jpg" },
  { title: "immunohistochimie", description: "Marquages ciblés pour préciser l’origine et le profil tumoral.", image: "/images_defilement/4 immunohistochimie/4.jpg" },
  { title: "Typage HPV", description: "Détection et typage du papillomavirus humain avec précision.", image: "/images_defilement/5 Typage HPV/5.png" },
  { title: "Circuit urgent", description: "Prélèvements critiques traités en priorité selon l’indication.", image: "/images_defilement/6 Circuit urgent/6.png" },
  { title: "Matériel et techniques", description: "Plateau technique performant et contrôles qualité systématiques.", image: "/images_defilement/7 Matériel et techniques/7.jpg" },
  { title: "Innovation et suivi", description: "Intégration d’outils modernes pour une traçabilité optimale.", image: "/images_defilement/8 Innovation et suivi/8.jpg" },
  { title: "Rigueur Diagnostiques", description: "Relecture et vérifications pour garantir la précision finale.", image: "/images_defilement/9 Rigueur Diagnostiques/9.png" },
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

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }

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
      {/* h-[1200vh] sur mobile pour un scroll très long / md:h-[800vh] pour garder le web tel quel */}
      <section ref={servicesRef} className="relative h-[1200vh] md:h-[800vh]">
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
                  transition={{ duration: 0.4, ease: "easeOut" }}
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
                    <p className="text-sm md:text-lg text-slate-500 leading-relaxed min-h-[60px] md:min-h-[100px]">
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
      {/* h-[600vh] sur mobile / md:h-[400vh] pour le web */}
      <section ref={docsRef} className="relative h-[600vh] md:h-[400vh]">
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
                  transition={{ duration: 0.4, ease: "easeOut" }}
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