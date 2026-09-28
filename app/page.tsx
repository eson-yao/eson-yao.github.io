import Image from "next/image";
import { site } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { HeroVisual } from "@/components/HeroVisual";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { PdfLink } from "@/components/PdfLink";

const maxHours = Math.max(
  ...site.about.games.groups.flatMap((group) => group.items.map((game) => game.hours)),
);

// 平方根尺度：时长跨度从 50h 到 4500h，线性比例会把百小时级别压成一条细线
const barWidth = (hours: number) => `${Math.max(4, Math.sqrt(hours / maxHours) * 100)}%`;

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />

      <main className="flex-1">
        {/* 01 定位 / HERO */}
        <section id="top" className="relative overflow-hidden">
          <div className="grid-bg pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute -right-24 top-16 hidden select-none font-mono sm:block text-[18rem] font-bold leading-none text-foreground/[0.035] sm:text-[24rem]">
            01
          </div>

          <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pb-28 lg:pt-40">
            <div>
              <Reveal>
                <p className="mb-6 flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-muted">
                  <span className="text-accent">GAME / LEVEL DESIGN</span>
                  <span className="h-px w-10 bg-line-strong" />
                  <span>2026 EDITION</span>
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
                  <span className="block">{site.headline[0]}</span>
                  <span className="block text-transparent [-webkit-text-stroke:1.5px_var(--soft)]">
                    {site.headline[1]}
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 max-w-xl border-l-2 border-accent pl-5 indent-[2em] text-justify text-base leading-8 text-soft sm:text-lg">
                  {site.lead}
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#xueyin"
                    className="group inline-flex items-center gap-3 bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-strong"
                  >
                    查看关卡Demo
                    <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="group inline-flex items-center gap-3 border border-line-strong px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                  >
                    通过邮箱联系
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200} className="lg:pl-6">
              <HeroVisual />
              <div className="mt-10 flex items-center justify-between border border-line bg-card px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="relative block h-10 w-10 overflow-hidden">
                    <Image
                      src={site.portrait.src}
                      alt=""
                      width={site.portrait.width}
                      height={site.portrait.height}
                      className="h-full w-full object-cover object-[center_22%]"
                    />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.16em] text-accent">CANDIDATE PROFILE / 001</p>
                    <p className="text-sm font-semibold">
                      {site.name}
                      <span className="ml-2 font-normal text-muted">{site.role}</span>
                    </p>
                    <p className="text-xs text-soft">{site.scope}</p>
                  </div>
                </div>
                <p className="hidden font-mono text-[10px] tracking-[0.12em] text-muted sm:block">{site.status}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 跑马灯 */}
        <div className="marquee overflow-hidden border-y border-line bg-card py-3" aria-hidden="true">
          <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-mono text-[11px] tracking-[0.2em] text-muted">
            {[...site.marquee, ...site.marquee].map((item, i) => (
              <span key={i} className="flex items-center gap-10">
                {item}
                <span className="h-1 w-1 bg-accent" />
              </span>
            ))}
          </div>
        </div>

        {/* 02 作品 / 雪隐 */}
        <section id="xueyin" className="relative scroll-mt-16 border-t border-line bg-card">
          <div className="pointer-events-none absolute left-0 top-0 hidden select-none font-mono sm:block text-[14rem] font-bold leading-none text-foreground/[0.03] sm:text-[20rem]">
            02
          </div>
          <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
            <Reveal>
              <SectionHeader
                code={site.feature.code}
                en={`${site.feature.kind} · ${site.feature.period}`}
                title={`代表关卡 ${site.feature.title}`}
                lead={site.feature.subtitle}
              />
            </Reveal>

            <Reveal>
              <figure className="media-card group relative overflow-hidden border border-line-strong bg-background">
                <Image
                  src={site.feature.image.src}
                  alt={site.feature.image.alt}
                  width={site.feature.image.width}
                  height={site.feature.image.height}
                  sizes="(min-width: 1152px) 1088px, 100vw"
                  className="block h-auto w-full"
                />
                <figcaption className="absolute bottom-3 left-3 border border-line-strong bg-background/75 px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-soft backdrop-blur">
                  {site.feature.image.caption}
                </figcaption>
              </figure>
            </Reveal>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
              <Reveal>
                <ul className="mb-6 flex flex-wrap gap-2">
                  {site.feature.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-line-strong px-2.5 py-1 font-mono text-[11px] tracking-[0.06em] text-soft"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className="indent-[2em] text-justify leading-8 text-soft">{site.feature.summary}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <PdfLink
                    href={site.feature.video.preview}
                    label="观看关卡 Demo 视频"
                    pages={site.feature.video.file ? `1080p · ${site.feature.video.length}` : "即将上线"}
                    primary
                  />
                  <PdfLink
                    href={site.feature.pdf.href}
                    label={site.feature.pdf.label}
                    pages={site.feature.pdf.pages}
                  />
                </div>
              </Reveal>

              <ol className="grid gap-px border border-line bg-line">
                {site.feature.points.map((p, i) => (
                  <Reveal key={p.title} delay={i * 100} className="bg-card">
                    <li className="group flex gap-5 p-6 transition-colors duration-300 hover:bg-card-2">
                      <span className="font-mono text-sm text-accent">0{i + 1}</span>
                      <div>
                        <h3 className="font-semibold">{p.title}</h3>
                        <p className="mt-2 indent-[2em] text-justify text-sm leading-7 text-soft">{p.text}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 空间设计基础 */}
        <section className="border-t border-line">
          <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
            <Reveal>
              <SectionHeader
                code={site.space.code}
                en={site.space.en}
                title={site.space.title}
                lead={site.space.lead}
                prose
                right={
                  <PdfLink
                    href={site.space.pdf.href}
                    label={site.space.pdf.label}
                    pages={site.space.pdf.pages}
                  />
                }
              />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {site.space.projects.map((project, i) => (
                <Reveal key={project.code} delay={i * 100}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 03 经历 */}
        <section id="about" className="relative scroll-mt-16 border-t border-line bg-card">
          <div className="pointer-events-none absolute right-0 top-0 hidden select-none font-mono sm:block text-[14rem] font-bold leading-none text-foreground/[0.03] sm:text-[20rem]">
            03
          </div>
          <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
            <Reveal>
              <SectionHeader
                code={site.about.code}
                en={site.about.en}
                title={site.about.title}
              />
            </Reveal>

            <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
              <ol className="relative border-l border-line pl-8">
                {site.about.timeline.map((t, i) => (
                  <Reveal key={`${t.org}-${t.period}`} delay={i * 60} className="pb-10 last:pb-0">
                    <li className="group relative">
                      <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 border border-line-strong bg-background transition-colors duration-300 group-hover:border-accent group-hover:bg-accent" />
                      <p className="font-mono text-[11px] tracking-[0.14em] text-accent">{t.period}</p>
                      <h3 className="mt-2 text-lg font-semibold">{t.org}</h3>
                      <p className="text-sm text-muted">{t.role}</p>
                      {t.text ? (
                        <p className="mt-2 indent-[2em] text-justify text-sm leading-7 text-soft">{t.text}</p>
                      ) : null}
                    </li>
                  </Reveal>
                ))}
              </ol>

              <div className="flex flex-col gap-10">
                <Reveal>
                  <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
                    {site.about.skills.map((s) => (
                      <div key={s.group} className="bg-card p-5">
                        <p className="mb-3 font-mono text-[10px] tracking-[0.16em] text-muted">{s.group}</p>
                        <ul className="flex flex-wrap gap-2">
                          {s.items.map((item, idx) => (
                            <li key={item} className="text-sm text-soft">
                              {item}
                              {idx < s.items.length - 1 ? (
                                <span className="ml-2 text-line-strong">/</span>
                              ) : null}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal>
              <div className="mt-14 border border-line bg-background p-5 sm:p-6">
                <p className="mb-1 font-mono text-[10px] tracking-[0.16em] text-muted">PLAYTIME OVERVIEW</p>
                <p className="mb-6 text-sm text-soft">{site.about.games.note}</p>
                <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                  {site.about.games.groups.map((group) => (
                    <div key={group.name}>
                      <p className="mb-3 font-mono text-sm font-semibold tracking-[0.12em] text-accent">{group.name}</p>
                      {group.items.length > 0 ? (
                        <ul className="space-y-3">
                          {group.items.map((game) => (
                            <li key={game.name}>
                              <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
                                <span>
                                  {game.name}
                                  {game.tag ? (
                                    <span className="ml-2 font-mono text-[10px] tracking-[0.08em] text-muted">
                                      {game.tag}
                                    </span>
                                  ) : null}
                                </span>
                                <span className="font-mono text-xs text-soft">{game.hours.toLocaleString()}h</span>
                              </div>
                              <div className="h-1 w-full bg-line">
                                <div
                                  className="bar-fill h-full bg-accent"
                                  style={{ width: barWidth(game.hours) }}
                                />
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {group.more ? (
                        <p className={`${group.items.length > 0 ? "mt-3" : ""} text-sm leading-7 text-soft`}>
                          {group.more.join(" / ")}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 04 联系 */}
        <section id="contact" className="relative scroll-mt-16 overflow-hidden border-t border-line">
          <div className="grid-bg pointer-events-none absolute inset-0 rotate-180" />
          <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
            <Reveal>
              <p className="mb-4 font-mono text-[11px] tracking-[0.18em] text-muted">
                <span className="text-accent">04</span> / CONTACT
              </p>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">联系方式与简历</h2>
              <p className="mt-3 text-sm text-soft sm:text-base">欢迎通过以下方式与我联系！</p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <a
                  href={site.phoneHref}
                  className="group flex items-center gap-3 border border-line bg-card px-5 py-4 transition-colors duration-300 hover:border-accent"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center bg-accent/15 text-accent">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] tracking-[0.16em] text-muted">电话</span>
                    <span className="block truncate text-sm font-medium transition-colors group-hover:text-accent">
                      {site.phone}
                    </span>
                  </span>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-3 border border-line bg-card px-5 py-4 transition-colors duration-300 hover:border-accent"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center bg-accent/15 text-accent">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] tracking-[0.16em] text-muted">邮箱</span>
                    <span className="block truncate text-sm font-medium transition-colors group-hover:text-accent">
                      {site.email}
                    </span>
                  </span>
                </a>
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border border-line bg-card px-5 py-4 transition-colors duration-300 hover:border-accent"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center bg-accent/15 text-accent">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                      <path d="M14 3v6h6" />
                      <path d="M12 12v6m-3-3 3 3 3-3" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] tracking-[0.16em] text-muted">简历</span>
                    <span className="block truncate text-sm font-medium transition-colors group-hover:text-accent">
                      下载简历 PDF
                    </span>
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 font-mono text-[11px] tracking-[0.12em] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.role}
          </p>
          <p className="flex gap-5">
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-foreground">
              GITHUB
            </a>
            <a href="#top" className="link-underline hover:text-foreground">
              BACK TO TOP ↑
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
