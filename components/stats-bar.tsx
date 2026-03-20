"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "100+", label: "Negotiated vendor agreements" },
  { value: "Up to 40%", label: "Average member savings" },
]

export function StatsBar() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Content */}
          <div className="lg:max-w-md">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl text-balance">
              Increase your purchasing power.
            </h2>
            <Button
              asChild
              size="lg"
              className="mt-6 bg-white text-primary hover:bg-white/90"
            >
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Right Stats */}
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col sm:px-8 lg:px-12 ${
                  index !== stats.length - 1
                    ? "sm:border-r sm:border-white/20"
                    : ""
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                } transition-all duration-700`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <span className="text-4xl lg:text-5xl font-semibold text-white">
                  {stat.value}
                </span>
                <span className="mt-2 text-sm text-white/70">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
