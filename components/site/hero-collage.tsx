"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Pacifico } from "next/font/google"
import { CurvedArrow } from "@/components/site/arrow"

const PacificoFont = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
})

export function HeroCollage() {
    return (
        <section className="flex flex-col pt-35 md:pt-0 md:justify-center h-screen w-screen overflow-hidden">
            <div className="relative px-8 md:px-0 flex mx-auto">
                <div className="relative md:w-1/2 mx-auto">
                    {/* Texto Superior */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`absolute font-extrabold ${PacificoFont.className} text-md -top-10 right-0 md:top-47 md:-right-5 z-15 text-center rotate-3 md:rotate-0`}
                    >
                        {/*  <p className="p-0 m-0">Bienvenidos a</p>
            <p className="p-0 m-0">nuestro sitio</p> */}
                    </motion.div>

                    {/* IMAGEN PRINCIPAL */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut",
                        }}
                        className="relative z-10"
                    >
                        <Image
                            src="/assets/hero/collage-vertical.png"
                            alt="Hero background"
                            width={2000}
                            height={3000}
                            priority
                            sizes="(max-width: 767px) 100vw, 0px"
                            className="md:hidden object-cover max-h-screen md:px-0"
                            style={{ height: "auto" }}
                        />

                        <Image
                            src="/assets/hero/collage-horizontal.png"
                            alt="Hero background"
                            width={1920}
                            height={1080}
                            priority
                            sizes="(min-width: 768px) 75vw, 0px"
                            className="hidden md:block object-cover"
                            style={{ height: "auto" }}
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
                        className="absolute top-5 right-1 md:top-25 md:right-5  w-40 md:w-36 z-9"
                    >
                        <video autoPlay muted loop playsInline className="object-cover w-full h-full rounded-sm">
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
                        className="absolute bottom-3 left-1 md:bottom-5 md:left-5 w-45 md:w-60 z-9"
                    >
                        <video autoPlay muted loop playsInline className="object-cover w-full h-full rounded-sm">
                            <source src="/assets/hero/hero-video-horizontal.mp4" type="video/mp4" />
                        </video>
                    </motion.div>

                    {/* Texto Inferior */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`absolute font-extrabold ${PacificoFont.className} text-md md:text-md -bottom-10 md:-bottom-15 md:-right-25 z-15 text-center md:-rotate-10`}
                    >
                        <p className="p-0 m-0">Nos especializamos en</p>
                        <p className="p-0 m-0">Fotos y Videos</p>
                    </motion.div>

                    <CurvedArrow
                        className="absolute z-25 rotate-90 -bottom-4 -right-20 hidden md:block"
                        color="#000"
                        strokeWidth={5}
                        control1={{ x: 200, y: 40 }}
                        control2={{ x: 400, y: 40 }}
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </section>
    )
}
