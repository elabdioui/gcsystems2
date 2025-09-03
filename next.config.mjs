/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // 1 minute de cache minimum
  },
  // Compression du HTML
  compress: true,
  // Stratégie de préchargement plus efficace
  reactStrictMode: true,
  // Cache des pages statiques
  staticPageGenerationTimeout: 120,
  // Options pour améliorer le SEO
  poweredByHeader: false, // Supprime l'en-tête X-Powered-By
  // Options expérimentales (mises à jour pour Next.js 15)
  experimental: {
    optimizeCss: true, // Optimisation CSS
  },
  // Packages externes pour les Server Components
  serverExternalPackages: [],
}

export default nextConfig