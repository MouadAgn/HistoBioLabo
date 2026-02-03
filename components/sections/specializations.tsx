"use client"

import { useEffect, useRef, useState } from "react"

const specializations = [
  { name: "Dermatopathologie", description: "Pathologies cutanées" },
  { name: "ORL", description: "Oto-rhino-laryngologie" },
  { name: "Neuropathologie", description: "Système nerveux" },
  { name: "Gynécopathologie", description: "Appareil génital féminin" },
  { name: "Pathologie digestive", description: "Tube digestif" },
  { name: "Os & parties molles", description: "Appareil locomoteur" },
]

export function SpecializationsSection() {
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
    <section ref={sectionRef} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Domaines d{"'"}hyperspécialisation
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Notre équipe possède une expertise approfondie dans plusieurs domaines de la pathologie, garantissant des diagnostics précis et fiables.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  ✓
                </div>
                <div>
                  <p className="font-semibold text-foreground">Double lecture spécialisée</p>
                  <p className="text-sm text-muted-foreground">Validation renforcée des dossiers</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">
                  ✓
                </div>
                <div>
                  <p className="font-semibold text-foreground">Concordance clinico-pathologique</p>
                  <p className="text-sm text-muted-foreground">Corrélation vérifiée à chaque étape</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {specializations.map((spec, index) => (
              <div
                key={spec.name}
                className={`p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all group ${
                  index === 0 ? "col-span-2" : ""
                }`}
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {spec.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
