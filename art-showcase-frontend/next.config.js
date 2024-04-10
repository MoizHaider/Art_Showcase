/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:false,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["art-nest-backend.vercel.app"],
  },
};

module.exports = nextConfig;
