import dynamic from 'next/dynamic'
import HeroSlider from '@/components/hero-slider'


const AboutSection = dynamic(() => import('@/components/about-section'))
const ProductsSection = dynamic(() => import('@/components/products-section'))
const ServicesSection = dynamic(() => import('@/components/services-section'))
const RefersSection = dynamic(() => import('@/components/references-section'))
const ContactSection = dynamic(() => import('@/components/contact-section'))

export default function Home() {
  return (
    <main>
      
      <HeroSlider />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <RefersSection />
      <ContactSection />
    </main>
  )
}
