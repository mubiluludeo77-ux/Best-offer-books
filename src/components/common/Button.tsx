import Link from 'next/link';
import { ReactNode } from 'react';
 
type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};
 
export default function Button({
  href,
  children,
  variant = 'primary',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors';
 
  const variantClasses = {
    primary: 'bg-slate-900 text-white hover:bg-slate-700',
    secondary: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-100',
  };
 
  return (
<Link href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
</Link>
  );
}