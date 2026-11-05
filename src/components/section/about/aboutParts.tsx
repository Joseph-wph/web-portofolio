import Image from 'next/image';
import { cn } from '../../../lib/utils';

type AboutPartItem = {
  image: string;
  title: string;
  content: string;
};

const aboutParts: AboutPartItem[] = [
  {
    image: '/assets/icons/roda.png',
    title: 'COMPONENT-BASED DEVELOPMENT',
    content:
      'Reusable, scalable code built with modern frameworks like React or Vue.',
  },
  {
    image: '/assets/icons/palet.png',
    title: 'PIXEL-PERFECT UI IMPLEMENTATION',
    content:
      'Translating design into high-fidelity user interfaces with attention to detail.',
  },
  {
    image: '/assets/icons/hp.png',
    title: 'RESPONSIVE & ACCESSIBLE DESIGN',
    content:
      'Optimized layouts that work seamlessly across all screen sizes and devices.',
  },
];

export default function AboutPart() {
  return (
    <div className='grid grid-cols-1 gap-10 py-30 md:grid-cols-3 md:gap-20'>
      {aboutParts.map((item, index) => (
        <div
          key={item.title}
          className={cn(
            'flex w-full min-h-39 flex-col items-start text-left lg:w-[346.67px] lg:h-54.75',
            index !== aboutParts.length - 1 &&
              'border-b border-black/20 pb-10 md:border-b-0 md:border-r md:pb-0 md:pr-8'
          )}
        >
          {/* Image Wrapper / Border */}
          <div className='flex size-12 lg:size-15.75 items-center justify-center rounded-full border border-black/20 mb-4'>
            {/* Image */}
            <div className='relative size-6.25 overflow-hidden rounded-full lg:size-8'>
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes='(min-width: 1024px) 32px, 25px'
                className='object-contain'
              />
            </div>
          </div>
          {/* Title */}
          <h1 className='text-[18px] lg:text-[24px] font-bold text-black'>
            {item.title}
          </h1>

          {/* Content */}
          <p className='mt-2 text-[14px] lg:text-[16px] leading-7 font-medium text-black'>
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
}
