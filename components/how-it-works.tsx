"use client"

import { Upload, FileText, CheckSquare, Zap } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Submit spend data",
    description:
      "Provide invoices, purchase orders, or AP files. PDF invoices are ideal, but even 1-2 months of data is enough. Upload through our portal or email directly.",
    icon: Upload,
  },
  {
    number: "02",
    title: "Review savings analysis",
    description:
      "We generate a personalized savings report. Every item mapped to a preferred vendor equivalent with projected savings. Review online or export to CSV.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Select categories",
    description:
      "Choose which spend categories to activate. No obligation to enroll in every category — start where the value is highest.",
    icon: CheckSquare,
  },
  {
    number: "04",
    title: "Start saving",
    description:
      "We handle vendor enrollment paperwork. Approval takes 1-3 weeks. You begin purchasing at GPO-negotiated pricing immediately.",
    icon: Zap,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            How it works
          </p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Get started in four steps
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="relative rounded-2xl bg-white/70 backdrop-blur-sm border border-black/[0.06] p-6 transition-shadow duration-300 hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-semibold text-border">
                    {step.number}
                  </span>
                  <div className="h-10 w-10 rounded-xl bg-primary/[0.06] flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
