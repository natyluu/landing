"use client"

export default function PricingSection() {
  const plans = [
    {
      name: "Gratuito",
      price: "$0",
      period: "para siempre",
      description: "Perfecto para comenzar con análisis básico",
      features: [
        "Análisis técnico básico",
        "3 consultas por día",
        "Indicadores principales (RSI, MACD)",
        "Acceso a datos históricos",
        "Soporte por email",
      ],
      buttonText: "Comenzar Gratis",
      buttonStyle: "border border-white text-white hover:bg-white hover:text-black",
      popular: false,
    },
    {
      name: "Pro",
      price: "$30",
      period: "por mes",
      description: "Para traders serios que buscan análisis completo",
      features: [
        "Análisis técnico, fundamental e institucional",
        "Consultas ilimitadas",
        "Todos los indicadores disponibles",
        "Datos en tiempo real (TwelveData API)",
        "Señales de trading personalizadas",
        "Análisis de sentimiento de mercado",
        "Soporte prioritario 24/7",
        "Estrategias adaptadas a tu perfil",
      ],
      buttonText: "Suscribirse Ahora",
      buttonStyle: "bg-purple-600 hover:bg-purple-700 text-white",
      popular: true,
    },
  ]

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Elige tu <span className="text-purple-500">plan</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comienza gratis y actualiza cuando estés listo para desbloquear todo el potencial de nuestro análisis con IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-purple-500 bg-gradient-to-b from-purple-900/20 to-black"
                  : "border-zinc-800 bg-zinc-900/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            ¿Necesitas algo personalizado?
            <a href="#" className="text-purple-500 hover:text-purple-400 ml-1">
              Contáctanos para planes empresariales
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
