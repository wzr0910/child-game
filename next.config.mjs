/** @type {import('next').NextConfig} */
const isStaticExport = process.env.NEXT_EXPORT === "1";

const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isStaticExport
    ? {
        output: "export",
        basePath: "/child-game",
      }
    : {}),
};

export default nextConfig;
