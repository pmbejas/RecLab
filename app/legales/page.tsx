import { Header } from "@/components/header"
import { LegalesSection } from "@/components/legales"
import { Footer } from "@/components/footer"
import { FloatingNav } from "@/components/floating-nav"

export default function Legales() {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingNav />
      <main className="relative">
      <LegalesSection />
      </main>
      <Footer />
    </div>
  )
}