import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          
          {/* Logo et réseaux sociaux */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-block mb-3 group">
              <img 
                src="/placeholder-logo.png" 
                alt="GC SYSTEMS" 
                className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" 
              />
            </Link>
            <p className="text-gray-400 text-xs mb-3 max-w-xs">
              Expert en protection incendie et fermetures industrielles au Maroc.
            </p>
            <div className="flex justify-center md:justify-start space-x-3">
              
              <Link href="https://www.linkedin.com/company/gc-systems/posts/?feedView=all" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                <Linkedin className="h-4 w-4" />
              </Link>
              
            </div>
          </div>

          {/* Contact compact */}
          <div className="text-center md:text-right">
            <div className="flex flex-col md:items-end space-y-1">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Phone className="h-3 w-3 text-red-600" />
                <span className="text-gray-300 text-xs">+212 639 737 400</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Mail className="h-3 w-3 text-red-600" />
                <span className="text-gray-300 text-xs">sales@gcsystems.ma</span>
              </div>
              <div className="flex items-start justify-center md:justify-end space-x-2">
                <MapPin className="h-3 w-3 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs text-center md:text-right leading-tight">
                  13 Rue Ahmed El Majjati, Résidence Les Alpes<br />
                  1er étage - n°8, Maarif, CASABLANCA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright très compact */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} GC SYSTEMS. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}