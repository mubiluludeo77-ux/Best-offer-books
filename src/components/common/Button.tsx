import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors';

  const variantClasses = {
    primary: 'bg-slate-900 text-white hover:bg-slate-700',
    secondary:
      'border border-slate-300 bg-white text-slate-900 hover:bg-slate-100',
  };

  const className = `${baseClasses} ${variantClasses[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}