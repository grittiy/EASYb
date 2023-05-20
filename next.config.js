/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // {false} | {true}
  images: {
    unoptimized: true,
    priority:false,
    
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/src/app/page',
        permanent: true,
      },
    ]
  },

}

module.exports = nextConfig
