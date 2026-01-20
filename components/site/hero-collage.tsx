"use client"

import { motion } from "framer-motion"

export function HeroCollage() {
  return (
    <section className="relative px-1 w-full overflow-hidden">
      <div className="md:hidden relative h-screen">

        {/* IMAGEN PRINCIPAL */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="absolute inset-0 w-full px-3 z-10"
        >
          <img
            src="/assets/hero/collage1.png"
            alt="Hero background"
            className="object-cover w-full"
          />
        </motion.div>

        {/* VIDEO 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 1.08, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="absolute top-15 right-5 w-35 z-9"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full rounded-sm"
          >
            <source src="/assets/hero/hero-vid1.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* VIDEO 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 1.08, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="absolute top-70 left-5 w-39 z-9"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full rounded-sm"
          >
            <source src="/assets/hero/hero-vid1.mp4" type="video/mp4" />
          </video>
        </motion.div>

      </div>
    </section>
  )
}
