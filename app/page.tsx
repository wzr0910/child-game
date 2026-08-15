import Link from "next/link";

/**
 * 首页（Landing）
 *
 * 目标：15 秒内让"奥德赛时期"的年轻人认出自己，并愿意点进对话。
 * 所以先给共鸣（你是不是这样），再给承诺（我们不做诊断），最后才是 CTA。
 * 视觉：诧寂 / 极简——大留白、暖宣纸底、墨字、陶土色唯一点缀。
 */

const FLOW = [
  { step: "01", title: "回忆", desc: "找到那个忘记时间的瞬间" },
  { step: "02", title: "觉察", desc: "分辨主动与被动" },
  { step: "03", title: "命名", desc: "为那个状态造一个词" },
  { step: "04", title: "宣言", desc: "生成属于你的卡片" },
];

export default function Home() {
  return (
    <main className="px-6">
      {/* Hero */}
      <section className="max-w-3xl mx-auto text-center pt-24 pb-20">
        <p className="text-clay tracking-[0.25em] text-xs sm:text-sm mb-6 uppercase">
          Friedrich Nietzsche · Also sprach Zarathustra
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
          孩子的游戏
        </h1>

        <p className="font-serif italic text-xl md:text-2xl text-ink/70 leading-relaxed mb-3">
          &ldquo;孩子是无辜的和遗忘的，
          <br />
          一个新的开始，一个游戏。&rdquo;
        </p>
        <p className="text-sm text-ink/40 mb-10">—— 尼采</p>

        {/* 演示模式：清晰但克制，不再容易被一眼略过 */}
        <div className="demo-callout mx-auto max-w-xl mb-10 text-left">
          <span className="demo-badge">演示模式</span>
          <p className="text-sm text-ink/75 leading-relaxed">
            当前线上版本的 AI 回复为预置话术，用于完整展示产品闭环；架构已支持接入
            DeepSeek 真实模型，填入密钥即可切换。
          </p>
        </div>

        <Link href="/chat" className="btn-primary text-lg">
          和查拉图斯特拉对话 →
        </Link>

        <p className="text-sm text-ink/45 mt-6">
          3 轮对话 · 5 分钟 · 一份属于你的「孩子宣言」
        </p>
      </section>

      {/* 流程 */}
      <section className="max-w-4xl mx-auto pb-20">
        <h2 className="eyebrow text-center mb-8">会发生什么</h2>
        <ol className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FLOW.map((item) => (
            <li key={item.step} className="surface-card p-5 text-center">
              <div className="text-clay text-xs tracking-widest mb-3">
                {item.step}
              </div>
              <div className="font-semibold mb-1">{item.title}</div>
              <div className="text-xs text-ink/50 leading-relaxed">
                {item.desc}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 差异化主张 */}
      <section className="max-w-3xl mx-auto pb-24">
        <div className="surface-card p-6 sm:p-8">
          <h2 className="font-semibold text-lg mb-5">这不是又一个测评工具</h2>
          <ul className="space-y-3 text-sm text-ink/70 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-clay shrink-0">×</span>
              <span>
                不给你贴标签，不告诉你「你是 INFP，适合做××」
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-clay shrink-0">×</span>
              <span>不做诊断，不给人生建议，也不替代心理咨询</span>
            </li>
            <li className="flex gap-3">
              <span className="text-clay shrink-0">○</span>
              <span>
                只做一件事：帮你把已经发生过的那个瞬间，重新看见一次
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-clay shrink-0">○</span>
              <span>
                最终的宣言由你自己挑选、自己修改、自己命名——那是你的话，不是 AI 的话
              </span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
