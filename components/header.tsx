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
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-3 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-red-400 transition-colors">
              <Phone className="h-4 w-4" />
              <span>+212 639 737 400</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-red-400 transition-colors">
              <Mail className="h-4 w-4" />
              <span>sales@gcsystems.ma</span>
            </div>
          </div>
          <div className="hidden md:block text-gray-300">
            <span>Expert en protection incendie et fermetures industrielles</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-xl backdrop-blur-sm bg-white/95' : 'shadow-lg'
      }`}>
        <div className="container mx-auto px-4">
          <div className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'py-2' : 'py-4'
          }`}>
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <img 
                src="/placeholder-logo.png" 
                alt="GcSystems" 
                className={`w-auto transition-all duration-300 group-hover:scale-105 ${
                  isScrolled ? 'h-12' : 'h-16'
                }`} 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-300 px-4 py-2 rounded-lg relative group whitespace-nowrap ${
                    isActive(item.href) 
                      ? 'text-red-600 bg-red-50' 
                      : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-1 left-1/2 h-0.5 bg-red-600 transition-all duration-300 transform -translate-x-1/2 ${
                    isActive(item.href) 
                      ? 'w-3/4' 
                      : 'w-0 group-hover:w-3/4'
                  }`}></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="#contact">
                <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Demander un devis
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 py-4 border-t border-gray-200' : 'max-h-0'
          }`}>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-300 px-4 py-3 rounded-lg relative ${
                    isActive(item.href)
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute left-0 top-1/2 w-1 h-6 bg-red-600 rounded-r transform -translate-y-1/2"></span>
                  )}
                </Link>
              ))}
              <Link href="#contact" className="mt-4">
                <Button 
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white w-full py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
