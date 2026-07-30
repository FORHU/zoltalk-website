import localFont from 'next/font/local';

export const helveticaWorld = localFont({
  src: [
    { path: '../../../shared/assets/fonts/HelveticaWorld-Regular.otf', weight: '400', style: 'normal' },
    { path: '../../../shared/assets/fonts/Helvetica-World-Bold.otf', weight: '700', style: 'normal' },
  ],
  display: 'swap',
});
