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
    <section className='overflow-hidden bg-white py-10 md:py-20'>
      <Container>
        <SectionHeader
          title='What They Say About Working With Me'
          content='Real words from clients, teammates, and mentors I’ve collaborated with on various projects.'
          alignment='center'
          className='mx-auto w-90.25 gap-3 py-10 lg:w-223 lg:gap-7'
          titleClassName='text-[28px] leading-10 lg:text-[40px]'
          contentClassName='text-[14px] leading-7 lg:text-[16px]'
        />

        <div className='relative left-1/2 w-[calc(100%+16px)] max-w-304 -translate-x-1/2'>
          <Carousel
            opts={{
              align: 'center',
              loop: false,
            }}
            className='w-full'
          >
            <CarouselContent>
              {TESTIMONIAL_DATA.map((item) => (
                <CarouselItem key={item.id}>
                  <TestimonialCard data={item} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className='flex items-center justify-center gap-3 pt-6'>
              <CarouselPrevious className='static h-11 w-11 translate-x-0 translate-y-0 rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-colors hover:bg-zinc-50 hover:text-zinc-900' />

              <CarouselNext className='static h-11 w-11 translate-x-0 translate-y-0 rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-colors hover:bg-zinc-50 hover:text-zinc-900' />
            </div>
          </Carousel>
        </div>
      </Container>
    </section>
  );
}
