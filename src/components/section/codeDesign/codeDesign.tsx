import Container from '../../../components/layout/container';
import SectionHeader from '../../../components/layout/sectionHeader';
import CodeDesignPart from './codeDesignPart';

export default function CodeDesignSection() {
  return (
    <section id='skill' className='w-full mx-auto '>
      <Container>
        <div className='flex flex-col justify-center items-center'>
          <SectionHeader
            title='Code, Design, and Everything in Between'
            content='These are the technologies that power my workflow and bring ideas to life.'
            className='lg:w-223 w-90.25 py-10 gap-3 lg:gap-7'
            titleClassName='lg:text-[40px] text-[28px] leading-10'
            contentClassName='lg:text-[16px] text-[14px] leading-7'
          />
          <CodeDesignPart />
        </div>
      </Container>
    </section>
  );
}
