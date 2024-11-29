import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/portfolio",
  output:"export",
  assetPrefix: "/portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
