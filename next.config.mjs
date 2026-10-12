/** @type {import('next').NextConfig} */
const isExport = process.env.NEXT_EXPORT === "1";

const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isExport
    ? {
        // GitHub Pages 静态导出
        output: "export",
        basePath: "/child-game",
      }
    : {
        // EdgeOne/Vercel：保留服务端 API 路由
      }),
};

export default nextConfig;
