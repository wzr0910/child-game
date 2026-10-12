/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel 部署：保留服务端 API 路由（/api/chat, /api/generate-candidates）
  // 不再用 output: "export" 纯静态导出
  trailingSlash: true,
  // 关闭 next/image 服务端优化，避免依赖 Sharp
  images: { unoptimized: true },
};

export default nextConfig;
