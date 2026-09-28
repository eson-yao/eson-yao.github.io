import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `《雪隐》关卡预览 · ${site.name}`,
  description: "《雪隐》UE5 白模关卡实机预览。点击后打开视频文件。",
};

export default function XueyinPreview() {
  const { feature } = site;

  return (
    <div className="flex flex-1 flex-col">
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 w-full max-w-4xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center bg-accent font-mono text-xs font-bold tracking-tight text-accent-ink">
              {site.initials}
            </span>
            <span className="text-sm font-semibold">{site.name}</span>
          </Link>
          <Link href="/#xueyin" className="font-mono text-[11px] tracking-[0.14em] text-muted hover:text-foreground">
            ← 返回作品
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-5 py-16 sm:px-8">
        <p className="mb-3 font-mono text-[11px] tracking-[0.18em] text-muted">
          <span className="text-accent">{feature.code}</span>
          <span className="mx-3">/</span>
          VIDEO PREVIEW
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{feature.title}</h1>
        <p className="mt-4 max-w-2xl leading-8 text-soft">{feature.subtitle}</p>

        <figure className="mt-10 overflow-hidden border border-line-strong">
          <Image
            src={feature.image.src}
            alt={feature.image.alt}
            width={feature.image.width}
            height={feature.image.height}
            priority
            className="block h-auto w-full"
          />
          <figcaption className="border-t border-line px-4 py-3 font-mono text-[10px] tracking-[0.12em] text-muted">
            {feature.image.caption}
          </figcaption>
        </figure>

        <p className="mt-8 max-w-2xl leading-8 text-soft">{feature.summary}</p>

        {feature.video.file ? (
          <>
            <a
              href={feature.video.file}
              className="group mt-8 inline-flex items-center gap-4 border border-accent bg-accent px-5 py-3 text-sm font-medium text-accent-ink hover:bg-accent-strong"
            >
              <span>打开视频</span>
              <span className="font-mono text-[11px] tracking-[0.08em] text-accent-ink/70">
                {feature.video.filename}
                {feature.video.size ? ` · ${feature.video.size}` : ""}
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <p className="mt-4 font-mono text-[11px] tracking-[0.08em] text-muted">
              浏览器会直接打开这个文件并播放
              {feature.video.size ? `。约 ${feature.video.size}，加载需要一点时间` : ""}。
            </p>
          </>
        ) : (
          <>
            <span className="mt-8 inline-flex cursor-default items-center gap-4 border border-line-strong bg-card px-5 py-3 text-sm font-medium text-muted">
              <span>关卡视频整理中</span>
              <span className="font-mono text-[11px] tracking-[0.08em]">{feature.video.filename}</span>
            </span>
            <p className="mt-4 font-mono text-[11px] tracking-[0.08em] text-muted">
              实机视频即将上线。设计说明可先阅读{" "}
              <a href={`/${feature.pdf.href}`} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                完整关卡设计介绍（PDF）
              </a>
              。
            </p>
          </>
        )}
      </main>
    </div>
  );
}
