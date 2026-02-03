"use client"

import { useEffect, useRef, useState } from "react"
import { Clock, FileCheck, Truck, AlertCircle } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Biopsies",
    value: "3 jours",
    description: "Délai standard pour les biopsies simples",
  },
  {
    icon: FileCheck,
    title: "Pièces opératoires",
    value: "5 jours",
    description: "Traitement complet avec analyse détaillée",
  },
  {
    icon: AlertCircle,
    title: "Circuit URGENT",
    value: "Priorisé",
    description: "Prélèvements critiques traités en priorité",
  },
  {
    icon: Truck,
    title: "Logistique",
    value: "Incluse",
    description: "Coursier et transport sécurisé disponibles",
  },
]

export function DelaysSection() {
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Délais & Transparence
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Nous nous engageons sur des délais clairs et les respectons. Transparence à chaque étape.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm transition-all duration-500 hover:bg-primary-foreground/20 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7" />
              </div>
              <p className="text-4xl font-bold mb-2">{feature.value}</p>
              <p className="font-semibold mb-1">{feature.title}</p>
              <p className="text-sm opacity-70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-sm uppercase tracking-wider opacity-70 mb-2">Ramassage</p>
              <p className="font-semibold">Coursier disponible</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider opacity-70 mb-2">Kits</p>
              <p className="font-semibold">Prélèvement prêts à l{"'"}emploi</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider opacity-70 mb-2">Réception</p>
              <p className="font-semibold">Horaires étendus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
