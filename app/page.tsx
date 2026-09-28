import { site } from "@/lib/site";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 text-2xl font-semibold tracking-tight">{children}</h2>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b border-line/70 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-4xl items-center justify-between px-5 py-4 text-sm">
          <a href="#top" className="font-semibold tracking-tight">
            {site.name}
          </a>
          <div className="flex gap-5 text-muted">
            <a href="#xueyin" className="hover:text-foreground">
              雪隐
            </a>
            <a href="#space" className="hover:text-foreground">
              空间设计
            </a>
            <a href="#about" className="hover:text-foreground">
              关于
            </a>
            <a href="#contact" className="hover:text-foreground">
              联系
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-4xl flex-1 px-5 pb-16">
        <section className="flex flex-col gap-4 pt-16 pb-14 sm:pt-24">
          <p className="text-sm uppercase tracking-[0.16em] text-muted">
            {site.kicker}
          </p>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
            {site.name}
          </h1>
          <p className="text-lg text-accent">{site.role}</p>
          <p className="max-w-2xl text-base leading-8 text-soft">{site.lead}</p>
          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href="#xueyin"
              className="rounded-full bg-accent-strong px-4 py-2.5 text-sm font-medium text-white hover:opacity-90"
            >
              查看《雪隐》
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line bg-card px-4 py-2.5 text-sm font-medium hover:border-accent"
            >
              下载简历
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-line bg-card px-4 py-2.5 text-sm font-medium hover:border-accent"
            >
              发邮件
            </a>
          </div>
        </section>

        <section
          id="xueyin"
          className="scroll-mt-20 rounded-2xl border border-line bg-card p-6 sm:p-8"
        >
          <p className="mb-1 text-sm tracking-[0.08em] text-muted">
            {site.feature.eyebrow}
          </p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight">
            {site.feature.title}
          </h2>
          <ul className="mb-5 flex flex-wrap gap-2">
            {site.feature.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
          <p className="mb-4 leading-8 text-soft">{site.feature.summary}</p>
          <ul className="mb-5 list-disc space-y-2 pl-5 leading-7 text-soft">
            {site.feature.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <a
            href={site.feature.pdf.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            {site.feature.pdf.label}
          </a>
        </section>

        <section id="space" className="scroll-mt-20 pt-16">
          <SectionTitle>{site.space.title}</SectionTitle>
          <p className="mb-6 max-w-2xl leading-8 text-soft">{site.space.lead}</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {site.space.projects.map((project) => (
              <article
                key={project.name}
                className="rounded-xl border border-line bg-card p-5"
              >
                <h3 className="mb-2 text-lg font-semibold">{project.name}</h3>
                <p className="mb-2 text-sm text-muted">{project.meta}</p>
                <p className="text-sm leading-7 text-soft">{project.description}</p>
              </article>
            ))}
          </div>
          <a
            href={site.space.pdf.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-accent hover:underline"
          >
            {site.space.pdf.label}
          </a>
        </section>

        <section id="about" className="scroll-mt-20 pt-16">
          <SectionTitle>关于我</SectionTitle>
          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
            <div className="space-y-3 leading-8 text-soft">
              {site.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="flex flex-wrap content-start gap-2">
              {site.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-line bg-card px-3 py-1.5 text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer id="contact" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto w-full max-w-4xl px-5 py-8 text-sm text-muted">
          <p className="mb-2 text-foreground">
            {site.name} · 游戏关卡策划
          </p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <a href={site.phoneHref} className="text-accent hover:underline">
              {site.phone}
            </a>
            <span>·</span>
            <a href={`mailto:${site.email}`} className="text-accent hover:underline">
              {site.email}
            </a>
            <span>· {site.location} ·</span>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              简历 PDF
            </a>
            <span>·</span>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              GitHub
            </a>
          </p>
          <p className="mt-3 text-xs">© {new Date().getFullYear()} {site.name}</p>
        </div>
      </footer>
    </div>
  );
}
