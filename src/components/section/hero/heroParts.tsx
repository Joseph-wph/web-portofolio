import Image from 'next/image';
import { ArrowRight, Mic, Mouse } from 'lucide-react';
import { Button } from '../../ui/button';

export type TechItem = {
  name: string;
  icon: string;
};

export type StatItem = {
  value: string;
  label: string;
};

// 1. Tech Stack Vertical Capsule Pill (Desktop)
export function TechStackPill({ items }: { items: TechItem[] }) {
  return (
    <div className='hidden lg:flex w-28.25 h-[408.43px] flex-col justify-center items-center gap-5 rounded-full border border-white/20 p-4 bg-transparent'>
      {items.map((tech) => (
        <div
          key={tech.name}
          className='flex h-17.25 w-17.25 items-center justify-center rounded-full border border-white/20 bg-transparent p-2.5 transition-all hover:border-white/40'
        >
          <Image
            src={tech.icon}
            alt={tech.name}
            width={35}
            height={35}
            style={{
              width: 'auto',
              height: 'auto',
            }}
            className='max-w-8.75 object-contain'
          />
        </div>
      ))}
    </div>
  );
}

// 2. Bio Header Info
export function HeroBio() {
  return (
    <div className='space-y-4 text-left lg:w-112.75 h-55.25'>
      <div className='flex h-15.75 w-15.75 items-center justify-center rounded-full border border-white/20 bg-transparent text-white'>
        <Mic size={30} className='fill-white/20' />
      </div>

      <h2 className='text-[16px] md:text-[20px] font-bold text-white'>
        Hi, I`m Edwin Anderson
      </h2>

      <p className='text-[14px] md:text-[18px] font-medium text-white/80 leading-relaxed'>
        a frontend developer passionate about creating seamless digital
        experiences that are fast, responsive, and user-friendly.
      </p>
    </div>
  );
}

// 3. Grid Statistik & CTA Button
export function HeroStats({ stats }: { stats: StatItem[] }) {
  return (
    <div className='w-90.25 lg:w-55.5 space-y-8 lg:translate-x-25 lg:translate-y-0'>
      <div className='grid grid-cols-2 lg:grid-cols-1 gap-8 text-left'>
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className='border-b border-white/10 pb-5 last:border-b-0'
          >
            <h3 className='text-4xl lg:text-5xl font-bold text-white tracking-tight'>
              {stat.value}
            </h3>
            <p className='text-xs lg:text-sm font-medium text-white/80 mt-3'>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button menggunakan warna var(--secondary-brand) */}
      <Button className='w-full rounded-full bg-secondary hover:brightness-105 text-black font-bold h-14 px-6 flex items-center justify-between shadow-lg transition-all cursor-pointer'>
        <span className='text-sm md:text-base font-semibold'>Contact Me</span>
        <span className='flex h-9 w-9 items-center justify-center rounded-full bg-black text-white'>
          <ArrowRight size={18} />
        </span>
      </Button>
    </div>
  );
}

// 4. Typography Headline & Photo Wrapper
export function HeroCenterContent() {
  return (
    <div className='relative max-w-full flex lg:h-209 lg:w-187 flex-col items-center'>
      {/* Available Badge */}
      <div className='relative z-50 -top-7 lg:top-25 flex h-8 w-36.5 items-center justify-center gap-2 rounded-full border border-primary-300 bg-primary-400 px-4 py-1 lg:h-9.5 lg:w-48.75'>
        <span className='h-2.5 w-2.5 rounded-full bg-pink-400 animate-pulse lg:h-4 lg:w-4' />
        <span className='font-sans text-[10px] font-semibold text-white lg:text-[15px]'>
          Available for hire
        </span>
      </div>

      {/* Decorative Text */}
      <span className='absolute left-0.5 top-10 z-30 font-script text-[64.59px] font-normal tracking-wide text-white drop-shadow-md rotate-[-12.34deg] sm:left-4 sm:text-6xl lg:-left-25 lg:top-28 lg:text-[113.23px]'>
        Junior
      </span>

      {/* Typography Container */}
      <div className='relative mt-33 -top-20 lg:top-0 w-full text-center leading-24 select-none'>
        {/* Typography Headline */}
        <div className='relative z-10'>
          <h1 className='font-heading text-[100px] font-black uppercase text-secondary sm:text-8xl lg:text-[187.76px]'>
            FRONTEND
          </h1>

          <h1 className='font-heading text-[90px] font-black uppercase text-secondary sm:text-8xl lg:text-[168.82px]'>
            DEVELOPER
          </h1>
        </div>

        {/* Typography Outline */}
        <div className='absolute inset-0 z-30 pointer-events-none'>
          <h1
            style={{
              WebkitTextStroke: '0.5px var(--secondary)',
              WebkitTextFillColor: 'transparent',
            }}
            className='font-heading text-[100px] font-medium uppercase sm:text-8xl lg:text-[187.76px] opacity-0'
          >
            FRONTEND
          </h1>

          <h1
            style={{
              WebkitTextStroke: '0.5px var(--secondary)',
              WebkitTextFillColor: 'transparent',
            }}
            className='font-heading text-[90px] font-medium uppercase sm:text-8xl lg:text-[168.82px]'
          >
            DEVELOPER
          </h1>
        </div>
      </div>

      {/* Photo Wrapper */}
      <div className='absolute inset-0 z-20 pointer-events-none'>
        <div className='absolute -bottom-20 left-1/2 translate-x-[-43%] w-93.75 sm:w-125 md:w-150 lg:w-152.5'>
          <Image
            src='/assets/images/photos/photo.png'
            alt='Profile Photo'
            width={610}
            height={813}
            priority
            sizes='(max-width: 639px) 375px, (max-width: 1023px) 500px, 610px'
            style={{
              width: '100%',
              height: 'auto',
            }}
            className='block max-w-none'
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute -bottom-10 z-40 flex items-center justify-center gap-1 text-white/70 lg:-bottom-10'>
        <span className='text-xs font-medium'>Scroll Down</span>
        <Mouse size={20} className='animate-bounce' />
      </div>
    </div>
  );
}
