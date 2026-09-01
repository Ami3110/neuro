/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow images from unsplash and other external sources used in the app
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**" },
    ],
  },

  // Rewrite /api/* calls to the FastAPI backend during development
  // In production, set NEXT_PUBLIC_BACKEND_URL to the deployed backend URL
  async rewrites() {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
    return [
      {
        source: "/api/:path*",
        destination: `${backendUrl}/api/:path*`,
      },
    ];
  },
  // Resolve @/ path alias to src/ for Turbopack (Next.js 16+)
  turbopack: {
    resolveAlias: {
      "@": "./src",
    },
  },
};

module.exports = nextConfig;
