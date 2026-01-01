/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'picsum.photos', 'upload.wikimedia.org'],
    unoptimized: false,
  },
};

module.exports = nextConfig;

