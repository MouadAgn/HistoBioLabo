"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background avec dégradé subtil et motif médical */}
      <div className="absolute inset-0 bg-[#f8fafc]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-50/40 via-transparent to-transparent" />
      
      {/* Cercles décoratifs animés en arrière-plan */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" 
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8 tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Collaboration Médicale
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            Prêt à collaborer <br /> 
            <span className="text-primary italic font-light">avec HistoBioLab ?</span>
          </h2>

          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Rejoignez les nombreux praticiens qui nous font confiance pour la fiabilité de leurs diagnostics. 
            Réponse et prise en charge <span className="text-slate-900 font-bold underline decoration-primary/30">immédiate</span>.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {/* Bouton Téléphone */}
            <motion.a 
              whileHover={{ y: -2 }}
              href="tel:+212775904761"
              className="w-full md:w-auto text-slate-600 hover:text-primary font-bold transition-colors flex items-center justify-center gap-3 px-6 h-16 border-2 border-slate-100 rounded-2xl bg-white/50 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              +212 7 75 90 47 61
            </motion.a>

            {/* Bouton Localisation */}
            <Link href="/contact" className="w-full md:w-auto">
              <motion.div 
                whileHover={{ y: -2 }}
                className="flex items-center justify-center gap-3 px-6 h-16 text-slate-500 hover:text-slate-900 font-medium transition-all cursor-pointer"
              >
                <MapPin className="w-5 h-5" />
                Nous trouver
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Barre de séparation décorative en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  )
}