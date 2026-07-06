import type { NextConfig } from "next";

// When deploying to GitHub Pages (https://pankaj6699.github.io/blockly/) the site
// is served from the "/blockly" sub-path, and GitHub Pages only serves static
// files — so we statically export the app and prefix all asset/route URLs.
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
