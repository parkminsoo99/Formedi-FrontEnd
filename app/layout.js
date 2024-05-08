'use client';

import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import Header from './components/headers/header';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header activePage={pathname} />
        </div>
        {children}
      </body>
    </html>
  );
}
