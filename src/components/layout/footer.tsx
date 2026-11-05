import Image from 'next/image';
import Link from 'next/link';

interface SocialLink {
  name: string;
  href: string;
  iconPath: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    iconPath: '/assets/images/socialMedia/facebook.svg',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    iconPath: '/assets/images/socialMedia/instagram.svg',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    iconPath: '/assets/images/socialMedia/linkedin.svg',
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com',
    iconPath: '/assets/images/socialMedia/tiktok.svg',
  },
];

export default function Footer() {
  return (
    <footer className='w-full bg-[#0b0f17] text-[#a1a1aa] py-6 px-4 md:px-12 border-t border-zinc-800/50'>
      <div className='max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6'>
        {/* Copyright */}
        <p className='text-sm font-light tracking-wide text-zinc-300'>
          © 2025 Edwin Anderson. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className='flex items-center gap-3'>
          {socialLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target='_blank'
              rel='noopener noreferrer'
              className='w-10 h-10 rounded-full border border-zinc-700/60 flex items-center justify-center hover:border-zinc-400 hover:bg-zinc-800/40 transition-all duration-200'
              aria-label={item.name}
            >
              <Image
                src={item.iconPath}
                alt={item.name}
                width={18}
                height={18}
                className='w-4 h-4 object-contain brightness-200'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
