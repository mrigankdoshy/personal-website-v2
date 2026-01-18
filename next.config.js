/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mrigankdoshy.com',
      },
      {
        protocol: 'https',
        hostname: 'www.mrigankdoshy.com',
      },
      {
        protocol: 'https',
        hostname: 'mrigankdoshy-v2.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'www.mrigankdoshy-v2.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
      {
        protocol: 'https',
        hostname: 'elephantdesks.com',
      },
      {
        protocol: 'https',
        hostname: 'nordikbydesign.com',
      },
      {
        protocol: 'https',
        hostname: 'grovemade.imgix.net',
      },
      {
        protocol: 'https',
        hostname: 'store.storeimages.cdn-apple.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'branchfurniture.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: 'www.rocketsim.app',
      },
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
    ],
  },
};

module.exports = nextConfig;
