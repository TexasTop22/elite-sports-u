import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDir: true,
  },
  // 👇 This tells Next.js your "app" folder lives inside /src
  srcDir: true,
  images: {
    quality: 90,
  },
};

export default nextConfig;
