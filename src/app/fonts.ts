import { Anton, Bonheur_Royale, Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const anton = Anton({
  variable: '--font-anton',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const bonheurRoyale = Bonheur_Royale({
  variable: '--font-bonheur',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});
