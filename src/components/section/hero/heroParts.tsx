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
    <div className='hidden w-28.25 flex-col items-center gap-5 rounded-full border border-white/20 bg-transparent px-4 py-9 lg:flex'>
      {items.map((tech) => (
        <div
          key={tech.name}
          className='flex size-17.25 items-center justify-center rounded-full border border-white/20 bg-transparent p-2.5 transition-all hover:border-white/40'
        >
          <Image
            src={tech.icon}
            alt={tech.name}
            width={35}
            height={35}
            className='h-auto w-auto max-w-8.75 object-contain'
          />
        </div>
      ))}
    </div>
  );
}

// 2. Bio
export function HeroBio() {
  return (
    <div className='space-y-4 text-left lg:w-[clamp(280px,30vw,451px)] lg:translate-y-15'>
      <div className='flex size-12 items-center justify-center rounded-full border border-white/20 bg-transparent text-white lg:size-15.75'>
        <Mic className='size-5 fill-white/20 lg:size-7.5' />
      </div>

      <h2 className='text-[16px] font-bold text-white md:text-[20px]'>
        {'Hi, I’m Edwin Anderson'}
      </h2>

      <p className='text-[14px] font-medium leading-7 text-white/80 md:text-[18px] lg:leading-relaxed'>
        a frontend developer passionate about creating seamless digital
        experiences that are fast, responsive, and user-friendly.
      </p>
    </div>
  );
}

// 3. Stats + CTA
export function HeroStats({ stats }: { stats: StatItem[] }) {
  return (
    <div className='w-full space-y-6 lg:w-55.5 lg:space-y-8 lg:translate-x-17.5'>
      {/* Mobile: 2x2 dengan garis vertikal. Desktop: menumpuk dengan garis horizontal */}
      <div className='grid grid-cols-2 gap-y-6 text-left lg:grid-cols-1 lg:gap-y-0'>
        {stats.map((stat) => (
          <div
            key={stat.label}
            className='border-white/15 max-lg:odd:border-r max-lg:even:pl-14 lg:border-b lg:py-6 lg:first:pt-0 lg:last:border-b-0 lg:last:pb-0'
          >
            <h3 className='text-4xl font-bold tracking-tight text-white lg:text-5xl'>
              {stat.value}
            </h3>
            <p className='mt-2 text-xs font-medium text-white/80 lg:mt-3 lg:text-sm'>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <Button className='flex h-12 w-full cursor-pointer items-center justify-between rounded-full bg-secondary px-6 font-bold text-black shadow-lg transition-all hover:brightness-105 lg:h-14'>
        <span className='text-sm font-semibold md:text-base'>Contact Me</span>
        <span className='flex size-9 items-center justify-center rounded-full bg-black text-white'>
          <ArrowRight size={18} />
        </span>
      </Button>
    </div>
  );
}

// 4. Teks besar + foto
function Headline({
  outline = false,
  strokeWidth = '0.5px',
}: {
  outline?: boolean;
  strokeWidth?: string;
}) {
  const style = outline
    ? {
        WebkitTextStroke: `${strokeWidth} var(--secondary-brand)`,
        WebkitTextFillColor: 'transparent',
      }
    : undefined;
  const base =
    'block font-heading font-normal uppercase leading-[0.95] [font-synthesis:none]';
  const fill = outline ? '' : 'text-secondary';

  return (
    <>
      <span
        style={style}
        className={`${base} ${fill} text-[28cqw] lg:text-[27cqw] ${outline ? 'invisible' : ''}`}
      >
        FRONTEND
      </span>
      <span
        style={style}
        className={`${base} ${fill} text-[25.2cqw] lg:text-[25cqw]`}
      >
        DEVELOPER
      </span>
    </>
  );
}

export function HeroCenterContent() {
  return (
    <div className='mx-auto flex w-full max-w-140 flex-col items-center lg:w-[clamp(460px,46vw,700px)] lg:max-w-none'>
      {/* Badge */}
      <div className='relative z-50 mb-4.5 flex h-8 w-36.5 items-center justify-center gap-2 rounded-full border border-primary-300 bg-primary-400 px-4 py-1 lg:mb-8.75 lg:h-9.5 lg:w-48.75 -translate-y-2.5 lg:translate-y-12.5'>
        <span className='size-2.5 animate-pulse rounded-full bg-[#E26190] lg:size-3.5' />
        <span className='font-sans text-[10px] font-semibold text-white lg:text-[15px]'>
          Available for Hire
        </span>
      </div>

      {/* Stage: semua ukuran di dalamnya mengikuti lebar kotak ini (cqw) */}
      <div className='@container relative aspect-[1/1.17] w-full lg:aspect-[1/1.1]'>
        {/* Teks isi (di belakang foto) */}
        <h1 className='absolute inset-x-0 top-[16cqw] z-10 select-none text-center lg:top-10 lg:translate-x-0'>
          <Headline />
        </h1>

        {/* Foto */}
        <div className='pointer-events-none absolute inset-0 z-20'>
          <div className='absolute left-1/2 -top-10 w-87.5 -translate-x-1/2 lg:top-[7cqw] lg:w-150'>
            <Image
              src='/assets/images/photos/photo.png'
              alt='Profile Photo'
              width={610}
              height={735}
              priority
              sizes='(max-width: 1023px) 375px, 610px'
              className='block h-auto w-full max-w-none'
            />
          </div>
        </div>

        {/* Outline (di depan foto) */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-0 top-[16cqw] z-30 select-none text-center lg:top-10 lg:translate-x-0'
        >
          <Headline outline strokeWidth='0.5px' />
        </div>

        {/* "Junior" */}
        <span className='absolute left-[2cqw] top-[11cqw] z-30 rotate-[-12.34deg] font-script text-[15cqw] font-normal leading-none tracking-wide text-white drop-shadow-md lg:left-[-11cqw] lg:top-[-3cqw]'>
          Junior
        </span>

        {/* Scroll indicator */}
        <div className='absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 text-white/70 lg:bottom-24'>
          <span className='whitespace-nowrap text-xs font-medium'>
            Scroll Down
          </span>
          <Mouse size={20} className='animate-bounce' />
        </div>
      </div>
    </div>
  );
}
