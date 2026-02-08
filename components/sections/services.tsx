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
  { title: "Innovation et suivi", description: "Intégration d’outils modernes pour une traçabilité optimale.", image: "/images_defilement/2 Histopathologie/2.jpg" },
  { title: "Rigueur Diagnostiques", description: "Relecture et vérifications pour garantir la précision finale.", image: "/images_defilement/9 Rigueur Diagnostiques/9.png" },
]

const documents = [
  { 
    title: "Photos macroscopiques jointes au CR", 
    category: "Imagerie", 
    description: "Visualisation détaillée des pièces opératoires et des prélèvements à l'œil nu.",
    images: ["/documents/1 Photos macroscopiques jointes au CR/2B.png", "/documents/1 Photos macroscopiques jointes au CR/3B.jpg"]
  },
  { 
    title: "Photos microscopiques jointes au CR", 
    category: "Diagnostic", 
    description: "Captures haute résolution des coupes histologiques analysées au microscope.",
    images: ["/documents/2 Photos microscopiques jointes au CR/1B.png", "/documents/2 Photos microscopiques jointes au CR/2B.png"]
  },
  { 
    title: "Documents envoyés directement", 
    category: "Communication", 
    description: "Accès rapide aux rapports et documents administratifs transmis de manière sécurisée.",
    images: ["/documents/3 Documents envoyé directement/photo_2026-02-06_10-25-56 (2).jpg", "/documents/3 Documents envoyé directement/photo_2026-02-06_10-25-56.jpg"]
  },
  { 
    title: "Votre compte HBL", 
    category: "Espace Client", 
    description: "Interface personnalisée permettant la gestion de vos analyses et comptes-rendus.",
    images: ["/documents/4 Votre compte HBL/Screenshot 2026-02-06 113128.png"]
  }
]

