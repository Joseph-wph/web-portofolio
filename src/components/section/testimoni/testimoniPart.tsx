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
    /* Outer Wrapper: Diberi max-w-[1200px] agar pas dengan kartu utama */
    <div className='relative mx-auto w-full max-w-full md:max-w-300 pt-4 pb-8 flex justify-center items-center'>
      {/* 1. Visual Effect Layer 2 (Paling Bawah - Lebar 1000px di Desktop) */}
      <div className='absolute bottom-0 top-10 rounded-[28px] bg-[#B76080]/20 translate-y-3 w-[88%] md:w-250' />

      {/* 2. Visual Effect Layer 1 (Tengah - Lebar 1100px di Desktop) */}
      <div className='absolute bottom-5 top-7 rounded-[28px] bg-[#D4A0B3]/40 translate-y-1.5 w-[94%] md:w-275' />

      {/* 3. Main Card (Paling Atas - Lebar 1200px & Tinggi Konsisten di Desktop) */}
      <Card
        className='relative z-10
                  w-full max-w-88.25 h-119.5
                  md:max-w-full md:h-94
                  border-none bg-primary-300 text-white
                  shadow-xl rounded-[28px] overflow-hidden
                  py-8 px-6 sm:px-12 md:px-16
                  flex flex-col justify-between'
      >
        <CardContent className='flex flex-col items-center justify-between h-full p-0 space-y-6'>
          {/* Rating Stars */}
          <div className='flex items-center gap-1.5'>
            {stars.map((_, index) => (
              <Star
                key={index}
                className='h-5 w-5 fill-[#FACC15] text-[#FACC15]'
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className='text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-4xl text-center my-auto'>
            {data.quote}
          </blockquote>

          {/* User Info */}
          <div className='flex flex-col items-center space-y-1.5'>
            <Avatar className='h-16 w-16 border-2 border-white/20 shadow-sm'>
              <AvatarImage
                src={data.avatarSrc}
                alt={data.name}
                className='object-cover'
              />
              <AvatarFallback className='text-zinc-800 font-semibold bg-white'>
                {data.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className='text-center space-y-0.5'>
              <h4 className='font-semibold text-white text-base sm:text-lg'>
                {data.name}
              </h4>
              <p className='text-xs sm:text-sm text-white/80'>{data.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
