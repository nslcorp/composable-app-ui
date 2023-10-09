/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@storefront-ui/react'],
  experimental: {
    serverActions: true,
  },
  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig
