import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Game',
  description: 'Generated by Mahdi Touiserkani',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html dir='rtl' lang='fa'>
      <body className={inter.className}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
