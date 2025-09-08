"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("accueil")

  const navigation = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#apropos" },
    { name: "Produits", href: "#produits" },
    { name: "Services", href: "#services" },
    { name: "Références", href: "#references" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Détecter la section active
      const sections = navigation.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    return activeSection === href.substring(1)
  }

  return (
    <>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-3 px-4 shadow-sm relative overflow-hidden">
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-50"></div>
        
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-8 relative z-10">
            <div className="flex items-center space-x-2 hover:text-red-400 transition-colors duration-300 cursor-pointer group">
              <Phone className="h-4 w-4" />
              <span className="group-hover:scale-105 transition-transform duration-300">+212 639 737 400</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-red-400 transition-colors duration-300 cursor-pointer group">
              <Mail className="h-4 w-4" />
              <span className="group-hover:scale-105 transition-transform duration-300">sales@gcsystems.ma</span>
            </div>
          </div>
          <div className="hidden md:block text-gray-300 relative z-10">
            <span className="animate-pulse-slow">Expert en protection incendie et fermetures industrielles</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-2xl backdrop-blur-md bg-white/95 border-b border-gray-100' : 'shadow-lg'
      }`}>
        <div className="container mx-auto px-4">
          <div className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'py-3' : 'py-5'
          }`}>
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <img 
                src="/placeholder-logo.png" 
                alt="GcSystems" 
                className={`w-auto transition-all duration-300 group-hover:scale-105 ${
                  isScrolled ? 'h-14' : 'h-18'
                }`} 
              />
              {/* Logo text enhancement */}
              <div className="hidden lg:block">
                <div className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                  GC SYSTEMS
                </div>
                <div className="text-xs text-gray-500 -mt-1">
                  Protection & Sécurité
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-300 px-5 py-3 rounded-xl relative group whitespace-nowrap ${
                    isActive(item.href) 
                      ? 'text-red-600 bg-gradient-to-r from-red-50 to-red-100 shadow-sm' 
                      : 'text-gray-700 hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-1 left-1/2 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full transition-all duration-300 transform -translate-x-1/2 ${
                    isActive(item.href) 
                      ? 'w-4/5' 
                      : 'w-0 group-hover:w-4/5'
                  }`}></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="#contact">
                <Button className="btn-primary-enhanced hover-glow text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-medium">
                  Demander un devis
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-110" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 py-6 border-t border-gray-200' : 'max-h-0'
          }`}>
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-300 px-5 py-4 rounded-xl relative ${
                    isActive(item.href)
                      ? 'text-red-600 bg-gradient-to-r from-red-50 to-red-100'
                      : 'text-gray-700 hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute left-0 top-1/2 w-1 h-8 bg-gradient-to-b from-red-600 to-red-400 rounded-r transform -translate-y-1/2"></span>
                  )}
                </Link>
              ))}
              <Link href="#contact" className="mt-6">
                <Button 
                  className="btn-primary-enhanced hover-glow text-white w-full py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Demander un devis
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
