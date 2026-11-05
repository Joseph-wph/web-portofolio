import { ArrowRight } from 'lucide-react';
import Container from '../../../components/layout/container';
import SectionHeader from '../../../components/layout/sectionHeader';
import DesignToPart from './designToPart';

export default function DesignTo() {
  return (
    <section id='projects' className='w-full mx-auto py-12'>
      <Container>
        <div className='flex flex-col gap-10'>
          {/* Header Layout (Mobile: Menumpuk ke bawah, Desktop: Sejajar kiri-kanan) */}
          <div className='flex flex-col lg:flex-row lg:items-end justify-between gap-6'>
            <SectionHeader
              title={
                <>
                  Design to{' '}
                  <span className='text-primary-300 whitespace-nowrap'>
                    Code Accuracy
                  </span>
                </>
              }
              content='We translated design mockups into pixel-perfect, responsive components, ensuring a smooth user experience across all devices.'
              className='w-full max-w-2xl text-left items-start gap-3 lg:gap-4 p-0'
              titleClassName='w-full text-[25px] sm:text-[28px] lg:text-[40px] font-bold leading-tight whitespace-nowrap'
              contentClassName='w-full lg:text-[16px] text-[14px] leading-relaxed text-slate-600'
            />

            {/* Tombol See All */}
            <a
              href='#'
              className='flex w-full sm:w-auto lg:w-44 h-14 shrink-0 items-center justify-between rounded-full border border-slate-300 bg-white px-6 font-bold text-slate-900 shadow-sm transition-all hover:bg-slate-50 cursor-pointer'
            >
              <span className='text-sm md:text-base font-semibold'>
                See All
              </span>

              <span className='ml-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white'>
                <ArrowRight size={18} />
              </span>
            </a>
          </div>

          {/* Bagian Kartu Portofolio */}
          <DesignToPart />
        </div>
      </Container>
    </section>
  );
}
