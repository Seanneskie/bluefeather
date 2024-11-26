import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Export the project as a static site
  basePath: "/bluefeather", // Set the base path to the repository name
  assetPrefix: "/bluefeather", // Set the asset prefix for static assets
};

export default nextConfig;
