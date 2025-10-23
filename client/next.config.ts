import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  appDir: true, // enable App Router (SSR) at the top level
  // output: 'export', // keep commented to allow SSR
};

export default nextConfig;
