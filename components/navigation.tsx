"use client"

import { useState, useEffect, useRef } from "react"
import { ValcoreLogo } from "./valcore-logo"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { categories } from "@/lib/categories-data"

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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background/90 backdrop-blur-sm"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
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
              className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Categories
              <ChevronDown className={cn("h-4 w-4 transition-transform", categoriesOpen && "rotate-180")} />
            </button>
            
            {categoriesOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 rounded-xl bg-card border border-border shadow-lg py-2">
                <Link
                  href="/categories"
                  onClick={() => setCategoriesOpen(false)}
                  className="block px-4 py-2 text-sm font-medium text-primary hover:bg-muted transition-colors"
                >
                  View All Categories
                </Link>
                <div className="my-2 border-t border-border" />
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/categories/${category.slug}`}
                    onClick={() => setCategoriesOpen(false)}
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href="/#how-it-works"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            How It Works
          </a>
          <a
            href="/#faq"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            FAQ
          </a>
        </div>

        <div className="hidden lg:flex lg:items-center">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="/#contact">Get Started</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="space-y-1 px-6 py-4">
            {/* Mobile Categories Dropdown */}
            <div>
              <button
                type="button"
                onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
                className="flex w-full items-center justify-between py-2 text-base font-medium text-foreground/80 hover:text-foreground"
              >
                Categories
                <ChevronDown className={cn("h-4 w-4 transition-transform", mobileCategoriesOpen && "rotate-180")} />
              </button>
              
              {mobileCategoriesOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l border-border pl-4">
                  <Link
                    href="/categories"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm font-medium text-primary"
                  >
                    View All Categories
                  </Link>
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/categories/${category.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-foreground/70 hover:text-foreground"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/#how-it-works"
              className="block py-2 text-base font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="/#faq"
              className="block py-2 text-base font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>

            <div className="pt-4 border-t border-border mt-4">
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="/#contact">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
