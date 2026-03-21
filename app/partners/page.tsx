import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PartnersPageContent } from "@/components/partners-page-content"

export const metadata = {
  title: "Our Trusted Partners | ValCore",
  description: "Valcore is backed by a network of industry-leading software companies across agriculture, manufacturing, logistics, and more.",
}

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PartnersPageContent />
      <Footer />
    </main>
  )
}
