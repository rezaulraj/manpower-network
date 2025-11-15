/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 this tells Next.js to create /out with HTML files
  images: {
    unoptimized: true, // Required for next/image when using `next export`
  },
};

export default nextConfig;
