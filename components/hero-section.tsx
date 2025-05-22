"use client"

import SplineComponent from "./spline-component"

export default function HeroSection() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Asistente
          <br />
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
            Inteligente
          </span>
          <br />
          de Análisis <span className="text-gray-400">Forex</span>
        </h1>
        <p className="text-gray-400 max-w-md">Decisiones claras en segundos, con datos en tiempo real.</p>
        <div className="space-y-4 pt-4">
          <p className="text-lg">
            Nuestra tecnología analiza el mercado en segundos,
            <br />
            se adapta a tu estilo de trading
            <span className="text-gray-400"> y entrega estrategias listas para ejecutar,</span>
          </p>
          <p className="text-gray-400">sin emoción y con precisión.</p>
        </div>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0 relative">
        <div className="relative z-10 w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-zinc-900">
          <SplineComponent />
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent rounded-full blur-3xl -z-10"></div>
      </div>
    </main>
  )
}
