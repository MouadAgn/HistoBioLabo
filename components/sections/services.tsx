"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from "framer-motion"
import Image from "next/image"
import { activities } from "@/lib/activities"
import { documents } from "@/lib/documents"

export function ServicesSection() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const docsRef = useRef<HTMLDivElement>(null)
  const [activeSrv, setActiveSrv] = useState(0)
  const [activeDoc, setActiveDoc] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isSwapped, setIsSwapped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => { 
    setIsSwapped(false) 
    setIsHovered(false)
  }, [activeDoc])

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }

  // --- LOGIQUE SERVICES ---
  const { scrollYProgress: srvScrollRaw } = useScroll({ target: servicesRef, offset: ["start start", "end end"] })
  const srvScroll = useSpring(srvScrollRaw, springConfig)

  useMotionValueEvent(srvScroll, "change", (latest) => {
    const index = Math.min(Math.floor(latest * activities.length), activities.length - 1)
    if (index !== activeSrv && index >= 0) setActiveSrv(index)
  })

  // --- LOGIQUE DOCUMENTS ---
  const { scrollYProgress: docScrollRaw } = useScroll({ target: docsRef, offset: ["start start", "end end"] })
  const docScroll = useSpring(docScrollRaw, springConfig)

  useMotionValueEvent(docScroll, "change", (latest) => {
    const index = Math.min(Math.floor(latest * documents.length), documents.length - 1)
    if (index !== activeDoc && index >= 0) setActiveDoc(index)
  })

  const scrollToIndex = useCallback((ref: React.RefObject<HTMLDivElement | null>, index: number, total: number) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const sectionTop = rect.top + scrollTop
    const sectionHeight = ref.current.offsetHeight
    const targetPos = sectionTop + (index / total) * sectionHeight + (sectionHeight / (total * 2))
    window.scrollTo({ top: targetPos, behavior: "smooth" })
  }, [])

  return (
    <div className="flex flex-col bg-white">
      {/* SECTION 1 : SERVICES */}
      <section id="services" ref={servicesRef} className="relative h-[600vh] md:h-[500vh]">
        <div className="sticky top-0 min-h-screen flex flex-col justify-start md:justify-center overflow-hidden bg-white pt-24 md:pt-0 text-slate-900">
          <div className="max-w-7xl mx-auto w-full px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 tracking-tight">Nos <span className="text-primary italic font-light">Activités</span></h2>
              <div className="w-12 h-1 bg-primary/30 mx-auto rounded-full" />
            </div>
            
            <div className="relative min-h-[400px] md:h-[500px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeSrv} 
                  initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col lg:flex-row gap-6 md:gap-24 items-center w-full"
                >
                  <div className="w-full lg:w-3/5">
                  <div className={`relative w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white transition-all duration-500 ${
                        activities[activeSrv].images.length > 1 ? "h-[250px] sm:h-[350px] md:h-[520px]" : "h-[220px] sm:h-[300px] md:h-[480px]"
                    }`}>
                      {activities[activeSrv].images.length > 1 ? (
                        <div className="grid h-full w-full grid-cols-2 gap-2 p-2 md:gap-4 md:p-4">
                          {activities[activeSrv].images.map((img) => (
                            <div key={img} className="relative h-full w-full overflow-hidden rounded-xl md:rounded-2xl border border-slate-50 bg-white shadow-inner">
                              <Image src={img} alt="service detail" fill className="object-contain" priority />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <Image src={activities[activeSrv].images[0]} alt="service" fill className="object-cover" priority />
                      )}
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-2/5 space-y-4 md:space-y-6 text-center lg:text-left">
                    <span className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-[0.3em]">Expertise {activeSrv + 1} / {activities.length}</span>
                    <h3 className="text-2xl md:text-5xl font-bold leading-tight">{activities[activeSrv].title}</h3>
                    <p className="text-sm md:text-lg text-slate-500">{activities[activeSrv].shortDescription}</p>
                    <div className="flex justify-center lg:justify-start gap-1.5 md:gap-2">
                      {activities.map((_, i) => (
                        <button key={i} onClick={() => scrollToIndex(servicesRef, i, activities.length)} className={`h-2 rounded-full transition-all duration-300 ${activeSrv === i ? "w-8 md:w-10 bg-primary" : "w-2 bg-slate-200 hover:bg-slate-300"}`} />
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
                <motion.div 
                  key={activeDoc} 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.25 }}
                  className="flex flex-col lg:flex-row items-center gap-12 md:gap-24 w-full"
                >
                  <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
                    <motion.div 
                      className={`relative cursor-pointer group ${documents[activeDoc].title === "Votre compte HBL" ? "aspect-video w-[280px] sm:w-[400px] md:w-[550px]" : "h-[250px] w-[180px] sm:h-[350px] sm:w-[260px] md:h-[480px] md:w-[350px]"}`}
                      onClick={() => isMobile && setIsSwapped(!isSwapped)}
                      onMouseEnter={() => !isMobile && setIsHovered(true)}
                      onMouseLeave={() => !isMobile && setIsHovered(false)}
                    >
                      {documents[activeDoc].images.map((img, idx) => {
                        const isEffectivelySwapped = isMobile ? isSwapped : isHovered;
                        
                        // idx 0 est l'image principale, idx 1 est l'image d'arrière-plan
                        const isMainImage = idx === 0;
                        const showAsFront = isEffectivelySwapped ? !isMainImage : isMainImage;

                        return (
                          <motion.div 
                            key={img} 
                            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-2 border-white bg-white" 
                            animate={{
                              zIndex: showAsFront ? 20 : 10,
                              // Quand on swap : l'image de devant part à l'arrière (-35, -12) et l'image d'arrière revient à (0,0)
                              x: showAsFront ? 0 : -35,
                              y: showAsFront ? 0 : -12,
                              scale: showAsFront ? 1 : 0.95,
                              rotate: showAsFront ? 0 : -3,
                              opacity: 1, // On garde l'opacité à 1 pour voir l'image derrière
                            }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <Image 
                                src={img} 
                                alt="doc" 
                                fill 
                                className={documents[activeDoc].title === "Votre compte HBL" ? "object-contain bg-slate-50" : "object-cover"} 
                            />
                            {/* Voile sombre uniquement sur l'image qui se retrouve derrière */}
                            <motion.div 
                              className="absolute inset-0 bg-slate-900/15" 
                              animate={{ opacity: showAsFront ? 0 : 1 }}
                              transition={{ duration: 0.8 }}
                            />
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
                      <a
                        href={documents[activeDoc].downloadUrl ?? documents[activeDoc].images[0]}
                        download
                        className="inline-flex items-center justify-center rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white active:scale-95"
                      >
                        Document PDF à télécharger
                      </a>
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