"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, ArrowRight } from "lucide-react"

export function EntranceSection() {
  const [isSwapped, setIsSwapped] = useState(false)

  // Configuration d'une animation "spring" fluide
  const springConfig = { type: "spring", stiffness: 300, damping: 30 }

  return (
    <section className="pt-20 pb-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Gap réduit de gap-20 à gap-10 pour minimiser l'espace entre les blocs */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Bloc Texte */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider border border-primary/10">
              <MapPin size={14} />
              Nous trouver à Agadir
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Un accès simplifié pour un <span className="text-primary italic font-light">accueil d'excellence</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Le laboratoire HistoBioLabo vous accueille dans ses nouveaux locaux modernes. Situé au 3ème étage de l'immeuble Essalam, nous avons conçu un espace professionnel et apaisant pour faciliter votre parcours de soin.
            </p>

            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <ArrowRight size={14} />
                </div>
                Entrée principale de la clinique spécialisée
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <ArrowRight size={14} />
                </div>
                Ascenseur disponible - Accès PMR
              </li>
            </ul>
          </motion.div>

          {/* Bloc Images - Largeur ajustée pour combler l'espace */}
          <div 
            className="w-full lg:w-[55%] relative h-[400px] md:h-[550px] cursor-pointer"
            onMouseEnter={() => setIsSwapped(true)}
            onMouseLeave={() => setIsSwapped(false)}
            onClick={() => setIsSwapped(!isSwapped)}
          >
            {/* Image 1 : Enseigne extérieure */}
            <motion.div 
              initial={{ opacity: 0, y: 40, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              animate={{ 
                zIndex: isSwapped ? 10 : 20,
                scale: isSwapped ? 0.85 : 1,
                x: isSwapped ? 60 : 0,
                y: isSwapped ? 20 : 0,
                rotate: isSwapped ? 2 : -2,
                filter: isSwapped ? "brightness(0.8)" : "brightness(1)"
              }}
              transition={springConfig}
              className="absolute top-0 left-0 w-[80%] h-[280px] md:h-[380px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image 
                src="/entrée_1.png" 
                alt="Entrée extérieure HistoBioLabo" 
                fill 
                className="object-cover"
              />
            </motion.div>

            {/* Image 2 : Plaque directionnelle */}
            <motion.div 
              initial={{ opacity: 0, x: 40, rotate: 3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 3 }}
              animate={{ 
                zIndex: isSwapped ? 20 : 10,
                scale: isSwapped ? 1.05 : 0.9,
                x: isSwapped ? -40 : 0,
                y: isSwapped ? -40 : 0,
                rotate: isSwapped ? -2 : 3,
                boxShadow: isSwapped ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
              }}
              transition={springConfig}
              className="absolute bottom-5 right-0 w-[70%] h-[220px] md:h-[320px] rounded-[2rem] overflow-hidden border-4 border-white bg-white"
            >
              <Image 
                src="/entrée_2.png" 
                alt="Plaque HistoBioLabo 3ème étage" 
                fill 
                className="object-cover"
              />
              {!isSwapped && (
                <div className="absolute inset-0 bg-black/5 md:hidden flex items-center justify-center">
                   <span className="bg-white/90 px-4 py-2 rounded-full text-xs font-bold shadow-lg text-primary">VOIR LA PLAQUE</span>
                </div>
              )}
            </motion.div>

            {/* Décoration de fond plus compacte */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}