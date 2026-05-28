import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { DrinksShowcase } from "@/components/drinks-showcase"
import { CaipirinhaSection } from "@/components/caipirinha-section"
import { FeaturesSection } from "@/components/features-section"
import { GallerySection } from "@/components/gallery-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DrinksShowcase />
      <CaipirinhaSection />
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="gallery">
        <GallerySection />
      </section>
      <section id="cta">
        <CTASection />
      </section>
      <Footer />
    </main>
  )
}
