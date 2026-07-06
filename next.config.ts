import type { NextConfig } from "next";

// Static export for GitHub Pages at https://blocly.co (custom domain, site root).
// Set NEXT_PUBLIC_BASE_PATH only for sub-path previews (e.g. /blockly on github.io).
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  assetPrefix: repoBasePath || undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      { source: "/insights", destination: "/blog", permanent: true },
      { source: "/insights/:slug", destination: "/blog/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
