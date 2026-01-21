"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Instagram, Facebook, Youtube, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  
  const redes = [
    { 
      icon: <Instagram />,
      nombre:"@rec.lab", 
      href:"https://www.instagram.com/rec.lab/"
    },
    { 
      icon:<Facebook />,
      nombre:"@rec.lab", 
      href:"https://www.facebook.com/rec.lab/"
    },
    { 
      icon: <Youtube />,
      nombre:"@rec.lab", 
      href:"https://www.instagram.com/rec.lab/"
    }, 
  ]
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-transparent/30 backdrop-blur-2xl text-foreground"  
          : "bg-transparent text-secondary"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:px-40">
          <Link 
            href="/" 
            className="relative group flex justify-start items-center gap-3"
          >
            <Image
              src="/assets/logo-reclab-oscuro.png"
              alt="RecLab Logo"
              width={80}
              height={50}
              className="ms-5 object-contain"
            />
{/*             <span className="text-3xl font-medium tracking-[0.2em] uppercase">
              RecLab
            </span> */}
            {/* <div className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" /> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {redes.map((item) => (
              <Link
                key={item.nombre}
                href={`#${item.href.toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative tracking-wider uppercase group font-light text-lg"
              >
                <span className="transition-colors duration-100">
                  {item.icon}
                </span>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden relative overflow-hidden group h-10 w-10" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="relative z-10 text-xl text-black hover:bg-none" /> : <Globe className="text-black relative z-10 h-10 w-10" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-8 space-y-6 border-t border-border/50 backdrop-blur-xl">
            {redes.map((item, i) => (
              <Link
                key={item.nombre}
                href={`#${item.href.toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 flex text-lg gap-2 tracking-wider uppercase text-muted-foreground hover:text-foreground transition-all duration-300"
                style={{ 
                  animation: `slideIn 0.3s ease-out ${i * 0.1}s both` 
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.icon} {item.nombre.toLowerCase()}
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