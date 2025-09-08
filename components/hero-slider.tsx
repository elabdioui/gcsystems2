"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import NextImage from "next/image" // Renommé pour éviter la confusion

const slides = [
  {
    title: "La protection qui fait la différence",
    subtitle: "Expert en incendie et fermetures",
    image: "/desenfrumage.jpg",
  },
  {
    title: "Prévention, Protection, Performance",
    subtitle: "Sécurité incendie et fermetures industrielles sur mesure",
    image: "/porte-rapide.jpg",
  },
  {
    title: "Sécuriser aujourd'hui, protéger demain",
    subtitle: "Incendie & Fermetures par GC SYSTEMS",
    image: "/RIA_LE_upscale_balanced_x4.jpg",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="accueil" className="relative h-[700px] overflow-hidden">
      {/* Enhanced background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10" />
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div className="absolute inset-0">
            <NextImage
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover transition-transform duration-[7000ms] ease-out hover:scale-110"
              sizes="100vw"
              quality={85}
            />
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center z-20">
            <div className={`text-white max-w-3xl ${isLoaded ? 'animate-slide-in-left' : ''}`}>
              {/* Enhanced title with gradient effect */}
              <div className="mb-6">
                <div className="inline-block px-4 py-2 bg-red-600/20 backdrop-blur-sm rounded-full border border-red-500/30 mb-4">
                  <span className="text-red-300 text-sm font-medium">Expert en sécurité incendie</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block">{slide.title.split(' ').slice(0, -2).join(' ')}</span>
                <span className="gradient-text">{slide.title.split(' ').slice(-2).join(' ')}</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-2xl">
                {slide.subtitle}
              </p>
              
              {/* Enhanced call-to-action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="btn-primary-enhanced hover-glow text-white px-8 py-4 text-lg">
                  <a href="#services">Nos Services</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white hover:text-black bg-white/10 backdrop-blur-sm px-8 py-4 text-lg transition-all duration-300"
                >
                  <a href="#contact">Nous Contacter</a>
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow"></div>
                  <span>15+ ans d'expérience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow"></div>
                  <span>500+ projets réalisés</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow"></div>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-red-600/80 transition-all duration-300 z-30 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-red-600/80 transition-all duration-300 z-30 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-red-600 scale-125 shadow-lg shadow-red-600/50" 
                : "bg-white/50 hover:bg-white/75 hover:scale-110"
            }`}
          />
        ))}
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-30">
        <div className="flex flex-col items-center text-white/70 hover:text-white transition-colors cursor-pointer">
          <span className="text-xs mb-2 rotate-90 origin-center">Scroll</span>
          <div className="w-px h-8 bg-white/30 relative overflow-hidden">
            <div className="w-full h-2 bg-red-600 absolute top-0 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}