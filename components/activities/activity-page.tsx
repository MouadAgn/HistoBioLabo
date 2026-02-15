"use client"

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, CheckCircle2, ArrowRight, Activity, ChevronDown, Sparkles } from "lucide-react"
import { useRef, useState } from "react"

type ActivityContent = {
  title: string
  description: string
  points: string[]
  image: string
  secondaryImage?: string
}

// --- COMPOSANT MOCKUP 3D AVEC PERSPECTIVE ---
function Mockup3D({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  // Rotation légère pour l'effet de profondeur
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

  return (
    <div className="flex justify-center items-center w-full py-10 md:py-20">
      <motion.div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          x.set((e.clientX - rect.left) / rect.width - 0.5)
          y.set((e.clientY - rect.top) / rect.height - 0.5)
        }}
        onMouseLeave={() => { x.set(0); y.set(0) }}
        style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-[320px] md:max-w-[450px] aspect-[3/4] group"
      >
        {/* Ombre portée dynamique sous le mockup */}
        <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
        
        <div 
          style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }} 
          className="h-full w-full relative"
        >
          {/* Cadre principal style "Mockup" */}
          <div className="h-full w-full rounded-[2.5rem] overflow-hidden border-[10px] border-white bg-slate-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
            {children}
            {/* Reflet brillant sur le dessus */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
          </div>

          {/* Badge flottant en 3D (Z-index plus élevé) */}
          <motion.div 
            style={{ transform: "translateZ(40px)" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 -bottom-6 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 hidden sm:block"
          >
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                    <CheckCircle2 size={16} />
                </div>
                <div className="text-left">
                    <p className="text-[9px] font-black uppercase text-slate-400 leading-none">Qualité</p>
                    <p className="text-xs font-bold text-slate-900 leading-tight">Certifié HBL</p>
                </div>
             </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export function ActivityPage({ activity }: { activity: ActivityContent }) {
  const [showFullText, setShowFullText] = useState(false)
  const textParts = activity.description.split('.')
  const introText = textParts[0] + '.'
  const remainingText = textParts.slice(1).join('.')

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <Link href="/#services" className="inline-flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-8 hover:text-primary transition-colors group mx-auto lg:mx-0">
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Retour aux activités
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
            {/* TEXTE COL */}
            <div className="order-2 lg:order-1 space-y-6">
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest mb-6 border border-primary/10">
                  <Sparkles size={12} />
                  Service d'Excellence
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1] md:leading-[0.85] break-words">
                  {activity.title}
                </h1>
                
                <div className="relative max-w-xl mx-auto lg:mx-0">
                  <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-medium">
                    {introText}
                  </p>
                  
                  <AnimatePresence>
                    {showFullText && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-base md:text-lg text-slate-500 leading-relaxed pt-6 mt-4 border-t border-slate-100">
                          {remainingText}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button 
                    onClick={() => setShowFullText(!showFullText)}
                    className="mt-8 group flex items-center gap-3 text-slate-900 font-bold text-xs md:text-sm bg-slate-50 px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all mx-auto lg:mx-0"
                  >
                    {showFullText ? "Réduire l'analyse" : "Détails techniques"}
                    <motion.div animate={{ rotate: showFullText ? 180 : 0 }}>
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>
                </div>
              </motion.div>
            </div>

            {/* MOCKUP COL (Parfaitement centré) */}
            <div className="order-1 lg:order-2">
               <Mockup3D>
                  <Image 
                    src={activity.image} 
                    alt={activity.title} 
                    fill 
                    className="object-cover" 
                    priority 
                  />
               </Mockup3D>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID SECTION --- */}
      <section className="py-16 md:py-24 bg-slate-50/50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 md:row-span-2 bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 flex flex-col justify-between shadow-sm min-h-[300px]">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg">
                    <CheckCircle2 size={32} />
                </div>
                <div className="mt-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{activity.points[0]}</h3>
                    <p className="text-sm md:text-base text-slate-500 leading-relaxed">Standard de qualité diagnostique appliqué à chaque étape.</p>
                </div>
            </div>

            <div className="md:col-span-2 bg-slate-900 rounded-[2rem] p-8 text-white flex items-center gap-6">
                <div className="text-4xl font-black text-primary">01</div>
                <h4 className="font-bold text-lg leading-tight">{activity.points[1]}</h4>
            </div>

            <div className="bg-primary rounded-[2rem] p-8 text-white flex flex-col justify-center items-center text-center">
                 <Sparkles size={24} className="mb-2 opacity-50" />
                 <span className="font-bold text-sm leading-tight uppercase tracking-wider">Innovation</span>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-slate-200 flex flex-col justify-center">
                <p className="text-[10px] font-black uppercase text-slate-400 mb-2">Expertise</p>
                <h4 className="font-bold text-slate-900 text-base leading-tight">{activity.points[2]}</h4>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-10">Une question sur cet examen ?</h2>
          <Link href="/contact" className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-primary transition-all shadow-2xl active:scale-95">
             Contactez le laboratoire <ArrowRight size={20} />
          </Link>
      </section>
    </div>
  )
}