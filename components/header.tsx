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

  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      setIsMobileServicesOpen(false)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = ""
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Expertise", href: "/#specializations" },
    { name: "Qualité", href: "/#about" },
    { name: "Contact", href: "/contact" },
  ]

  const activityIcons: Record<string, LucideIcon> = {
    Microscope,
    ScanLine,
    TestTube2,
    BadgeCheck,
    ShieldCheck,
    Zap,
    FlaskConical,
    Sparkles,
    CheckCircle2,
  }

  const activityLinks = activities.map((activity) => ({
    ...activity,
    icon: activityIcons[activity.icon] ?? Microscope,
  }))

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
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

    // Allow menu close animation to finish before scrolling.
    window.setTimeout(() => {
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
        window.history.replaceState(null, "", href)
      } else {
        window.location.hash = targetId
      }
    }, 0)
  }

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
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-all relative group inline-flex items-center gap-2"
                onClick={() => setIsServicesOpen((prev) => !prev)}
                onFocus={() => setIsServicesOpen(true)}
              >
                Activités
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: 6 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-0 top-10 w-[360px] rounded-3xl border border-slate-100 bg-white p-4 shadow-xl shadow-slate-200"
                  >
                    <div className="grid gap-2">
                      {activityLinks.map((activity) => {
                        const Icon = activity.icon
                        return (
                          <Link
                            key={activity.slug}
                            href={`/activites/${activity.slug}`}
                            onClick={() => setIsServicesOpen(false)}
                            className="group flex items-start gap-3 rounded-2xl px-3 py-2 transition-colors hover:bg-slate-50"
                          >
                            <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="flex flex-col text-left">
                              <span className="text-sm font-semibold text-slate-900 group-hover:text-primary">
                                {activity.title}
                              </span>
                              <span className="text-xs text-slate-500">
                                {activity.shortDescription}
                              </span>
                            </span>
                          </Link>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-all relative group"
                onClick={(event) => handleNavClick(event, link.href)}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://pathonova.com/histobiolabo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="rounded-full gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Espace médecin
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a
              href="https://wa.me/212775904761"
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
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden max-h-screen"
          >
            <nav className="flex flex-col px-6 py-6 gap-4 text-center max-h-[calc(100vh-80px)] overflow-y-auto overscroll-contain">
              <button
                type="button"
                className="mx-auto flex w-full items-center justify-center gap-2 text-center text-lg font-bold text-slate-900"
                onClick={() => setIsMobileServicesOpen((prev) => !prev)}
              >
                Activités
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {isMobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 flex flex-col gap-2 rounded-2xl bg-slate-50 p-4 text-left">
                      {activityLinks.map((activity) => {
                        const Icon = activity.icon
                        return (
                          <Link
                            key={activity.slug}
                            href={`/activites/${activity.slug}`}
                            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-white hover:text-primary"
                            onClick={() => {
                              setIsOpen(false)
                              setIsMobileServicesOpen(false)
                            }}
                          >
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                              <Icon className="h-4 w-4" />
                            </span>
                            {activity.title}
                          </Link>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-slate-900 hover:text-primary"
                  onClick={(event) => handleNavClick(event, link.href)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="https://pathonova.com/histobiolabo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full h-12 rounded-2xl border border-primary bg-transparent text-primary text-base gap-2 hover:bg-primary hover:text-primary-foreground">
                    Espace médecin
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <a href="https://wa.me/212775904761">
                  <Button className="w-full h-14 rounded-2xl bg-primary text-white text-lg gap-2">
                    <Phone className="w-5 h-5" />
                    Contactez-nous
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}