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
    <div className='w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4'>
      {comparisonData.map((column) => (
        <motion.div
          key={column.id}
          initial={{
            x: column.id === 'with-me' ? -80 : 80,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          <Card
            className={cn(
              'border-none rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-none',
              column.isHighlight
                ? 'bg-[#EBB456] text-slate-900'
                : 'bg-white border border-slate-200 text-slate-900 shadow-sm'
            )}
          >
            <CardHeader className='flex flex-col items-center p-0 mb-8 space-y-4'>
              <CardTitle className='text-xl sm:text-2xl font-bold tracking-tight text-center'>
                {column.title}
              </CardTitle>

              <Avatar className='w-24 h-24 border-2 border-white/20 shadow-sm'>
                {column.avatar.src && (
                  <AvatarImage
                    src={column.avatar.src}
                    alt={column.avatar.alt}
                    className='object-cover'
                  />
                )}
                <AvatarFallback className='bg-slate-200 text-slate-500 font-semibold text-xl'>
                  {column.avatar.fallback}
                </AvatarFallback>
              </Avatar>
            </CardHeader>

            <CardContent className='p-0'>
              <ul className='space-y-4 flex flex-col items-center'>
                {column.points.map((point, index) => (
                  <li
                    key={index}
                    className='flex items-center gap-2.5 text-center justify-center'
                  >
                    {point.isSupported ? (
                      <Check className='w-5 h-5 stroke-[2.5] text-slate-900 shrink-0' />
                    ) : (
                      <X className='w-5 h-5 stroke-[2.5] text-rose-500 shrink-0' />
                    )}

                    <span className='font-semibold text-sm sm:text-base'>
                      {point.text}
                    </span>
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
