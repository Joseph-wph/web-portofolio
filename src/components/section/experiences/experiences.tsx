import Container from '../../layout/container';
import SectionHeader from '../../layout/sectionHeader';
import ExperiencesPart from './experiencesPart';

export default function Experiences() {
  return (
    <section
      id='experiences'
      className='w-full scroll-mt-28 bg-[#0B0F17] py-16 text-white sm:py-24'
    >
      <Container>
        <div className='flex flex-col gap-8'>
          {/* Section Header: Judul Kiri & Sub-Deskripsi Kanan */}
          <div className='grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:items-end'>
            <div className='lg:col-span-6'>
              <SectionHeader
                alignment='left'
                title={
                  <>
                    Experiences That <br className='hidden sm:block' />
                    <span className='text-[#EBB456]'>Shaped Me!</span>
                  </>
                }
                className='m-0 w-full p-0'
                titleClassName='text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl'
              />
            </div>

            <div className='flex lg:col-span-6 lg:justify-end'>
              <p className='max-w-md text-sm leading-relaxed text-slate-300 sm:text-base lg:text-left'>
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
