'use client';

import { motion } from 'motion/react';
import Container from '../../../components/layout/container';
import AboutPart from './aboutParts';

export default function AboutSection() {
  return (
    <section id='about' className='w-full mx-auto scroll-mt-28'>
      <Container>
        <div className='flex flex-col justify-center items-center gap-6 lg:gap-8'>
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='w-full max-w-90.25 lg:max-w-223 pt-10 pb-0'
          >
            <h2 className='font-sans font-medium text-[26px] leading-[1.3] lg:text-[36px] lg:leading-[1.3] text-center'>
              As frontend developers, we bring designs to life with{' '}
              <span className='text-primary-300'>clean, responsive code</span>{' '}
              that blends creativity 🎨 with usability 🌟.
            </h2>
          </motion.div>

          <AboutPart />
        </div>
      </Container>
    </section>
  );
}
