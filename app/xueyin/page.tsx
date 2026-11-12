import type { Metadata } from "next";
import { xueyin } from "@/lib/content";

export const metadata: Metadata = {
  title: `《雪隐》关卡 Demo · 姚一心`,
  description: "《雪隐》第三人称 ARPG 线性箱庭，UE5 白模实机演示（1080p · 17:31）。",
};

const VIDEO_URL =
  "https://github.com/eson-yao/eson-yao.github.io/releases/download/video-v1/xueyin.mp4";

export default function XueyinVideoPage() {
  return (
    <main className="video-page">
      <a className="video-page__back" href="/#work">
        ← 返回作品
      </a>

      <p className="section__index">02 / WORK · VIDEO</p>
      <h1 className="video-page__title">{xueyin.title}</h1>
      <p className="video-page__meta">{xueyin.videoMeta} · UE5 白模实机演示</p>

      <figure className="video-frame">
        <video
          controls
          playsInline
          preload="metadata"
          poster={xueyin.cover.src}
          src={VIDEO_URL}
        >
          视频无法播放时，请使用下方按钮下载。
        </video>
        <figcaption>关卡实机演示 / {xueyin.videoMeta}</figcaption>
      </figure>

      <p className="video-page__note">
        视频约 649 MB，直接从 GitHub Releases 串流播放，建议在 Wi-Fi 环境下观看。
      </p>

      <div className="feature__actions">
        <a className="btn btn--primary" href={VIDEO_URL} target="_blank" rel="noopener">
          <span>
            直接打开视频文件
            <small>1080p · 17:31 · 649 MB</small>
          </span>
          <span aria-hidden="true">↗</span>
        </a>
        <a className="btn" href={xueyin.pdfHref} target="_blank" rel="noopener">
          <span>
            {xueyin.pdfLabel}
            <small>{xueyin.pdfMeta}</small>
          </span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </main>
  );
}
