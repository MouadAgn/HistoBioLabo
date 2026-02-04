"use client"

import { useState, useEffect } from "react"
import { motion, useMotionValue, animate, useTransform } from "framer-motion"
import { 
  ShieldCheck, FileText, Lock, Settings, CheckCircle2, 
  FlaskConical, Users, Truck, UserPlus 
} from "lucide-react"

const StatCounter = ({ value }: { value: string }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [display, setDisplay] = useState("0")

  useEffect(() => {
    const numericValue = parseInt(value)
    if (isNaN(numericValue)) {
      setDisplay("0")
      return
    }
    const controls = animate(count, numericValue, { duration: 2 })
    return rounded.onChange(v => setDisplay(v.toString()))
  }, [value, count, rounded])

  return <span>{display}</span>
}

const qualityItems = [
  { icon: Settings, title: "Procédures standard", description: "SOP internes rigoureuses pour chaque étape analytique.", color: "text-blue-600" },
  { icon: CheckCircle2, title: "Non-conformités", description: "Système de détection et correction des anomalies en temps réel.", color: "text-emerald-600" },
  { icon: ShieldCheck, title: "Double vérification", description: "Validation renforcée pour les dossiers sensibles et complexes.", color: "text-indigo-600" },
  { icon: FlaskConical, title: "Pré-analytique", description: "Fixation optimale pour limiter les faux négatifs.", color: "text-cyan-600" },
  { icon: Lock, title: "Confidentialité", description: "Protection des données et archivage sécurisé.", color: "text-slate-600" },
  { icon: FileText, title: "Comptes rendus", description: "Diagnostics structurés avec recommandations ciblées.", color: "text-sky-600" },
]

const stats = [
  { label: "Techniciens qualifiés", value: "4", icon: Users },
  { label: "Coursiers dédiés", value: "2", icon: Truck },
  { label: "Assistants disponibles", value: "2", icon: UserPlus },
]

export function QualitySection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header resserré */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              Qualité & <span className="text-primary">Sécurité</span>
            </h2>
            <p className="text-base text-slate-500 leading-relaxed">
              Des protocoles rigoureux pour garantir la fiabilité de chaque diagnostic rendu par HistoBioLab.
            </p>
          </motion.div>
          <div className="hidden md:block w-16 h-1 bg-primary/20 rounded-full mb-3" />
        </div>

        {/* Grid de Qualité - Cartes plus petites et gap réduit */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {qualityItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="relative p-6 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 group overflow-hidden"
            >
              {/* Numérotation plus discrète */}
              <span className="absolute -right-2 -bottom-2 text-6xl font-bold text-slate-100/80 group-hover:text-primary/5 transition-colors pointer-events-none">
                0{index + 1}
              </span>

              <div className="relative z-10">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:border-primary/20 transition-all">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistiques - Padding réduit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-slate-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((stat, i) => (
              <div key={i} className="group">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-5xl font-extralight text-slate-900 leading-none mb-1">
                      <StatCounter value={stat.value} />
                    </span>
                    <div className="h-1 w-8 bg-primary/20 group-hover:w-full group-hover:bg-primary transition-all duration-700" />
                  </div>
                  <div className="flex flex-col">
                    <stat.icon className="w-4 h-4 text-primary/40 mb-1" />
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-tight">
                      {stat.label.split(' ')[0]} <br />
                      <span className="text-slate-900">{stat.label.split(' ').slice(1).join(' ')}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}