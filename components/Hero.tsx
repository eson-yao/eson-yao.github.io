import Image from "next/image";
import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero" id="index">
      <div className="hero__media">
        <Image
          src="/images/xueyin/hero.jpg"
          alt="《雪隐》UE5 灰盒关卡实机画面"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero__veil" />
      <div className="hero__content">
        <p className="eyebrow">Level Design Portfolio · 2026</p>
        <h1>{profile.name}</h1>
        <p className="hero__role">
          {profile.role} · {profile.location} · {profile.availability}
        </p>
        <p className="hero__lead">{profile.lead}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#work">
            查看《雪隐》
          </a>
          <a className="btn btn--primary" href="#xinlv">
            查看《“新律”》
          </a>
          <a className="btn" href="/files/resume.pdf" target="_blank" rel="noopener">
            下载简历
          </a>
          <a className="btn" href={`mailto:${profile.email}`}>
            发邮件
          </a>
        </div>
      </div>
    </section>
  );
}
