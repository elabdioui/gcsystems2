import { Wrench, Settings, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

const services = [
  {
    icon: Settings,
    title: "Installation",
    description:
      "La sécurité commence par une installation réalisée dans les règles de l'art. Nos experts qualifiés prennent en charge l'installation de vos systèmes de détection et de protection incendie, ainsi que de vos fermetures industrielles.",
    features: [
      "Étude technique préalable",
      "Installation conforme aux normes",
      "Tests et mise en service",
      "Formation du personnel",
    ],
    image: "/installation.jpg",
  },
  {
    icon: Wrench,
    title: "Réparation",
    description:
      "Un incident ou un dysfonctionnement ? Nous proposons un service de réparation rapide et efficace pour vos équipements. Grâce à notre expertise et à l'utilisation de pièces de qualité, nous intervenons pour remettre vos installations en parfait état.",
    features: [
      "Intervention d'urgence 24h/7j",
      "Diagnostic précis",
      "Pièces de rechange d'origine",
      "Garantie sur les interventions",
    ],
    image: "/reparation.jpg",
  },
  {
    icon: Shield,
    title: "Maintenance",
    description:
      "Pour assurer la performance et la longévité de vos systèmes, nous proposons des contrats de maintenance adaptés. Nos équipes effectuent des contrôles réguliers et des tests de performance pour prévenir les pannes.",
    features: [
      "Maintenance préventive programmée",
      "Contrôles réglementaires",
      "Rapport d'intervention détaillé",
      "Support technique permanent",
    ],
    image: "/maintenance.jpg",
  },
]

// Hook for intersection observer
function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, { threshold: 0.1, ...options })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return [ref, isVisible]
}

export default function ServicesSection() {
  const [titleRef, titleVisible] = useIntersectionObserver()
  const [cardsRef, cardsVisible] = useIntersectionObserver()
  const [processRef, processVisible] = useIntersectionObserver()

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-red-50 rounded-full translate-x-36 opacity-60"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-red-50 rounded-full -translate-x-36 opacity-60"></div>
      
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={`text-center mb-20 fade-in-on-scroll ${titleVisible ? 'visible' : ''}`}>
          <div className="inline-block px-4 py-2 bg-red-50 rounded-full border border-red-100 mb-6">
            <span className="text-red-600 text-sm font-medium">Nos expertises</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Un accompagnement complet pour tous vos besoins en sécurité incendie et fermetures industrielles
          </p>
        </div>

        <div ref={cardsRef} className={`grid lg:grid-cols-3 gap-10 mb-20 fade-in-on-scroll ${cardsVisible ? 'visible' : ''}`}>
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-2xl card-hover overflow-hidden bg-white relative"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Enhanced overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Service number */}
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-red-600 font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>
                
                {/* Icon with enhanced styling */}
                <div className="absolute bottom-6 left-6">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                {/* Service title overlay */}
                <div className="absolute bottom-6 right-6 left-24">
                  <h3 className="text-white font-bold text-xl">{service.title}</h3>
                </div>
              </div>
              
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 mb-4">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <CardDescription className="text-gray-600 leading-relaxed mb-6 text-base">
                  {service.description}
                </CardDescription>

                {/* Enhanced features list */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">Nos prestations :</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-base text-gray-600 group/item hover:text-red-600 transition-colors duration-200">
                        <div className="w-3 h-3 bg-red-600 rounded-full mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href="#contact">
                  <Button className="w-full btn-primary-enhanced hover-glow text-white py-3 text-base font-medium">
                    Demander un devis
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div ref={processRef} className={`bg-white rounded-3xl p-12 shadow-xl border border-gray-100 fade-in-on-scroll ${processVisible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-red-50 rounded-full border border-red-100 mb-6">
              <span className="text-red-600 text-sm font-medium">Notre méthode</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Notre Processus <span className="gradient-text">d'Intervention</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour garantir la qualité de nos interventions
            </p>
          </div>

          <div className="relative">
            {/* Timeline line simple */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-red-400 to-red-200 rounded-full"></div>
            
            <div className="grid md:grid-cols-4 gap-12 relative">
              {[
                { step: "01", title: "Analyse", description: "Étude de vos besoins et diagnostic technique" },
                { step: "02", title: "Proposition", description: "Devis détaillé et planning d'intervention" },
                { step: "03", title: "Réalisation", description: "Intervention par nos équipes qualifiées" },
                { step: "04", title: "Suivi", description: "Contrôle qualité et service après-vente" },
              ].map((item, index) => (
                <div key={index} className="text-center group relative process-step">
                  
                  {/* Circle avec couleurs inversées */}
                  <div className="relative w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl flex items-center justify-center font-bold text-lg mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl z-10 shadow-lg">
                    <span className="relative z-10">{item.step}</span>
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Contenu */}
                  <div className="transition-all duration-300 group-hover:-translate-y-2">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Ligne verticale mobile */}
                  {index < 3 && (
                    <div className="md:hidden flex justify-center mt-8 mb-8">
                      <div className="w-1 h-16 bg-gradient-to-b from-red-400 to-red-200 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Process CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-2xl p-8 border border-red-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Prêt à commencer votre projet ?
              </h4>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour bénéficier de notre expertise et de notre processus éprouvé
              </p>
              <Link href="#contact">
                <Button className="btn-primary-enhanced hover-glow text-white px-8 py-3 text-lg">
                  Démarrer mon projet
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}