"use client";

import { getDemoReply, DEMO_CANDIDATES, demoDelay } from "./fallback";
import type { ChatStage } from "./prompts";

export type ClientChatMessage = { role: "user" | "assistant"; content: string };

/**
 * 纯前端 AI 调用（GitHub Pages 静态部署版）
 *
 * 孩子的游戏现在托管在 GitHub Pages——它是纯静态站点，没有服务端，
 * 所以不再走 /api/chat、/api/generate-candidates 这类服务端接口。
 *
 * 默认走「演示模式」：直接用预置的尼采风格回复（见 lib/ai/fallback.ts），
 * 全流程完整、不需要任何 key、也不会因为缺后端而白屏或报错。
 *
 * 将来若想启用真 AI：在这里读取用户填的 DeepSeek key，
 * 用 OpenAI SDK 浏览器直连 DeepSeek 即可，下面两个函数的调用签名保持不变。
 */

export async function getChatReply(
  stage: ChatStage,
  _messages: ClientChatMessage[]
): Promise<string> {
  await demoDelay();
  return getDemoReply(stage);
}

export async function generateCandidates(
  _messages: ClientChatMessage[]
): Promise<{ id: number; style: string; text: string }[]> {
  await demoDelay(700);
  return DEMO_CANDIDATES.map((c) => ({ id: c.id, style: c.style, text: c.text }));
}
