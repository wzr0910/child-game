import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "项目介绍",
  description:
    "「孩子的游戏」是什么、解决什么问题、怎么玩、适合谁——以及当前版本的诚实说明。",
};

const PROBLEM = [
  {
    q: "奥德赛时期的迷茫",
    a: "20 多岁的你，不再按部就班，却还没找到那个让自己愿意的事。市面上太多工具急着给你贴标签、下诊断，反而让你更焦虑。",
  },
  {
    q: "不缺建议，缺的是「看见」",
    a: "你其实早就有过那个忘记时间的瞬间，只是没人帮你把它重新描述出来。这个产品做的，就是帮你把那个瞬间看见一次。",
  },
  {
    q: "成果要「是你的」",
    a: "纯 AI 生成的宣言，你不会真的认领。所以这里 AI 只给候选、你来做选择、修改、命名——最终那张卡片上，写的是你的话。",
  },
];

const STEPS = [
  { step: "01", title: "回忆", desc: "找到那个忘记时间的瞬间" },
  { step: "02", title: "觉察", desc: "分辨主动与被动" },
  { step: "03", title: "命名", desc: "为那个状态造一个词" },
  { step: "04", title: "宣言", desc: "生成属于你的卡片" },
];

const FOR_WHO = [
  "正在找方向、对「我到底想做什么」没把握的 20–30 岁年轻人",
  "想做自我探索类产品、想看完整产品闭环的面试官 / 招聘方",
  "对尼采「精神三变」、哲学 × AI 交叉感兴趣的人",
];

export default function IntroPage() {
  return (
    <main className="px-4 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          项目介绍
        </h1>
        <p className="text-center text-ink/50 mb-10 text-sm">
          关于「孩子的游戏」的一切，三分钟看完
        </p>

        {/* 一句话定位 */}
        <section className="surface-card p-6 sm:p-8 mb-8">
          <p className="leading-relaxed text-ink/80">
            <strong className="text-ink">「孩子的游戏」</strong>
            让 AI 扮演尼采笔下的查拉图斯特拉，用 3 轮对话帮处在
            <strong className="text-ink">「奥德赛时期」</strong>
            的年轻人看见自己真正愿意做的事，并共同创作一份可分享的
            <strong className="text-ink">孩子宣言</strong>。
          </p>
          <p className="mt-4 text-ink/50 italic text-sm">
            “孩子是无辜的和遗忘的，一个新的开始，一个游戏。” —— 尼采
          </p>
        </section>

        {/* 它解决什么问题 */}
        <section className="mb-10">
          <h2 className="text-sm uppercase tracking-widest text-ink/40 mb-5">
            它解决什么问题
          </h2>
          <div className="space-y-4">
            {PROBLEM.map((item) => (
              <div key={item.q} className="surface-card p-5">
                <div className="font-semibold mb-2 text-ink">{item.q}</div>
                <p className="text-sm text-ink/70 leading-loose">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 怎么玩 */}
        <section className="mb-10">
          <h2 className="text-sm uppercase tracking-widest text-ink/40 mb-5">
            怎么玩（四步）
          </h2>
          <ol className="grid grid-cols-2 gap-4">
            {STEPS.map((item) => (
              <li key={item.step} className="surface-card p-5 text-center">
                <div className="text-gold text-xs tracking-widest mb-3">
                  {item.step}
                </div>
                <div className="font-bold mb-1">{item.title}</div>
                <div className="text-xs text-ink/50 leading-relaxed">
                  {item.desc}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 适合谁 */}
        <section className="mb-10">
          <h2 className="text-sm uppercase tracking-widest text-ink/40 mb-5">
            适合谁看
          </h2>
          <div className="surface-card p-5 divide-y divide-ink/5">
            {FOR_WHO.map((item) => (
              <div key={item} className="py-3 first:pt-0 last:pb-0 text-sm text-ink/70">
                · {item}
              </div>
            ))}
          </div>
        </section>

        {/* 技术亮点（给面试官） */}
        <section className="mb-10">
          <h2 className="text-sm uppercase tracking-widest text-ink/40 mb-5">
            技术亮点
          </h2>
          <div className="surface-card p-5 text-sm text-ink/70 leading-loose">
            <p>
              完整的产品闭环：对话状态机 → 候选生成 → 用户共创（挑选 / 修改 / 命名 / 选风格）→
              本地生成可下载卡片。对话与宣言仅存于浏览器本地，隐私成本最低。
            </p>
          </div>
        </section>

        {/* 诚实说明 */}
        <section className="mb-10">
          <h2 className="text-sm uppercase tracking-widest text-ink/40 mb-5">
            当前版本说明
          </h2>
          <div className="surface-card p-5 border-l-4 border-gold text-sm text-ink/70 leading-loose">
            <strong className="text-ink">演示模式：</strong>
            当前线上版本的 AI 回复为预置话术，用于完整展示产品闭环；
            真实模型接入（DeepSeek）的代码已保留，填入密钥即可切换。
          </div>
        </section>

        <div className="text-center space-y-3">
          <Link
            href="/chat"
            className="inline-block px-10 py-3.5 bg-ink text-parchment rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            开始一次对话 →
          </Link>
          <div>
            <Link
              href="/about"
              className="text-sm text-ink/50 underline hover:text-ink"
            >
              查看完整设计复盘
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
