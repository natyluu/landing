"use client"

import dynamic from "next/dynamic"

// Import Spline component with no SSR to avoid hydration issues
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Cargando modelo 3D...</div>
    </div>
  ),
})

export default function SplineComponent() {
  return (
    <div className="w-full h-full">
      <Spline
        scene="https://prod.spline.design/fmuuTYjvM42ofCUK/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  )
}
