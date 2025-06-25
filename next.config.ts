import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    additionalData: `$var: red;`,
  },
  experimental: {
    turbo: {
      resolveAlias: {
        canvas: "./empty-module.ts",
      },
    },
  },
  // turn off error warning for 'any type'
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
