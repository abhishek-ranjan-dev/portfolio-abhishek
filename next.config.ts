import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the Mac's LAN IP to reach dev resources (HMR, RSC) so the iPhone
  // can hit the dev server. Wildcard the whole 192.168.x.x range in case DHCP
  // hands out a different IP.
  allowedDevOrigins: ["192.168.0.4", "192.168.*.*"],
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
