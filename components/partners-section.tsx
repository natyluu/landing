"use client"

export default function PartnersSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-blue-400 font-medium uppercase tracking-wider text-sm">
            RESPUESTAS INSTANTÁNEAS A PREGUNTAS COMPLEJAS DE FOREX
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-8">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Analiza tu activo
            <br />
            <span className="text-gray-300">con nuestro asistente GPT Forex Pro</span>
          </h3>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Construido sobre tecnología de OpenAI, nuestro asistente inteligente analiza datos técnicos, fundamentales e
            institucionales en tiempo real para ofrecer respuestas inmediatas a tus preguntas más complejas.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
            PROBAR GPT FOREX PRO
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

        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-2 overflow-hidden">
              <img src="/images/xentris-logo-clean.png" alt="Xentris Logo" className="w-12 h-12 object-contain" />
            </div>
            <h4 className="text-xl font-bold mb-1">GPT Forex Pro 📊</h4>
            <p className="text-sm text-gray-400">Por community builder ⚒️</p>
            <p className="text-center text-sm text-gray-400 max-w-lg mt-2">
              Finance Trading & Investing: Forex, Stocks, Crypto highlights its technical, fundamental, and sentiment
              analysis capabilities, along with its integration with the TwelveData API.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            <div className="bg-zinc-900 hover:bg-zinc-800 rounded-lg p-4 cursor-pointer transition-colors">
              <p className="text-sm">Crea una strategy USD COP 1-hour timeframe.</p>
            </div>
            <div className="bg-zinc-900 hover:bg-zinc-800 rounded-lg p-4 cursor-pointer transition-colors">
              <p className="text-sm">trading strategy XAU/USD 1-hour timeframe.</p>
            </div>
            <div className="bg-zinc-900 hover:bg-zinc-800 rounded-lg p-4 cursor-pointer transition-colors">
              <p className="text-sm">How are the U.S. markets today?</p>
            </div>
            <div className="bg-zinc-900 hover:bg-zinc-800 rounded-lg p-4 cursor-pointer transition-colors">
              <p className="text-sm">BTC/USD Intervals: H4, H1, M15 API: TwelveData...</p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-zinc-900 rounded-full p-4 flex items-center">
              <button className="text-gray-400 mr-2">
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
                  className="lucide lucide-plus"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </button>
              <div className="flex-1 text-gray-400 truncate px-2">
                Analiza técnicamente XAU/USD en temporalidad diaria usando RSI, MACD, Bandas de Bollinger, EMA, VWAP y
                Puntos Pivote. Identifica la tendencia, niveles clave y propone una idea de trading con entrada, TP y
                SL.
              </div>
              <button className="text-gray-400 ml-2">
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
                  className="lucide lucide-mic"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" x2="12" y1="19" y2="22" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
