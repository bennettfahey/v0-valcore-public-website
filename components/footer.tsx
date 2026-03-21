import Link from "next/link"
import { ValcoreLogo } from "./valcore-logo"

const footerLinks = [
  { href: "#", label: "About" },
  { href: "/#categories", label: "Categories" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of use" },
]

export function Footer() {
  return (
    <footer className="bg-foreground py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <ValcoreLogo variant="light" />

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-background/50 hover:text-background/80 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-sm text-background/30">
            &copy; 2026 Valcore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
