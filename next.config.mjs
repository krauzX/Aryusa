/** @type {import('next').NextConfig} */
import { withPWA } from "next-pwa";
const withPWAOpt = {
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
};

const nextConfig = withPWA(...withPWAOpt, {
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
