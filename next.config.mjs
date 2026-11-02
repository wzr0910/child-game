/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel 部署：支持 API 路由，不需要静态导出
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
