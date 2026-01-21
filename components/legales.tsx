"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function LegalesSection() {
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

  return (
    <section ref={sectionRef} id="nosotros" className="py-25 relative overflow-hidden bg-red-50">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/3 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-40">
        <div className={`flex items-center gap-6 mb-6 transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}>
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Legales</span>
          </div>
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-24 items-center">
          {/* Content Side */}
          <div className="space-y-3 mt-10 lg:mt-0">
            {/* Header */}
            <div className="flex flex-col">
              <h2 className={`text-2xl sm:text-4xl font-extralight tracking-tight mb-8 transition-all duration-700 delay-100 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}>
                Terminos y condiciones
              </h2>
            </div>
            {/* Text Content */}
            <div className={`space-y-4 transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
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
          </div>
        </div>
      </div>
    </section>
  )
}