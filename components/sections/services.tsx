"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    title: "Histopathologie",
    description: "Large gamme de colorations spéciales pour une approche diagnostique complète.",
    image: "/images_defilement/2cfa7f09-071f-490b-b7e6-eea32fd60581.jpg",
  },
  {
    title: "Cytopathologie",
    description: "Analyse cellulaire précise pour le dépistage et le diagnostic précoce.",
    image: "/images_defilement/2e6f18d2-aa2c-463e-b074-3155174de2c8.jpg",
  },
  {
    title: "Immunohistochimie",
    description: "Large panel d'anticorps et biomarqueurs, utilisés de façon ciblée après étude du cas.",
    image: "/images_defilement/3b9c81cd-d1d4-4953-b0af-f7b18e766bbb.jpg",
  },
  {
    title: "Typage HPV",
    description: "Détection et typage du papillomavirus humain avec précision.",
    image: "/images_defilement/35e7ce6a-d694-4cc6-a0b7-84fba7ed75d4.jpg",
  },
  {
    title: "Pathologie moléculaire",
    description: "Analyses moléculaires avancées pour un diagnostic personnalisé.",
    image: "/images_defilement/36c9a97f-b5cf-489b-b177-6c9cc18fed13.jpg",
  },
  {
    title: "Circuit URGENT",
    description: "Prélèvements critiques traités avec délai priorisé selon indication.",
    image: "/images_defilement/17277272-d10e-4802-9c38-ee8e15c38d7d.jpg",
  },
  {
    title: "Matériel & techniques",
    description: "Plateau technique fiable et rassurant : automates, processeur, contrôle qualité.",
    image: "/images_defilement/a38c6ae9-cf35-4684-b2a6-c135b62a03d9.jpg",
  },
  {
    title: "Innovation & Suivi",
    description: "Intégration constante des dernières avancées technologiques pour vos diagnostics.",
    image: "/images_defilement/f8b77bfb-8822-4925-b0c0-eeb57135d5f4.jpg",
  },
  {
    title: "Rigueur Diagnostique",
    description: "Engagement total pour la précision de chaque lame analysée au microscope.",
    image: "/images_defilement/f503b57f-d339-4cd2-86ed-7d09124819c9.jpg",
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header épuré */}
        <div className="text-center mb-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Nos <span className="text-primary italic font-light">Activités</span>
            </h2>
            <div className="w-16 h-1 bg-primary/30 mx-auto rounded-full mb-8" />
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Un aperçu de notre plateau technique et de l'expertise mise au service de vos analyses.
            </p>
          </motion.div>
        </div>

        {/* Défilement Alterné */}
        <div className="space-y-32 lg:space-y-48">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              
              {/* Image avec zoom progressif au hover */}
              <div className="w-full lg:w-3/5 group">
                <div className="relative h-[300px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent" />
                  
                  {/* Badge numérique élégant */}
                  <div className="absolute bottom-8 right-8 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-medium text-xl">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Contenu Texte épuré */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div className="flex flex-col">
                  <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4">
                    Expertise {index + 1}
                  </span>
                  <h3 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-lg text-slate-500 leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-6">
                  <div className="h-px w-12 bg-primary/40 group-hover:w-24 transition-all duration-500" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}