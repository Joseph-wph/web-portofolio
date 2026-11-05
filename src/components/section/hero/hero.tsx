import Image from 'next/image';
import Container from '../../layout/container';

import {
  HeroBio,
  HeroCenterContent,
  HeroStats,
  TechStackPill,
} from './heroParts';

const techStack = [
  { name: 'JavaScript', icon: '/assets/images/logoTech/javascript.png' },
  { name: 'CSS3', icon: '/assets/images/logoTech/css.png' },
  { name: 'HTML5', icon: '/assets/images/logoTech/html.png' },
  { name: 'React', icon: '/assets/images/logoTech/react.png' },
];

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '3', label: 'Project Delivered' },
  { value: '50', label: 'Clients Worldwide' },
];

export default function Hero() {
  return (
    <section className='relative min-h-screen pt-20 lg:pt-15 pb-10 overflow-hidden flex flex-col justify-between'>
      {/* Background Image */}
      <div className='absolute inset-0 -z-10'>
        <Image
          src='/assets/images/bg/background.jpg'
          alt='Hero Background'
          fill
          priority
          className='object-cover object-center opacity-90'
        />
      </div>

      <Container className='relative flex-1 flex flex-col justify-between h-full'>
        {/* ================= DESKTOP LAYOUT (lg:grid) ================= */}
        <div className='hidden lg:grid grid-cols-12 gap-6 items-end relative flex-1 pt-12 pb-6'>
          {/* Kolom Kiri: Tech Stack (Atas) & Bio (Bawah) */}
          <div className='col-span-3 flex flex-col justify-between h-full z-10 py-4'>
            <div>
              <TechStackPill items={techStack} />
            </div>
            <div className='mb-20'>
              <HeroBio />
            </div>
          </div>

          {/* Kolom Tengah: Badge & Foto/Teks Utama (Center) */}
          <div className='col-span-6 flex flex-col items-center justify-end h-full relative z-0'>
            {/* Badge posisi absolute di atas teks besar */}

            <div className='w-full flex justify-center items-end'>
              <HeroCenterContent />
            </div>
          </div>

          {/* Kolom Kanan: Stats & Tombol Kontak */}
          <div className='col-span-3 flex flex-col justify-center items-center h-full z-10 py-4 space-y-6'>
            <HeroStats stats={stats} />
          </div>
        </div>

        {/* ================= MOBILE LAYOUT (lg:hidden) ================= */}
        <div className='flex lg:hidden flex-col gap-8 pt-4 pb-8'>
          {/* 1. Bio di paling atas */}
          <HeroBio />

          {/* 2. Stats dalam format 2 kolom (2x2 grid) */}
          <HeroStats stats={stats} />

          {/* 3. Badge & Hero Center Content di paling bawah */}
          <div className='flex flex-col items-center justify-center pt-4 relative'>
            <HeroCenterContent />
          </div>
        </div>
      </Container>
    </section>
  );
}
