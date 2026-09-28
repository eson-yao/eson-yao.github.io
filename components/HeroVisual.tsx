"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import { site } from "@/lib/site";

export function HeroVisual() {
  const frame = useRef<HTMLDivElement>(null);
  const { image } = site.feature;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = frame.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 6).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 8).toFixed(2)}deg`);
    el.style.setProperty("--tx", `${(x * 10).toFixed(1)}px`);
    el.style.setProperty("--ty", `${(y * 10).toFixed(1)}px`);
  };

  const onLeave = () => {
    const el = frame.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--tx", "0px");
    el.style.setProperty("--ty", "0px");
  };

  return (
    <div
      className="relative [perspective:1200px]"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div
        ref={frame}
        className="relative transition-transform duration-300 ease-out will-change-transform [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]"
      >
        <a
          href="#xueyin"
          className="media-card cut-corner group relative block overflow-hidden border border-line-strong bg-card"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="block h-auto w-full"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-soft">
            <span className="h-1.5 w-1.5 animate-pulse bg-accent" />
            FEATURED · {site.feature.code}
          </div>
          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-xl font-semibold">{site.feature.title}</p>
              <p className="text-xs text-soft">{site.feature.subtitle}</p>
            </div>
            <span className="grid h-9 w-9 shrink-0 place-items-center border border-line-strong bg-background/60 text-sm text-foreground transition-all duration-300 group-hover:bg-accent group-hover:text-accent-ink">
              ↓
            </span>
          </div>
        </a>

        {/* 图片说明 */}
        <div
          className="absolute -bottom-5 right-4 border border-line-strong bg-background px-3 py-1.5 font-mono text-[10px] tracking-[0.12em] text-muted [transform:translate(var(--tx,0px),var(--ty,0px))] transition-transform duration-300 ease-out"
        >
          {image.caption}
        </div>
      </div>

      {/* 装饰角标 */}
      <span className="absolute -left-3 -top-3 h-6 w-6 border-l border-t border-accent" />
      <span className="absolute -bottom-3 -right-3 h-6 w-6 border-b border-r border-accent" />
    </div>
  );
}
