"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/60 backdrop-blur-xl text-foreground"  
          : "bg-transparent text-secondary"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            className="relative group"
          >
            <span className="text-3xl font-medium tracking-[0.2em] uppercase">
              RecLab
            </span>
            {/* <div className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" /> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {["Instagram", "Facebook", "TikTok"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative tracking-wider uppercase group font-light text-lg"
              >
                <span className="transition-colors duration-100">
                  {item}
                </span>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden relative overflow-hidden group" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
            {mobileMenuOpen ? <X className="h-5 w-5 relative z-10" /> : <Menu className="h-5 w-5 relative z-10" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-8 space-y-6 border-t border-border/50 backdrop-blur-xl">
            {["Portfolio", "Nosotros", "Contacto"].map((item, i) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-lg tracking-wider uppercase text-muted-foreground hover:text-foreground transition-all duration-300"
                style={{ 
                  animation: `slideIn 0.3s ease-out ${i * 0.1}s both` 
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  )
}