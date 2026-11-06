'use client';

import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface ContactModalProps {
  isOpen: boolean;
  status: 'success' | 'failed' | null;
  onClose: () => void;
}

export function ContactModal({ isOpen, status, onClose }: ContactModalProps) {
  if (!status) return null;

  const isSuccess = status === 'success';

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className='
          top-[40%]! w-[90vw] max-w-90.25! md:max-w-129.5!
          h-auto
          overflow-visible rounded-[24px] md:rounded-[28px]
          border-none p-0 gap-0 shadow-2xl bg-white
          flex flex-col
          mt-12 md:mt-16
        '
      >
        <DialogTitle className='sr-only'>
          {isSuccess ? 'Pesan Berhasil Terkirim' : 'Pesan Gagal Terkirim'}
        </DialogTitle>

        {/* Banner Section */}
        <div
          className={`relative h-37.5 md:h-45 w-full rounded-t-[24px] md:rounded-t-[28px] shrink-0 ${
            isSuccess ? 'bg-secondary' : 'bg-neutral-200'
          }`}
        >
          {/* Envelope Image */}
          <div className='absolute -top-12 md:-top-15 left-1/2 -translate-x-1/2 z-30 w-52.5 h-52.5 md:w-65.5 md:h-65.5 pointer-events-none'>
            <Image
              src={
                isSuccess
                  ? '/assets/icons/success.png'
                  : '/assets/icons/failed.png'
              }
              alt={isSuccess ? 'Success Mail' : 'Failed Mail'}
              width={293}
              height={293}
              className='h-full w-full object-contain drop-shadow-md'
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className='relative z-10 flex flex-col gap-8 bg-white rounded-b-[24px] md:rounded-b-[28px] px-6 md:px-8 pt-10 md:pt-15 pb-6 md:pb-8 text-center'>
          <div>
            <h3 className='text-lg md:text-[20px] font-bold tracking-tight text-black'>
              {isSuccess ? 'Got Your Message!' : 'Message Failed to Send'}
            </h3>

            <p className='mt-2 text-[14px] md:text-[16px] text-gray-500 max-w-70 md:max-w-100 mx-auto leading-relaxed'>
              {isSuccess
                ? "Really appreciate you reaching out. I'll be in touch soon."
                : 'Sorry about that. Please check your connection and try again.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className='w-full rounded-full bg-primary-300 py-3 md:py-3.5 text-xs md:text-sm font-semibold text-white transition hover:bg-primary-400 active:scale-[0.99]'
          >
            {isSuccess ? 'Back to Home' : 'Try Again'}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
