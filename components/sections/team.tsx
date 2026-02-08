"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Building2, Handshake, FileDown, Monitor, CheckCircle2, ChevronRight } from "lucide-react"

const features = [
  {
    icon: Handshake,
    title: "Partenariats",
    description: "Conventionné avec plusieurs cabinets et cliniques. Conditions de collaboration ouvertes.",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: Building2,
    title: "Tarifs acceptables",
    description: "Liste des prix communicable sur demande. Réductions selon conditions.",
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    icon: FileDown,
    title: "Demande en ligne",
    description: "Formulaire de demande anatomopathologique disponible avec schémas.",
    color: "text-orange-600",
    bg: "bg-orange-50"
  },
  {
    icon: Monitor,
    title: "Espace médecins",
    description: "Portail sécurisé avec compte rendu PDF, photos macro/micro, suivi en ligne.",
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
]

export function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Principale */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Côté Gauche : Liste de services sans "format carte" */}
          <div className="space-y-1">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative flex gap-6 p-6 rounded-3xl transition-all hover:bg-slate-50"
              >
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center transition-transform group-hover:scale-110`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <div className="flex-grow pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <ChevronRight className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                    {feature.description}
                  </p>
                </div>
                {/* Ligne de séparation discrète sauf pour le dernier */}
                {index !== features.length - 1 && (
                  <div className="absolute bottom-0 left-24 right-6 h-px bg-slate-100 group-hover:bg-transparent transition-colors" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Côté Droit : Titre et Réassurance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            className="lg:pl-10"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
              Pour les <span className="text-primary font-light">prescripteurs</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
              Nous facilitons votre travail quotidien avec des outils modernes et un accompagnement personnalisé.
            </p>

            <div className="grid gap-6">
              {[
                { t: "Envoi WhatsApp", d: "Photos macro & micro disponibles rapidement" },
                { t: "Suivi en temps réel", d: "Statut: reçu / en cours / validé" },
                { t: "Historique complet", d: "Accès à tous vos dossiers archivés" }
              ].map((check, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 group-hover:text-primary transition-colors">{check.t}</p>
                    <p className="text-slate-500 text-sm">{check.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}