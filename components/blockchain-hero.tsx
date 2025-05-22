"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

// Importar Spline component con no SSR para evitar problemas de hidratación
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-black flex items-center justify-center">
      <div className="text-white/50">Cargando escena 3D...</div>
    </div>
  ),
})

export default function BlockchainHero() {
  const [selectedOption, setSelectedOption] = useState<string>("buscar")

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Spline como fondo */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/TOFbcbaltP9wyufq/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Overlay para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="relative z-20 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
          <div className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Es como tener un equipo de analistas profesionales…
          </div>
          <div className="mt-2 text-3xl md:text-4xl lg:text-5xl text-gray-300">
            pero totalmente automático y disponible 24/7.
          </div>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16 mb-12">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input
                type="radio"
                name="option"
                className="sr-only"
                checked={selectedOption === "buscar"}
                onChange={() => setSelectedOption("buscar")}
              />
              <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                {selectedOption === "buscar" && <div className="w-2 h-2 bg-white rounded-full"></div>}
              </div>
            </div>
            <span className="text-sm text-gray-300 group-hover:text-white uppercase tracking-wider">sin emociones</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input
                type="radio"
                name="option"
                className="sr-only"
                checked={selectedOption === "asegurar"}
                onChange={() => setSelectedOption("asegurar")}
              />
              <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                {selectedOption === "asegurar" && <div className="w-2 h-2 bg-white rounded-full"></div>}
              </div>
            </div>
            <span className="text-sm text-gray-300 group-hover:text-white uppercase tracking-wider">sin adivinar</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input
                type="radio"
                name="option"
                className="sr-only"
                checked={selectedOption === "crear"}
                onChange={() => setSelectedOption("crear")}
              />
              <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                {selectedOption === "crear" && <div className="w-2 h-2 bg-white rounded-full"></div>}
              </div>
            </div>
            <span className="text-sm text-gray-300 group-hover:text-white uppercase tracking-wider">datos reales</span>
          </label>
        </div>

        <button className="mt-8 bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors mx-auto">
          Usar GPT Forex Pro ahora
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
