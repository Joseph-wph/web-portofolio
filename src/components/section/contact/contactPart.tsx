import Image from 'next/image';
import SectionHeader from '../../../components/layout/sectionHeader';

const portfolioImages = [
  '/assets/images/portofolio/portofolio1.png',
  '/assets/images/portofolio/portofolio2.png',
  '/assets/images/portofolio/portofolio3.png',
];

export function ContactInfo() {
  return (
    <div className='space-y-6'>
      <SectionHeader
        title={'Let’s Work Together'}
        content='Have a project in mind or just want to say hi? Drop me a message — I’d love to hear from you.'
        className='w-full max-w-2xl text-left items-start gap-3 lg:gap-4 p-0'
        titleClassName='w-full text-[25px] sm:text-[28px] lg:text-[40px] font-bold leading-tight whitespace-nowrap'
        contentClassName='w-full lg:text-[16px] text-[14px] leading-relaxed text-slate-600'
      />

      {/* Portfolio Thumbnails */}
      <div className='flex gap-4 pt-4'>
        {portfolioImages.map((src, index) => (
          <div
            key={index}
            className='relative h-36 w-28 overflow-hidden rounded-xl border border-gray-200 shadow-sm'
          >
            <Image
              src={src}
              alt={`Portfolio ${index + 1}`}
              fill
              className='object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
