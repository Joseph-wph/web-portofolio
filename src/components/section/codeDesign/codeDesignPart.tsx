import Image from 'next/image';
import { cn } from '../../../lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type codeDesignPartItem = {
  image: string;
  title: string;
  content: string;
};

const aboutParts: codeDesignPartItem[] = [
  {
    image: '/assets/images/logotech/html.png',
    title: 'HTML',
    content: 'Crafting semantic, accessible HTML structures.',
  },
  {
    image: '/assets/images/logotech/css.png',
    title: 'CSS',
    content: 'Crafting semantic, accessible HTML structures.',
  },
  {
    image: '/assets/images/logotech/javascript.png',
    title: 'Javascript',
    content: 'Crafting semantic, accessible HTML structures.',
  },
  {
    image: '/assets/images/logotech/react.png',
    title: 'React',
    content: 'Crafting semantic, accessible HTML structures.',
  },
];

export default function codeDesignPart() {
  return (
    <section className='w-full py-12'>
      <Carousel
        opts={{
          align: 'start',
          loop: false,
        }}
        className='w-full relative'
      >
        <CarouselContent className='-ml-4 lg:justify-center'>
          {aboutParts.map((item, index) => {
            const isHighlight = index % 2 === 0;

            return (
              <CarouselItem
                key={index}
                className='basis-[188.5px] lg:basis-57.75'
              >
                <div
                  className={cn(
                    'flex flex-col items-center justify-center text-center',
                    'w-42.25 h-70.25 lg:w-53.75',
                    'rounded-full transition-all duration-300',
                    isHighlight
                      ? 'bg-secondary text-slate-900 shadow-sm'
                      : 'bg-white border border-neutral-300 text-slate-900 shadow-sm'
                  )}
                >
                  {/* Container Icon Bulat */}
                  <div className='w-15 h-15 border border-neutral-200 rounded-full bg-white/70 flex items-center justify-center mb-6 shadow-inner'>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={40}
                      height={40}
                      className='w-auto h-10 sm:h-8.75 object-contain'
                    />
                  </div>

                  {/* Judul & Deskripsi */}
                  <h3 className='text-[16px] font-semibold mb-3'>
                    {item.title}
                  </h3>
                  <p className='text-[14px] lg:text-[16px] font-medium leading-relaxed max-w-37.5 opacity-90'>
                    {item.content}
                  </p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Tombol Navigation Arrow di Bawah */}
        <div className='flex items-center justify-center gap-4 mt-8'>
          <CarouselPrevious className='static translate-y-0 h-11 w-11 rounded-full border-slate-400 hover:bg-slate-100'>
            <ArrowLeft className='w-5 h-5' />
          </CarouselPrevious>

          <CarouselNext className='static translate-y-0 h-11 w-11 rounded-full border-slate-400 hover:bg-slate-100'>
            <ArrowRight className='w-5 h-5' />
          </CarouselNext>
        </div>
      </Carousel>
    </section>
  );
}
