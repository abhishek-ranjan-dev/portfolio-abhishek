import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Microlink screenshot API — used to render live previews of deployed projects
      // in the work carousel. Free tier; falls back gracefully if rate-limited.
      { protocol: "https", hostname: "api.microlink.io" },
      { protocol: "https", hostname: "iframe.ly" },
    ],
  },
};

export default nextConfig;
