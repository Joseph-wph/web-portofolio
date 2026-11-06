import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
  rating?: number;
}

export const TESTIMONIAL_DATA: TestimonialItem[] = [
  {
    id: '1',
    quote:
      '"Working with Edwin Anderson was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn’t thought of. Highly recommended!"',
    name: 'Sarah Tan',
    role: 'Product Manager at Finovate',
    avatarSrc: '/assets/images/photos/sarah.png',
    rating: 5,
  },
  {
    id: '2',
    quote:
      '"An exceptional developer who delivers clean, maintainable code on time. His attention to design details made our product stand out."',
    name: 'Michael Chen',
    role: 'CTO at TechFlow',
    avatarSrc: '/assets/images/photos/foto4.svg',
    rating: 5,
  },
];

interface TestimonialCardProps {
  data: TestimonialItem;
}

export function TestimonialCard({ data }: TestimonialCardProps) {
  const stars = Array.from({ length: data.rating || 5 });

  return (
    <div className='relative mx-auto w-full max-w-300 px-0 pb-8 pt-4'>
      {/* Layer efek 2 (paling bawah) */}
      <div className='absolute inset-x-[6%] bottom-0 top-10 translate-y-3 rounded-[28px] bg-[#B76080]/20 md:inset-x-[8.3%]' />

      {/* Layer efek 1 (tengah) */}
      <div className='absolute inset-x-[3%] bottom-5 top-7 translate-y-1.5 rounded-[28px] bg-[#D4A0B3]/40 md:inset-x-[4.2%]' />

      {/* Kartu utama */}
      <Card className='relative z-10 mx-auto flex w-full max-w-88.25 flex-col gap-0 overflow-hidden rounded-[28px] border-none bg-primary-300 px-6 py-8 text-white shadow-xl sm:px-12 md:min-h-94 md:max-w-full md:px-16'>
        <CardContent className='flex h-full flex-1 flex-col items-center justify-between gap-6 p-0'>
          {/* Rating */}
          <div className='flex items-center gap-1.5'>
            {stars.map((_, index) => (
              <Star
                key={index}
                className='size-5 fill-[#FACC15] text-[#FACC15]'
              />
            ))}
          </div>

          {/* Kutipan */}
          <blockquote className='my-auto max-w-4xl text-center text-base font-medium leading-relaxed sm:text-lg md:text-xl'>
            {data.quote}
          </blockquote>

          {/* Info user */}
          <div className='flex flex-col items-center gap-1.5'>
            <Avatar className='size-16 border-2 border-white/20 shadow-sm'>
              <AvatarImage
                src={data.avatarSrc}
                alt={data.name}
                className='object-cover'
              />
              <AvatarFallback className='bg-white font-semibold text-zinc-800'>
                {data.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className='space-y-0.5 text-center'>
              <h4 className='text-base font-semibold text-white sm:text-lg'>
                {data.name}
              </h4>
              <p className='text-xs text-white/80 sm:text-sm'>{data.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