export function ServicesSection() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const docsRef = useRef<HTMLDivElement>(null)
  const [activeSrv, setActiveSrv] = useState(0)
  const [activeDoc, setActiveDoc] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile(); window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }

  // -- SERVICES SCROLL --
  const { scrollYProgress: srvScrollRaw } = useScroll({ target: servicesRef, offset: ["start start", "end end"] })
  const srvScroll = useSpring(srvScrollRaw, springConfig)

  useEffect(() => {
    return srvScroll.on("change", (v) => {
      const index = Math.min(Math.floor(v * services.length), services.length - 1)
      if (index !== activeSrv) setActiveSrv(index)
    })
  }, [srvScroll, activeSrv])

  // -- DOCUMENTS SCROLL --
  const { scrollYProgress: docScrollRaw } = useScroll({ target: docsRef, offset: ["start start", "end end"] })
  const docScroll = useSpring(docScrollRaw, springConfig)

  useEffect(() => {
    return docScroll.on("change", (v) => {
      const index = Math.min(Math.floor(v * documents.length), documents.length - 1)
      if (index !== activeDoc) setActiveDoc(index)
    })
  }, [docScroll, activeDoc])

  // -- FONCTION POUR RENDRE LES BOUTONS CLIQUABLES --
  const scrollToIndex = (ref: React.RefObject<HTMLDivElement>, index: number, total: number) => {
    if (!ref.current) return
    const sectionTop = ref.current.offsetTop
    const sectionHeight = ref.current.offsetHeight
    // On calcule la position en pixels correspondant à l'index (milieu du segment)
    const scrollTarget = sectionTop + (index / total) * sectionHeight + (sectionHeight / (total * 2))
    
    window.scrollTo({
      top: scrollTarget,
      behavior: "smooth"
    })
  }

  return (
    <div className="flex flex-col bg-white">
      {/* SECTION 1 : SERVICES */}
      <section ref={servicesRef} className="relative h-[1200vh] md:h-[800vh]">
        <div className="sticky top-0 min-h-screen flex flex-col justify-start md:justify-center overflow-hidden bg-white pt-24 md:pt-0 text-slate-900">
          <div className="max-w-7xl mx-auto w-full px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">Nos <span className="text-primary italic font-light">Activités</span></h2>
              <div className="w-12 h-1 bg-primary/30 mx-auto rounded-full" />
            </div>
            <div className="relative min-h-[400px] md:h-[500px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div key={activeSrv} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }} className="flex flex-col lg:flex-row gap-6 md:gap-24 items-center w-full">
                  <div className="w-full lg:w-3/5">
                    <div className="relative h-[220px] sm:h-[300px] md:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                      <Image src={services[activeSrv].image} alt="service" fill className="object-cover" priority />
                    </div>
                  </div>
                  <div className="w-full lg:w-2/5 space-y-4 md:space-y-6 text-center lg:text-left">
                    <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em]">Expertise {activeSrv + 1} / {services.length}</span>
                    <h3 className="text-2xl md:text-5xl font-bold">{services[activeSrv].title}</h3>
                    <p className="text-sm md:text-lg text-slate-500">{services[activeSrv].description}</p>
                    <div className="flex justify-center lg:justify-start gap-1.5 md:gap-2">
                      {services.map((_, i) => (
                        <button 
                          key={i} 
                          onClick={() => scrollToIndex(servicesRef, i, services.length)}
                          className={`h-2 rounded-full transition-all duration-300 ${activeSrv === i ? "w-8 md:w-10 bg-primary" : "w-2 bg-slate-200 hover:bg-slate-300"}`} 
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 : ESPACE DOCUMENTAIRE */}
      <section ref={docsRef} className="relative h-[600vh] md:h-[400vh]">
        <div className="sticky top-0 min-h-screen flex flex-col justify-start md:justify-center bg-slate-50 overflow-hidden border-t border-slate-200 pt-24 md:pt-0 text-slate-900 font-sans">
          <div className="max-w-7xl mx-auto w-full px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">Espace <span className="text-primary italic font-light">Documentaire</span></h2>
              <div className="w-12 h-1 bg-primary/30 mx-auto rounded-full" />
            </div>
            <div className="relative min-h-[450px] md:h-[500px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div key={activeDoc} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.4 }} className="flex flex-col lg:flex-row items-center gap-12 md:gap-24 w-full">
                  <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
                    <motion.div className={`relative cursor-pointer group ${documents[activeDoc].title === "Votre compte HBL" ? "aspect-video w-[280px] sm:w-[400px] md:w-[550px]" : "h-[250px] w-[180px] sm:h-[350px] sm:w-[260px] md:h-[480px] md:w-[350px]"}`} initial="initial" whileHover="animate" whileTap="animate">
                      {documents[activeDoc].images.map((img, idx) => {
                        const isBack = idx > 0;
                        return (
                          <motion.div key={img} className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-2 border-white bg-white" style={{ zIndex: 10 - idx }}
                            variants={{
                              initial: { x: isBack ? -40 : 0, y: isBack ? -10 : 0, scale: isBack ? 0.95 : 1, rotate: isBack ? -3 : 0, opacity: 1 },
                              animate: { x: isBack ? (isMobile ? -110 : -240) : (isMobile ? -10 : -15), y: isBack ? -20 : 0, scale: 1, rotate: isBack ? -5 : -1, transition: { duration: 0.4 } }
                            }}
                          >
                            <Image src={img} alt="doc" fill className={documents[activeDoc].title === "Votre compte HBL" ? "object-contain bg-slate-50" : "object-cover"} />
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </div>
                  <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 md:space-y-6 lg:pl-12">
                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-full"><span className="text-primary font-bold text-[10px] uppercase tracking-widest">{documents[activeDoc].category}</span></div>
                    <h3 className="text-2xl md:text-5xl font-bold tracking-tighter">{documents[activeDoc].title}</h3>
                    <p className="text-sm md:text-xl text-slate-500 max-w-xl">{documents[activeDoc].description}</p>
                    <div className="flex justify-center lg:justify-start gap-2 pt-4">
                      {documents.map((_, i) => (
                        <button 
                          key={i} 
                          onClick={() => scrollToIndex(docsRef, i, documents.length)}
                          className={`h-2 rounded-full transition-all duration-300 ${activeDoc === i ? "w-8 md:w-12 bg-slate-400" : "w-2 bg-slate-200 hover:bg-slate-300"}`} 
                        />
                      ))}
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