"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  return (
    <header className="container mx-auto px-4 py-6 flex items-center justify-between">
      <div className="flex items-center gap-12">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/xentris-trading.png"
            alt="Xentris Logo"
            width={70}
            height={70}
            className="h-16 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm hover:text-gray-300 transition-colors">
            Recursos
          </Link>
          <Link href="#" className="text-sm hover:text-gray-300 transition-colors">
            Blog
          </Link>
          <Link href="#" className="text-sm hover:text-gray-300 transition-colors">
            Promts
          </Link>
          <Link href="#" className="text-sm hover:text-gray-300 transition-colors">
            GPT Forex Pro
          </Link>
          <Link href="#" className="text-sm hover:text-gray-300 transition-colors">
            Empresa
          </Link>
        </nav>
      </div>
      <Button variant="link" className="text-white hover:text-gray-300">
        Iniciar Sesión
      </Button>
    </header>
  )
}
