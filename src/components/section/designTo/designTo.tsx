import { ArrowRight } from 'lucide-react';
import Container from '../../../components/layout/container';
import SectionHeader from '../../../components/layout/sectionHeader';
import DesignToPart from './designToPart';

export default function DesignTo() {
  return (
    <section id='projects' className='mx-auto w-full py-12'>
      <Container>
        <div className='flex flex-col gap-8 lg:gap-10'>
          {/* Header: mobile menumpuk, desktop sejajar kiri-kanan */}
          <div className='flex flex-col justify-between gap-6 lg:flex-row lg:items-end'>
            <SectionHeader
              title={
                <>
                  Design to{' '}
                  <span className='text-primary-300'>Code Accuracy</span>
                </>
              }
              content='We translated design mockups into pixel-perfect, responsive components, ensuring a smooth user experience across all devices.'
              className='w-full max-w-2xl items-start gap-3 p-0 text-left lg:gap-4'
              titleClassName='whitespace-nowrap text-[clamp(20px,6vw,28px)] font-bold leading-[1.25] sm:text-[32px] lg:text-[40px] lg:leading-[1.2]'
              contentClassName='text-[14px] leading-relaxed text-slate-600 lg:text-[16px]'
            />

            {/* Tombol See All */}
            <a
              href='#'
              className='flex h-14 w-full shrink-0 cursor-pointer items-center justify-between rounded-full border border-slate-300 bg-white px-6 font-bold text-slate-900 shadow-sm transition-all hover:bg-slate-50 sm:w-44'
            >
              <span className='text-sm font-semibold md:text-base'>
                See All
              </span>

              <span className='ml-3 flex size-9 items-center justify-center rounded-full bg-slate-900 text-white'>
                <ArrowRight size={18} />
              </span>
            </a>
          </div>

          {/* Kartu Portfolio */}
          <DesignToPart />
        </div>
      </Container>
    </section>
  );
}
