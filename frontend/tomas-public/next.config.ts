import type { NextConfig } from "next";
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost" },
      { protocol: "http", hostname: "46.225.166.254" },
      { protocol: "https", hostname: "tomas.com.tr" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/api/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=300, stale-while-revalidate=600" }],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
