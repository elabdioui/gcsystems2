import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Ajouter des en-têtes de cache pour les ressources statiques
  const url = request.nextUrl.pathname
  
  if (url.includes('/images/') || 
      url.includes('.jpg') || 
      url.includes('.png') || 
      url.includes('.svg') || 
      url.includes('.webp')) {
    
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }
  
  // Ajouter des en-têtes de cache pour les pages statiques
  if (url === '/' || url.startsWith('/about') || url.startsWith('/services')) {
    response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400')
  }
  
  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}