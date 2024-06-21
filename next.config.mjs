/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['wowvir-storage.s3.me-central-1.amazonaws.com', 'wowvir-file-storage.s3.me-central-1.amazonaws.com'],
  }
};

export default nextConfig;
