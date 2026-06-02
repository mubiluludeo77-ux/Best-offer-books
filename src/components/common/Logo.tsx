import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  variant?: 'default' | 'light';
};

export default function Logo({ variant = 'default' }: LogoProps) {
  const textColor =
    variant === 'light'
      ? 'text-[var(--color-footer-text)]'
      : 'text-[var(--color-primary)]';

  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/images/logo/logo-best-offer-books1.webp"
        alt="Logo Best OfferBook"
        width={100}
        height={100}
        priority
        className="rounded-md"
      />

      <span className={`text-xl font-bold tracking-tight ${textColor}`}>
        Best OfferBook
      </span>
    </Link>
  );
}