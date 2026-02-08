"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import Image from "next/image"

const services = [
  { title: "Macroscopie", description: "Analyse macroscopique rigoureuse des pièces pour une orientation précise.", images: ["/images_defilement/1 Macroscopie/1.png"] },
  { title: "Histopathologie", description: "Colorations et examens histologiques pour un diagnostic fiable.", images: ["/images_defilement/2 Histopathologie/2.jpg"] },
  { title: "Cytopathologie", description: "Étude cellulaire fine pour le dépistage et le diagnostic précoce.", images: ["/images_defilement/3 Cytopathologie/3.jpg"] },
  { title: "immunohistochimie", description: "Marquages ciblés pour préciser l’origine et le profil tumoral.", images: ["/images_defilement/4 immunohistochimie/4.jpg"] },
  { title: "Typage HPV", description: "Détection et typage du papillomavirus humain avec précision.", images: ["/images_defilement/5 Typage HPV/5.png"] },
  { title: "Circuit urgent", description: "Prélèvements critiques traités en priorité selon l’indication.", images: ["/images_defilement/6 Circuit urgent/6.png"] },
  { title: "Matériel et techniques", description: "Plateau technique performant et contrôles qualité systématiques.", images: ["/images_defilement/7 Matériel et techniques/7.jpg"] },
  { title: "Innovation et suivi", description: "Intégration d’outils modernes pour une traçabilité optimale.", images: ["/documents/1 Photos macroscopiques jointes au CR/3B.jpg", "/documents/1 Photos macroscopiques jointes au CR/2B.png"] },
  { title: "Rigueur Diagnostiques", description: "Relecture et vérifications pour garantir la précision finale.", images: ["/images_defilement/9 Rigueur Diagnostiques/9.png"] },
]

const documents = [
  { title: "Demande examen anatomopathologique", category: "Formulaire", description: "Formulaire de demande d'examen anatomopathologique.", images: ["/Demande examen anatomopathologique.jpg"], downloadable: true },
  { title: "Photos macroscopiques jointes au CR", category: "Imagerie", description: "Visualisation détaillée des pièces opératoires et des prélèvements à l'œil nu.", images: ["/documents/1 Photos macroscopiques jointes au CR/2B.png", "/documents/1 Photos macroscopiques jointes au CR/3B.jpg"] },
  { title: "Photos microscopiques jointes au CR", category: "Diagnostic", description: "Captures haute résolution des coupes histologiques mettant en évidence les critères diagnostiques majeurs analysés au microscope.", images: ["/documents/2 Photos microscopiques jointes au CR/1B.png", "/documents/2 Photos microscopiques jointes au CR/2B.png"] },
  { title: "Documents envoyés directement", category: "Communication", description: "Accès rapide aux rapports et documents administratifs transmis de manière sécurisée pour le suivi des dossiers.", images: ["/documents/3 Documents envoyé directement/photo_2026-02-06_10-25-56 (2).jpg", "/documents/3 Documents envoyé directement/photo_2026-02-06_10-25-56.jpg"] },
  { title: "Votre compte HBL", category: "Espace Client", description: "Interface personnalisée permettant la gestion de vos analyses, le téléchargement des comptes-rendus et l'historique de vos examens.", images: ["/documents/4 Votre compte HBL/Screenshot 2026-02-06 113128.png"] }
]

