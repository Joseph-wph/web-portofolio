import Image from 'next/image';
import { Separator } from '../../ui/separator';

export type ExperienceItem = {
  id: string;
  period: string;
  role: string;
  companyName: string;
  companyLogo: string;
  description: string;
};

const experiencesData: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: '2025 - Present',
    role: 'Frontend Developer',
    companyName: 'Airbnb',
    companyLogo: '/assets/images/companyLogo/airbnb.png',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
  },
  {
    id: 'exp-2',
    period: '2025 - Present',
    role: 'Frontend Developer',
    companyName: 'Airtasker',
    companyLogo: '/assets/images/companyLogo/airtasker.png',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
  },
  {
    id: 'exp-3',
    period: '2025 - Present',
    role: 'Frontend Developer',
    companyName: 'Slack',
    companyLogo: '/assets/images/companyLogo/slack.svg',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
  },
];

export default function ExperiencesPart() {
  return (
    <div className='w-full flex flex-col'>
      {experiencesData.map((item) => (
        <div key={item.id} className='w-full'>
          {/* Garis Separator Pembatas Atas Setiap Baris */}
          <Separator className='bg-slate-800/80 my-8' />

          {/* Grid Layout untuk Item Pengalaman */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-center'>
            {/* Kolom 1: Periode & Role (Span 3 di Desktop) */}
            <div className='lg:col-span-3 flex flex-col gap-1'>
              <span className='text-xs sm:text-sm text-slate-400 font-medium'>
                {item.period}
              </span>
              <h3 className='text-lg sm:text-xl font-bold text-white tracking-wide'>
                {item.role}
              </h3>
            </div>

            {/* Kolom 2: Card Container Logo Perusahaan (Double Border Responsive Size) */}
            <div className='lg:col-span-3 flex items-center justify-start lg:justify-center'>
              {/* Outer Border Box: 121.71x71px di mobile, 192x112px di desktop */}
              <div className='w-[121.71px] h-[71px] lg:w-[192px] lg:h-[112px] rounded-[18px] lg:rounded-[28px] border border-slate-800/60 p-1 lg:p-1.5 bg-[#0B0F17] shrink-0'>
                {/* Inner Border Box: Mengisi penuh area dalam secara fleksibel */}
                <div className='w-full h-full rounded-[14px] lg:rounded-[22px] border border-slate-800/80 bg-[#0E131F] flex items-center justify-center p-2 lg:p-4 shadow-inner'>
                  {/* Container Logo: Menyesuaikan skala secara proporsional */}
                  <div className='relative w-16 h-5 lg:w-28 lg:h-9'>
                    <Image
                      src={item.companyLogo}
                      alt={`${item.companyName} logo`}
                      fill
                      className='object-contain'
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Kolom 3: Deskripsi Pekerjaan (Span 6 di Desktop) */}
            <div className='lg:col-span-6'>
              <p className='text-sm sm:text-base text-slate-400 leading-relaxed'>
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
