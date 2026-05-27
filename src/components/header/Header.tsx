import Logo from "@/components/common/Logo";

import MenuNav from "@/components/header/MenuNav";

import MobileMenu from "@/components/header/MobileMenu";
 
export default function Header() {

  return (
<header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
<div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
<Logo />
 
        <div className="hidden md:block">
<MenuNav className="flex items-center gap-6 text-sm font-medium" />
</div>
 
        <MobileMenu />
</div>
</header>

  );

}
 