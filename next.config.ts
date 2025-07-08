import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
    domains: ['img.clerk.com'],
  },
};

export default nextConfig;
