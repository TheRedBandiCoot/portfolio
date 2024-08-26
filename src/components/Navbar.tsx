'use client';

import Link from 'next/link';
import { ComponentProps, MouseEvent } from 'react';
import { EllipsisVertical, House, MonitorCog, Send, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  return (
    <nav
      className='flex md:flex-col flex-row justify-center gap-4 fixed md:top-1/2 md:right-0 md:-translate-x-1/2 md:-translate-y-1/2
     bg-yellow-600/70 hover:bg-yellow-600 transition-all p-4 rounded-full bottom-4 z-50'
    >
      <NavLink href={'/'}>
        <House />
      </NavLink>
      <NavLink href={'/aboutme'}>
        <User />
      </NavLink>
      <NavLink href={'/projects'}>
        <MonitorCog />
      </NavLink>
      <NavLink isaddellipsisvertical={true} href={'/contact'}>
        <Send />
      </NavLink>
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, 'className'> & { isaddellipsisvertical?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = async (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    const body = document.querySelector('body') as HTMLBodyElement;
    body.style.overflow = 'hidden';
    body?.classList.add('show');
    await wait(500);
    router.push(props.href as string);
    await wait(500);
    body?.classList.remove('show');
    await wait(500);
    body.style.overflow = 'auto';
  };

  return (
    <>
      <Link
        onClick={handleClick}
        className={cn('text-background hover:text-accent', pathname === props.href ? 'text-accent' : 'text-foreground')}
        {...props}
      >
        {props.children}
      </Link>
      {props.isaddellipsisvertical || <EllipsisVertical />}
    </>
  );
}

const wait = (ms: number) => new Promise(res => setTimeout(res, ms));
