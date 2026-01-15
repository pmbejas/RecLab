"use client"

import { MessageCircle, X } from "lucide-react"
import { useState } from "react"

export function WhatsAppButton() {
  const whatsappNumber = "5493815774505"
  const defaultMessage = "¡Hola! Me gustaría consultar sobre tus servicios de fotografía."
  const [isExpanded, setIsExpanded] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, "_blank")
  }

  return (
    <div className="fixed bottom-25 right-5 md:right-20 z-50 flex flex-col items-end gap-4">
      {/* Tooltip animado */}
      {showTooltip && !isExpanded && (
        <div className="bg-[#25D366] text-white px-4 py-2 rounded-lg shadow-xl animate-in fade-in slide-in-from-right-5 duration-300">
          <p className="text-sm font-medium whitespace-nowrap">¿Necesitas ayuda? ¡Contáctame!</p>
        </div>
      )}

      {/* Panel expandido */}
      {isExpanded && (
        <div className="bg-background border-2 border-[#25D366] rounded-2xl shadow-2xl p-6 w-80 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Fotografía</h3>
                <p className="text-xs text-muted-foreground">En línea</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="bg-[#25D366]/10 rounded-lg p-4 mb-4">
            <p className="text-sm text-foreground mb-2">
              ¡Hola! 👋
            </p>
            <p className="text-sm text-muted-foreground">
              ¿Cómo puedo ayudarte con tu próxima sesión fotográfica?
            </p>
          </div>

          <button
            onClick={handleClick}
            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg py-3 px-4 font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Iniciar conversación
          </button>
        </div>
      )}

      {/* Botón principal */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulso animado */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
        
        {/* Ícono */}
        <div className="relative z-10">
          <MessageCircle className={`w-8 h-8 transition-all duration-300 ${
            isExpanded ? "rotate-90 scale-90" : "group-hover:animate-bounce"
          }`} />
        </div>
        
        {/* Indicador de notificación */}
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-background" />
      </button>
    </div>
  )
}