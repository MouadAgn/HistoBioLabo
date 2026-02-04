"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import { HeroAnimation } from "@/components/hero-animation"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* 1. Text content - Apparaît en premier sur mobile */}
          <div
            className={`space-y-6 lg:space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Anatomie Pathologique
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              HistoBioLabo – Anatomie pathologique
              <span className="block text-primary">Double lecture,</span>
              <span className="block text-accent">haute fiabilité</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Des délais courts, des résultats clairs. Votre laboratoire de confiance pour l{"'"}anatomie pathologique à Agadir.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/212631215723"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Contacter via WhatsApp
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Nous trouver
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 lg:pt-8 border-t border-border">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-primary">3</p>
                <p className="text-xs sm:text-sm text-muted-foreground">jours biopsies</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-primary">5</p>
                <p className="text-xs sm:text-sm text-muted-foreground">jours pièces</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-primary">100%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">double lecture</p>
              </div>
            </div>
          </div>

          {/* 2. Large Animation - Apparaît en DESSOUS sur mobile (flux naturel) et à DROITE sur desktop */}
          <div
            className={`relative mt-12 lg:mt-0 transition-all duration-1000 delay-300 lg:order-last ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <HeroAnimation />
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" 
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>
    </section>
  )
}