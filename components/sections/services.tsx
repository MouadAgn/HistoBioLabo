"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MicroscopeIcon, DNAIcon, TestTubeIcon, HeartPulseIcon } from "@/components/icons"
import { Beaker, Scan } from "lucide-react"

const services = [
  {
    title: "Histopathologie",
    description: "Large gamme de colorations spéciales pour une approche diagnostique complète.",
    icon: MicroscopeIcon,
  },
  {
    title: "Cytopathologie",
    description: "Analyse cellulaire précise pour le dépistage et le diagnostic précoce.",
    icon: Scan,
  },
  {
    title: "Immunohistochimie",
    description: "Large panel d'anticorps ciblés, biomarqueurs oncologiques disponibles.",
    icon: TestTubeIcon,
  },
  {
    title: "Typage HPV",
    description: "Détection et typage du papillomavirus humain avec précision.",
    icon: DNAIcon,
  },
  {
    title: "Pathologie moléculaire",
    description: "Analyses moléculaires avancées pour un diagnostic personnalisé.",
    icon: Beaker,
  },
  {
    title: "Circuit URGENT",
    description: "Prélèvements critiques traités avec délai priorisé selon indication.",
    icon: HeartPulseIcon,
  },
]

export function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Nos Activités
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un plateau technique complet pour répondre à tous vos besoins diagnostiques en anatomie pathologique.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group hover:shadow-lg transition-all duration-500 border-border hover:border-primary/50 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
