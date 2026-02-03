"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"

export function CTASection() {
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Prêt à collaborer avec nous?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Contactez-nous dès maintenant via WhatsApp ou téléphone. Réponse rapide garantie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/212775904761"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg px-8"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </Button>
            </a>
            <a href="tel:+212775904761">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-2 text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Phone className="w-5 h-5" />
                +212 7 75 90 47 61
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-2 text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <MapPin className="w-5 h-5" />
                Nous trouver
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
