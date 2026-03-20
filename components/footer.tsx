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
    <footer className="bg-primary py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Logo */}
          <ValcoreLogo variant="light" />

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>


        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-white/40">
            © 2026 Valcore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
