import { Wrench, Settings, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un accompagnement complet pour tous vos besoins en sécurité incendie et fermetures industrielles
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed mb-4">{service.description}</CardDescription>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="#contact">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Demander un devis</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Notre Processus d'Intervention</h3>
            <p className="text-lg text-gray-600">
              Une méthodologie éprouvée pour garantir la qualité de nos interventions
            </p>
          </div>

          <div className="relative">
            {/* Timeline line simple */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gray-300"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                { step: "01", title: "Analyse", description: "Étude de vos besoins et diagnostic technique" },
                { step: "02", title: "Proposition", description: "Devis détaillé et planning d'intervention" },
                { step: "03", title: "Réalisation", description: "Intervention par nos équipes qualifiées" },
                { step: "04", title: "Suivi", description: "Contrôle qualité et service après-vente" },
              ].map((item, index) => (
                <div key={index} className="text-center group relative">
                  
                  {/* Circle avec couleurs inversées */}
                  <div className="relative w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center font-semibold mx-auto mb-4 transition-all duration-300 group-hover:bg-gray-800 group-hover:shadow-lg z-10">
                    {item.step}
                  </div>
                  
                  {/* Contenu */}
                  <div className="transition-all duration-300 group-hover:-translate-y-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Ligne verticale mobile */}
                  {index < 3 && (
                    <div className="md:hidden flex justify-center mt-6 mb-6">
                      <div className="w-px h-12 bg-gray-300"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}