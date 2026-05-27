import Link from "next/link";
import { navItems } from "@/data/navItems";
 
type MenuNavProps = {
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
};
 
export default function MenuNav({
  className = "",
  linkClassName = "",
  onLinkClick,
}: MenuNavProps) {
  return (
<nav aria-label="Navigation principale">
<ul className={className}>
        {navItems.map((item) => (
<li key={item.href}>
<Link
              href={item.href}
              onClick={onLinkClick}
              className={`text-slate-700 transition-colors hover:text-slate-950 ${linkClassName}`}
>
              {item.label}
</Link>
</li>
        ))}
</ul>
</nav>
  );
}