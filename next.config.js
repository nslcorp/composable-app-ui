/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@storefront-ui/react'],
  experimental: {
    serverActions: true,
  },
  compiler: {
    styledComponents: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/search?category=jackets',
        permanent: false,
      },
    ]
  },
};

module.exports = nextConfig
