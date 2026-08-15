# 孩子的游戏 · CloudBase 云托管(容器)部署用 Dockerfile
# 构建阶段在云端完成（你本地不需要装 Docker）

# ---------- 构建阶段 ----------
FROM node:18-alpine AS builder
WORKDIR /app

# 先装依赖（利用缓存，package*.json 没变就不会重装）
COPY package.json package-lock.json ./
RUN npm install

# 复制源码并构建
COPY . .
RUN npm run build

# ---------- 运行阶段 ----------
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# 只复制运行所需文件，镜像更干净
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.mjs ./next.config.mjs

EXPOSE 3000
CMD ["npm", "start"]
