import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import PartnersSection from "@/components/partners-section"
import AICapabilitiesSection from "@/components/ai-capabilities-section"
import BlockchainHero from "@/components/blockchain-hero"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <PartnersSection />
      <AICapabilitiesSection />
      <BlockchainHero />
      <Footer />
    </div>
  )
}
