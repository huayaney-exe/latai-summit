'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 23,
    seconds: 45
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAgenda = () => {
    document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Únete a 500+ Líderes LATAM
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Construyendo el Futuro de la IA en Perú
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            2 días de estrategias accionables de IA, speakers de clase mundial,
            y networking de alto impacto con la comunidad de innovación de Perú
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToPricing}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg font-semibold rounded-full shadow-lg transform transition hover:scale-105 hover:shadow-cyan-500/50 w-full sm:w-auto"
            >
              Obtener Early Bird - Ahorra 40%
            </button>
            <button
              onClick={scrollToAgenda}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-lg font-semibold rounded-full border-2 border-white/30 transform transition hover:scale-105 w-full sm:w-auto"
            >
              Ver Agenda Completa
            </button>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-300 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              <span className="text-sm sm:text-base">15 Speakers Expertos</span>
            </div>
            <div className="hidden sm:block w-1 h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏢</span>
              <span className="text-sm sm:text-base">50+ Empresas</span>
            </div>
            <div className="hidden sm:block w-1 h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📅</span>
              <span className="text-sm sm:text-base">Mayo 7-8, 2025</span>
            </div>
            <div className="hidden sm:block w-1 h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📍</span>
              <span className="text-sm sm:text-base">Lima, Perú</span>
            </div>
          </div>

          {/* Urgency Element */}
          <div className="inline-block bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg px-6 py-4">
            <p className="text-red-200 text-sm mb-2">⏰ Early Bird termina en:</p>
            <div className="flex gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{timeLeft.days}</div>
                <div className="text-xs text-gray-400">días</div>
              </div>
              <div className="text-3xl text-white">:</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{timeLeft.hours}</div>
                <div className="text-xs text-gray-400">horas</div>
              </div>
              <div className="text-3xl text-white">:</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{timeLeft.minutes}</div>
                <div className="text-xs text-gray-400">min</div>
              </div>
              <div className="text-3xl text-white">:</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{timeLeft.seconds}</div>
                <div className="text-xs text-gray-400">seg</div>
              </div>
            </div>
            <p className="text-red-200 text-sm mt-2">Solo quedan 12 tickets a este precio</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
