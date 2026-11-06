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
    <section
      id='home'
      className='relative flex min-h-screen flex-col overflow-hidden pt-22 lg:pt-25'
    >
      {/* Background Image */}
      <div className='absolute inset-0 -z-10'>
        <Image
          src='/assets/images/bg/background.jpg'
          alt='Hero Background'
          fill
          priority
          className='object-cover object-center opacity-100'
        />
      </div>

      <Container className='relative flex flex-1 flex-col'>
        <div className='flex flex-1 flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-6'>
          {/* Kiri: Tech stack (atas) + Bio (bawah). Di mobile hanya Bio yang tampil, paling atas */}
          <div className='contents lg:relative lg:z-30 lg:flex lg:flex-col lg:justify-between lg:pb-[clamp(80px,13vw,190px)]'>
            <TechStackPill items={techStack} />
            <HeroBio />
          </div>

          {/* Tengah: badge + teks besar + foto (paling bawah di mobile) */}
          <div className='order-3 lg:order-0 lg:self-end lg:translate-y-20'>
            <HeroCenterContent />
          </div>

          {/* Kanan: stats + tombol (di mobile berada setelah bio) */}
          <div className='order-2 lg:relative lg:z-30 lg:order-0 lg:self-center lg:justify-self-end'>
            <HeroStats stats={stats} />
          </div>
        </div>
      </Container>
    </section>
  );
}
