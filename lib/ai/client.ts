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
): Promise<{ message: string; isDemo: boolean }> {
  const real = await tryAPIChat(stage, messages);
  if (real) return { message: real, isDemo: false };
  await demoDelay();
  return { message: getDemoReply(stage), isDemo: true };
}

export async function generateCandidates(
  messages: ClientChatMessage[]
): Promise<{ candidates: { id: number; style: string; text: string }[]; isDemo: boolean }> {
  const real = await tryAPICandidates(messages);
  if (real && real.length > 0) return { candidates: real, isDemo: false };
  await demoDelay(700);
  return { candidates: DEMO_CANDIDATES.map((c) => ({ id: c.id, style: c.style, text: c.text })), isDemo: true };
}
