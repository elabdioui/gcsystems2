import HeroSlider from "@/components/hero-slider"
import AboutSection from "@/components/about-section"
import ProductsSection from "@/components/products-section"
import ServicesSection from "@/components/services-section"
import ReferencesSection from "@/components/references-section"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <ReferencesSection />
      <ContactSection />
    </main>
  )
}
