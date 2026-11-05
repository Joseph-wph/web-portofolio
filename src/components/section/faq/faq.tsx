import Container from '@/components/layout/container';
import SectionHeader from '@/components/layout/sectionHeader';
import { FaqList } from './faqPart';

export default function FaqSection() {
  return (
    <section id='faq' className='py-12 md:py-24 bg-neutral-100'>
      <Container>
        {/* Header Section */}
        <SectionHeader
          title='Let’s Clear Things Up'
          content='I’ve answered a few questions that usually come up when working with a frontend developer like me.'
          alignment='center'
          className='lg:w-223 w-90.25 mx-auto py-10 gap-3 lg:gap-7'
          titleClassName='lg:text-[40px] text-[28px] leading-10 font-bold'
          contentClassName='lg:text-[16px] text-[14px] leading-7 text-zinc-600'
        />

        {/* FAQ Accordion List Container */}
        <div className='max-w-4xl mx-auto pt-4'>
          <FaqList />
        </div>
      </Container>
    </section>
  );
}
