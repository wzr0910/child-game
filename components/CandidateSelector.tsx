/**
 * 宣言候选选择组件
 *
 * 用户在 3 个 AI 生成的候选中选择一个
 * 也可以编辑选中的文本
 */

type Candidate = {
  id: number;
  style: string;
  text: string;
};

type CandidateSelectorProps = {
  candidates: Candidate[];
  selectedId: number | null;
  editedText: string;
  onSelect: (id: number) => void;
  onEdit: (text: string) => void;
  onConfirm: () => void;
};

const STYLE_BADGE: Record<string, string> = {
  "激情": "bg-ink/5 text-ink/70 border-ink/20",
  "诗意": "bg-ink/5 text-ink/70 border-ink/20",
  "简洁": "bg-ink/5 text-ink/70 border-ink/20",
};

export function CandidateSelector({
  candidates,
  selectedId,
  editedText,
  onSelect,
  onEdit,
  onConfirm,
}: CandidateSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="font-serif text-xl mb-2">✨ 选择你最有感觉的一句</h3>
        <p className="text-sm text-ink/60">
          点击卡片选中，你也可以直接编辑文字
        </p>
      </div>

      <div className="space-y-3">
        {candidates.map((c) => {
          const isSelected = selectedId === c.id;
          return (
            <div
              key={c.id}
              onClick={() => onSelect(c.id)}
              className={`p-5 rounded-none border cursor-pointer transition-colors ${
                isSelected
                  ? "border-ink bg-ink/[0.03]"
                  : "border-ink/15 bg-transparent hover:border-ink/40"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-xs px-2 py-1 rounded-none border ${
                    STYLE_BADGE[c.style] || "bg-ink/5 text-ink/70 border-ink/20"
                  }`}
                >
                  {c.style}版
                </span>
                {isSelected && (
                  <span className="text-xs text-ink font-semibold">
                    ✓ 已选中
                  </span>
                )}
              </div>
              {isSelected ? (
                <textarea
                  value={editedText}
                  onChange={(e) => onEdit(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  rows={6}
                  className="w-full p-3 bg-transparent border border-ink/20 rounded-none focus:outline-none focus:border-ink resize-none leading-relaxed"
                />
              ) : (
                <p className="text-ink/80 leading-relaxed whitespace-pre-wrap">
                  {c.text}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex gap-3 pt-4">
        <button
          onClick={onConfirm}
          disabled={selectedId === null}
          className="btn-primary flex-1"
        >
          确认，下一步 →
        </button>
      </div>
    </div>
  );
}
