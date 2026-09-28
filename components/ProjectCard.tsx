import Image from "next/image";
import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="media-card group flex h-full flex-col border border-line bg-card transition-colors duration-300 hover:border-line-strong">
      <div className="relative overflow-hidden border-b border-line">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="block aspect-[16/10] w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-3 top-3 border border-line-strong bg-background/70 px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-soft backdrop-blur">
          {project.code}
        </span>
        <span className="absolute bottom-3 right-3 translate-y-2 font-mono text-[10px] tracking-[0.12em] text-soft opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {project.image.caption}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="font-mono text-[10px] tracking-[0.14em] text-muted">{project.period}</p>
        <h3 className="text-lg font-semibold leading-snug">{project.name}</h3>
        <p className="text-xs text-muted">{project.meta}</p>
        <p className="flex-1 text-sm leading-7 text-soft">{project.description}</p>
      </div>
    </article>
  );
}
