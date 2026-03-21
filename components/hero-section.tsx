"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

export function HeroSection() {
  return (
    <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Subtle gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-secondary/50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1] text-balance"
          >
            Strategic purchasing power for your business.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto"
          >
            Valcore connects companies to pre-negotiated contracts with 100+
            industry-leading vendors — saving members up to 40% on indirect
            spend, at zero cost.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[15px] font-semibold text-primary-foreground transition-colors duration-200 hover:bg-[#2D5A1E] cursor-pointer"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how-it-works"
              className="group inline-flex items-center justify-center gap-1.5 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors duration-200 cursor-pointer"
            >
              See how it works
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
