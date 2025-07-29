import { Card, CardContent } from "@/components/ui/card"

// Placeholder logos - in a real implementation, these would be actual client logos
const clients = [
  { name: "Client 1", logo: "/basf.svg?height=80&width=160" },
  { name: "Client 2", logo: "/cbre.svg?height=80&width=160" },
  { name: "Client 3", logo: "/somfy.svg?height=80&width=160" },
  { name: "Client 4", logo: "/dhl.svg?height=80&width=160" },
  { name: "Client 5", logo: "/aria.svg?height=80&width=160" },
  { name: "Client 6", logo: "/allianz.svg?height=80&width=160" },
  { name: "Client 7", logo: "/cat.svg?height=80&width=160" },
  { name: "Client 8", logo: "/mondelez.svg?height=80&width=160" },
]

const stats = [
  { number: "500+", label: "Projets réalisés" },
  { number: "15+", label: "Années d'expérience" },
  { number: "200+", label: "Clients satisfaits" },
  { number: "24/7", label: "Support technique" },
]

const testimonials = [
  {
    quote:
      "GC SYSTEMS a su répondre parfaitement à nos besoins en matière de sécurité incendie. Leur professionnalisme et leur réactivité sont remarquables.",
    author: "Directeur Technique",
    company: "Entreprise Industrielle",
  },
  {
    quote:
      "Un service de maintenance exemplaire et une équipe toujours disponible. Nous recommandons vivement GC SYSTEMS.",
    author: "Responsable Sécurité",
    company: "Centre Logistique",
  },
  {
    quote:
      "Installation rapide et conforme aux normes. L'équipe GC SYSTEMS a fait preuve d'un grand professionnalisme.",
    author: "Chef de Projet",
    company: "Complexe Commercial",
  },
]

export default function ReferencesSection() {
  return (
    <section id="references" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Références</h2>
          <p className="text-xl text-gray-600">La confiance de nos clients est notre plus belle récompense</p>
        </div>

        {/* Stats Section */}
        <div className="bg-red-600 text-white rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-red-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Clients Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ils nous font confiance</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques-unes des entreprises qui ont choisi GC SYSTEMS pour leurs projets de sécurité
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center justify-center h-20">
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl text-red-600 mb-4">"</div>
                  <p className="text-gray-600 mb-4 italic leading-relaxed">{testimonial.quote}</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
