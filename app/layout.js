'use client'
import { Inter } from "next/font/google";
import { usePathname } from 'next/navigation'
const inter = Inter({ subsets: ["latin"] });
import Header from "@/app/components/headers/header"

export default function RootLayout({children,params}) {
  const pathname = usePathname()
  
  return (
    <html lang="en">    
      <body className={inter.className}>
        <div>
          <Header activePage={pathname}/>
        </div>
        {children}
      </body>
    </html>
  );
}