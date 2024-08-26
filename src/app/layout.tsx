import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThemeToggler from '@/components/ThemeToggler';

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'This is my Official Portfolio'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem storageKey='theme'>
          <div className='relative min-h-screen flexify'>
            <Navbar />
            <ThemeToggler />
            <div className='sm:container py-4 px-4 sm:w-[90%] w-full flexify flex-col'>
              {children}
              <div className='h-14'></div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
