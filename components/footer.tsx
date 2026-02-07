"use client"

import Link from "next/link"
import { Phone, MapPin, Clock, Globe, ArrowUpRight, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0f172a] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        
        {/* Section Principale : 4 Colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Colonne 1: Identité */}
          <div className="space-y-6">
            <Link href="/" className="group inline-block">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tighter text-white transition-colors group-hover:text-primary">
                  Histo<span className="text-primary group-hover:text-white transition-colors">Bio</span>Labo
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mt-1">
                Anatomie Pathologique
              </p>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Expertise diagnostique de pointe, double lecture systématique et délais optimisés pour une prise en charge d'excellence à Agadir.
            </p>
            <div className="flex items-center gap-4 pt-2">
               <a 
                 href="#" 
                 className="w-9 h-9 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all duration-300 group"
                 aria-label="Website"
               >
                 <Globe size={16} className="text-slate-400 group-hover:text-white" />
               </a>
               <a 
                 href="https://wa.me/212631215723" 
                 className="w-9 h-9 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:-translate-y-1 transition-all duration-300 group"
                 aria-label="WhatsApp"
               >
                 <MessageCircle size={16} className="text-slate-400 group-hover:text-white" />
               </a>
            </div>
          </div>

          {/* Colonne 2: Navigation */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Navigation</h3>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Accueil", href: "/" },
                { name: "Nos Services", href: "/#services" },
                { name: "Expertise", href: "/#specializations" },
                { name: "Qualité & Sécurité", href: "/#about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group w-fit"
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowUpRight size={12} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Colonne 3: Domaines d'expertise */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Domaines</h3>
            <ul className="space-y-3">
              {[
                "Histopathologie",
                "Cytopathologie",
                "Immunohistochimie",
                "Pathologie Moléculaire",
                "Double Lecture",
              ].map((item) => (
                <li key={item} className="text-sm text-slate-400 flex items-center gap-3 group cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary transition-colors duration-300" />
                  <span className="group-hover:text-slate-200 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4: Contact & Urgence */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Urgence & Contact</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <div className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700 text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm">
                  <MapPin size={18} />
                </div>
                <div className="text-sm leading-snug">
                  <p className="text-slate-300 font-medium">CCH9+M9W, Agadir 80000</p>
                  <p className="text-slate-500 italic text-xs mt-1 transition-colors group-hover:text-slate-400">Entrée Clinique spécialisée</p>
                </div>
              </div>
              
              <a href="tel:+212631215723" className="flex items-center gap-4 group w-fit">
                <div className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700 text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm">
                  <Phone size={18} />
                </div>
                <span className="text-sm font-bold text-white group-hover:text-primary transition-colors">+212 6 31 21 57 23</span>
              </a>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700 text-primary">
                  <Clock size={18} />
                </div>
                <div className="text-sm">
                  <p className="text-slate-200 font-bold">Réception continue</p>
                  <p className="text-slate-500 text-xs mt-0.5 tracking-wide">LUN - VEN : 08H30 - 18H30</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Copyright & Signature - Centrée et Lumineuse */}
        <div className="pt-10 border-t border-slate-800/60 flex flex-col items-center gap-6 text-center">
          
          <div className="space-y-3">
            <p className="text-[12px] md:text-sm text-slate-400 font-medium tracking-wide">
              © {currentYear} <span className="text-white">HISTOBIOLABO AGADIR</span>. TOUS DROITS RÉSERVÉS.
            </p>
            
            <p className="text-sm md:text-lg font-medium text-slate-300">
              Conçu avec expertise par{" "}
              <a 
                href="https://www.wemarkyou.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-white transition-all duration-300 underline underline-offset-4 decoration-primary/50 hover:decoration-white font-bold tracking-tight shadow-primary/20 drop-shadow-sm"
              >
                www.wemarkyou.com
              </a>
            </p>
          </div>
          
          {/* Badge Qualité */}
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900/80 border border-slate-700 shadow-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-bold text-slate-200 tracking-[0.2em] uppercase">
              Système Qualité ISO en vigueur
            </span>
          </div>
          
        </div>
      </div>
    </footer>
  )
}