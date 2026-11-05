'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Container from './container';
import { cn } from '../../lib/utils';

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skill', href: '#skill' },
  { name: 'Projects', href: '#projects' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('Home');

  return (
    <header className='fixed top-0 left-0 right-0 z-50 py-4 md:py-6'>
      <Container>
        {/*
          DESKTOP & MOBILE NAVBAR BAR
        */}
        <nav
          className={cn(
            'relative rounded-full border border-white/10 bg-black/20 px-6 py-3 shadow-lg backdrop-blur-md transition-all duration-300',
            'w-full md:w-138.25 md:mx-auto'
          )}
        >
          <div className='flex items-center justify-between lg:justify-center gap-6 md:gap-10'>
            {/* Logo / Nama (Hanya tampil di Mobile saat menu tertutup) */}
            <Link
              href='#'
              className='text-xl font-bold tracking-tight text-white md:hidden'
            >
              Edwin
            </Link>

            {/* Navigasi Desktop */}
            <ul className='hidden items-center justify-center gap-6 md:flex lg:gap-10'>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setActiveTab(item.name)}
                    className={cn(
                      'text-sm font-medium transition-colors duration-200 hover:text-white',
                      activeTab === item.name
                        ? 'font-semibold text-white'
                        : 'text-white/80'
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Button Hamburger (Mobile) */}
            <button
              onClick={() => setIsOpen(true)}
              className='p-1 text-white focus:outline-none md:hidden'
              aria-label='Open Menu'
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>

        {/*
          MOBILE MENU MODAL / OVERLAY (Sesuai Gambar Menu.jpg)
        */}
        {isOpen && (
          <div className='fixed inset-x-4 top-4 z-50 overflow-hidden rounded-[28px] border border-white/15 bg-[#5d233c]/90 p-6 pt-5 shadow-2xl backdrop-blur-2xl md:hidden min-h-130'>
            {/* Header Modal: Brand Name + Close Button */}
            <div className='flex items-center justify-between pb-6'>
              <span className='text-xl font-bold tracking-tight text-white'>
                Edwin
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className='p-1 text-white transition-opacity hover:opacity-80 focus:outline-none'
                aria-label='Close Menu'
              >
                <X size={22} />
              </button>
            </div>

            {/* List Navigasi Menu Rata Kiri */}
            <ul className='flex flex-col gap-5 pt-2'>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.name);
                      setIsOpen(false);
                    }}
                    className={cn(
                      'block text-base font-medium transition-all duration-200',
                      activeTab === item.name
                        ? 'font-semibold text-white'
                        : 'text-white/85 hover:text-white'
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}
