import Image from 'next/image';
import { cn } from '../../../lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type CodeDesignPartItem = {
  image: string;
  title: string;
  content: string;
};

const codeDesignParts: CodeDesignPartItem[] = [
  {
    image: '/assets/images/logoTech/html.png',
    title: 'HTML',
    content: 'Crafting semantic, accessible HTML structures.',
  },
  {
    image: '/assets/images/logoTech/css.png',
    title: 'CSS',
    content: 'Crafting semantic, accessible HTML structures.',
  },
  {
    image: '/assets/images/logoTech/javascript.png',
    title: 'JavaScript',
    content: 'Crafting semantic, accessible HTML structures.',
  },
  {
    image: '/assets/images/logoTech/react.png',
    title: 'React',
    content: 'Crafting semantic, accessible HTML structures.',
  },
];

export default function CodeDesignPart() {
  return (
    <section className='w-full min-w-0 py-12'>
      <Carousel
        opts={{
          align: 'center',
          loop: false,
          slidesToScroll: 2,
        }}
        className='relative w-full min-w-0'
      >
        <CarouselContent className='ml-0 gap-4 px-4 justify-start lg:justify-center lg:px-0'>
          {codeDesignParts.map((item, index) => {
            const isHighlight = index % 2 === 0;

            return (
              <CarouselItem key={item.title} className='basis-auto pl-0'>
                <div
                  className={cn(
                    'flex h-70.25 w-35 flex-col items-center justify-start pt-12 text-center',
                    'rounded-full transition-all duration-300',
                    'lg:w-53.75 lg:pt-10',
                    isHighlight
                      ? 'bg-secondary text-slate-900 shadow-sm'
                      : 'border border-neutral-300 bg-white text-slate-900 shadow-sm'
                  )}
                >
                  {/* Container Icon Bulat */}
                  <div className='mb-4 flex size-12 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white/70 shadow-inner lg:mb-6 lg:size-15'>
                    <Image
                      src={item.image}
                      alt={`${item.title} logo`}
                      width={40}
                      height={40}
                      className='h-8 w-auto object-contain lg:h-10'
                    />
                  </div>

                  {/* Judul & Deskripsi */}
                  <h3 className='mb-2 text-[15px] font-semibold leading-tight lg:mb-3 lg:text-[20px]'>
                    {item.title}
                  </h3>

                  <p className='max-w-26 text-[12px] font-medium leading-snug opacity-90 lg:max-w-40 lg:text-[15px] lg:leading-relaxed'>
                    {item.content}
                  </p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Tombol Navigation Arrow di Bawah */}
        <div className='mt-8 flex items-center justify-center gap-4'>
          <CarouselPrevious className='static h-11 w-11 translate-y-0 rounded-full border-slate-400 hover:bg-slate-100' />

          <CarouselNext className='static h-11 w-11 translate-y-0 rounded-full border-slate-400 hover:bg-slate-100' />
        </div>
      </Carousel>
    </section>
  );
}
