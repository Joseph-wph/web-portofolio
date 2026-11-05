import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Plus, Minus } from 'lucide-react';

export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'item-1',
    number: '01',
    question: 'What technologies do you work with?',
    answer:
      'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
  },
  {
    id: 'item-2',
    number: '02',
    question: 'Do you work on freelance or remote projects?',
    answer:
      'Yes, I am available for both freelance projects and full-time remote positions depending on the project scope and timeline.',
  },
  {
    id: 'item-3',
    number: '03',
    question: 'Can you convert Figma or Sketch designs into code?',
    answer:
      'Absolutely! Pixel-perfect conversion from design tools like Figma, Sketch, or Adobe XD into responsive and clean code is one of my primary specialties.',
  },
  {
    id: 'item-4',
    number: '04',
    question: 'Do you collaborate with backend developers or teams?',
    answer:
      'Yes, I have experience collaborating with cross-functional teams, integrating RESTful APIs, and working alongside backend engineers.',
  },
  {
    id: 'item-5',
    number: '05',
    question: 'Are you available for full-time roles?',
    answer:
      'Yes, I am currently open to full-time engineering roles, both hybrid and remote.',
  },
];

export function FaqList() {
  return (
    <Accordion defaultValue={['item-1']} className='w-full space-y-2'>
      {FAQ_DATA.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className='group border-zinc-200 py-4'
        >
          <AccordionTrigger className='flex items-center justify-between py-2 hover:no-underline'>
            <div className='flex items-center gap-6 text-left sm:gap-12'>
              {/* Numbering */}
              <span className='w-6 shrink-0 text-base font-bold text-zinc-900 sm:text-lg'>
                {item.number}
              </span>

              {/* Question */}
              <span className='text-base font-bold text-zinc-900 transition-colors group-hover:text-zinc-700 sm:text-lg'>
                {item.question}
              </span>
            </div>

            {/* Plus / Minus Icon */}
            <div className='relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-300 text-white shadow-sm transition-colors sm:h-10 sm:w-10 group-aria-expanded/accordion-trigger:bg-white group-aria-expanded/accordion-trigger:text-primary-300 group-aria-expanded/accordion-trigger:border group-aria-expanded/accordion-trigger:border-primary-300'>
              <Plus className='absolute h-5 w-5 group-aria-expanded/accordion-trigger:hidden' />

              <Minus className='absolute hidden h-5 w-5 group-aria-expanded/accordion-trigger:block' />
            </div>
          </AccordionTrigger>

          <AccordionContent className='pt-2 pb-4 pr-12 pl-12 text-sm leading-relaxed text-zinc-600 sm:pl-18 sm:text-base'>
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
