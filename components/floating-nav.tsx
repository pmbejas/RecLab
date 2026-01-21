"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Briefcase, Mail, MoreHorizontal, Users, Scale, X } from "lucide-react"
import { useState } from "react"

export function FloatingNav() {
  const pathname = usePathname()
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  const mainMenuItems = [
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

  const submenuItems = [
    {
      name: "Nosotros",
      href: "/sobre-nosotros",
      icon: Users,
    },
    {
      name: "Legales",
      href: "/legales",
      icon: Scale,
    },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 md:px-40">
      <div className="w-full md:w-1/2 bg-white rounded-full shadow-3xl border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between gap-0 px-3 md:px-5 py-1 md:py-3">
          
          {/* Menú Principal */}
          <div className={`flex items-center justify-between gap-0 w-full transition-all duration-300 ${
            isSubmenuOpen ? "opacity-0 translate-x-4 absolute pointer-events-none" : "opacity-100 translate-x-0"
          }`}>
            {mainMenuItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative flex flex-col items-center gap-0 px-5 md:px-10 py-1 rounded-full transition-all duration-300 ${
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
            
            <button
              onClick={() => setIsSubmenuOpen(true)}
              className="group relative flex flex-col items-center gap-0 px-3 py-2 rounded-full transition-all duration-300 text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            >
              <MoreHorizontal className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </button>
          </div>

          {/* Submenú */}
          <div className={`flex items-center justify-between gap-0 w-full transition-all duration-300 ${
            isSubmenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 absolute pointer-events-none"
          }`}>
            {submenuItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsSubmenuOpen(false)}
                  className={`group relative flex flex-col items-center gap-0 px-5 md:px-10 py-1 rounded-full transition-all duration-300 ${
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
            
            <button
              onClick={() => setIsSubmenuOpen(false)}
              className="group relative flex flex-col items-center gap-0 px-3 py-2 rounded-full transition-all duration-300 text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            >
              <X className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-90" />
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}