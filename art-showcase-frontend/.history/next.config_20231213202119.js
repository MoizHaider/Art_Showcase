/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['localhost'],
  },
  headers: () => [
    {
      source: '/:path*',
     
};

module.exports = nextConfig;
