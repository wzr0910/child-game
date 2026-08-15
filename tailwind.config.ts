import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 诧寂 / 极简 调色板：暖宣纸、墨、陶土、苔
        ink: "#2b2823", // 主文字（暖近黑，非纯黑）
        paper: "#f4f1ea", // 页面背景（米白宣纸）
        surface: "#fbf9f4", // 卡片表面（更亮的暖白）
        parchment: "#fbf9f4", // 深底之上的浅色文字（按钮字等）
        clay: {
          DEFAULT: "#a3674c", // 陶土色（唯一点缀，替代原金）
          soft: "#bd8164", // 浅陶土（弱化 / hover）
        },
        sage: "#8a9a7b", // 苔绿（次要点缀）
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
      boxShadow: {
        soft: "0 1px 2px rgba(43,40,35,0.03), 0 10px 30px -14px rgba(43,40,35,0.14)",
        "soft-lg":
          "0 2px 6px rgba(43,40,35,0.05), 0 22px 50px -18px rgba(43,40,35,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
