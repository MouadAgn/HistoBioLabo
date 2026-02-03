"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedCells } from "@/components/animated-cells"
import { HeroSection } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services"
import { SpecializationsSection } from "@/components/sections/specializations"
import { DelaysSection } from "@/components/sections/delays"
import { QualitySection } from "@/components/sections/quality"
import { TeamSection } from "@/components/sections/team"
import { CTASection } from "@/components/sections/cta"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <AnimatedCells />
      <Header />
      <WhatsAppButton />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <SpecializationsSection />
        <DelaysSection />
        <QualitySection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
