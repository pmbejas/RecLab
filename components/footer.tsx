import Link from "next/link"
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ]

  const quickLinks = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ]

  const services = [
    "Fotografia de Retratos",
    "Fotografia y video de paisajes",
    "Fotografia y video de Eventos",
    "Fotografia y video Comercial ",
  ]

  return (
    <footer className="bg-background border-t border-border relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/2 blur-3xl" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-light tracking-[0.2em] uppercase mb-4">
                RecLab
              </h3>
              <div className="w-16 h-0.5px bg-primary mb-6" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fotógrafos profesionales especializados en capturar momentos auténticos y crear historias visuales.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Secciones
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="group inline-block text-foreground hover:text-primary transition-colors duration-300 relative"
                  >
                    <span className="text-sm">{link.label}</span>
                    <div className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Servicios
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Redes
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 border-2 border-border hover:border-primary transition-all duration-300 flex items-center justify-center"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs tracking-wider text-muted-foreground">
              © {currentYear} RecLab Fotografía. Todos los Derechos Reservados.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-px bg-primary" />
              <p className="text-xs tracking-wider text-muted-foreground">
                Desarrollado con pasión por Pablo Bejas
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}