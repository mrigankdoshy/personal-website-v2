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
        hostname: 'mrigankdoshy-v2.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'mrigankdoshy.com',
      },
    ],
    domains: [
      'api.microlink.io',
      'elephantdesks.com',
      'www.nordikbydesign.com',
      'grovemade.imgix.net',
      'store.storeimages.cdn-apple.com',
      'm.media-amazon.com',
      'www.branchfurniture.com',
      'cdn.shopify.com',
    ],
  },
};

module.exports = nextConfig;
