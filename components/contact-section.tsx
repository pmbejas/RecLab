"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@reclab.photo",
      href: "mailto:info@reclab.photo",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+54 9 (381) 5774505",
      href: "tel:+5493815774505",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Tucumán, AR",
      href: null,
    },
  ]

  return (
    <section id="contacto" className="py-25 bg-background relative overflow-hidden h-screen">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-primary/3 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-3 sm:px-6 lg:px-40">
        {/* Header */}
        <div className="mb-5 lg:mb-20">
          <div className="flex items-center gap-8 mb-4">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Contactanos</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extralight tracking-tight">
            Comencemos a Crear Juntos
          </h2>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-20">
          <div className="w-full md:w-1/2">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Siempre estamos entusiasmados por conversar sobre nuevos proyectos y oportunidades creativas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Puedes comunicarte con nosotros a través de nuestras redes o mediante el ícono de WhatsApp.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={info.label}
                className="group flex items-start gap-6"
              >
                <div className="shrink-0 relative">
                  <div className="w-14 h-14 border-2 border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:rotate-45">
                    <info.icon className="w-7 h-7 text-primary transition-transform duration-300 group-hover:-rotate-45" />
                  </div>
                </div>
                <div className="pt-2">
                  <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                    {info.label}
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-lg text-foreground hover:text-primary transition-colors duration-300 relative inline-block group"
                    >
                      {info.value}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                    </a>
                  ) : (
                    <div className="text-lg text-foreground">{info.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}