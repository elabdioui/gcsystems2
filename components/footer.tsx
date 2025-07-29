import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-red-600 text-white px-3 py-2 font-bold text-xl">GC</div>
              <span className="text-2xl font-bold">SYSTEMS</span>
            </div>
            <p className="text-gray-400 mb-4">Expert en protection incendie et fermetures industrielles au Maroc.</p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/notre-societe" className="text-gray-400 hover:text-white">
                  Notre Société
                </Link>
              </li>
              <li>
                <Link href="/nos-produits" className="text-gray-400 hover:text-white">
                  Nos Produits
                </Link>
              </li>
              <li>
                <Link href="/nos-services" className="text-gray-400 hover:text-white">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Installation</span>
              </li>
              <li>
                <span className="text-gray-400">Maintenance</span>
              </li>
              <li>
                <span className="text-gray-400">Réparation</span>
              </li>
              <li>
                <span className="text-gray-400">Dépannage 24h/7j</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-gray-400">+212 639 737 400</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-red-600" />
                <span className="text-gray-400">sales@gcsystems.ma</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-red-600 mt-1" />
                <span className="text-gray-400">
                  13 Rue Ahmed El Majjati
                  <br />
                  Résidence Les Alpes - 1er étage - n°8
                  <br />
                  Maarif, CASABLANCA
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} GC SYSTEMS. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
