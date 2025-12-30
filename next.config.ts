import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Yusr",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
