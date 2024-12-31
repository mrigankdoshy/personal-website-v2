/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  eslint: {
    dirs: ['src'],
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mrigankdoshy-personal-website-v2.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'mrigankdoshy.com',
      },
    ],
  },
};

module.exports = nextConfig;
