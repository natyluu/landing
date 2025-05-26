"use client"

import { useState } from "react"

export default function AICapabilitiesSection() {
  const [activeTab, setActiveTab] = useState<"capabilities" | "howToTalk">("capabilities")

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Sección principal */}
        <div className="mb-32">
          <div className="flex justify-center items-center mb-16 border-b border-zinc-800 pb-4 gap-8">
            <button
              onClick={() => setActiveTab("capabilities")}
              className={`text-sm font-medium transition-colors ${
                activeTab === "capabilities" ? "text-white" : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Capacidades técnicas de este GPT
            </button>
            <button
              onClick={() => setActiveTab("howToTalk")}
              className={`text-sm font-medium transition-colors ${
                activeTab === "howToTalk" ? "text-white" : "text-gray-400 hover:text-gray-300"
              }`}
            >
              ¿Cómo funciona?
            </button>
          </div>

          {activeTab === "capabilities" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {/* Primera columna */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs tracking-widest uppercase text-gray-400">Análisis Técnico</span>
                </div>

                <p className="text-gray-500 leading-relaxed text-sm">
                  El análisis técnico se basa en el estudio de precios y volumen a través de indicadores para
                  identificar oportunidades de entrada y salida. Nuestra tecnología integra datos de TwelveData en
                  tiempo real para ofrecer una visión completa del comportamiento del mercado.
                </p>
              </div>

              {/* Segunda columna */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs tracking-widest uppercase text-gray-400">Análisis Institucional</span>
                </div>

                <p className="text-gray-500 leading-relaxed text-sm">
                  Aunque no accedemos directamente a herramientas como el Order Book o Footprint Charts, implementamos
                  soluciones inteligentes alternativas que simulan estas funciones mediante la estructura del precio,
                  volumen y momentum.
                </p>
              </div>

              {/* Tercera columna */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs tracking-widest uppercase text-gray-400">Análisis Fundamental</span>
                </div>

                <p className="text-gray-500 leading-relaxed text-sm">
                  El análisis fundamental se enfoca en entender el impacto de noticias, eventos y sentimiento sobre los
                  activos financieros. A través del acceso web en tiempo real, analizamos el contexto económico y
                  mediático para complementar decisiones técnicas.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {/* Primera columna */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs tracking-widest uppercase text-gray-400">
                    Todo lo que analiza en segundos:
                  </span>
                </div>

                <p className="text-gray-500 leading-relaxed text-sm">
                  RSI (Relative Strength Index)
                  <br />
                  MACD (Moving Average Convergence Divergence)
                  <br />
                  Bandas de Bollinger
                  <br />
                  VWAP
                  <br />
                  EMA
                  <br />
                  Puntos Pivote
                  <br />
                  Regresión Lineal
                  <br />
                  Noticias relevantes en tiempo real
                  <br />
                  Análisis de sentimiento del mercado
                  <br />
                  Soportes y resistencias automáticos
                </p>
              </div>

              {/* Segunda columna */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs tracking-widest uppercase text-gray-400">¿Por qué elegir esta IA?</span>
                </div>

                <p className="text-gray-500 leading-relaxed text-sm">
                  Precisión de nivel institucional, pero accesible a todos
                  <br />
                  Adaptabilidad al estilo del trader
                  <br />
                  Resultados en segundos
                  <br />
                  Ahorro de tiempo y reducción de errores
                  <br />
                  Ideal tanto para retail como para profesionales
                </p>
              </div>

              {/* Tercera columna */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs tracking-widest uppercase text-gray-400">Hecho para traders como tú:</span>
                </div>

                <p className="text-gray-500 leading-relaxed text-sm">
                  Traders independientes
                  <br />
                  Educadores financieros
                  <br />
                  Firmas institucionales
                  <br />
                  Plataformas fintech
                  <br />
                  Analistas de portafolio
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
