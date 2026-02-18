"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { HeroCollage } from "./site/hero-collage"

export function HeroSection() {
  return (
    <section className="h-screen w-screen fixed flex flex-col justify-center overflow-hidden mt-0 bg-amber-100 text-black">

      <div className="absolute inset-0 opacity-30">
        <Image
          src="/assets/hero/noise.png"
          alt="noise texture"
          fill
          className="object-cover pointer-events-none select-none"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="flex flex-col gap-3 mx-auto">
          <HeroCollage />
        </div>
      </div>
    </section>
  )
}