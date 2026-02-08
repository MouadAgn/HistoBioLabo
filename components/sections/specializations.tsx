"use client"

import { motion } from "framer-motion"
import { 
  Dna, Stethoscope, Brain, Baby, Activity, Bone, CheckCircle2 
} from "lucide-react"

const specializations = [
  { name: "Dermatopathologie", description: "Pathologies cutanées", icon: Activity, color: "text-blue-600" },
  { name: "ORL", description: "Oto-rhino-laryngologie", icon: Stethoscope, color: "text-emerald-600" },
  { name: "Neuropathologie", description: "Système nerveux", icon: Brain, color: "text-purple-600" },
  { name: "Gynécopathologie", description: "Appareil génital féminin", icon: Baby, color: "text-pink-600" },
  { name: "Pathologie digestive", description: "Tube digestif", icon: Dna, color: "text-orange-600" },
  { name: "Os & parties molles", description: "Appareil locomoteur", icon: Bone, color: "text-slate-600" },
]

export function SpecializationsSection() {
  return (
    <section id="specializations" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Expertise et <span className="text-primary">Hyperspécialisation</span>
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl">
              Chaque échantillon est analysé par des pathologistes experts, garantissant une précision diagnostique de haut niveau.
            </p>

            <div className="space-y-4">
              {[
                { title: "Double lecture spécialisée", desc: "Validation renforcée systématique" },
                { title: "Concordance clinico-pathologique", desc: "Corrélation étroite avec les données" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 border-l-2 border-primary/20 hover:border-primary transition-colors bg-slate-50/50">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="mb-4 inline-flex p-3 rounded-xl bg-slate-50 group-hover:bg-primary/5 border border-slate-100 transition-colors">
                  <spec.icon size={22} className={spec.color} />
                </div>
                <h3 className="font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                  {spec.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {spec.description}
                </p>
                <div className="h-0.5 w-0 bg-primary/20 mt-4 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}