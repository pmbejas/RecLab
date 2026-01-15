import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { FloatingNav } from "@/components/floating-nav"

export default function SobreNosotros() {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingNav />
      <main className="relative">
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}