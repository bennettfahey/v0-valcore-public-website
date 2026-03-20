"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl text-balance">
            Strategic purchasing power for your business.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80 max-w-2xl mx-auto">
            Valcore connects companies to pre-negotiated contracts with 100+ industry-leading vendors — saving members up to 40% on indirect spend, at zero cost.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
            >
              <a href="#contact">Get started</a>
            </Button>
            <a
              href="#categories"
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
            >
              See our categories
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
