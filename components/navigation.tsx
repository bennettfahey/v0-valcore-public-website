"use client"

import { useState, useEffect, useRef } from "react"
import { ValcoreLogo } from "./valcore-logo"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { categories } from "@/lib/categories-data"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCategoriesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300",
          isScrolled
            ? "bg-white/70 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-black/[0.06]"
            : "bg-white/50 backdrop-blur-md border border-transparent"
        )}
      >
        <Link href="/" className="flex-shrink-0">
          <ValcoreLogo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {/* Categories Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="flex items-center gap-1 text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-foreground cursor-pointer"
            >
              Categories
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  categoriesOpen && "rotate-180"
                )}
              />
            </button>

            <AnimatePresence>
              {categoriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-xl bg-white border border-black/[0.06] shadow-lg py-2"
                >
                  <Link
                    href="/categories"
                    onClick={() => setCategoriesOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-primary hover:bg-black/[0.03] transition-colors duration-150 cursor-pointer"
                  >
                    View All Categories
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <div className="my-1.5 border-t border-black/[0.06] mx-3" />
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/categories/${category.slug}`}
                      onClick={() => setCategoriesOpen(false)}
                      className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-black/[0.03] transition-colors duration-150 cursor-pointer"
                    >
                      {category.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="/#how-it-works"
            className="text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-foreground cursor-pointer"
          >
            How It Works
          </a>
          <Link
            href="/partners"
            className="text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-foreground cursor-pointer"
          >
            Partners
          </Link>
          <a
            href="/#faq"
            className="text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-foreground cursor-pointer"
          >
            FAQ
          </a>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex lg:items-center lg:gap-5">
          <a
            href="https://app.valcoregpo.com"
            className="text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-foreground cursor-pointer"
          >
            Log in
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-[#2D5A1E] cursor-pointer"
          >
            Get Started
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 -mr-2 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden mx-auto max-w-7xl mt-1 overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl border border-black/[0.06] shadow-lg"
          >
            <div className="px-6 py-5 space-y-1">
              {/* Mobile Categories Dropdown */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
                  className="flex w-full items-center justify-between py-2.5 text-[15px] font-medium text-foreground/80 hover:text-foreground cursor-pointer"
                >
                  Categories
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      mobileCategoriesOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {mobileCategoriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.15 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-black/[0.06] pl-4 pb-2">
                        <Link
                          href="/categories"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2 text-sm font-medium text-primary cursor-pointer"
                        >
                          View All Categories
                        </Link>
                        {categories.map((category) => (
                          <Link
                            key={category.slug}
                            href={`/categories/${category.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1.5 text-sm text-foreground/60 hover:text-foreground transition-colors duration-150 cursor-pointer"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="/#how-it-works"
                className="block py-2.5 text-[15px] font-medium text-foreground/80 hover:text-foreground cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <Link
                href="/partners"
                className="block py-2.5 text-[15px] font-medium text-foreground/80 hover:text-foreground cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partners
              </Link>
              <a
                href="/#faq"
                className="block py-2.5 text-[15px] font-medium text-foreground/80 hover:text-foreground cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>

              <div className="pt-4 mt-3 border-t border-black/[0.06] space-y-3">
                <a
                  href="https://app.valcoregpo.com"
                  className="block text-center py-2.5 text-sm font-medium text-foreground/70 hover:text-foreground cursor-pointer"
                >
                  Log in
                </a>
                <a
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-[#2D5A1E] transition-colors duration-200 cursor-pointer"
                >
                  Get Started
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
