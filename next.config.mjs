/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisation des images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  // Compression du HTML
  compress: true,
  // Désactiver temporairement optimizeCss
  experimental: {
    optimizeCss: false,
  },
  // Environnement strict pour React
  reactStrictMode: true,
}

export default nextConfig;