'use client'

import { useState } from 'react'

const speakers = [
  {
    name: 'Dr. María Rodríguez',
    title: 'Chief AI Officer',
    company: 'BCP',
    country: '🇵🇪 Perú',
    bio: 'Líder en implementación de IA en servicios financieros con más de 15 años de experiencia. Ha liderado la transformación digital de múltiples instituciones financieras en LATAM.',
    topic: 'IA en Fintech: El Futuro de las Finanzas en Perú',
    image: '👩‍💼'
  },
  {
    name: 'Carlos Mendoza',
    title: 'Founder & CEO',
    company: 'PeruTech Ventures',
    country: '🇵🇪 Perú',
    bio: 'Emprendedor serial y líder en el ecosistema de startups peruano. Ha fundado 3 empresas de tecnología exitosas y es mentor de más de 50 startups.',
    topic: 'Escalando Startups de IA en Mercados Emergentes',
    image: '👨‍💼'
  },
  {
    name: 'Dra. Ana Gutiérrez',
    title: 'Research Lead AI Ethics',
    company: 'Universidad UTEC',
    country: '🇵🇪 Perú',
    bio: 'Investigadora de ética en IA y profesora en UTEC. Autora de múltiples publicaciones sobre el impacto social de la inteligencia artificial.',
    topic: 'IA Ética: Construyendo Confianza con Clientes',
    image: '👩‍🔬'
  },
  {
    name: 'Roberto Silva',
    title: 'VP of Engineering',
    company: 'Rappi',
    country: '🇨🇴 Colombia',
    bio: 'Experto en IA aplicada a logística y optimización. Ha liderado equipos que procesan millones de transacciones diarias usando machine learning.',
    topic: 'IA en Logística: Optimización a Gran Escala',
    image: '👨‍💻'
  },
  {
    name: 'Dra. Patricia Gómez',
    title: 'Data Science Director',
    company: 'MercadoLibre',
    country: '🇦🇷 Argentina',
    bio: 'Científica de datos con experiencia en e-commerce y recomendación personalizada. Ha desarrollado sistemas de IA que impactan a millones de usuarios.',
    topic: 'Personalización con IA: De Datos a Experiencias',
    image: '👩‍🎓'
  },
  {
    name: 'Miguel Torres',
    title: 'CTO',
    company: 'Yape',
    country: '🇵🇪 Perú',
    bio: 'Líder técnico detrás de una de las aplicaciones fintech más exitosas de Perú. Experto en arquitecturas escalables y detección de fraude con IA.',
    topic: 'Detección de Fraude con Machine Learning',
    image: '👨‍💼'
  },
  {
    name: 'Laura Martínez',
    title: 'AI Product Manager',
    company: 'Google Cloud',
    country: '🇺🇸 USA',
    bio: 'Product manager con experiencia en llevar productos de IA al mercado. Ha trabajado con empresas de todo el mundo en sus transformaciones de IA.',
    topic: 'De Prototipo a Producción: IA en Empresas',
    image: '👩‍💼'
  },
  {
    name: 'Diego Ramírez',
    title: 'Founder',
    company: 'AI Startup Lab',
    country: '🇵🇪 Perú',
    bio: 'Emprendedor e inversionista enfocado en startups de IA. Ha ayudado a más de 30 startups a escalar sus soluciones de inteligencia artificial.',
    topic: 'Invirtiendo en IA: Qué Buscan los VCs',
    image: '👨‍💼'
  }
]

export default function SpeakerShowcase() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<number | null>(null)

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Aprende de los Pioneros de IA en Perú y LATAM
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conoce a los expertos que están liderando la revolución de IA en América Latina
          </p>
          <div className="mt-4 inline-block bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-lg px-6 py-2">
            <p className="text-purple-300">
              🎯 60% Speakers Peruanos | 30% LATAM | 10% Internacional
            </p>
          </div>
        </div>

        {/* Speakers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 transform transition hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
              onClick={() => setSelectedSpeaker(index)}
            >
              {/* Speaker Image Placeholder */}
              <div className="text-6xl mb-4 text-center">{speaker.image}</div>

              {/* Speaker Info */}
              <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
              <p className="text-cyan-400 text-sm font-semibold mb-1">{speaker.title}</p>
              <p className="text-gray-400 text-sm mb-2">{speaker.company}</p>
              <p className="text-gray-500 text-xs mb-3">{speaker.country}</p>

              {/* Topic */}
              <div className="bg-white/5 rounded-lg p-3 mt-4">
                <p className="text-xs text-gray-400 mb-1">Sesión:</p>
                <p className="text-sm text-white font-medium">{speaker.topic}</p>
              </div>

              {/* View Bio Button */}
              <button className="w-full mt-4 py-2 bg-purple-600/30 hover:bg-purple-600/50 text-purple-300 rounded-lg text-sm font-semibold transition">
                Ver Biografía Completa
              </button>
            </div>
          ))}
        </div>

        {/* Speaker Modal */}
        {selectedSpeaker !== null && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedSpeaker(null)}
          >
            <div
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-6xl">{speakers[selectedSpeaker].image}</div>
                <button
                  onClick={() => setSelectedSpeaker(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <h3 className="text-3xl font-bold text-white mb-2">{speakers[selectedSpeaker].name}</h3>
              <p className="text-cyan-400 text-lg font-semibold mb-1">{speakers[selectedSpeaker].title}</p>
              <p className="text-gray-300 mb-2">{speakers[selectedSpeaker].company}</p>
              <p className="text-gray-500 mb-6">{speakers[selectedSpeaker].country}</p>

              <div className="bg-purple-600/20 rounded-lg p-4 mb-6">
                <p className="text-sm text-purple-300 mb-2">Sesión:</p>
                <p className="text-xl text-white font-semibold">{speakers[selectedSpeaker].topic}</p>
              </div>

              <p className="text-gray-300 leading-relaxed">{speakers[selectedSpeaker].bio}</p>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">¿Quieres ser parte del panel de speakers?</p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition">
            Postula como Speaker
          </button>
        </div>
      </div>
    </section>
  )
}
