"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Activités", href: "/#services" },
    { name: "Expertise", href: "/#specializations" },
    { name: "Qualité", href: "/#about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-lg py-3 shadow-sm border-b border-slate-100" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="HistoBioLabo Logo"
                width={45}
                height={60}
                className="h-12 w-auto sm:h-14 transition-transform group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:block border-l border-slate-200 pl-4">
              <span className="text-xl font-bold tracking-tighter text-slate-900 block leading-none">
                Histo<span className="text-primary">Bio</span>Labo
              </span>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mt-1">
                Anatomie Pathologique
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/212631215723"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-full bg-[#022c37] hover:bg-[#033a47] text-white px-6 shadow-lg shadow-slate-200 gap-2 transition-all hover:-translate-y-0.5">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                Contactez-nous
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-8 gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-slate-900 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a href="https://wa.me/212631215723" className="pt-4">
                <Button className="w-full h-14 rounded-2xl bg-primary text-white text-lg gap-2">
                  <Phone className="w-5 h-5" />
                  Contactez-nous
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}