'use client'

import { useState, useEffect } from 'react'

const stats = [
  { number: '500+', label: 'Asistentes Esperados', icon: '👥' },
  { number: '15', label: 'Speakers Confirmados', icon: '🎤' },
  { number: '2', label: 'Días Intensivos', icon: '📅' },
  { number: '50+', label: 'Empresas Representadas', icon: '🏢' }
]

const recentRegistrations = [
  { name: 'Carlos', city: 'Lima', time: '2 mins ago' },
  { name: 'Ana', city: 'Arequipa', time: '8 mins ago' },
  { name: 'Miguel', city: 'Lima', time: '15 mins ago' },
  { name: 'Sofía', city: 'Cusco', time: '23 mins ago' }
]

export default function SocialProof() {
  const [currentReg, setCurrentReg] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReg(prev => (prev + 1) % recentRegistrations.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center transform transition hover:scale-105">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 animate-pulse">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Live Activity Feed */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg px-6 py-4 text-center transition-all duration-500">
            <p className="text-green-300 flex items-center justify-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm sm:text-base">
                🎟️ <strong>{recentRegistrations[currentReg].name}</strong> de {recentRegistrations[currentReg].city} se registró hace {recentRegistrations[currentReg].time}
              </span>
            </p>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">
            85% de tickets vendidos | 23 tickets vendidos en las últimas 48 horas
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 opacity-60">
          <div className="flex items-center gap-2 text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Pago Seguro con Stripe</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Reembolso 100% hasta 30 días antes</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-sm">Certificado de Asistencia Incluido</span>
          </div>
        </div>
      </div>
    </section>
  )
}
