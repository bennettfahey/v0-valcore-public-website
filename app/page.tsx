import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatsBar } from "@/components/stats-bar"
import { VendorCarousel } from "@/components/vendor-carousel"
import { HowItWorks } from "@/components/how-it-works"
import { CategoriesGrid } from "@/components/categories-grid"
import { AdvantageSection } from "@/components/advantage-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsBar />
      <VendorCarousel />
      <HowItWorks />
      <CategoriesGrid />
      <AdvantageSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
