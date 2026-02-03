import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="HistoBioLab Logo"
                width={60}
                height={60}
                className="w-14 h-14 bg-background rounded-full p-1"
              />
              <div>
                <span className="text-lg font-bold">HistoBioLab</span>
                <p className="text-xs opacity-80">Laboratoire de Pathologie</p>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Double lecture spécialisée, délais courts, résultats fiables. Votre partenaire de confiance en anatomie pathologique.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Accueil
              </Link>
              <Link href="/#services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Nos Services
              </Link>
              <Link href="/#about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                À propos
              </Link>
              <Link href="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm opacity-80">Histopathologie</li>
              <li className="text-sm opacity-80">Cytopathologie</li>
              <li className="text-sm opacity-80">Immunohistochimie</li>
              <li className="text-sm opacity-80">Typage HPV</li>
              <li className="text-sm opacity-80">Pathologie moléculaire</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm opacity-80">CCH9+M9W, Agadir 80000, Morocco</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+212775904761" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  +212 7 75 90 47 61
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm opacity-80">Réception étendue</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} HistoBioLab. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
