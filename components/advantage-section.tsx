"use client"

import { useEffect, useRef, useState } from "react"
import { Globe, BadgeCheck, Users, Sparkles } from "lucide-react"

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
    <section ref={sectionRef} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            The Valcore advantage
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <div
                key={advantage.title}
                className={`text-center transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mx-auto h-14 w-14 rounded-full bg-primary flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {advantage.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/70">
                  {advantage.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
