"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#apropos" },
    { name: "Produits", href: "#produits" },
    { name: "Services", href: "#services" },
    { name: "Références", href: "#references" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      {/* Top bar */}
      <div className="bg-black text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+212 639 737 400</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>sales@gcsystems.ma</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Expert en protection incendie et fermetures industrielles</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img src="/placeholder-logo.png" alt="GcSystems" className="h-16 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="#contact">
                <Button className="bg-red-600 hover:bg-red-700 text-white">Demander un devis</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-red-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="bg-red-600 hover:bg-red-700 text-white w-full mt-4">Demander un devis</Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
