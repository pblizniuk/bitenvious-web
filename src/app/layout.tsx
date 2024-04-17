import 'dotenv/config'
import type { Metadata } from 'next'
import { Montserrat, Rock_Salt, Outfit } from 'next/font/google'
import Script from 'next/script'
import Header from '@/app/_components/header'
import Footer from '@/app/_components/footer'
import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Cursor from './_components/cursor'

config.autoAddCss = false;
const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--montserrat'
})

const outfit = Outfit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--outfit'
})

const rockSalt = Rock_Salt({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--rock-salt',
})

export const metadata: Metadata = {
  title: 'Digital Marketing Alliance | Bitenvio.us',
  description: 'Full Spectrum Digital Marketing Alliance',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='max-w-full overflow-x-hidden'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <meta name='description' content={metadata.description} />
        <title>{metadata.title}</title> */}
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='icon'
          sizes='192x192'
          href='/images/android-chrome-192x192.png'
        />
        <link
          rel='icon'
          sizes='512x512'
          href='/images/android-chrome-512x512.png'
        />
        <link rel='icon' sizes='16x16' href='/images/favicon-16x16.png' />
        <link rel='icon' sizes='32x32' href='/images/favicon-32x32.png' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/images/apple-touch-icon.png'
        />
      </head>
      <Script
        id='show-banner'
        strategy='afterInteractive'
        src='/scripts/dom_scripts.js'
      />
      {/* <Script
        strategy='beforeInteractive'
        src='https://unpkg.co/gsap@3/dist/gsap.min.js'
      /> */}
      <body
        className={`bg-stone-50 dark:bg-stone-500 overflow-x-clip ${montserrat.className} ${montserrat.variable} ${outfit.variable}  ${rockSalt.variable} min-h-screen text-stone-900 relative`}
      >
        {/* <div className="cursor-circle circle-big">
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
          </svg>
        </div> */}
        <Cursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
