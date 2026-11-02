import { NextResponse } from "next/server";
import { deepseek, isAIConfigured } from "@/lib/ai/deepseek";
import { CANDIDATE_PROMPT } from "@/lib/ai/prompts";

export const runtime = "nodejs";

type Message = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  if (!isAIConfigured) {
    return NextResponse.json({ error: "AI not configured" }, { status: 503 });
  }

  const body = await req.json();
  const messages = (body.messages || []) as Message[];

  try {
    const response = await deepseek.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: CANDIDATE_PROMPT },
        {
          role: "user",
          content:
            "以下是我和查拉图斯特拉的完整对话记录，请据此生成3份孩子宣言候选：\n\n" +
            messages.map((m) => `${m.role === "user" ? "我" : "查拉图斯特拉"}：${m.content}`).join("\n"),
        },
      ],
      temperature: 0.9,
      max_tokens: 800,
      response_format: { type: "json_object" },
      stream: false,
    });

    const raw = response.choices[0]?.message?.content?.trim() || "";
    const parsed = JSON.parse(raw);
    const candidates = (parsed.candidates || []).map(
      (c: { id: number; style: string; text: string }) => ({
        id: c.id,
        style: c.style,
        text: c.text,
      })
    );
    return NextResponse.json({ candidates });
  } catch (err) {
    console.error("DeepSeek candidates error:", err);
    return NextResponse.json({ error: "AI request failed" }, { status: 500 });
  }
}
