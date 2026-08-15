/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages 纯静态部署：用静态导出，不依赖任何服务端 / API 路由
  output: "export",
  // 兼容 GitHub Pages 对目录末尾斜杠的严格约定
  trailingSlash: true,
  // 子路径部署：仓库名 child-game → 站点在 /child-game/ 下，
  // 资源（/_next/...）必须加此前缀，否则上线后 JS/CSS 会 404
  basePath: "/child-game",
  // 关闭 next/image 服务端优化，避免依赖 Sharp 在构建环境缺失时报错
  images: { unoptimized: true },
};

export default nextConfig;
