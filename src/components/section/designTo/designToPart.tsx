'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../../ui/card';
import { Separator } from '../../ui/separator';

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
    title: 'Portofolio 1',
    category: 'Web Development',
    badgeImage: '/assets/images/portofolio/ribon.svg',
    image: '/assets/images/portofolio/portofolio1.png',
    link: '#',
  },
  {
    id: 'portfolio-2',
    title: 'Portofolio 2',
    category: 'Web Development',
    badgeImage: '/assets/images/portofolio/ribon.svg',
    image: '/assets/images/portofolio/portofolio2.png',
    link: '#',
  },
  {
    id: 'portfolio-3',
    title: 'Portofolio 3',
    category: 'Web Development',
    badgeImage: '/assets/images/portofolio/ribon.svg',
    image: '/assets/images/portofolio/portofolio3.png',
    link: '#',
  },
];

export default function DesignToPart() {
  return (
    <section className='w-full max-w-7xl mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20'>
        {portfolioData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{
              x: index === 0 ? -80 : index === 2 ? 80 : 0,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <Card className='group relative w-90.25 h-117.5 lg:w-[386.67px] lg:h-[504.67px] overflow-visible rounded-[36px] border-none bg-gray-100 p-4 flex flex-col justify-between shadow-none transition-all duration-300'>
              {/* Badge di luar CardContent */}
              <div className='absolute top-11 -left-3 z-30 w-32 h-10 pointer-events-none'>
                <Image
                  src={item.badgeImage}
                  alt='Badge Banner'
                  width={97}
                  height={29}
                  className='object-contain object-left'
                />
              </div>

              {/* Container Gambar Utama */}
              <CardContent className='p-0 relative w-full h-95 rounded-[28px] bg-[#EAEAEA] overflow-hidden flex items-center justify-center'>
                <div className='relative w-full h-full p-2 flex items-center justify-center'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className='object-contain transition-transform duration-300 group-hover:scale-[1.02]'
                  />
                </div>
              </CardContent>

              {/* Container Informasi */}
              <div className='pt-5 pb-2 px-3 flex flex-col gap-4'>
                {/* Judul Portfolio */}
                <h3 className='font-bold text-[16px] lg:text-[18px] text-slate-900'>
                  {item.title}
                </h3>

                {/* Separator dan Circle Arrow */}
                <div className='relative flex items-center w-full'>
                  <Separator className='h-0.5 w-full bg-slate-400' />

                  {/* Circle Arrow */}
                  <a
                    href={item.link || '#'}
                    aria-label={`Lihat ${item.title}`}
                    className='absolute right-0 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-primary-300 hover:bg-primary-400 text-white transition-transform duration-200 group-hover:scale-105 shadow-md'
                  >
                    <ArrowRight className='w-6 h-6 stroke-2' />
                  </a>
                </div>

                {/* Kategori */}
                <p className='text-[12px] lg:text-[16px] font-medium text-slate-500'>
                  {item.category}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
