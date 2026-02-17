"use client"

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  ChevronLeft, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  FileText, 
  Download, 
  ShieldCheck,
  Activity 
} from "lucide-react"
import { useState, useEffect } from "react"
import type { DocumentContent } from "@/lib/documents"

// --- STYLE PILE DE CARTES (COMME LA PAGE D'ACCUEIL) ---
function DocumentStack({ 
  images, 
  isMobile, 
  isSwapped, 
  setIsSwapped, 
  isHovered, 
  setIsHovered 
}: { 
  images: string[], 
  isMobile: boolean,
  isSwapped: boolean,
  setIsSwapped: (v: boolean) => void,
  isHovered: boolean,
  setIsHovered: (v: boolean) => void
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"])

  return (
    <div className="flex justify-center items-center w-full py-6 md:py-12">
      <motion.div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          x.set((e.clientX - rect.left) / rect.width - 0.5)
          y.set((e.clientY - rect.top) / rect.height - 0.5)
        }}
        onMouseLeave={() => { x.set(0); y.set(0); setIsHovered(false) }}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onClick={() => isMobile && setIsSwapped(!isSwapped)}
        style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-[400px] aspect-[3/4] group cursor-pointer"
      >
        {/* Glow discret en fond */}
        <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl opacity-50" />
        
        <div className="relative h-full w-full" style={{ transformStyle: "preserve-3d" }}>
          {images.map((img, idx) => {
            const isEffectivelySwapped = isMobile ? isSwapped : isHovered;
            const isMainImage = idx === 0;
            const showAsFront = isEffectivelySwapped ? !isMainImage : isMainImage;

            return (
              <motion.div
                key={img}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-white"
                animate={{
                  zIndex: showAsFront ? 20 : 10,
                  x: showAsFront ? 0 : -30,
                  y: showAsFront ? 0 : -15,
                  scale: showAsFront ? 1 : 0.96,
                  rotate: showAsFront ? 0 : -3,
                }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="relative h-full w-full">
                  <Image 
                    src={img} 
                    alt="document preview" 
                    fill 
                    className="object-contain p-4 bg-white" 
                  />
                  {/* Voile de profondeur sur l'image de derrière */}
                  <motion.div 
                    className="absolute inset-0 bg-slate-900/[0.03]" 
                    animate={{ opacity: showAsFront ? 0 : 1 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {isMobile && images.length > 1 && (
          <div className="absolute -bottom-8 left-0 right-0 text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest animate-pulse">
            Appuyez pour inverser
          </div>
        )}
      </motion.div>
    </div>
  )
}

export function DocumentPage({ document }: { document: DocumentContent }) {
  const [showFullText, setShowFullText] = useState(false)
  const [isSwapped, setIsSwapped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const textParts = document.longDescription.split(".")
  const introText = textParts[0] + "."
  const remainingText = textParts.slice(1).join(".")

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden"
    >
      {/* HEADER SECTION */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 px-4 md:px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <Link href="/#services" className="inline-flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-12 hover:text-primary transition-all group">
            <ChevronLeft size={14} />
            Espace Documentaire
          </Link>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* TEXTE COL */}
            <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-100">
                  <ShieldCheck size={12} />
                  Document Officiel
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
                  {document.title}
                </h1>

                <div className="max-w-2xl">
                  <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-6">
                    {introText}
                  </p>
                  
                  <AnimatePresence>
                    {showFullText && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <p className="text-base text-slate-500 leading-relaxed pb-8 border-l-2 border-primary/20 pl-6 italic">
                          {remainingText}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="flex flex-wrap gap-4 mt-8">
                    <button onClick={() => setShowFullText(!showFullText)} className="px-6 py-3 rounded-full bg-white text-slate-900 font-bold text-xs border border-slate-200 hover:border-primary transition-all flex items-center gap-2 shadow-sm">
                      {showFullText ? "Réduire" : "Notice d'utilisation"}
                      <ChevronDown className={showFullText ? "rotate-180 transition-transform" : "transition-transform"} size={14} />
                    </button>
                    {document.downloadable && (
                      <a href={document.images[0]} download className="px-8 py-3 rounded-full bg-slate-900 text-white font-bold text-xs shadow-lg hover:bg-primary transition-all flex items-center gap-2">
                        Télécharger PDF <Download size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* IMAGE COL - PILE DE CARTES */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
               <div className="w-full">
                  <DocumentStack 
                    images={document.images} 
                    isMobile={isMobile}
                    isSwapped={isSwapped}
                    setIsSwapped={setIsSwapped}
                    isHovered={isHovered}
                    setIsHovered={setIsHovered}
                  />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* BENTO GRID */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm group hover:border-primary/20 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-slate-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <CheckCircle2 size={20} />
            </div>
            <h4 className="font-bold text-lg mb-2 text-slate-900">{document.points[0]}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Engagement qualité appliqué à chaque document.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm group hover:border-primary/20 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-slate-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <FileText size={20} />
            </div>
            <h4 className="font-bold text-lg mb-2 text-slate-900">{document.points[1]}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Format standardisé pour une transmission optimale.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm group hover:border-primary/20 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-slate-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <Activity size={20} />
            </div>
            <h4 className="font-bold text-lg mb-2 text-slate-900">{document.points[2]}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Intégration directe dans votre parcours patient.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center px-4 bg-slate-50 border-t border-slate-100">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-10 text-slate-900">
          Besoin d'aide pour ce document ?
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-primary transition-all shadow-xl active:scale-95"
        >
          Contactez le laboratoire <ArrowRight size={20} />
        </Link>
      </section>
    </motion.div>
  )
}