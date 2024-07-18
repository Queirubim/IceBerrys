import Image from 'next/image';
import Link from 'next/link';

import { NavItem } from './nav-items';

const NAV_ITEMS = [
  {
    label: 'Inicio',
    href: '/',
  },
  {
    label: 'Cardapio',
    href: '/menu',
  },
  {
    label: 'Contato',
    href: '#contact',
  },
];

export const Header = () => {
  return (
    <header className="flex flex-col bg-purple-100 sm:flex-row items-center justify-around">
      <div id="logo">
        <Link href="/">
          <Image
            width={100}
            height={80}
            src={'/Logo.svg'}
            alt="Logo Ice Berrys"
          />
        </Link>
      </div>
      <ul className="flex mb-4 sm:mb-0 items-center sm:pb-0 gap-5 sm:gap-10">
        {NAV_ITEMS.map((item) => (
          <NavItem {...item} key={item.label} />
        ))}
      </ul>
    </header>
  );
};
