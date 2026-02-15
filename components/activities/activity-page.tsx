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

function Card3D({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className="relative w-full aspect-[4/5] md:aspect-square max-w-[500px] mx-auto"
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
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
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/#services" className="inline-flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-8 md:mb-12 hover:text-primary transition-colors group">
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Retour
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-24 items-start">
            {/* TEXTE COL */}
            <div className="space-y-6 md:space-y-8">
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-primary/5 text-primary text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-4 md:mb-6 border border-primary/10">
                  <Sparkles size={12} />
                  Service d'Excellence
                </div>
                
                {/* TITRE OPTIMISÉ POUR MOBILE */}
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-6 md:mb-8 leading-[1.1] md:leading-[0.85] break-words hyphens-auto">
                  {activity.title}
                </h1>
                
                <div className="relative max-w-xl">
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
                        <p className="text-base md:text-lg text-slate-500 leading-relaxed pt-4 md:pt-6 mt-4 border-t border-slate-100">
                          {remainingText}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button 
                    onClick={() => setShowFullText(!showFullText)}
                    className="mt-6 md:mt-8 group flex items-center gap-3 text-slate-900 font-bold text-xs md:text-sm bg-slate-50 px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:bg-primary hover:text-white transition-all border border-slate-200"
                  >
                    {showFullText ? "Réduire" : "Détails techniques"}
                    <motion.div animate={{ rotate: showFullText ? 180 : 0 }}>
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>
                </div>
              </motion.div>
            </div>

            {/* VISUEL COL */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="relative mt-8 lg:mt-0"
            >
               <Card3D>
                  <div className="relative h-full w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[8px] md:border-[12px] border-white shadow-2xl bg-slate-200">
                    <Image 
                      src={activity.image} 
                      alt={activity.title} 
                      fill 
                      className="object-cover" 
                      priority 
                    />
                  </div>
               </Card3D>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID SECTION --- */}
      <section className="py-16 md:py-24 bg-slate-50/50 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Main Point */}
            <div className="md:col-span-2 md:row-span-2 bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 flex flex-col justify-between shadow-sm min-h-[300px]">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg">
                    <CheckCircle2 size={28} />
                </div>
                <div className="mt-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{activity.points[0]}</h3>
                    <p className="text-sm md:text-base text-slate-500 leading-relaxed">Engagement qualité appliqué à chaque étape de l'analyse.</p>
                </div>
            </div>

            {/* Sub Points */}
            <div className="md:col-span-2 bg-slate-900 rounded-[2rem] p-6 md:p-8 text-white flex items-center gap-4 md:gap-6">
                <div className="text-4xl md:text-5xl font-black text-primary">01</div>
                <h4 className="font-bold text-base md:text-lg leading-tight">{activity.points[1]}</h4>
            </div>

            <div className="bg-primary rounded-[2rem] p-6 md:p-8 text-white flex flex-col justify-center items-center text-center">
                 <Sparkles size={24} className="mb-2 opacity-50" />
                 <span className="font-bold text-xs md:text-sm leading-tight uppercase tracking-wider">Innovation</span>
            </div>

            <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-200 flex flex-col justify-center">
                <p className="text-[9px] font-black uppercase text-slate-400 mb-2">Expertise</p>
                <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight">{activity.points[2]}</h4>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-16 md:py-24 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8 md:mb-10 text-slate-900">Prêt pour une analyse ?</h2>
          <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-primary transition-all shadow-xl active:scale-95 text-sm md:text-base">
             Prendre rendez-vous <ArrowRight size={18} />
          </Link>
      </section>
    </div>
  )
}