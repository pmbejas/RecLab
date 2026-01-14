"use client"

import { useState } from "react"

const portfolioImages = [
  {
    id: 1,
    src: "/natural-light-portrait.png",
    title: "Retrato Luz Natural",
    category: "Retratos",
  },
  {
    id: 2,
    src: "/mountain-landscape.png",
    title: "Mountain Vista",
    category: "Paisajes",
  },
  {
    id: 3,
    src: "/urban-street-life.png",
    title: "Urban Stories",
    category: "Documentales",
  },
  {
    id: 4,
    src: "/wedding-photography-emotional-moment.jpg",
    title: "Casamiento Emotivo",
    category: "Eventos",
  },
  {
    id: 5,
    src: "/fashion-editorial.png",
    title: "Editorial",
    category: "Moda",
  },
  {
    id: 6,
    src: "/wildlife-nature-photography.png",
    title: "Vida Salvaje",
    category: "Naturaleza",
  },
]

const categories = ["Todos", "Retratos", "Paisajes", "Documentales", "Eventos", "Moda", "Naturaleza"]

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "Todos" ? portfolioImages : portfolioImages.filter((img) => img.category === selectedCategory)

  return (
    <section id="portfolio" className="py-15 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/3 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-8 mb-4">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Trabajos Seleccionados</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extralight tracking-tight">
            Portfolio
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="group relative px-6 py-3 text-sm tracking-wider uppercase overflow-hidden"
            >
              <span className={`relative z-10 transition-colors duration-300 ${
                selectedCategory === category
                  ? "text-background"
                  : "text-muted-foreground group-hover:text-foreground"
              }`}>
                {category}
              </span>
              <div className={`absolute inset-0 transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary scale-100"
                  : "bg-border scale-x-0 group-hover:scale-x-100 origin-left"
              }`} />
            </button>
          ))}
        </div>

        {/* Image Grid - Asymmetric Layout */}
        <div className="grid grid-cols-12 gap-3 md:gap-5 px-0 md:px-20 items-center">
          {filteredImages.map((image, index) => {
            const isLarge = index % 5 === 0
            const isMedium = index % 4 === 0 && !isLarge
            
            return (
              <div
                key={image.id}
                className={`group relative overflow-hidden cursor-pointer ${
                  isLarge 
                    ? "col-span-12 md:col-span-7 row-span-1" 
                    : isMedium
                    ? "col-span-12 sm:col-span-6 md:col-span-4"
                    : "col-span-12 sm:col-span-4 md:col-span-3"
                }`}
                onMouseEnter={() => setHoveredId(image.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className={`relative overflow-hidden bg-muted ${
                  isLarge ? "aspect-16/10" : "aspect-4/5"
                }`}>
                  {/* Image */}
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    style={{
                      filter: hoveredId && hoveredId !== image.id ? "grayscale(1) brightness(0.5)" : "grayscale(0)"
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
                        {image.category}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-light tracking-tight text-foreground">
                        {image.title}
                      </h3>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}