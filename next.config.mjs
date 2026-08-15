/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages 纯静态部署：用静态导出，不依赖任何服务端 / API 路由
  output: "export",
  // 兼容 GitHub Pages 对目录末尾斜杠的严格约定
  trailingSlash: true,
  // 关闭 next/image 服务端优化，避免依赖 Sharp 在构建环境缺失时报错
  images: { unoptimized: true },
};

export default nextConfig;
