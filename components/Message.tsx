type MessageProps = {
  role: "user" | "assistant";
  content: string;
};

export function Message({ role, content }: MessageProps) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-ink text-parchment"
            : "bg-clay/10 border border-clay/30 text-ink"
        }`}
      >
        {!isUser && (
          <div className="text-xs text-clay mb-1 font-semibold">
            🌀 查拉图斯特拉
          </div>
        )}
        <div className="whitespace-pre-wrap leading-relaxed">{content}</div>
      </div>
    </div>
  );
}
