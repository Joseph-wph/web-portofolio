import type { Metadata } from 'next';
import { montserrat, anton, bonheurRoyale } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Joseph Corrs | Portfolio',
  description: 'Graphic Designer & Frontend Developer Portfolio',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`
        ${montserrat.variable}
        ${anton.variable}
        ${bonheurRoyale.variable}
        h-full antialiased
      `}
    >
      <body className='flex min-h-full flex-col font-sans'>{children}</body>
    </html>
  );
}
