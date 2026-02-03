"use client"

import { useEffect, useRef, useState } from "react"
import { ShieldCheckIcon } from "@/components/icons"
import { FileText, Lock, Settings, CheckCircle2 } from "lucide-react"

const qualityItems = [
  {
    icon: Settings,
    title: "Procédures standardisées",
    description: "SOP internes rigoureuses pour chaque étape du processus analytique.",
  },
  {
    icon: CheckCircle2,
    title: "Contrôle des non-conformités",
    description: "Système de détection et correction des anomalies en temps réel.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Double vérification",
    description: "Validation renforcée pour tous les dossiers sensibles et complexes.",
  },
  {
    icon: Lock,
    title: "Confidentialité",
    description: "Protection des données, accès restreint, archivage sécurisé.",
  },
  {
    icon: FileText,
    title: "Comptes rendus clairs",
    description: "Diagnostics structurés avec recommandations d'examens ciblées.",
  },
]

export function QualitySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Qualité & Sécurité
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des procédures rigoureuses pour garantir la fiabilité de chaque diagnostic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualityItems.map((item, index) => (
            <div
              key={item.title}
              className={`flex gap-4 p-6 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-md transition-all ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${index === qualityItems.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 grid sm:grid-cols-3 gap-8 p-8 rounded-2xl bg-secondary transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">4</p>
            <p className="text-muted-foreground">Techniciens qualifiés</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">2</p>
            <p className="text-muted-foreground">Coursiers dédiés</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">2</p>
            <p className="text-muted-foreground">Assistants disponibles</p>
          </div>
        </div>
      </div>
    </section>
  )
}
