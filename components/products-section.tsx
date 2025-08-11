import { Shield, DoorClosed  as Door, DoorOpenIcon as Gate, Users, FenceIcon as Barrier } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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

export default function ProductsSection() {
  return (
    <section id="produits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Produits</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de solutions pour votre sécurité incendie et vos fermetures industrielles
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {categories.slice(0, 3).map((category, index) => (
            <Card
              key={index}
              className="group border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
               
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed mb-4">{category.description}</CardDescription>
                <Link href="#contact">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Demander un devis</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {categories.slice(3).map((category, index) => (
            <Card
              key={index + 3}
              className="group border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed mb-4">{category.description}</CardDescription>
                <Link href="#contact">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Demander un devis</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
