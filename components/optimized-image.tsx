import Image from 'next/image'

type OptimizedImageProps = {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
  className?: string
  sizes?: string
}

export default function OptimizedImage({
  src,
  alt,
  fill = false,
  width,
  height,
  priority = false,
  className = '',
  sizes = '100vw',
}: OptimizedImageProps) {
  // Vérifier si l'image est locale ou externe
  const isLocalImage = src.startsWith('/') || src.startsWith('.')
  
  if (fill) {
    return (
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={className}
          sizes={sizes}
          quality={85}
        />
      </div>
    )
  }
  
  return (
    <Image
      src={src}
      alt={alt}
      width={width || 1920}
      height={height || 1080}
      priority={priority}
      className={className}
      sizes={sizes}
      quality={85}
    />
  )
}