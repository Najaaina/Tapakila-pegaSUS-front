/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/user/:path*", 
        destination: process.env.NEXT_PUBLIC_API_URL + "/:path*", 
      },
    ];
  },
};

module.exports = nextConfig;
