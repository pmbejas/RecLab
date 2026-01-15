"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Briefcase, Mail, MoreHorizontal } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export function FloatingNav() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const menuItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Portfolio",
      href: "/portfolio",
      icon: Briefcase,
    },
    {
      name: "Contacto",
      href: "/contacto",
      icon: Mail,
    },
  ]

  const dropdownItems = [
    {
      name: "Sobre Nosotros",
      href: "/sobre-nosotros",
    },
    {
      name: "Legales",
      href: "/legales",
    },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 md:px-40">
      <div className="w-full md:w-1/2 bg-white rounded-full shadow-3xl border border-gray-200">
        <div className="flex items-center justify-between gap-0 px-2 md:px-5 py-1 md:py-3">
          {menuItems.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative flex flex-col items-center gap-0 px-4 md:px-10 py-1 rounded-full transition-all duration-300 ${
                  active 
                    ? "bg-black text-white" 
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <item.icon className={`w-5 h-5 transition-transform duration-300 ${
                  active ? "scale-110" : "group-hover:scale-110"
                }`} />
                <span className={`text-xs font-light tracking-wide uppercase transition-all duration-300 ${
                  active ? "opacity-100" : "opacity-70 group-hover:opacity-100"
                }`}>
                  {item.name}
                </span>
              </Link>
            )
          })}
          
          {/* Menú desplegable */}
          <div className="relative bg-none" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`group relative flex flex-col items-center gap-0 px-3 py-2 rounded-full transition-all duration-300${
                isMenuOpen
                  ? "bg-none text-black"
                  : "bg-none text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              <MoreHorizontal className={`w-5 h-5 transition-transform duration-300 ${
                isMenuOpen ? "scale-110 rotate-90" : "group-hover:scale-110"
              }`} />
              {/* <span className={`text-xs font-light tracking-wide uppercase transition-all duration-300 ${
                isMenuOpen ? "opacity-100" : "opacity-70 group-hover:opacity-100"
              }`}>
              </span> */}
            </button>

            {/* Dropdown con animación smooth */}
            <div 
              className={`absolute bottom-full mb-4 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden min-w-45 transition-all duration-300 ease-out origin-bottom ${
                isMenuOpen 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-4 scale-95 pointer-events-none"
              }`}
            >
              {dropdownItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${
                    index !== dropdownItems.length - 1 ? "border-b border-gray-100" : ""
                  } ${isActive(item.href) ? "bg-gray-50 font-medium" : ""}`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}