export function ServicesSection() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const docsRef = useRef<HTMLDivElement>(null)
  const [activeSrv, setActiveSrv] = useState(0)
  const [activeDoc, setActiveDoc] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isSwapped, setIsSwapped] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile(); window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => { setIsSwapped(false) }, [activeDoc])

  const springConfig = { stiffness: 180, damping: 35, restDelta: 0.001 }

  const { scrollYProgress: srvScrollRaw } = useScroll({ target: servicesRef, offset: ["start start", "end end"] })
  const srvScroll = useSpring(srvScrollRaw, springConfig)

  useEffect(() => {
    return srvScroll.on("change", (v) => {
      const index = Math.min(Math.floor(v * services.length), services.length - 1)
      if (index !== activeSrv) setActiveSrv(index)
    })
  }, [srvScroll, activeSrv])

  const { scrollYProgress: docScrollRaw } = useScroll({ target: docsRef, offset: ["start start", "end end"] })
  const docScroll = useSpring(docScrollRaw, springConfig)

  useEffect(() => {
    return docScroll.on("change", (v) => {
      const index = Math.min(Math.floor(v * documents.length), documents.length - 1)
      if (index !== activeDoc) setActiveDoc(index)
    })
  }, [docScroll, activeDoc])

  const scrollToIndex = (ref: React.RefObject<HTMLDivElement | null>, index: number, total: number) => {
    if (!ref.current) return
    const sectionTop = ref.current.offsetTop
    const sectionHeight = ref.current.offsetHeight
    const scrollTarget = sectionTop + (index / total) * sectionHeight + (sectionHeight / (total * 2))
    window.scrollTo({ top: scrollTarget, behavior: "smooth" })
  }

  return (
    <div className="flex flex-col bg-white">
      {/* SECTION 1 : SERVICES */}
      <section ref={servicesRef} className="relative h-[600vh] md:h-[500vh]">
        <div className="sticky top-0 min-h-screen flex flex-col justify-start md:justify-center overflow-hidden bg-white pt-24 md:pt-0 text-slate-900">
          <div className="max-w-7xl mx-auto w-full px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 tracking-tight">Nos <span className="text-primary italic font-light">Activités</span></h2>
              <div className="w-12 h-1 bg-primary/30 mx-auto rounded-full" />
            </div>
            <div className="relative min-h-[400px] md:h-[500px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div key={activeSrv} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="flex flex-col lg:flex-row gap-6 md:gap-24 items-center w-full">
                  <div className="w-full lg:w-3/5">
                    {/* CADRE ADAPTATIF POUR INNOVATION SUR MOBILE */}
                    <div
                      className={`relative w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white transition-all duration-500 ${
                        services[activeSrv].images.length > 1
                          ? "h-[250px] sm:h-[350px] md:h-[520px]" 
                          : "h-[220px] sm:h-[300px] md:h-[480px]"
                      }`}
                    >
                      {services[activeSrv].images.length > 1 ? (
                        /* Layout côte à côte pour mobile et desktop si 2 images */
                        <div className="grid h-full w-full grid-cols-2 gap-2 p-2 md:gap-4 md:p-4">
                          {services[activeSrv].images.map((img) => (
                            <div key={img} className="relative h-full w-full overflow-hidden rounded-xl md:rounded-2xl border border-slate-50 bg-white shadow-inner">
                              <Image src={img} alt="service detail" fill className="object-contain" priority />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <Image src={services[activeSrv].images[0]} alt="service" fill className="object-cover" priority />
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-2/5 space-y-4 md:space-y-6 text-center lg:text-left">
                    <span className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-[0.3em]">Expertise {activeSrv + 1} / {services.length}</span>
                    <h3 className="text-2xl md:text-5xl font-bold leading-tight">{services[activeSrv].title}</h3>
                    <p className="text-sm md:text-lg text-slate-500">{services[activeSrv].description}</p>
                    <div className="flex justify-center lg:justify-start gap-1.5 md:gap-2">
                      {services.map((_, i) => (
                        <button key={i} onClick={() => scrollToIndex(servicesRef, i, services.length)} className={`h-2 rounded-full transition-all duration-300 ${activeSrv === i ? "w-8 md:w-10 bg-primary" : "w-2 bg-slate-200 hover:bg-slate-300"}`} />
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
      <section ref={docsRef} className="relative h-[400vh] md:h-[300vh]">
        <div className="sticky top-0 min-h-screen flex flex-col justify-start md:justify-center bg-slate-50 overflow-hidden border-t border-slate-200 pt-24 md:pt-0 text-slate-900">
          <div className="max-w-7xl mx-auto w-full px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 tracking-tight">Espace <span className="text-primary italic font-light">Documentaire</span></h2>
              <div className="w-12 h-1 bg-primary/30 mx-auto rounded-full" />
            </div>
            <div className="relative min-h-[450px] md:h-[500px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div key={activeDoc} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.3 }} className="flex flex-col lg:flex-row items-center gap-12 md:gap-24 w-full">
                  <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
                    <motion.div 
                      className={`relative cursor-pointer group ${documents[activeDoc].title === "Votre compte HBL" ? "aspect-video w-[280px] sm:w-[400px] md:w-[550px]" : "h-[250px] w-[180px] sm:h-[350px] sm:w-[260px] md:h-[480px] md:w-[350px]"}`}
                      onClick={() => isMobile && setIsSwapped(!isSwapped)}
                    >
                      {documents[activeDoc].images.map((img, idx) => {
                        const showAsFront = isMobile ? (isSwapped ? idx === 1 : idx === 0) : idx === 0;
                        const isBackImage = idx > 0;
                        return (
                          <motion.div key={img} className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-2 border-white bg-white" 
                            animate={{
                              zIndex: showAsFront ? 20 : 10,
                              x: showAsFront ? 0 : (isMobile ? -45 : -30),
                              y: showAsFront ? 0 : (isMobile ? -15 : -10),
                              scale: showAsFront ? 1 : 0.95,
                              rotate: showAsFront ? 0 : -3,
                            }}
                            whileHover={!isMobile ? { x: isBackImage ? -200 : -12, y: isBackImage ? -15 : 0, transition: { duration: 0.4 } } : {}}
                            transition={{ type: "spring", stiffness: 260, damping: 25 }}
                          >
                            <Image src={img} alt="doc" fill className={documents[activeDoc].title === "Votre compte HBL" ? "object-contain bg-slate-50" : "object-cover"} />
                            {!showAsFront && <div className="absolute inset-0 bg-slate-900/10" />}
                          </motion.div>
                        );
                      })}
                      {isMobile && documents[activeDoc].images.length > 1 && (
                        <div className="absolute -bottom-8 left-0 right-0 text-center text-[10px] text-slate-400 font-medium animate-pulse">Appuyez pour inverser</div>
                      )}
                    </motion.div>
                  </div>
                  <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 md:space-y-6 lg:pl-12">
                    <h3 className="text-2xl md:text-5xl font-bold tracking-tighter">{documents[activeDoc].title}</h3>
                    <p className="text-sm md:text-xl text-slate-500 max-w-xl">{documents[activeDoc].description}</p>
                    {documents[activeDoc].downloadable && (
                      <a href={documents[activeDoc].images[0]} download className="inline-flex items-center justify-center rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white active:scale-95">Télécharger le formulaire</a>
                    )}
                    <div className="flex justify-center lg:justify-start gap-2 pt-4">
                      {documents.map((_, i) => (
                        <button key={i} onClick={() => scrollToIndex(docsRef, i, documents.length)} className={`h-2 rounded-full transition-all duration-300 ${activeDoc === i ? "w-8 md:w-12 bg-slate-400" : "w-2 bg-slate-200"}`} />
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