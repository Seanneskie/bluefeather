import type { NextConfig } from "next";

const nextConfig = {
  output: "export", // Required for static export
  basePath: "/bluefeather", // Replace with your repository name
  assetPrefix: "/bluefeather", // Same as basePath
  images: {
    unoptimized: true, // Required for static export with images
  },
};
export default nextConfig;
