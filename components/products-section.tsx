import { Shield, DoorClosed  as Door, DoorOpenIcon as Gate, Users, FenceIcon as Barrier } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

const categories = [
  {
    icon: Shield,
    title: "Détection et Protection Incendie",
    description:
      "Systèmes d'alarme (SSI), Robinets d'Incendie Armés (RIA), Surpresseurs d'incendie, Systèmes de désenfumage",
    image: "/detection.jpg?height=200&width=200",
  },
  {
    icon: Door,
    title: "Portes industrielles",
    description:
      "Portes sectionnelles, souples rapides, rideaux métalliques, portes coupe-feu, va-et-vient, à lanières",
    image: "/porte industrielle.jpg?height=300&width=400",
  },
  {
    icon: Gate,
    title: "Portails industriels",
    description: "Portails autoportants, battants, coulissants industriels avec automatismes de sécurité",
    image: "/portail.png?height=300&width=400",
  },
  {
    icon: Users,
    title: "Tourniquets et Barrières d'Accès",
    description: "Tourniquets de contrôle, sas d'hygiène, barrières levantes, bornes escamotables",
    image: "/TOURNIQUET ET BARRIERES D'ACCES.jpg?height=100&width=100",
  },
  {
    icon: Barrier,
    title: "Barrières de Protection",
    description: "Barrières piétonnes, de circulation, protection de rayonnage, bornes et portiques de sécurité",
    image: "/barrieres-pietonnes.jpg?height=100&width=100",
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

export default function ProductsSection() {
  const [titleRef, titleVisible] = useIntersectionObserver()
  const [cardsRef, cardsVisible] = useIntersectionObserver()
  const [bottomCardsRef, bottomCardsVisible] = useIntersectionObserver()

  return (
    <section id="produits" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full -translate-y-48 translate-x-48 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full translate-y-48 -translate-x-48 opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={`text-center mb-20 fade-in-on-scroll ${titleVisible ? 'visible' : ''}`}>
          <div className="inline-block px-4 py-2 bg-red-50 rounded-full border border-red-100 mb-6">
            <span className="text-red-600 text-sm font-medium">Notre gamme</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="gradient-text">Produits</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Une gamme complète de solutions pour votre sécurité incendie et vos fermetures industrielles
          </p>
        </div>

        <div ref={cardsRef} className={`grid lg:grid-cols-3 gap-10 mb-16 fade-in-on-scroll ${cardsVisible ? 'visible' : ''}`}>
          {categories.slice(0, 3).map((category, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-2xl card-hover overflow-hidden bg-white relative"
            >
              {/* Enhanced image container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon with enhanced styling */}
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Produit #{index + 1}
                  </div>
                </div>
              </div>
              
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 mb-4">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <CardDescription className="text-gray-600 leading-relaxed mb-6 text-base">
                  {category.description}
                </CardDescription>
                <Link href="#contact">
                  <Button className="w-full btn-primary-enhanced hover-glow text-white py-3 text-base font-medium">
                    Demander un devis
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div ref={bottomCardsRef} className={`grid lg:grid-cols-2 gap-10 fade-in-on-scroll ${bottomCardsVisible ? 'visible' : ''}`}>
          {categories.slice(3).map((category, index) => (
            <Card
              key={index + 3}
              className="group border-0 shadow-lg hover:shadow-2xl card-hover overflow-hidden bg-white relative"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Produit #{index + 4}
                  </div>
                </div>
              </div>
              
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 mb-4">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <CardDescription className="text-gray-600 leading-relaxed mb-6 text-base">
                  {category.description}
                </CardDescription>
                <Link href="#contact">
                  <Button className="w-full btn-primary-enhanced hover-glow text-white py-3 text-base font-medium">
                    Demander un devis
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enhanced call to action */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Besoin d'une solution <span className="gradient-text">sur mesure</span> ?
            </h3>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Nos experts analysent vos besoins spécifiques pour vous proposer la solution la plus adaptée à votre activité
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <Button className="btn-primary-enhanced hover-glow text-white px-8 py-3 text-lg">
                  Consultation gratuite
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 px-8 py-3 text-lg">
                  Voir nos services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
