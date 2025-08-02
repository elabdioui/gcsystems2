import { ShieldCheck, Users, Clock, Lock , } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const engagements = [
  {
    icon: ShieldCheck,
    title: "Qualité",
    description:
      "Chez GC SYSTEMS, la qualité est au cœur de tout ce que nous faisons. Nous nous engageons à fournir des prestations et des produits répondant aux plus hauts standards de qualité.",
  },
  {
    icon: Users,
    title: "Satisfaction",
    description:
      "Votre satisfaction est notre priorité absolue. Nous sommes à l'écoute de vos besoins et adaptons nos solutions pour répondre parfaitement à vos attentes.",
  },
  {
    icon: Clock,
    title: "Réactivité",
    description:
      "Nos équipes sont disponibles pour répondre à vos demandes dans les plus brefs délais, en vous apportant des réponses claires et des solutions rapides.",
  },
  {
    icon: Lock,
    title: "Sécurité",
    description:
      "La sécurité de vos données et de nos services est primordiale. Nous mettons en place des protocoles de sécurité avancés pour protéger vos informations.",
  },
]

export default function AboutSection() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Qui sommes-nous */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Qui sommes-nous ?</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6 text-lg leading-relaxed">
                <span className="font-semibold text-red-600">GC SYSTEMS</span> intervient en installation, maintenance
                et dépannage sur l'intégralité des systèmes et produits de lutte contre l'incendie et fermetures
                industrielles au Maroc.
              </p>
              <p className="text-lg leading-relaxed">
                Notre savoir-faire et notre expérience nous permet aujourd'hui de répondre à vos besoins les plus
                exigeants, qu'il s'agisse d'une zone industrielle, d'un entrepôt logistique, d'un bâtiment commercial ou
                d'un chantier divers. Nous mettons tout en œuvre pour satisfaire au mieux vos demandes.
              </p>
            </div>
          </div>
          <div>
            <video
              src="/VIDEO GC SYSTEMS.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-lg shadow-lg w-full"
            >
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>

        {/* Nos Engagements */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Engagements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quatre piliers fondamentaux qui guident notre action quotidienne
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagements.map((engagement, index) => (
            <Card
              key={index}
              className="text-center border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <engagement.icon className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{engagement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{engagement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
