type MessageProps = {
  role: "user" | "assistant";
  content: string;
};

export function Message({ role, content }: MessageProps) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-none px-4 py-3 ${
          isUser
            ? "bg-ink text-paper"
            : "bg-ink/[0.04] border border-ink/15 text-ink"
        }`}
      >
        {!isUser && (
          <div className="text-xs text-ink/60 mb-1 font-semibold">
            🌀 查拉图斯特拉
          </div>
        )}
        <div className="whitespace-pre-wrap leading-relaxed">{content}</div>
      </div>
    </div>
  );
}
