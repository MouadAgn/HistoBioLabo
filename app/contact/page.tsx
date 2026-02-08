"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedCells } from "@/components/animated-cells"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, MessageCircle, Mail, Building } from "lucide-react"
import { useEffect, useState } from "react"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <AnimatedCells />
      <Header />
      <WhatsAppButton />
      <main className="relative z-10 pt-20">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-16 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Contactez-nous
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nous sommes à votre disposition pour répondre à toutes vos questions.
                Contactez-nous via WhatsApp pour une réponse rapide.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div
                className={`space-y-6 transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <Card className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-card-foreground">
                      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-primary-foreground" />
                      </div>
                      WhatsApp
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Le moyen le plus rapide pour nous contacter. Envoyez-nous un message et recevez une réponse en quelques minutes.
                    </p>
                    <a
                      href="https://wa.me/212775904761"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                        <MessageCircle className="w-5 h-5" />
                        Ouvrir WhatsApp
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-card-foreground">
                      <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                        <Phone className="w-5 h-5 text-accent-foreground" />
                      </div>
                      Téléphone
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Appelez-nous directement pour une conversation immédiate avec notre équipe.
                    </p>
                    <div className="space-y-2">
                      <a href="tel:+212775904761" className="block">
                        <Button
                          variant="outline"
                          className="w-full gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                        >
                          <Phone className="w-5 h-5" />
                          +212 7 75 90 47 61
                        </Button>
                      </a>
                      <a href="tel:+212528295728" className="block">
                        <Button
                          variant="outline"
                          className="w-full gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                        >
                          <Phone className="w-5 h-5" />
                          Fix : 05 28 29 57 28
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-card-foreground">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      Adresse
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Venez nous rendre visite à notre laboratoire à Agadir.
                    </p>
                    <div className="p-4 rounded-lg bg-secondary">
                      <p className="font-semibold text-foreground">HistoBioLabo</p>
                      <p className="text-muted-foreground">CCH9+M9W</p>
                      <p className="text-muted-foreground">Agadir 80000</p>
                      <p className="text-muted-foreground">Morocco</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div
                className={`transition-all duration-700 delay-400 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              >
                <div className="sticky top-28">
                  <Card className="border-border hover:border-primary/50 transition-colors overflow-hidden">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-card-foreground">
                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                          <Building className="w-5 h-5 text-primary" />
                        </div>
                        Informations pratiques
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="aspect-video w-full bg-secondary rounded-lg overflow-hidden">
                        <iframe
                          src="https://www.google.com/maps?q=CCH9%2BM9W%2C%20Agadir%2080000&output=embed"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="HistoBioLabo Location"
                          className="w-full h-full min-h-[220px]"
                        />
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                            <Clock className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground mb-1">Horaires de réception</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">LUN - VEN : 08H00 - 19H30</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">SAM : 08H00 - 13H00</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">DIM : Fermé</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                            <Mail className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground mb-1">Envoi de prélèvements</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">Coursier disponible</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">Kits prêts à l{"'"}emploi fournis</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-4">
                          Pour les urgences ou demandes prioritaires, utilisez notre circuit URGENT dédié.
                        </p>
                        <a
                          href="https://wa.me/212775904761?text=Bonjour,%20j'ai%20une%20demande%20urgente"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                            <MessageCircle className="w-5 h-5" />
                            Demande urgente
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Services à venir
            </h2>
            <p className="text-muted-foreground mb-6">
              Bientôt disponible : <strong className="text-foreground">Extemporané</strong> - Analyse peropératoire rapide pour guider les décisions chirurgicales en temps réel.
            </p>
            <p className="text-sm text-muted-foreground">
              Contactez-nous pour plus d{"'"}informations sur nos services actuels et futurs.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
