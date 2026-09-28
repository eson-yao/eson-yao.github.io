"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function Nav() {
  const [active, setActive] = useState("top");
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = site.nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center bg-accent font-mono text-xs font-bold tracking-tight text-accent-ink transition-transform duration-300 group-hover:-rotate-6">
            {site.initials}
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold">{site.name}</span>
            <span className="block font-mono text-[10px] tracking-[0.18em] text-muted">
              {site.kicker}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="主导航">
          {site.nav.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`group relative flex items-baseline gap-2 px-3 py-2 text-sm transition-colors ${
                  isActive ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                <span className="font-mono text-[10px] text-accent">{item.num}</span>
                <span>{item.label}</span>
                <span className="font-mono text-[10px] tracking-[0.12em] text-muted/70">
                  {item.en}
                </span>
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-px bg-accent transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 border border-line-strong px-3 py-1.5 font-mono text-[11px] tracking-[0.12em] text-soft transition-colors hover:border-accent hover:text-accent"
          >
            RESUME ↗
          </a>
        </nav>

        <button
          type="button"
          className="grid h-9 w-9 place-items-center border border-line-strong text-soft md:hidden"
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform duration-300 ${
                open ? "translate-y-[5.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[5.5px] h-px w-4 bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[11px] h-px w-4 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[5.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* 滚动进度条 */}
      <div className="h-px w-full bg-line/60">
        <div
          className="h-full bg-accent transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* 移动端菜单 */}
      <div
        className={`grid overflow-hidden border-b border-line bg-background/95 backdrop-blur-md transition-[grid-template-rows] duration-300 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav className="flex flex-col px-5 py-3" aria-label="移动端导航">
            {site.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 border-b border-line/60 py-3 text-base last:border-b-0"
              >
                <span className="font-mono text-xs text-accent">{item.num}</span>
                <span>{item.label}</span>
                <span className="font-mono text-[10px] tracking-[0.12em] text-muted">{item.en}</span>
              </a>
            ))}
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-fit border border-line-strong px-3 py-2 font-mono text-[11px] tracking-[0.12em] text-soft"
            >
              RESUME ↗
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
