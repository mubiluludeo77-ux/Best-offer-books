type BackButtonProps = {
  onClick: () => void;
};

export default function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed left-6 top-24 z-30 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2 text-sm font-semibold text-[var(--color-primary)] shadow-md transition hover:bg-[var(--color-hover)]"
    >
      ← Retour
    </button>
  );
}