import type { ChatStage } from "./prompts";

export type ClientChatMessage = { role: "user" | "assistant"; content: string };

export type ChatReply = { message: string; isDemo: boolean };
export type CandidatesReply = { candidates: { id: number; style: string; text: string }[]; isDemo: boolean };

/**
 * 前端 AI 调用：走服务端 API 路由
 */

export async function getChatReply(
  stage: ChatStage,
  messages: ClientChatMessage[]
): Promise<ChatReply> {
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
  return { message: data.message, isDemo: !!data.demo };
}

export async function generateCandidates(
  messages: ClientChatMessage[]
): Promise<CandidatesReply> {
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
  return { candidates: data.candidates, isDemo: !!data.demo };
}
