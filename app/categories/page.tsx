import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CategoriesPageContent } from "@/components/categories-page-content"

export const metadata = {
  title: "Our Vendor Categories | ValCore",
  description: "Pre-negotiated contracts across essential business needs. Explore our vendor categories for office supplies, MRO, packaging, safety equipment, and more.",
}

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <CategoriesPageContent />
      <Footer />
    </main>
  )
}
