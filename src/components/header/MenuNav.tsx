import Link from 'next/link';
import { navItems } from '@/data/navItems';
 
export default function MenuNav() {
  return (
<nav aria-label="Navigation principale">
<ul className="flex items-center gap-6 text-sm font-medium">
        {navItems.map((item) => (
<li key={item.href}>
<Link
              href={item.href}
              className="text-slate-700 transition-colors hover:text-slate-950"
>
              {item.label}
</Link>
</li>
        ))}
</ul>
</nav>
  );
}