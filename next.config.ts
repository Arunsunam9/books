import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co , res.cloudinary.com",
      },
    ],
    domains: ["res.cloudinary.com"], // Allow images from Cloudinary
  },
};

export default nextConfig;
