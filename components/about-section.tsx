import { ShieldCheck, Users, Clock, Lock , } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect, useRef } from "react"

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

export default function AboutSection() {
  const [titleRef, titleVisible] = useIntersectionObserver()
  const [contentRef, contentVisible] = useIntersectionObserver()
  const [videoRef, videoVisible] = useIntersectionObserver()
  const [cardsRef, cardsVisible] = useIntersectionObserver()

  return (
    <section id="apropos" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Qui sommes-nous */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div ref={contentRef} className={`fade-in-on-scroll ${contentVisible ? 'visible' : ''}`}>
            <div className="mb-6">
              <div className="inline-block px-4 py-2 bg-red-50 rounded-full border border-red-100 mb-4">
                <span className="text-red-600 text-sm font-medium">À propos de nous</span>
              </div>
            </div>
            
            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Qui sommes-nous <span className="gradient-text">?</span>
            </h2>
            
            <div className="prose prose-lg text-gray-600">
              <p className="mb-8 text-xl leading-relaxed">
                <span className="font-semibold text-red-600">GC SYSTEMS</span> intervient en installation, maintenance
                et dépannage sur l'intégralité des systèmes et produits de lutte contre l'incendie et fermetures
                industrielles au Maroc.
              </p>
              <p className="text-xl leading-relaxed mb-8">
                Notre savoir-faire et notre expérience nous permet aujourd'hui de répondre à vos besoins les plus
                exigeants, qu'il s'agisse d'une zone industrielle, d'un entrepôt logistique, d'un bâtiment commercial ou
                d'un chantier divers. Nous mettons tout en œuvre pour satisfaire au mieux vos demandes.
              </p>
              
              {/* Key stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Support technique</div>
                </div>
              </div>
            </div>
          </div>
          
          <div ref={videoRef} className={`fade-in-on-scroll ${videoVisible ? 'visible' : ''}`}>
            <div className="relative group">
              {/* Enhanced video container with overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                <video
                  src="/VIDEO GC SYSTEMS.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform duration-500"
                >
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced section divider */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
          <div className="px-6">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
        </div>

        {/* Nos Engagements */}
        <div ref={titleRef} className={`text-center mb-16 fade-in-on-scroll ${titleVisible ? 'visible' : ''}`}>
          <div className="inline-block px-4 py-2 bg-red-50 rounded-full border border-red-100 mb-6">
            <span className="text-red-600 text-sm font-medium">Nos valeurs</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="gradient-text">Engagements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Quatre piliers fondamentaux qui guident notre action quotidienne et garantissent votre satisfaction
          </p>
        </div>

        <div ref={cardsRef} className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in-on-scroll ${cardsVisible ? 'visible' : ''}`}>
          {engagements.map((engagement, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-lg hover:shadow-2xl card-hover bg-white relative overflow-hidden group"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-red-100 to-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <engagement.icon className="h-10 w-10 text-red-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {engagement.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 leading-relaxed text-base">
                  {engagement.description}
                </p>
                
                {/* Hover indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full mx-auto"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Prêt à sécuriser votre entreprise ?</h3>
              <p className="text-red-100 mb-6 max-w-2xl mx-auto">
                Contactez nos experts pour une étude personnalisée de vos besoins en sécurité incendie
              </p>
              <a href="#contact">
                <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform">
                  Demander un devis gratuit
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
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
