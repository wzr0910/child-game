"use client";

import { getDemoReply, DEMO_CANDIDATES, demoDelay } from "./fallback";
import type { ChatStage } from "./prompts";

export type ClientChatMessage = { role: "user" | "assistant"; content: string };

/**
 * AI 调用层
 *
 * 本地开发（npm run dev）：走 Next.js API 路由 → DeepSeek 真AI
 * GitHub Pages 线上（纯静态）：API 路由不存在 → 自动 fallback 到演示模式
 */

async function tryAPIChat(
  stage: ChatStage,
  messages: ClientChatMessage[]
): Promise<string | null> {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stage, messages }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.reply || null;
  } catch {
    return null;
  }
}

async function tryAPICandidates(
  messages: ClientChatMessage[]
): Promise<{ id: number; style: string; text: string }[] | null> {
  try {
    const res = await fetch("/api/candidates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.candidates || null;
  } catch {
    return null;
  }
}

export async function getChatReply(
  stage: ChatStage,
  messages: ClientChatMessage[]
): Promise<string> {
  const real = await tryAPIChat(stage, messages);
  if (real) return real;
  await demoDelay();
  return getDemoReply(stage);
}

export async function generateCandidates(
  messages: ClientChatMessage[]
): Promise<{ id: number; style: string; text: string }[]> {
  const real = await tryAPICandidates(messages);
  if (real && real.length > 0) return real;
  await demoDelay(700);
  return DEMO_CANDIDATES.map((c) => ({ id: c.id, style: c.style, text: c.text }));
}
