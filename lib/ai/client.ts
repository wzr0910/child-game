import type { ChatStage } from "./prompts";

export type ClientChatMessage = { role: "user" | "assistant"; content: string };

/**
 * 前端 AI 调用：走服务端 API 路由
 *
 * Vercel 部署版：前端 fetch /api/chat，服务端路由调 DeepSeek。
 * API key 在服务端环境变量里，不暴露给浏览器。
 */

export async function getChatReply(
  stage: ChatStage,
  messages: ClientChatMessage[]
): Promise<string> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ stage, messages }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "查拉图斯特拉没有回应，请重试");
  }

  const data = await res.json();
  return data.message;
}

export async function generateCandidates(
  messages: ClientChatMessage[]
): Promise<{ id: number; style: string; text: string }[]> {
  const res = await fetch("/api/generate-candidates", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "宣言铸造失败，请重试");
  }

  const data = await res.json();
  return data.candidates;
}
