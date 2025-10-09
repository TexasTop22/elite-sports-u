import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // ✅ only officially supported options
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // ✅ remove invalid quality key
    formats: ["image/webp", "image/avif"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
