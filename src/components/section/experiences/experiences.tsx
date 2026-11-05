import Container from '../../layout/container';
import SectionHeader from '../../layout/sectionHeader';
import ExperiencesPart from './experiencesPart';

export default function Experiences() {
  return (
    <section className='w-full bg-[#0B0F17] text-white py-16 sm:py-24'>
      <Container>
        <div className='flex flex-col gap-8'>
          {/* Section Header: Judul Kiri & Sub-Deskripsi Kanan */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-start'>
            <div className='lg:col-span-6'>
              <SectionHeader
                alignment='left'
                title={
                  <>
                    Experiences That <br className='hidden sm:inline' />
                    <span className='text-[#EBB456]'>Shaped Me</span>!
                  </>
                }
                className='w-full p-0 m-0'
                titleClassName='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight'
              />
            </div>

            <div className='lg:col-span-6 flex lg:justify-end'>
              <p className='text-sm sm:text-base text-slate-300 max-w-md leading-relaxed lg:text-left'>
                From startups to side projects, every step has been a chance to
                learn, build, and level up.
              </p>
            </div>
          </div>

          {/* List Item Pengalaman */}
          <ExperiencesPart />
        </div>
      </Container>
    </section>
  );
}
