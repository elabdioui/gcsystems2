'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

type ProgressiveImageProps = {
  src: string
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
}

export default function ProgressiveImage({
  src,
  alt,
  className = '',
  fill = false,
  width,
  height,
  sizes = '100vw',
}: ProgressiveImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  
  // Créer une version miniature pour le chargement initial
  // Utiliser la même image comme fallback si la version miniature n'existe pas
  const thumbnailSrc = src
  
  return (
    <div className={`relative overflow-hidden ${fill ? 'w-full h-full' : ''}`}>
      {fill ? (
        <>
          {/* Image miniature floue */}
          <Image
            src={thumbnailSrc}
            alt=""
            fill
            className={`${className} transition-opacity duration-500 ${isLoading ? 'opacity-100 blur-lg' : 'opacity-0'}`}
            sizes={sizes}
          />
          
          {/* Image principale */}
          <Image
            src={src}
            alt={alt}
            fill
            className={`${className} transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            sizes={sizes}
            onLoadingComplete={() => setIsLoading(false)}
            quality={85}
          />
        </>
      ) : (
        <>
          {/* Image miniature floue */}
          <Image
            src={thumbnailSrc}
            alt=""
            width={width || 800}
            height={height || 600}
            className={`${className} transition-opacity duration-500 ${isLoading ? 'opacity-100 blur-lg' : 'opacity-0'}`}
          />
          
          {/* Image principale */}
          <Image
            src={src}
            alt={alt}
            width={width || 800}
            height={height || 600}
            className={`${className} transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoadingComplete={() => setIsLoading(false)}
            quality={85}
          />
        </>
      )}
    </div>
  )
}