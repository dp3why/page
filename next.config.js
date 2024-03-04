/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["github.com", "github.io"], // List of domains your images will be loaded from
  },
};

module.exports = nextConfig;
