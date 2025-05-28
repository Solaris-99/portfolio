import type { NextConfig } from "next";

const repo = "portfolio"

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export', // 👈 Required for Next.js 13+ static export
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true 
};

export default nextConfig;
