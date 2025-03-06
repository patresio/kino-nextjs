/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para habilitar o suporte a imagens externas
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org'
      }
    ]
  },

  // Configuração para redirecionar a rota raiz para a rota /filmes
  async redirects() {
    return [
      {
        source: '/',
        destination: '/filmes',
        permanent: true
      }
    ]
  }
}

export default nextConfig
