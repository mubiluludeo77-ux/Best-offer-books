type SectionTitleProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: 'left' | 'center';
};

export default function SectionTitle({
  title,
  description,
  eyebrow,
  align = 'left',
}: SectionTitleProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[var(--color-secondary)]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-[var(--color-primary)]">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
          {description}
        </p>
      )}
    </div>
  );
}