/**
 * 风格选择组件
 *
 * 用户选择宣言卡片的视觉风格
 * 4 种风格：简约 / 古典 / 未来感 / 手绘
 */

type Style = "minimal" | "classical" | "futuristic" | "handwritten";

type StyleSelectorProps = {
  selectedStyle: Style | null;
  onSelect: (style: Style) => void;
};

const STYLES: Array<{
  id: Style;
  name: string;
  desc: string;
  preview: string;
}> = [
  {
    id: "minimal",
    name: "简约",
    desc: "现代、克制",
    preview: "bg-paper text-ink border border-ink",
  },
  {
    id: "classical",
    name: "古典",
    desc: "典雅、像古籍",
    preview: "bg-paper text-ink border border-double border-ink",
  },
  {
    id: "futuristic",
    name: "未来感",
    desc: "深邃、神秘",
    preview: "bg-ink text-paper border border-ink",
  },
  {
    id: "handwritten",
    name: "手绘",
    desc: "温暖、自然",
    preview: "bg-ink/[0.03] text-ink border border-dashed border-ink/40",
  },
];

export function StyleSelector({ selectedStyle, onSelect }: StyleSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="font-serif text-xl mb-2">🎨 选择你的宣言风格</h3>
        <p className="text-sm text-ink/60">
          不同的风格承载不同的你
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {STYLES.map((s) => {
          const isSelected = selectedStyle === s.id;
          return (
            <div
              key={s.id}
              onClick={() => onSelect(s.id)}
              className={`p-4 rounded-none border cursor-pointer transition-colors ${
                isSelected
                  ? "border-ink bg-ink/[0.03]"
                  : "border-ink/15 bg-transparent hover:border-ink/40"
              }`}
            >
              {/* 风格预览 */}
              <div
                className={`h-20 rounded-none mb-3 flex items-center justify-center text-xs ${s.preview}`}
              >
                Aa
              </div>
              <div className="text-center">
                <div className="font-serif">{s.name}</div>
                <div className="text-xs text-ink/50 mt-1">{s.desc}</div>
              </div>
              {isSelected && (
                <div className="text-center mt-2 text-xs text-ink font-semibold">
                  ✓
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
