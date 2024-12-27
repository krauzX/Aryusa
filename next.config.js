/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  swDest: "public/service-worker.ts", // Correctly placed service worker destination
});

const nextConfig = {
  distDir: "dist", // Specify the output directory for the build files
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow images from any hostname
        port: "*", // Allow images from any port
      },
    ],
  },
};

module.exports = {
  ...nextConfig,
  ...withPWA, // Merge PWA settings into the Next.js configuration
};
