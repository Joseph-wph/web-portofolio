'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { contactSchema, ContactFormData } from '@/lib/validations/contact';
import { ContactModal } from './contactModal';

export function ContactForm() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    status: 'success' | 'failed' | null;
  }>({
    isOpen: false,
    status: null,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // Tester success message
  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log('Form Data:', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setModalState({ isOpen: true, status: 'success' });
      reset();
    } catch {
      setModalState({ isOpen: true, status: 'failed' });
    }
  };

  return (
    <>
      <div className='relative isolate mt-35 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm lg:mt-12'>
        {/* gbr2: Naik dari belakang kartu, lalu langsung menghilang */}
        <motion.div
          initial={{
            y: 100,
            opacity: 1,
          }}
          whileInView={{
            y: [100, 0, 0],
            opacity: [1, 1, 0],
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1.5,
            times: [0, 1, 1],
            ease: 'easeOut',
          }}
          className='absolute -top-40 left-1/2 z-0 h-38.75 w-48 -translate-x-1/2'
        >
          <Image
            src='/assets/icons/gbr2.png'
            alt='BeardyMan 2'
            width={192}
            height={172}
            className='h-full w-full object-contain'
          />
        </motion.div>

        {/* Layer putih untuk menutupi gbr2 */}
        <div className='absolute inset-px z-10 rounded-[23px] bg-white' />

        {/* gbr1: Langsung muncul setelah gbr2 menghilang */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            delay: 1.5,
            duration: 0,
          }}
          className='absolute -top-40 left-1/2 z-30 h-[172.45px] w-48 -translate-x-1/2'
        >
          <Image
            src='/assets/icons/gbr1.png'
            alt='BeardyMan'
            width={192}
            height={172}
            className='h-full w-full object-contain'
          />
        </motion.div>

        {/* Layer putih: Menutupi gbr2 di dalam kartu */}
        <div className='absolute inset-px z-10 rounded-[23px] bg-white' />

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='relative z-20 mt-4 space-y-5'
        >
          {/* Name */}
          <div>
            <label className='mb-1 block text-sm font-semibold text-gray-900'>
              Name
            </label>

            <input
              {...register('name')}
              placeholder='Enter your name'
              className='w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400'
            />

            {errors.name && (
              <p className='mt-1 text-xs text-red-500'>{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className='mb-1 block text-sm font-semibold text-gray-900'>
              Email
            </label>

            <input
              {...register('email')}
              type='email'
              placeholder='Enter your email'
              className='w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400'
            />

            {errors.email && (
              <p className='mt-1 text-xs text-red-500'>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className='mb-1 block text-sm font-semibold text-gray-900'>
              Message
            </label>

            <textarea
              {...register('message')}
              rows={4}
              placeholder='Enter your message'
              className='w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400'
            />

            {errors.message && (
              <p className='mt-1 text-xs text-red-500'>
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full rounded-full bg-primary-300 py-3 text-sm font-semibold text-white transition hover:bg-primary-400 disabled:opacity-50'
          >
            {isSubmitting ? 'Sending...' : "Let's Talk"}
          </button>
        </form>

        {/* gbr1: Muncul di depan kartu setelah gbr2 selesai */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            delay: 1.5,
            duration: 0.01,
          }}
          className='absolute -top-40 left-1/2 z-30 h-[172.45px] w-48 -translate-x-1/2'
        >
          <Image
            src='/assets/icons/gbr1.png'
            alt='BeardyMan'
            width={192}
            height={172}
            className='h-full w-full object-contain'
          />
        </motion.div>
      </div>

      <ContactModal
        isOpen={modalState.isOpen}
        status={modalState.status}
        onClose={() => setModalState({ isOpen: false, status: null })}
      />
    </>
  );
}
