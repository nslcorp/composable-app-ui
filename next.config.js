/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@storefront-ui/react'],
  experimental: {
    serverActions: true,
  },
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eu-images.contentstack.com',
        port: '',
        pathname: '/*/**',
      },
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/search?category=hoodies_%26_sweatshirts',
  //       permanent: false,
  //     },
  //   ]
  // },
};

module.exports = nextConfig
