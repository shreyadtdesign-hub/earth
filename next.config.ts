import type { NextConfig } from "next";

// GitHub Pages serves this as a project site at /earth/, so the build run in
// CI needs the basePath/assetPrefix; local dev keeps running at the root.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubActions ? "/earth" : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    // Static export has no server to run the Image Optimization API on.
    unoptimized: true,
  },
};

export default nextConfig;
