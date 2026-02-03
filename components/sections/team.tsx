"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Handshake, FileDown, Monitor } from "lucide-react"

const features = [
  {
    icon: Handshake,
    title: "Partenariats",
    description: "Conventionné avec plusieurs cabinets et cliniques. Conditions de collaboration ouvertes.",
  },
  {
    icon: Building2,
    title: "Tarifs acceptables",
    description: "Liste des prix communicable sur demande. Réductions selon conditions.",
  },
  {
    icon: FileDown,
    title: "Demande en ligne",
    description: "Formulaire de demande anatomopathologique disponible avec schémas.",
  },
  {
    icon: Monitor,
    title: "Espace médecins",
    description: "Portail sécurisé avec compte rendu PDF, photos macro/micro, suivi en ligne.",
  },
]

export function TeamSection() {
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
            className={`order-2 lg:order-1 grid grid-cols-2 gap-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div
            className={`order-1 lg:order-2 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Pour les prescripteurs
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nous facilitons votre travail quotidien avec des outils modernes et un accompagnement personnalisé.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Envoi WhatsApp</p>
                  <p className="text-sm text-muted-foreground">Photos macro & micro disponibles rapidement</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Suivi en temps réel</p>
                  <p className="text-sm text-muted-foreground">Statut: reçu / en cours / validé</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Historique complet</p>
                  <p className="text-sm text-muted-foreground">Accès à tous vos dossiers archivés</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
