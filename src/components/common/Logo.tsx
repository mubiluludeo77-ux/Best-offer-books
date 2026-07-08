import Link from 'next/link';

type LogoProps = {
  variant?: 'light' | 'dark';
};

export default function Logo({ variant = 'dark' }: LogoProps) {
  return (
    <Link
      href="/"
      className="text-xl font-bold tracking-tight transition hover:opacity-80"
    >
      <span className={variant === 'light' ? 'text-white' : 'text-[var(--color-primary)]'}>
        Best
      </span>
      <span className="text-[var(--color-secondary)]">OfferBook</span>
    </Link>
  );
}