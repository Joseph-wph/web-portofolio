import Container from '@/components/layout/container';
import SectionHeader from '@/components/layout/sectionHeader';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { TESTIMONIAL_DATA, TestimonialCard } from './testimoniPart';

export default function TestimoniSection() {
  return (
    <section className='overflow-x-clip bg-white py-10 md:py-20'>
      <Container>
        <SectionHeader
          title='What They Say About Working With Me'
          content='Real words from clients, teammates, and mentors I’ve collaborated with on various projects.'
          alignment='center'
          className='mx-auto w-full max-w-90.25 gap-2 pb-6 pt-10 text-center lg:max-w-223 lg:gap-4'
          titleClassName='text-[26px] font-semibold leading-[1.3] lg:text-[40px] lg:leading-[1.25]'
          contentClassName='text-[14px] leading-6 lg:text-[16px] lg:leading-7'
        />

        <div className='mx-auto w-full max-w-304'>
          <Carousel
            opts={{
              align: 'center',
              loop: false,
            }}
            className='w-full'
          >
            <CarouselContent className='-ml-6 md:-ml-10'>
              {TESTIMONIAL_DATA.map((item) => (
                <CarouselItem key={item.id} className='pl-6 md:pl-10'>
                  <TestimonialCard data={item} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className='flex items-center justify-center gap-3 pt-2'>
              <CarouselPrevious className='static size-11 translate-x-0 translate-y-0 rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-colors hover:bg-zinc-50 hover:text-zinc-900' />

              <CarouselNext className='static size-11 translate-x-0 translate-y-0 rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-colors hover:bg-zinc-50 hover:text-zinc-900' />
            </div>
          </Carousel>
        </div>
      </Container>
    </section>
  );
}
