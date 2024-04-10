/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:false,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_DOMAIN_NAME],
  },
};

module.exports = nextConfig;
