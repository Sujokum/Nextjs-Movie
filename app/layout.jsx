import './globals.css'
// font-family: 'Montserrat', sans-serif;

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight : ["400" , "700"],
  subsets : ['latin'],
  variable : "--font-montserrat"
})

export const metadata = {
  title: 'Home',
  description: 'Hello I am Home Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} mx-32  bg-zinc-800 text-white my-5 `}>{children}</body>
    </html>
  )
}
