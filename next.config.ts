import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 375, 390, 430, 640, 768, 1024, 1440, 1920, 2560],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    qualities: [60, 72, 80],
  },
};

export default nextConfig;
