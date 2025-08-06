import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   metadataBase: new URL('https://gcsystems.ma'),
  title: "GC SYSTEMS - Protection Incendie & Fermetures Industrielles au Maroc | Amine Ghaimy",
  description: "Expert en protection incendie et fermetures industrielles au Maroc. Installation, maintenance et dépannage de systèmes de sécurité par Amine Ghaimy - GC SYSTEMS. Casablanca, Maroc.",
  keywords: [
    // Mots-clés principaux
    "protection incendie Maroc",
    "fermetures industrielles Casablanca", 
    "systèmes sécurité incendie",
    "maintenance équipements sécurité",
    "installation détection incendie",
    "Amine Ghaimy",
    "GC SYSTEMS Maroc",
    "portes coupe-feu",
    "extincteurs automatiques",
    "Maarif Casablanca",
    
    // Produits et services spécifiques
    "détecteur de fumée Maroc",
    "alarme incendie Casablanca",
    "sprinkler automatique",
    "centrale incendie",
    "robinet d'incendie armé",
    "colonne sèche",
    "colonne humide",
    "système déluge",
    "rideau d'eau",
    "mousse anti-incendie",
    "CO2 extinction",
    "gaz inerte FM200",
    
    // Services
    "maintenance préventive incendie",
    "dépannage urgence incendie",
    "réparation système sécurité",
    "contrôle technique incendie",
    "vérification équipements",
    "mise en conformité",
    "audit sécurité incendie",
    
    // Secteurs d'activité
    "industrie pharmaceutique",
    "industrie textile",
    "industrie alimentaire",
    "centre logistique",
    "entrepôt stockage",
    "usine manufacturing",
    "bureau commercial",
    "hôtel restaurant",
    "hôpital clinique",
    "école université",
    
    // Villes et régions
    "Casablanca sécurité incendie",
    "Rabat protection incendie",
    "Fès systèmes incendie",
    "Marrakech sécurité",
    "Tanger équipements incendie",
    "Agadir protection",
    "Meknès sécurité",
    "Oujda incendie",
    "Tétouan protection",
    "Mohammedia sécurité",
    "Salé incendie",
    "Kénitra protection",
    
    // Normes et certifications
    "norme NF S61",
    "APSAD R4",
    "APSAD R1",
    "EN 12845",
    "NFPA 13",
    "ISO 14520",
    "conformité réglementaire",
    "agrément CNPP",
    
    // Mots-clés techniques
    "pompe incendie",
    "réservoir sous pression",
    "vanne sectionnement",
    "manomètre contrôle",
    "pressostat alarme",
    "tableau signalisation",
    "sirène avertisseur",
    "gyrophare clignotant",
    "déclencheur manuel",
    "soupape sécurité",
    
    // Types d'extinction
    "extinction eau pulvérisée",
    "extinction mousse",
    "extinction poudre",
    "extinction gaz",
    "brouillard d'eau",
    "water mist",
    
    // Urgence et disponibilité
    "intervention 24h/24",
    "dépannage urgence",
    "service après-vente",
    "maintenance corrective",
    "réparation rapide",
    "technicien qualifié",
    "équipe spécialisée",
    
    // Longue traîne
    "entreprise protection incendie Casablanca",
    "installation système extinction automatique",
    "maintenance détecteur fumée entreprise",
    "dépannage alarme incendie Maroc",
    "expert sécurité incendie industrielle",
    "spécialiste fermetures coupe-feu",
    "professionnel équipements sécurité",
    "société maintenance incendie Casablanca"
  ],
  authors: [{ name: "Amine Ghaimy", url: "https://gcsystems.ma" }],
  creator: "Haitham El Abdiouhi", // Vous en tant que développeur
  publisher: "GC SYSTEMS - Amine Ghaimy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: 'https://gcsystems.ma',
    siteName: 'GC SYSTEMS',
    title: 'GC SYSTEMS - Protection Incendie & Fermetures Industrielles Maroc',
    description: 'Expert en protection incendie et fermetures industrielles au Maroc par Amine Ghaimy. Installation, maintenance et dépannage de systèmes de sécurité.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GC SYSTEMS - Protection Incendie Maroc - Amine Ghaimy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GC SYSTEMS - Protection Incendie Maroc',
    description: 'Expert en protection incendie et fermetures industrielles au Maroc par Amine Ghaimy.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://gcsystems.ma',
  },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="geo.region" content="MA-06" />
        <meta name="geo.placename" content="Casablanca" />
        <meta name="geo.position" content="33.5731;-7.5898" />
        <meta name="ICBM" content="33.5731, -7.5898" />
        {/* Crédit développeur */}
        <meta name="developer" content="Haitham El Abdioui" />
        <meta name="designer" content="Haitham El Abdioui" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
