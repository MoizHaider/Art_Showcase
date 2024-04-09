/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:false,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [process.env.DOMAIN],
  },
};

module.exports = nextConfig;
