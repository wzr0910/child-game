import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 编辑杂志风 Editorial —— 纯单色体系：柔和黑 + 暖米底
        // 不使用任何彩色强调（无陶土/苔绿），层次全靠 #1C1C1C 的透明度
        ink: "#1C1C1C", // 主文字 / 前景（柔和黑，非纯黑）
        paper: "#F9F8F6", // 页面背景（暖米色）
        surface: "#F9F8F6", // 卡片表面（与底同色，靠发丝边区分）
        parchment: "#F9F8F6", // 深底之上的浅色文字（按钮字等）
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "PingFang SC",
          "Hiragino Sans GB",
          "Microsoft YaHei",
          "Noto Sans SC",
          "sans-serif",
        ],
        serif: ["Georgia", "Songti SC", "Noto Serif SC", "STSong", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
