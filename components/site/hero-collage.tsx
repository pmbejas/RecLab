"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google";

const PacificoFont = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
});

export function HeroCollage() {
    return (
        <section className="flex flex-col pt-35 md:pt-0 md:justify-center h-screen w-screen overflow-hidden">
            <div className="relative px-8 md:px-0 flex mx-auto">

                {/* Texto Superior */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`absolute font-extrabold ${PacificoFont.className} text-md -top-10 right-12 z-15 text-center rotate-3`}
                >
                    <p className="p-0 m-0">Bienvenidos a</p>
                    <p className="p-0 m-0">nuestro sitio</p>
                </motion.div>

                {/* IMAGEN PRINCIPAL */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.2,
                        ease: "easeOut",
                    }}
                    className="relative z-10 mx-auto md:w-3/4"
                >
                    <img
                        src="/assets/hero/collage-vertical.png"
                        alt="Hero background"
                        className="md:hidden object-cover max-h-screen md:px-0"
                    />
                    <img
                        src="/assets/hero/collage-horizontal.png"
                        alt="Hero background"
                        className="hidden md:block object-cover"
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
                    className="absolute top-5 right-9 md:top-2/7 md:right-1/4 w-38 z-9"
                >
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="object-cover w-full h-full rounded-sm md:rotate-90"
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
                    className="absolute bottom-3 left-8 md:bottom-1/12 md:left-2/12 w-30 z-9"
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

                {/* Texto Inferior */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`absolute font-extrabold ${PacificoFont.className} text-md -bottom-10 z-15 text-center`}
                >
                    <p className="p-0 m-0">Nos especializamos en</p>
                    <p className="p-0 m-0">Fotos y Videos</p>
                </motion.div>

            </div>
        </section>
    )
}