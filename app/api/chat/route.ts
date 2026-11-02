import { NextResponse } from "next/server";
import { deepseek, isAIConfigured } from "@/lib/ai/deepseek";
import { getSystemPrompt, type ChatStage } from "@/lib/ai/prompts";

export const runtime = "nodejs";

type Message = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  if (!isAIConfigured) {
    return NextResponse.json({ error: "AI not configured" }, { status: 503 });
  }

  const body = await req.json();
  const stage = body.stage as ChatStage;
  const messages = (body.messages || []) as Message[];

  try {
    const systemPrompt = getSystemPrompt(stage);
    const response = await deepseek.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((m) => ({ role: m.role as "user" | "assistant", content: m.content })),
      ],
      temperature: 0.85,
      max_tokens: 300,
      stream: false,
    });

    const reply = response.choices[0]?.message?.content?.trim() || "";
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("DeepSeek chat error:", err);
    return NextResponse.json({ error: "AI request failed" }, { status: 500 });
  }
}
