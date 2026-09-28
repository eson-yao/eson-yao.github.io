type Props = {
  code: string;
  en: string;
  title: string;
  lead?: string;
  /** 长段落：两端对齐并首行缩进两字 */
  prose?: boolean;
  right?: React.ReactNode;
};

export function SectionHeader({ code, en, title, lead, prose, right }: Props) {
  return (
    <div className="mb-10 flex flex-col gap-6 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="mb-3 flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-muted">
          <span className="text-accent">{code}</span>
          <span className="h-px w-8 bg-line-strong" />
          <span>{en}</span>
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {lead ? (
          <p className={`mt-4 leading-8 text-soft ${prose ? "indent-[2em] text-justify" : ""}`}>{lead}</p>
        ) : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}
