"use client"

import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Rodríguez",
      position: "Trader Profesional",
      quote:
        "El análisis técnico de Xentris ha transformado mi enfoque de trading. Ahora puedo identificar patrones y tendencias que antes pasaba por alto, lo que ha mejorado significativamente mi tasa de éxito.",
      image: "/images/testimonial-1.png",
      imageQuery: "professional man in suit black and white portrait",
    },
    {
      name: "María González",
      position: "Analista de Mercados",
      quote:
        "La capacidad de Xentris para procesar datos en tiempo real y ofrecer análisis institucional sin emociones me ha dado una ventaja competitiva. Es como tener un equipo de analistas trabajando 24/7.",
      image: "/images/testimonial-2.png",
      imageQuery: "professional woman financial analyst black and white portrait",
    },
    {
      name: "Alejandro Torres",
      position: "Gestor de Fondos",
      quote:
        "La precisión del análisis fundamental de Xentris es impresionante. Me ha permitido anticipar movimientos del mercado basados en datos reales, no en conjeturas o rumores. Una herramienta indispensable.",
      image: "/images/testimonial-3.png",
      imageQuery: "mature fund manager man black and white portrait",
    },
  ]

  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16">
            Traders <span className="text-gray-500">profesionales</span>
            <br />
            confían en <span className="text-white">nuestra tecnología</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-white/10">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover grayscale"
                      sizes="64px"
                      query={testimonial.imageQuery}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-sm">"{testimonial.quote}"</p>

                <div className="mt-6 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Únete a miles de traders que ya están aprovechando el poder del análisis impulsado por IA para tomar
              decisiones más precisas y rentables.
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors mx-auto">
              Comenzar ahora
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
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
