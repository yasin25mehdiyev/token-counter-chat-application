import type { NextConfig } from "next";

const repo = "token-counter-chat-application";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Enable static export for GitHub Pages deployment
  trailingSlash: true, // Ensures consistent routing on static hosts (prevents refresh 404s)

  ...(isProd
    ? {
        basePath: `/${repo}`, // Required for subpath hosting (GitHub Pages repo-based URLs)
        assetPrefix: `/${repo}/`, // Fix static asset paths when served from a subdirectory
      }
    : {}),

  images: {
    unoptimized: true, // Disable Next.js image optimization (not supported on static hosts like GitHub Pages)
  },
};

export default nextConfig;
