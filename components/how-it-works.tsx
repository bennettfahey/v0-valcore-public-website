"use client"

import { useEffect, useRef, useState } from "react"
import { Upload, FileText, CheckSquare, Zap } from "lucide-react"

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
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="how-it-works" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            How Valcore works
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className={`relative rounded-2xl bg-card p-6 shadow-sm border border-border transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-semibold text-primary/30">
                    {step.number}
                  </span>
                  <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/70">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
