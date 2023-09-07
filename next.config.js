/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@storefront-ui/react'],
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig
