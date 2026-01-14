import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { HeaderBottom } from "@/components/header-bottom"

export default function Home() {
  return (
    <div className="min-h-screen">
{/*       <Header /> */}
      <HeaderBottom />
      <main className="relative">
        <HeroSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}