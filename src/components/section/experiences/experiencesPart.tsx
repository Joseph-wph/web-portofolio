'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Separator } from '../../ui/separator';

export type ExperienceItem = {
  id: string;
  period: string;
  role: string;
  companyName: string;
  companyLogo: string;
  description: string;
};

const experiencesData: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: '2025 - Present',
    role: 'Frontend Developer',
    companyName: 'Airbnb',
    companyLogo: '/assets/images/companyLogo/airbnb.png',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
  },
  {
    id: 'exp-2',
    period: '2025 - Present',
    role: 'Frontend Developer',
    companyName: 'Airtasker',
    companyLogo: '/assets/images/companyLogo/airtasker.png',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
  },
  {
    id: 'exp-3',
    period: '2025 - Present',
    role: 'Frontend Developer',
    companyName: 'Slack',
    companyLogo: '/assets/images/companyLogo/slack.svg',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
  },
];

export default function ExperiencesPart() {
  return (
    <div className='flex w-full flex-col'>
      {experiencesData.map((item) => (
        <div key={item.id} className='w-full'>
          {/* Separator */}
          <Separator className='my-8 bg-slate-800/80' />

          {/* Experience Grid */}
          <div className='grid grid-cols-1 items-start gap-6 lg:grid-cols-12'>
            {/* Kolom 1: Period & Role - From Left */}
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              className='flex flex-col gap-1 lg:col-span-3'
            >
              <span className='text-xs font-medium text-slate-400 sm:text-sm'>
                {item.period}
              </span>

              <h3 className='text-lg font-bold tracking-wide text-white sm:text-xl'>
                {item.role}
              </h3>
            </motion.div>

            {/* Kolom 2: Company Logo - Fade In */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              className='flex items-center justify-start lg:col-span-3 lg:justify-center'
            >
              {/* Outer Border */}
              <div className='h-17.75 w-[121.71px] shrink-0 rounded-[18px] border border-slate-800/60 bg-transparent p-1 lg:h-28 lg:w-48 lg:rounded-[28px] lg:p-1.5'>
                {/* Inner Border */}
                <div className='flex h-full w-full items-center justify-center rounded-[14px] border border-slate-800/80 bg-transparent p-2 shadow-inner lg:rounded-[22px] lg:p-4'>
                  {/* Logo Container */}
                  <div className='relative h-10 w-40'>
                    <Image
                      src={item.companyLogo}
                      alt={`${item.companyName} logo`}
                      fill
                      className='object-contain'
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Kolom 3: Description - From Right */}
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              className='lg:col-span-6'
            >
              <p className='text-sm leading-relaxed text-slate-400 sm:text-base'>
                {item.description}
              </p>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}
