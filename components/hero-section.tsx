"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HeroCollage } from "./site/hero-collage"

export function HeroSection() {
  return (
    <section className="h-screen w-screen fixed flex flex-col justify-center overflow-hidden mt-0 bg-amber-100 text-black">

       <div className="absolute inset-0 opacity-30 bg-[url('/assets/hero/noise.png')] bg-cover bg-center"/>

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="flex flex-col gap-3 mx-auto">
          <HeroCollage />
        </div>
      </div>
    </section>
  )
}