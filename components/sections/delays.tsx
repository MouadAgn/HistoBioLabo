"use client"

import { useState, useEffect } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { Clock, FileCheck, Truck, AlertCircle, Package, Calendar } from "lucide-react"

// Composant de compteur animé pour les chiffres
const Counter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    const numericValue = parseInt(value)
    if (isNaN(numericValue)) {
      setDisplayValue(value)
      return
    }

    const controls = animate(count, numericValue, { duration })
    return rounded.onChange((v) => setDisplayValue(v.toString()))
  }, [value, count, duration, rounded])

  return <span>{displayValue}</span>
}

const features = [
  { icon: Clock, title: "Biopsies", value: "3", unit: "jours", description: "Délai standard", color: "text-blue-600", pulse: false },
  { icon: FileCheck, title: "Pièces opératoires", value: "5", unit: "jours", description: "Analyse détaillée", color: "text-emerald-600", pulse: false },
  { icon: AlertCircle, title: "Circuit URGENT", value: "Priorisé", unit: "", description: "Traitement critique", color: "text-orange-600", pulse: true },
  { icon: Truck, title: "Logistique", value: "Incluse", unit: "", description: "Transport sécurisé", color: "text-purple-600", pulse: false },
]

export function DelaysSection() {
  return (
    /* Réduction du padding vertical (py-16 au lieu de py-24) */
    <section className="py-16 lg:py-16 bg-slate-50/80 border-y border-slate-200/60 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#022c37 1px, transparent 1px)', size: '20px 20px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Réduction de la marge basse du header (mb-12 au lieu de mb-20) */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Délais & <span className="text-primary">Transparence</span>
            </h2>
            <p className="text-lg text-slate-600">
              Chaque minute compte. Nous optimisons nos flux pour vous livrer des résultats fiables dans les meilleurs délais.
            </p>
          </motion.div>
          <div className="hidden md:block w-24 h-1.5 bg-primary/20 rounded-full mb-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200/50 group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl bg-slate-50 group-hover:bg-white transition-colors relative`}>
                  <feature.icon size={24} className={`${feature.color} relative z-10`} />
                  {feature.pulse && (
                    <span className="absolute inset-0 rounded-2xl bg-orange-400 animate-ping opacity-20" />
                  )}
                </div>
                <h3 className="font-bold text-slate-800 text-xs uppercase tracking-widest">{feature.title}</h3>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-light text-slate-900 leading-none tracking-tighter">
                  <Counter value={feature.value} />
                </span>
                {feature.unit && (
                  <span className="text-sm font-bold text-primary uppercase">{feature.unit}</span>
                )}
              </div>
              
              <p className="text-slate-500 text-sm mb-6">{feature.description}</p>
              
              <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 + (index * 0.1) }}
                  className={`h-full bg-gradient-to-r from-transparent via-primary/40 to-primary`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Réduction de la marge haute du footer bar (mt-12 au lieu de mt-20) et du padding py-6 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-6 py-8 border-t border-slate-200"
        >
          {[
            { icon: Truck, label: "Logistique", text: "Coursier disponible" },
            { icon: Package, label: "Kits", text: "Prélèvements prêts" },
            { icon: Calendar, label: "Réception", text: "Lun-Ven 08H00-19H30" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 group">
              <item.icon className="text-primary/40 group-hover:text-primary transition-colors" size={20} />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">{item.label}</span>
                <span className="text-sm font-semibold text-slate-700">{item.text}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}