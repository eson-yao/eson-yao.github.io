import Image from "next/image";
import type { FeaturedProject } from "@/lib/content";

export function FeaturedWork({ project }: { project: FeaturedProject }) {
  return (
    <section className="section" id={project.id}>
      <div className="section__head">
        <div>
          <p className="section__index">{project.index}</p>
          <h2>{project.title}</h2>
        </div>
      </div>

      <figure className="feature__cover" style={{ aspectRatio: project.cover.ratio ?? "2 / 1" }}>
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(max-width: 900px) 100vw, 1100px"
        />
        <figcaption>{project.cover.caption}</figcaption>
      </figure>

      <div className="feature__body">
        <div className="feature__copy">
          <ul className="tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <p>{project.summary}</p>
          <div className="feature__actions">
            <a className="btn btn--primary" href={project.pdfHref} target="_blank" rel="noopener">
              <span>
                {project.pdfLabel}
                <small>{project.pdfMeta}</small>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
            {project.videoHref ? (
              <a className="btn" href={project.videoHref} target="_blank" rel="noopener">
                <span>
                  {project.videoLabel}
                  {project.videoMeta ? <small>{project.videoMeta}</small> : null}
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
        </div>

        <ol className="feature__notes">
          {project.notes.map((note, index) => (
            <li key={note.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
