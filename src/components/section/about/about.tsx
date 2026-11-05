'use client';

import { motion } from 'motion/react';
import Container from '../../../components/layout/container';
import AboutPart from './aboutParts';

export default function AboutSection() {
  return (
    <section id='about' className='w-full mx-auto scroll-mt-28'>
      <Container>
        <div className='flex flex-col justify-center items-center gap-10'>
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='lg:w-223 lg:h-33 w-90.25 h-47.5 py-10'
          >
            <h1 className='font-sans font-medium text-[26px] lg:text-[36px] text-center'>
              As frontend developers, we bring designs to life with{' '}
              <span className='text-primary-300'>clean, responsive code</span>{' '}
              that blends creativity 🎨 with usability 🌟.
            </h1>
          </motion.div>

          <AboutPart />
        </div>
      </Container>
    </section>
  );
}
