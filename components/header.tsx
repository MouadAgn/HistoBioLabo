"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  FlaskConical,
  ArrowRight,
  Menu,
  MessageCircle,
  Microscope,
  Phone,
  ScanLine,
  ShieldCheck,
  Sparkles,
  TestTube2,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "next/navigation"
import { activities } from "@/lib/activities"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // FIX: Bloquer le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
      setIsMobileServicesOpen(false)
    }
  }, [isOpen])

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Expertise", href: "/#specializations" },
    { name: "Qualité", href: "/#about" },
    { name: "Contact", href: "/contact" },
  ]

  const activityIcons: Record<string, LucideIcon> = {
    Microscope, ScanLine, TestTube2, BadgeCheck, ShieldCheck, Zap, FlaskConical, Sparkles, CheckCircle2,
  }

  const activityLinks = activities.map((activity) => ({
    ...activity,
    icon: activityIcons[activity.icon] ?? Microscope,
  }))

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) {
      setIsOpen(false)
      return
    }
    event.preventDefault()
    const targetId = href.replace("/#", "")
    setIsOpen(false)
    if (pathname !== "/") {
      router.push(href)
      return
    }
    window.setTimeout(() => {
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 0)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-lg py-3 shadow-sm border-b border-slate-100" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <Image src="/logo.png" alt="Logo" width={45} height={60} className="h-12 w-auto transition-transform group-hover:scale-105" />
            <div className="hidden sm:block border-l border-slate-200 pl-4">
              <span className="text-xl font-bold text-slate-900 block leading-none">Histo<span className="text-primary">Bio</span>Labo</span>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mt-1">Anatomie Pathologique</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button className="text-sm font-semibold text-slate-600 hover:text-primary inline-flex items-center gap-2">
                Activités <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute left-0 top-10 w-[360px] rounded-3xl border border-slate-100 bg-white p-4 shadow-xl">
                    <div className="grid gap-2">
                      {activityLinks.map((act) => (
                        <Link key={act.slug} href={`/activites/${act.slug}`} onClick={() => setIsServicesOpen(false)} className="group flex items-start gap-3 rounded-2xl px-3 py-2 hover:bg-slate-50">
                          <span className="mt-1 h-9 w-9 flex items-center justify-center rounded-xl bg-primary/10 text-primary"><act.icon size={16} /></span>
                          <span className="flex flex-col text-left">
                            <span className="text-sm font-semibold text-slate-900 group-hover:text-primary">{act.title}</span>
                            <span className="text-xs text-slate-500">{act.shortDescription}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-sm font-semibold text-slate-600 hover:text-primary">{link.name}</Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://wa.me/212775904761"><Button className="rounded-full bg-[#022c37] text-white px-6">Contactez-nous</Button></a>
          </div>

          <button className="md:hidden p-2 text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 top-[72px] z-40 bg-white md:hidden overflow-y-auto">
            <nav className="flex flex-col px-6 py-8 gap-6 h-full text-center">
              {/* FIX: Aligné et centré comme les autres */}
              <div className="w-full">
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 text-lg font-bold text-slate-900"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Activités <ChevronDown className={`h-5 w-5 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="mt-4 grid grid-cols-1 gap-2 bg-slate-50 p-4 rounded-2xl">
                    {activityLinks.map((act) => (
                      <Link key={act.slug} href={`/activites/${act.slug}`} onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3 text-sm font-semibold text-slate-700">
                        <span className="h-8 w-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary"><act.icon size={16} /></span>
                        {act.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-2xl font-bold text-slate-900 border-b border-slate-50 pb-2">{link.name}</Link>
              ))}

              <div className="flex flex-col gap-4 mt-auto pb-10">
                <a href="https://wa.me/212775904761"><Button className="w-full h-14 rounded-2xl bg-primary text-white text-lg">Contactez-nous</Button></a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}