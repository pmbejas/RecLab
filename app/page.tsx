import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FloatingNav } from "@/components/floating-nav"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingNav />
      <main className="relative">
        <HeroSection />
      </main>
    </div>
  )
}