"use client"

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, CheckCircle2, ArrowRight, Activity, ChevronDown, Sparkles, ShieldCheck } from "lucide-react"
import { useState } from "react"

// --- STYLE PILE DE CARTES ÉPURÉ (MÊME QUE DOCUMENTS) ---
function ActivityStack({ image }: { image: string }) {
  const x = useMotionValue(0); const y = useMotionValue(0)
  const mX = useSpring(x); const mY = useSpring(y)
  const rX = useTransform(mY, [-0.5, 0.5], ["5deg", "-5deg"])
  const rY = useTransform(mX, [-0.5, 0.5], ["-5deg", "5deg"])

  return (
    <div className="flex justify-center items-center w-full py-6 md:py-12">
      <motion.div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          x.set((e.clientX - rect.left) / rect.width - 0.5)
          y.set((e.clientY - rect.top) / rect.height - 0.5)
        }}
        onMouseLeave={() => { x.set(0); y.set(0) }}
        style={{ rotateY: rY, rotateX: rX, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-[400px] aspect-[4/5] group"
      >
        <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
          <Image src={image} alt="service detail" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 via-transparent to-transparent" />
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
    <div className="min-h-screen bg-slate-50/30 font-sans text-slate-900 overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 px-4 md:px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <Link href="/#services" className="inline-flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-12 hover:text-primary transition-all group">
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Retour aux activités
          </Link>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* TEXTE (Gauche) */}
            <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest mb-6 border border-primary/10">
                  <ShieldCheck size={12} /> Expertise Médicale
                </div>
                
                {/* TITRE: whitespace-nowrap pour une seule ligne sur desktop, flex-wrap sur mobile */}
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-8 leading-tight lg:whitespace-nowrap">
                  {activity.title}
                </h1>

                <div className="max-w-2xl">
                  <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-6">{introText}</p>
                  <AnimatePresence>
                    {showFullText && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <p className="text-base text-slate-500 leading-relaxed pb-8 border-l-2 border-primary/20 pl-6 italic">{remainingText}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button onClick={() => setShowFullText(!showFullText)} className="px-6 py-3 rounded-xl bg-slate-100 text-slate-900 font-bold text-xs border border-slate-200 hover:bg-slate-200 transition-all flex items-center gap-2">
                    {showFullText ? "Réduire" : "Notice technique"} <ChevronDown className={showFullText ? "rotate-180 transition-transform" : ""} size={14} />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* VISUEL (Droite - Pile comme documents) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
              <ActivityStack image={activity.image} />
            </div>
          </div>
        </div>
      </section>

      {/* --- BENTO POINTS CLÉS --- */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {activity.points.map((point, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-primary/30 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><CheckCircle2 size={20} /></div>
              <h4 className="font-bold text-lg mb-2">{point}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Engagement rigoureux pour un diagnostic de haute précision.</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 text-center px-4 bg-white border-t border-slate-100">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-10 italic">Prêt pour une collaboration ?</h2>
        <Link href="/contact" className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-primary transition-all shadow-2xl active:scale-95">Prendre rendez-vous <ArrowRight size={20} /></Link>
      </section>
    </div>
  )
}