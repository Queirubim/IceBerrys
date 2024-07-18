'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from 'app/lib/merge';
import { IceCream2 } from 'lucide-react';

type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <li className="list-none">
      <Link
        href={href}
        className={cn(
          'flex gap-2 text-pink-500 text-xl items-center font-mono font-medium transition-all hover:scale-95',
          isActive && 'text-pink-700 underline',
        )}
      >
        {isActive && <IceCream2 size={20} />}
        {label}
      </Link>
    </li>
  );
};
