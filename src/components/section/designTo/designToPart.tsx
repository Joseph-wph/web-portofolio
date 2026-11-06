'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  badgeImage: string;
  image: string;
  link?: string;
};

const portfolioData: PortfolioItem[] = [
  {
    id: 'portfolio-1',
    title: 'Portfolio 1',
    category: 'Web Development',
    badgeImage: '/assets/images/portofolio/ribon.svg',
    image: '/assets/images/portofolio/portofolio1.png',
    link: '#',
  },
  {
    id: 'portfolio-2',
    title: 'Portfolio 2',
    category: 'Web Development',
    badgeImage: '/assets/images/portofolio/ribon.svg',
    image: '/assets/images/portofolio/portofolio2.png',
    link: '#',
  },
  {
    id: 'portfolio-3',
    title: 'Portfolio 3',
    category: 'Web Development',
    badgeImage: '/assets/images/portofolio/ribon.svg',
    image: '/assets/images/portofolio/portofolio3.png',
    link: '#',
  },
];

export default function DesignToPart() {
  return (
    <section className='mx-auto w-full max-w-7xl overflow-x-clip px-4 py-8'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-5'>
        {portfolioData.map((item, index) => {
          const isLeft = index === 0;
          const isRight = index === portfolioData.length - 1;

          const initialState = isLeft
            ? { x: -100, y: 0, opacity: 0 }
            : isRight
              ? { x: 100, y: 0, opacity: 0 }
              : { x: 0, y: 40, opacity: 0 };

          return (
            <motion.div
              key={item.id}
              className='group mx-auto flex w-full max-w-91 flex-col'
              initial={initialState}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Blok atas: gambar */}
              <div className='relative rounded-t-[32px] bg-gray-100 p-4'>
                {/* Badge */}
                <div className='pointer-events-none absolute -left-2 top-6 z-30'>
                  <Image
                    src={item.badgeImage}
                    alt='Best Portfolio badge'
                    width={97}
                    height={29}
                    className='h-auto w-22.5 object-contain object-left lg:w-24.25'
                  />
                </div>

                <div className='relative aspect-square w-full overflow-hidden rounded-[20px] bg-[#EAEAEA]'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes='(min-width: 1024px) 332px, (min-width: 768px) 45vw, 90vw'
                    className='object-cover object-top-left transition-transform duration-300 group-hover:scale-[1.03]'
                  />
                </div>
              </div>

              {/* Blok bawah: informasi */}
              <div className='flex flex-col gap-3 rounded-b-[32px] bg-gray-100 px-6 pb-5 pt-1'>
                <h3 className='text-[18px] font-bold leading-tight text-slate-900'>
                  {item.title}
                </h3>

                <div className='relative flex h-9 w-full items-center'>
                  <div className='h-px w-full bg-slate-300' />

                  <a
                    href={item.link || '#'}
                    aria-label={`Lihat ${item.title}`}
                    className='absolute right-0 flex size-9 items-center justify-center rounded-full bg-primary-300 text-white transition-transform duration-200 hover:bg-primary-400 group-hover:scale-105'
                  >
                    <ArrowRight className='size-5 stroke-2' />
                  </a>
                </div>

                <p className='text-[14px] font-medium text-slate-500 lg:text-[16px]'>
                  {item.category}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
