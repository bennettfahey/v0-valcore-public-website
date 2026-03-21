"use client"

import { Globe, BadgeCheck, Users, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const advantages = [
  {
    title: "National contracts",
    description:
      "Leverage agreements negotiated at scale across thousands of businesses nationwide.",
    icon: Globe,
  },
  {
    title: "Guaranteed savings",
    description:
      "Pre-negotiated pricing with documented savings. See your projected savings before you commit.",
    icon: BadgeCheck,
  },
  {
    title: "Trusted suppliers",
    description:
      "Direct access to industry-leading vendors like Grainger, Staples, CDW, UPS, Sherwin-Williams, and more.",
    icon: Users,
  },
  {
    title: "Simple participation",
    description:
      "Easy implementation with minimal disruption. We handle the paperwork — you focus on your business.",
    icon: Sparkles,
  },
]

export function AdvantageSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Why Valcore
          </p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            The Valcore advantage
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="text-center"
              >
                <div className="mx-auto h-12 w-12 rounded-2xl bg-primary/[0.06] flex items-center justify-center mb-5">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-3">
                  {advantage.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {advantage.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
