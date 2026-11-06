import Container from '../../layout/container';
import SectionHeader from '../../layout/sectionHeader';
import MoreThanPart from './moreThanPart';

export default function MoreThanSection() {
  return (
    <section className='w-full mx-auto'>
      <Container>
        <div className='flex flex-col items-center justify-center'>
          <SectionHeader
            title='More Than Just Code'
            content='We care about design, performance, and user experience all in one.'
            className='w-full max-w-90.25 lg:max-w-223 pt-10 pb-0 gap-2 lg:gap-4 text-center'
            titleClassName='text-[26px] leading-[1.3] font-semibold lg:text-[40px] lg:leading-[1.25]'
            contentClassName='text-[14px] leading-6 lg:text-[16px] lg:leading-7 text-neutral-600'
          />
          <MoreThanPart />
        </div>
      </Container>
    </section>
  );
}
