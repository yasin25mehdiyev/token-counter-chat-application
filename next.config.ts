import type { NextConfig } from "next"

const repo = "token-counter-chat-application"

const nextConfig: NextConfig = {
  output: "export",              // static export
  trailingSlash: true,           // pages-də routing problemsiz
  basePath: `/${repo}`,          // subpath üçün
  assetPrefix: `/${repo}/`,      // static asset path fix
  images: {
    unoptimized: true,           // next/image GitHub Pages-də problem olmasın
  },
}

export default nextConfig
