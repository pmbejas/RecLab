"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/dramatic-mountain-sunset.png" 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-linear-to-b from-background/5 via-background/15 to-background" />
        <div className="absolute inset-0 bg-linear-to-r from-background/5 via-transparent to-background/50" /> */}
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-">
        <div className="absolute top-20 left-10 w-2 h-2 border border-primary rotate-45" />
        <div className="absolute top-40 right-20 w-3 h-3 border border-primary" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 border border-primary rotate-45" />
        <div className="absolute bottom-20 right-1/3 w-2.5 h-2.5 border border-primary" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Small Label */}
          <div className="mb-8 overflow-hidden">
            <div className="inline-block animate-slideUp">
              <span className="text-lg tracking-[0.3em] uppercase backdrop-blur-sm px-4 py-2 text-secondary/80">
                Visual Storytelling
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="mb-8 overflow-hidden">
            <div className="animate-slideUp" style={{ animationDelay: "0.1s" }}>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight leading-[0.9] text-secondary/70 drop-shadow-lg">
                Capturando
              </span>
            </div>
            <div className="animate-slideUp" style={{ animationDelay: "0.2s" }}>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight leading-[0.9] text-secondary/70 drop-shadow-lg">
                Momentos
              </span>
            </div>
          </h1>

          {/* Description */}
          <div className="mb-12 overflow-hidden max-w-2xl">
            <p className="text-lg md:text-xl text-secondary/90 leading-relaxed animate-slideUp px-4 py-3 inline-block" style={{ animationDelay: "0.3s" }}>
              A través del lente, con pasión y creatividad, transformamos experiencias auténticas en narrativas visuales atemporales.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-slideUp" style={{ animationDelay: "0.4s" }}>
            <Link href="#portfolio">
              <Button 
                size="lg" 
                className="group relative overflow-hidden px-8 py-6 text-base tracking-wider uppercase cursor-pointer"
              >
                <span className="relative z-10">Nuestro Trabajo</span>
                <div className="absolute inset-0 bg-muted-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="group relative overflow-hidden px-8 py-6 text-base tracking-wider bg-secondary/80 hover:bg-secondary/80 uppercase cursor-pointer border-0"
              >
                <span className="relative z-10">Comunicate con nosotros</span>
                <div className="absolute inset-0 bg-muted-foreground/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Vertical Text */}
{/*       <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
        <div className="writing-mode-vertical text-sm tracking-[0.3em] uppercase text-muted-foreground/50">
          Scroll para explorar
        </div>
      </div> */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-0.5 h-16 bg-linear-to-b from-secondary to-transparent animate-scrollPulse" />
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollPulse {
          0%, 100% {
            opacity: 0;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(20px);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out both;
        }

        .animate-scrollPulse {
          animation: scrollPulse 2s ease-in-out infinite;
        }

        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  )
}