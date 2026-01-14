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
    <section id="contacto" className="py-15 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-primary/3 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-8 mb-4">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Contactanos</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extralight tracking-tight">
            Comencemos a Crear
            <span className="block text-primary">Juntos</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <Label 
                  htmlFor="name" 
                  className="text-sm tracking-wider uppercase text-muted-foreground"
                >
                  Nombre
                </Label>
                <div className="relative">
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="border-b border-t-0 border-x-0 rounded-none px-0 py-4 text-lg focus-visible:ring-0 focus-visible:border-primary transition-colors"
                    required
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    focusedField === "name" ? "w-full" : "w-0"
                  }`} />
                </div>
              </div>

              <div className="space-y-3">
                <Label 
                  htmlFor="email" 
                  className="text-sm tracking-wider uppercase text-muted-foreground"
                >
                  Email
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu.email@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="border-b border-t-0 border-x-0 rounded-none px-0 py-4 text-lg focus-visible:ring-0 focus-visible:border-primary transition-colors"
                    required
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    focusedField === "email" ? "w-full" : "w-0"
                  }`} />
                </div>
              </div>

              <div className="space-y-3">
                <Label 
                  htmlFor="phone" 
                  className="text-sm tracking-wider uppercase text-muted-foreground"
                >
                  Telefono 
                </Label>
                <div className="relative">
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className="border-b border-t-0 border-x-0 rounded-none px-0 py-4 text-lg focus-visible:ring-0 focus-visible:border-primary transition-colors"
                    required
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    focusedField === "phone" ? "w-full" : "w-0"
                  }`} />
                </div>
              </div>

              <div className="space-y-3">
                <Label 
                  htmlFor="message" 
                  className="text-sm tracking-wider uppercase text-muted-foreground"
                >
                  Mensaje
                </Label>
                <div className="relative">
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Contanos sobre tu proyecto..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="border-b border-t-0 border-x-0 rounded-none px-0 py-4 text-lg resize-none focus-visible:ring-0 focus-visible:border-primary transition-colors"
                    required
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    focusedField === "message" ? "w-full" : "w-0"
                  }`} />
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="group relative overflow-hidden px-12 py-6 text-base tracking-wider uppercase mt-8"
              >
                <span className="relative z-10">Enviar Mensaje</span>
                <div className="absolute inset-0 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Siempre estamos entusiasmados por conversar sobre nuevos proyectos y oportunidades creativas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Puedes comunicarte con nosotros a través del formulario o directamente mediante el ícono de WhatsApp.
              </p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.label}
                  className="group flex items-start gap-6"
                >
                  <div className="shrink-0 relative">
                    <div className="w-14 h-14 border-2 border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:rotate-45">
                      <info.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:-rotate-45" />
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
      </div>
    </section>
  )
}