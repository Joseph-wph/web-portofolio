import Container from '@/components/layout/container';
import SectionHeader from '@/components/layout/sectionHeader';
import { FaqList } from './faqPart';

export default function FaqSection() {
  return (
    <section id='faq' className='scroll-mt-28 bg-neutral-100 py-10 md:py-20'>
      <Container>
        {/* Header Section */}
        <SectionHeader
          title={'Let’s Clear Things Up'}
          content={
            'I’ve answered a few questions that usually come up when working with a frontend developer like me.'
          }
          alignment='center'
          className='mx-auto w-full max-w-90.25 gap-2 pb-6 pt-10 text-center lg:max-w-223 lg:gap-4'
          titleClassName='text-[26px] font-bold leading-[1.3] lg:text-[40px] lg:leading-[1.25]'
          contentClassName='text-[14px] leading-6 text-zinc-600 lg:text-[16px] lg:leading-7'
        />

        {/* FAQ Accordion List Container */}
        <div className='mx-auto max-w-4xl pt-4'>
          <FaqList />
        </div>
      </Container>
    </section>
  );
}
