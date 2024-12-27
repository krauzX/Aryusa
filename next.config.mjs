/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = withPWA({
  distDir: "dist",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows images from any hostname
        port: "*", // Allows images from any port
      },
    ],
  },
  // Other Next.js config options
});

module.exports = nextConfig;
