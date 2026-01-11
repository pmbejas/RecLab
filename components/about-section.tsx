"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: "50+", label: "Proyectos" },
    { value: "3+", label: "Years" },
    { value: "100%", label: "Satisfacción" },
  ]

  return (
    <section ref={sectionRef} id="nosotros" className="py-32 bg-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/3 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-3/4 overflow-hidden">
              <img
                src="/photographer-portrait.png"
                alt="About Alex Morgan"
                className={`w-full h-full object-cover transition-all duration-1000 ${isVisible ? "scale-100 opacity-100" : "scale-110 opacity-0"
                  }`}
              />

              {/* Image Border Frame */}
              <div className="absolute inset-0 border-2 border-primary/20" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-primary" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-primary" />
            </div>

            {/* Floating Stats Card */}
            <div className={`absolute -bottom-8 -right-8 bg-background border border-border p-6 shadow-2xl transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}>
              <div className="text-4xl font-light text-primary mb-1">10+</div>
              <div className="text-xs tracking-wider uppercase text-muted-foreground">Años de Experiencia</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className={`flex items-center gap-6 mb-6 transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}>
                <div className="w-12 h-0.5 bg-primary" />
                <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground">sobre Nosotros</span>
              </div>

              <h2 className={`text-5xl sm:text-6xl font-extralight tracking-tight mb-8 transition-all duration-700 delay-100 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}>
                Visual Storytelling
              </h2>
            </div>

            {/* Text Content */}
            <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos RecLab, un estudio de narración visual apasionado por capturar momentos auténticos y crear relatos visuales impactantes a través de la fotografía y video.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Con más de una década de experiencia, en RecLab hemos tenido el privilegio de trabajar con clientes diversos en proyectos de retrato, paisaje y documental, tanto en fotografía como en video. Nuestro enfoque combina solidez técnica con una mirada sensible a la emoción y la composición.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada imagen cuenta una historia, y en RecLab estamos comprometidos a ayudarte a contar la tuya con creatividad, profesionalismo y pasión.
              </p>
            </div>

            {/* Stats Grid */}
            <div className={`grid grid-cols-3 gap-2 text-center pt-8 border-t border-border transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}>
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group"
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="relative inline-block">
                    <div className="text-5xl font-light text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </div>
                  <div className="text-sm tracking-wider uppercase text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}