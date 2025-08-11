import Link from "next/link";

function NavLinkItem({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="font-medium text-base transition-colors">
      {label}
    </Link>
  );
}

export default NavLinkItem;
