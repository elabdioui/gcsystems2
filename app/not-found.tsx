import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page non trouvée</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Désolé, nous ne trouvons pas la page que vous recherchez.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
      >
        Retour à l'accueil
      </Link>
    </div>
  )
}