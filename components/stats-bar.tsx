"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  { value: "100+", label: "Negotiated vendor agreements" },
  { value: "Up to 40%", label: "Average member savings" },
  { value: "$0", label: "Cost to join" },
]

export function StatsBar() {
  return (
    <section className="bg-[#1A1A1A]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-10 py-16 lg:py-20 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:max-w-md"
          >
            <h2 className="text-3xl font-semibold text-white sm:text-4xl text-balance">
              Increase your purchasing power.
            </h2>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors duration-200 hover:bg-white/90 cursor-pointer"
            >
              Get Started
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          {/* Right Stats */}
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-0">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className={`flex flex-col sm:px-8 lg:px-12 ${
                  index !== stats.length - 1
                    ? "sm:border-r sm:border-white/20"
                    : ""
                }`}
              >
                <span className="text-4xl lg:text-5xl font-semibold text-white">
                  {stat.value}
                </span>
                <span className="mt-2 text-sm text-white/60">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
