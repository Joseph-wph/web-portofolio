import Container from '../../../components/layout/container';
import SectionHeader from '../../../components/layout/sectionHeader';
import CodeDesignPart from './codeDesignPart';

export default function CodeDesignSection() {
  return (
    <section id='skill' className='w-full min-w-0 mx-auto scroll-mt-28'>
      <Container>
        <div className='flex min-w-0 flex-col items-center justify-center'>
          <SectionHeader
            title='Code, Design, and Everything in Between'
            content='These are the technologies that power my workflow and bring ideas to life.'
            className='w-full max-w-90.25 lg:max-w-223 py-10 gap-3 lg:gap-7 text-center'
            titleClassName='text-[26px] leading-[1.3] font-semibold lg:text-[40px] lg:leading-[1.25]'
            contentClassName='text-[14px] leading-6 lg:text-[16px] lg:leading-7 text-neutral-600'
          />

          <CodeDesignPart />
        </div>
      </Container>
    </section>
  );
}
