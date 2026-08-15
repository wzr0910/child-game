"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * 全局导航
 *
 * 之前项目只有首页和对话页，靠 CTA 按钮单向跳转，
 * 用户进了 /chat 就没有回头路——作品集里这是很扣分的细节。
 */

const LINKS = [
  { href: "/", label: "首页" },
  { href: "/intro", label: "介绍" },
  { href: "/chat", label: "对话" },
  { href: "/gallery", label: "我的宣言" },
  { href: "/about", label: "关于" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/15 bg-paper">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold tracking-wide shrink-0 hover:opacity-70 transition-opacity"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 text-ink"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M20.5 12a8.5 8.5 0 1 1-2.7-6.2"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
            />
          </svg>
          <span className="hidden sm:inline">孩子的游戏</span>
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2 text-sm">
          {LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-none transition-colors ${
                    active
                      ? "bg-ink text-paper"
                      : "text-ink/60 hover:text-ink hover:bg-ink/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
