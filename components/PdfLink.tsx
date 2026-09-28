type Props = {
  href: string;
  label: string;
  pages: string;
  primary?: boolean;
};

export function PdfLink({ href, label, pages, primary = false }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-4 border px-4 py-3 text-sm transition-colors ${
        primary
          ? "border-accent bg-accent text-accent-ink hover:bg-accent-strong hover:border-accent-strong"
          : "border-line-strong text-foreground hover:border-accent hover:text-accent"
      }`}
    >
      <span className="font-medium">{label}</span>
      <span
        className={`font-mono text-[10px] tracking-[0.14em] ${
          primary ? "text-accent-ink/70" : "text-muted"
        }`}
      >
        {pages}
      </span>
      <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        ↗
      </span>
    </a>
  );
}
