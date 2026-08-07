import localFont from 'next/font/local';

export const abandon = localFont({
  src: [
    { path: '../../../shared/assets/fonts/abandon/Abandon Thin.otf', weight: '100', style: 'normal' },
    { path: '../../../shared/assets/fonts/abandon/Abandon Thin Italic.otf', weight: '100', style: 'italic' },
    { path: '../../../shared/assets/fonts/abandon/Abandon Light.otf', weight: '300', style: 'normal' },
    { path: '../../../shared/assets/fonts/abandon/Abandon Light Italic.otf', weight: '300', style: 'italic' },
    { path: '../../../shared/assets/fonts/abandon/Abandon Book.otf', weight: '400', style: 'normal' },
    { path: '../../../shared/assets/fonts/abandon/Abandon Italic.otf', weight: '400', style: 'italic' },
    { path: '../../../shared/assets/fonts/abandon/Abandon Medium.otf', weight: '500', style: 'normal' },
    { path: '../../../shared/assets/fonts/abandon/Abandon Medium Italic.otf', weight: '500', style: 'italic' },
    { path: '../../../shared/assets/fonts/abandon/Abandon Bold.otf', weight: '700', style: 'normal' },
    { path: '../../../shared/assets/fonts/abandon/Abandon Bold Italic.otf', weight: '700', style: 'italic' },
  ],
  display: 'swap',
});
