import Image from 'next/image';
import Link from 'next/link';
 
export default function Logo() {
  return (
<Link href="/" className="flex items-center gap-3">
<Image
        src="/images/logo/logo-openbook.webp"
        alt="Logo Best OfferBook"
        width={42}
        height={42}
        priority
        className="rounded-md"
      />
 
      <span className="text-xl font-bold tracking-tight text-slate-900">
        Best OfferBook
</span>
</Link>
  );
}