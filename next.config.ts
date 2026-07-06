import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/insights", destination: "/blog", permanent: true },
      { source: "/insights/:slug", destination: "/blog/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
