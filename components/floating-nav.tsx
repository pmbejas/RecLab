"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Briefcase, Mail } from "lucide-react"

export function FloatingNav() {
  const pathname = usePathname()

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

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-5/6 bg-white rounded-full shadow-2xl border border-gray-200">
        <div className="flex items-center justify-around px-4 py-3">
          {menuItems.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative flex flex-col items-center gap-1 px-6 py-2 rounded-full transition-all duration-300 ${
                  active 
                    ? "bg-black text-white" 
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <item.icon className={`w-5 h-5 transition-transform duration-300 ${
                  active ? "scale-110" : "group-hover:scale-110"
                }`} />
                <span className={`text-xs font-medium tracking-wide uppercase transition-all duration-300 ${
                  active ? "opacity-100" : "opacity-70 group-hover:opacity-100"
                }`}>
                  {item.name}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}