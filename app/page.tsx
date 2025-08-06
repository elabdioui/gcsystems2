import HeroSlider from "@/components/hero-slider"
import AboutSection from "@/components/about-section"
import ProductsSection from "@/components/products-section"
import ServicesSection from "@/components/services-section"
import ReferencesSection from "@/components/references-section"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "GC SYSTEMS",
    "founder": {
      "@type": "Person",
      "name": "Amine Ghaimy"
    },
    "description": "Expert en protection incendie et fermetures industrielles au Maroc",
    "url": "https://gcsystems.ma",
    "telephone": "+212639737400",
    "email": "sales@gcsystems.ma",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13 Rue Ahmed El Majjati, Résidence Les Alpes - 1er étage - n°8",
      "addressLocality": "Maarif",
      "addressRegion": "Casablanca",
      "postalCode": "20000",
      "addressCountry": "MA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.5731",
      "longitude": "-7.5898"
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-12:00"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Maroc"
    },
    "priceRange": "$$",
    "image": "https://gcsystems.ma/og-image.jpg",
    "sameAs": [
      "https://www.linkedin.com/company/gc-systems/"
    ],
    // Informations sur le développeur du site
    "provider": {
      "@type": "Person",
      "name": "Haitham El Abdioui",
      "jobTitle": "Développeur Web"
    }
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSlider />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <ReferencesSection />
      <ContactSection />
    </main>
  )
}
