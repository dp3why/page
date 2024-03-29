/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["github.com", "raw.githubusercontent.com"], // List of domains your images will be loaded from
  },
};

module.exports = nextConfig;
