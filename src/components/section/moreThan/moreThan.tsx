import Container from '../../layout/container';
import SectionHeader from '../../layout/sectionHeader';
import MoreThanPart from './moreThanPart';

export default function MoreThanSection() {
  return (
    <section className='w-full mx-auto '>
      <Container>
        <div className='flex flex-col justify-center items-center'>
          <SectionHeader
            title='More Than Just Code'
            content='We care about design, performance, and user experience all in one.'
            className='lg:w-223 w-90.25 py-10 gap-3 lg:gap-7'
            titleClassName='lg:text-[40px] text-[28px] leading-10'
            contentClassName='lg:text-[16px] text-[14px] leading-7'
          />
          <MoreThanPart />
        </div>
      </Container>
    </section>
  );
}
