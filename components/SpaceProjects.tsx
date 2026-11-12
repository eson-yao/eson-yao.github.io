import Image from "next/image";
import { landscapeProjects } from "@/lib/content";

export function SpaceProjects() {
  return (
    <section className="section" id="space">
      <div className="section__head">
        <div>
          <p className="section__index">04 / SPACE</p>
          <h2>空间设计基础</h2>
        </div>
        <p className="section__lead">
          做关卡之前，我在真实场地里处理路径、高差和叙事空间。这些项目练的是同一件事：让人在移动中感到节奏和情绪变化。
        </p>
      </div>

      <div className="grid">
        {landscapeProjects.map((project) => (
          <article className="project" key={project.title}>
            <div className="project__media">
              <Image
                src={project.image}
                alt={project.alt}
                width={960}
                height={660}
              />
            </div>
            <div className="project__body">
              <h3>{project.title}</h3>
              <p className="project__meta">{project.meta}</p>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="hero__actions" style={{ marginTop: "1.25rem" }}>
        <a
          className="btn"
          href="/files/landscape-portfolio.pdf"
          target="_blank"
          rel="noopener"
        >
          查看景观作品集 PDF
        </a>
      </div>
    </section>
  );
}
