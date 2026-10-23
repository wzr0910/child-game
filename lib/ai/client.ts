import type { ChatStage } from "./prompts";
import { getDemoReply, DEMO_CANDIDATES, demoDelay } from "./fallback";

export type ClientChatMessage = { role: "user" | "assistant"; content: string };

export type ChatReply = { message: string; isDemo: boolean };
export type CandidatesReply = { candidates: { id: number; style: string; text: string }[]; isDemo: boolean };

/**
 * 前端 AI 调用：走服务端 API 路由
 *
 * 静态托管兜底（GitHub Pages）：
 * 静态导出没有 API 路由，/api/chat 会 405/404。
 * 请求失败时自动切换到本地演示模式（fallback.ts 的预置回复），
 * 保证作品集链接打开即可完整走完 3 轮并生成宣言卡，
 * 同时界面显示「演示模式」徽标，不误导访客。
 */

export async function getChatReply(
  stage: ChatStage,
  messages: ClientChatMessage[]
): Promise<ChatReply> {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stage, messages }),
    });

    if (!res.ok) throw new Error("api_not_ok");

    const data = await res.json();
    return { message: data.message, isDemo: !!data.demo };
  } catch {
    await demoDelay();
    return { message: getDemoReply(stage), isDemo: true };
  }
}

export async function generateCandidates(
  messages: ClientChatMessage[]
): Promise<CandidatesReply> {
  try {
    const res = await fetch("/api/generate-candidates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
    });

    if (!res.ok) throw new Error("api_not_ok");

    const data = await res.json();
    return { candidates: data.candidates, isDemo: !!data.demo };
  } catch {
    await demoDelay(1200);
    return { candidates: DEMO_CANDIDATES, isDemo: true };
  }
}
