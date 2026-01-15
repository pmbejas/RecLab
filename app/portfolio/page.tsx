import { Header } from "@/components/header"
import { PortfolioSection } from "@/components/portfolio-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingNav } from "@/components/floating-nav"

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingNav />
      <main className="relative">
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  )
}