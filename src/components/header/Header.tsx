import Logo from '@/components/common/Logo';
import MenuNav from '@/components/header/MenuNav';
 
export default function Header() {
  return (
<header className="border-b border-slate-200 bg-white">
<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
<Logo />
<MenuNav />
</div>
</header>
  );
}