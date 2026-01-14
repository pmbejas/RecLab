"use client"

import Link from "next/link"
import { useState } from "react"
import { Instagram, Facebook, Mail, MessageCircle, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeaderBottom() {
  const [activeIcon, setActiveIcon] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://instagram.com", 
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    { 
      icon: Facebook, 
      href: "https://facebook.com", 
      label: "Facebook",
      color: "hover:text-blue-500"
    },
    { 
      icon: Mail, 
      href: "mailto:alex@alexmorgan.photo", 
      label: "Email",
      color: "hover:text-primary"
    },
    { 
      icon: MessageCircle, 
      href: "https://wa.me/15550001234", 
      label: "WhatsApp",
      color: "hover:text-green-500"
    },
  ]

  const menuItems = ["Portfolio", "Nosotros", "Contacto"]

  return (
    <header className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-white/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group md:flex-1">
            <div className="w-10 h-10 bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-black font-bold text-xl">R</span>
            </div>
            <span className="text-white text-lg tracking-[0.15em] uppercase font-light hidden sm:block">
              RecLab
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12 flex-1 justify-center">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative tracking-wider uppercase group text-sm lg:text-base"
              >
                <span className="text-white/70 group-hover:text-white transition-colors duration-300">
                  {item}
                </span>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Social Icons - Centered on Mobile */}
          <div className="flex items-center gap-10 md:gap-6 md:flex-1 md:justify-end absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                className={`group relative flex items-center justify-center transition-all duration-300 ${social.color}`}
                onMouseEnter={() => setActiveIcon(social.label)}
                onMouseLeave={() => setActiveIcon(null)}
                aria-label={social.label}
              >
                <social.icon className="w-7 h-7 text-white transition-all duration-300 group-hover:scale-110" />
                
                {/* Tooltip - Hidden on mobile */}
                <div className={`hidden sm:block absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white text-black text-xs tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                  activeIcon === social.label 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}>
                  {social.label}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
                </div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white hover:bg-white/10 relative z-10" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-8 w-8" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute bottom-full left-0 right-0 bg-black border-t border-white/10 backdrop-blur-xl">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {menuItems.map((item, i) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg tracking-wider uppercase text-white/70 hover:text-white transition-all duration-300 py-2"
                  style={{ 
                    animation: `slideIn 0.3s ease-out ${i * 0.1}s both` 
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
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