"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect, useRef } from "react"

// Données statiques
const clients = [
	{ name: "Client 1", logo: "/basf.svg?height=80&width=160" },
	{ name: "Client 2", logo: "/cbre.svg?height=80&width=160" },
	{ name: "Client 3", logo: "/Grupotec.png?height=80&width=160" },
	{ name: "Client 4", logo: "/dhl.svg?height=80&width=160" },
	{ name: "Client 5", logo: "/aria.svg?height=80&width=160" },
	{ name: "Client 6", logo: "/allianz.svg?height=80&width=160" },
	{ name: "Client 7", logo: "/cat.svg?height=80&width=160" },
	{ name: "Client 8", logo: "/mondelez.svg?height=80&width=160" },
]

const stats = [
	{ number: "500+", label: "Projets réalisés" },
	{ number: "15", label: "Années d'expérience" },
	{ number: "200+", label: "Clients satisfaits" },
	{ number: "24/7", label: "Support technique" },
]

const testimonials = [
	{
		quote:
			"GC SYSTEMS a installé notre système de protection incendie avec un professionnalisme exemplaire. Leur équipe est réactive et compétente.",
		author: "Ahmed ",
		company: "Directeur Technique, Industrie Pharmaceutique",
	},
	{
		quote:
			"Service de maintenance impeccable. Nous faisons confiance à GC SYSTEMS depuis 5 ans pour nos fermetures industrielles.",
		author: "Fatima Zahra",
		company: "Responsable Sécurité, Centre Logistique",
	},
	{
		quote:
			"Installation conforme aux normes et dans les délais. Je recommande vivement leurs services pour tous projets de sécurité incendie.",
		author: "Mohamed",
		company: "Chef de Projet, Groupe Industriel",
	},
]

// Composant pour les stats animées
function AnimatedStat({ stat, index }: { stat: typeof stats[0]; index: number }) {
	const [mounted, setMounted] = useState(false)
	const [displayNumber, setDisplayNumber] = useState(stat.number)
	const [isVisible, setIsVisible] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		setMounted(true)
	}, [])

	useEffect(() => {
		if (!mounted) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)

					// Animation seulement pour les nombres (pas pour "24/7")
					if (stat.number.includes("+") && stat.number !== "24/7") {
						const targetNumber = parseInt(stat.number.replace("+", ""))
						const duration = 2000
						const steps = 50
						const increment = targetNumber / steps
						let current = 0

						const timer = setInterval(() => {
							current += increment
							if (current >= targetNumber) {
								setDisplayNumber(stat.number)
								clearInterval(timer)
							} else {
								setDisplayNumber(Math.floor(current) + "+")
							}
						}, duration / steps)

						return () => clearInterval(timer)
					}
				}
			},
			{ threshold: 0.1 }
		)

		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current)
			}
		}
	}, [mounted, stat.number])

	// Rendu de base pour éviter l'hydratation mismatch
	if (!mounted) {
		return (
			<div>
				<div className="text-4xl font-bold mb-2">{stat.number}</div>
				<div className="text-red-100">{stat.label}</div>
			</div>
		)
	}

	return (
		<div ref={ref}>
			<div className="text-4xl font-bold mb-2">
				{isVisible ? displayNumber : stat.number}
			</div>
			<div className="text-red-100">{stat.label}</div>
		</div>
	)
}

export default function ReferencesSection() {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	return (
		<section id="references" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Références</h2>
					<p className="text-xl text-gray-600">
						La confiance de nos clients est notre plus belle récompense
					</p>
				</div>

				{/* Stats Section */}
				<div className="bg-red-600 text-white rounded-2xl p-8 mb-16">
					<div className="grid md:grid-cols-4 gap-8 text-center">
						{stats.map((stat, index) => (
							<AnimatedStat key={index} stat={stat} index={index} />
						))}
					</div>
				</div>

				{/* Clients Section */}
				<div className="mb-16">
					<div className="text-center mb-12">
						<h3 className="text-3xl font-bold text-gray-900 mb-4">
							Ils nous font confiance
						</h3>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Découvrez quelques-unes des entreprises qui ont choisi GC SYSTEMS
							pour leurs projets de sécurité
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{clients.map((client, index) => (
							<Card
								key={index}
								className="border-gray-200 hover:shadow-xl transition-all duration-300 group"
							>
								<CardContent className="p-8 flex items-center justify-center h-32">
									<img
										src={client.logo || "/placeholder.svg"}
										alt={client.name}
										className="w-full h-20 object-contain transition-all duration-300 group-hover:scale-110"
									/>
								</CardContent>
							</Card>
						))}
					</div>
				</div>

				{/* Testimonials Section */}
				<div>
					<div className="text-center mb-12">
						<h3 className="text-3xl font-bold text-gray-900 mb-4">
							Ce que disent nos clients
						</h3>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{testimonials.map((testimonial, index) => (
							<Card
								key={index}
								className="border-gray-200 hover:shadow-lg transition-all duration-300"
							>
								<CardContent className="p-6">
									<div className="text-4xl text-red-600 mb-4">"</div>
									<p className="text-gray-600 mb-4 italic leading-relaxed">
										{testimonial.quote}
									</p>
									<div className="border-t pt-4">
										<div className="font-semibold text-gray-900">
											{testimonial.author}
										</div>
										<div className="text-sm text-gray-500">
											{testimonial.company}
										</div>
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
