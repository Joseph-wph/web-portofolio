'use client';

import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { cn } from '../../../lib/utils';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../components/ui/avatar';

type ComparisonColumn = {
  id: 'with-me' | 'another-talent';
  title: string;
  avatar: {
    src?: string;
    alt: string;
    fallback: string;
  };
  isHighlight: boolean;
  points: {
    text: string;
    isSupported: boolean;
  }[];
};

const comparisonData: ComparisonColumn[] = [
  {
    id: 'with-me',
    title: 'With Me',
    avatar: {
      src: '/assets/images/photos/avatar.png',
      alt: 'With Me Avatar',
      fallback: 'WM',
    },
    isHighlight: true,
    points: [
      { text: 'React Expert', isSupported: true },
      { text: 'Precise Website Implementation', isSupported: true },
      { text: 'TypeScript Proficiency', isSupported: true },
      { text: 'Clean, Maintainable Code', isSupported: true },
      { text: 'Responsive Website Development', isSupported: true },
      { text: 'Performance Optimization', isSupported: true },
      { text: 'UI Design Proficiency (Figma)', isSupported: true },
    ],
  },
  {
    id: 'another-talent',
    title: 'Another Talent',
    avatar: {
      alt: 'Another Talent Avatar',
      fallback: 'AT',
    },
    isHighlight: false,
    points: [
      { text: 'Basic React Knowledge', isSupported: false },
      { text: 'Inconsistent Design Translation', isSupported: false },
      { text: 'Little to No TypeScript Knowledge', isSupported: false },
      { text: 'Unstructured Code', isSupported: false },
      { text: 'Inconsistent Responsiveness', isSupported: false },
      { text: 'Slow and Heavy Websites', isSupported: false },
      { text: 'No Design Skills', isSupported: false },
    ],
  },
];

export default function MoreThanPart() {
  return (
    <div className='mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 overflow-x-clip px-4 py-4 md:grid-cols-2'>
      {comparisonData.map((column) => (
        <motion.div
          key={column.id}
          className='h-full'
          initial={{ x: column.id === 'with-me' ? -60 : 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Card
            className={cn(
              'h-full rounded-3xl border p-6 text-slate-900 shadow-none transition-all duration-300 sm:p-8',
              column.isHighlight
                ? 'border-transparent bg-[#EBB456]'
                : 'border-slate-200 bg-white shadow-sm'
            )}
          >
            <CardHeader className='mb-8 flex flex-col items-center space-y-4 p-0'>
              <CardTitle className='text-center text-xl font-bold tracking-tight sm:text-2xl'>
                {column.title}
              </CardTitle>

              <Avatar className='size-24 border-2 border-white/20 shadow-sm'>
                {column.avatar.src && (
                  <AvatarImage
                    src={column.avatar.src}
                    alt={column.avatar.alt}
                    className='object-cover'
                  />
                )}
                <AvatarFallback className='bg-slate-200 text-xl font-semibold text-slate-500'>
                  {column.avatar.fallback}
                </AvatarFallback>
              </Avatar>
            </CardHeader>

            <CardContent className='p-0'>
              <ul className='flex flex-col items-center gap-4'>
                {column.points.map((point) => (
                  <li
                    key={point.text}
                    className='max-w-75 text-center text-sm font-semibold leading-snug sm:text-base'
                  >
                    {point.isSupported ? (
                      <Check className='mr-2 -mt-0.5 inline-block size-5 stroke-[2.5] align-middle text-slate-900' />
                    ) : (
                      <X className='mr-2 -mt-0.5 inline-block size-5 stroke-[2.5] align-middle text-rose-500' />
                    )}
                    {point.text}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
