/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.ibb.co',
      'images.unsplash.com',
      'images.pexels.com', // ← add this
    ],
  },
};

export default nextConfig;
