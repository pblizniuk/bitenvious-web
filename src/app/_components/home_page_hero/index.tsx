'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
  Title: string
  Description: string
  url: string
}

const HomePageHero = (props: Props) => {
  const { Title, Description, url } = props
  return (
    <div className='flex relative w-screen overflow-hidden flex-col bg-gradient-to-br from-stone-800 to-stone-900 pt-32 md:pt-60'>
      <div className='md:m-auto max-w-[1460px] sm:grid md:grid-cols-2 lg:grid-cols-3'>
        <div className='p-8 lg:py-24 lg:col-span-2'>
          <div className='mx-auto max-w-3xl'>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.3
              }}
            >
              <h1 className='text-3xl font-medium  md:text-5xl/tight mb-4 md:mb-8 bg-gradient-to-b from-stone-50 to-stone-300 bg-clip-text text-transparent'>
                {Title}
              </h1>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.3,
                delay: 0.1
              }}
            >
              <p className='font-montserrat text-xl font-light text-stone-300 md:mt-4 md:block md:text-2xl/relaxed mb-8 md:mb-12'>
                {Description}
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.3,
                delay: 0.2
              }}
            >
              <Link
                href='contact'
                className='relative inline-block transform rounded-full border border-stone-50 bg-transparent px-8 py-4 text-white shadow lg:w-2/4 text-center font-semibold text-lg hover:bg-stone-50 hover:text-stone-900 transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105'
              >
                Get Started Today
              </Link>
            </motion.div>
          </div>
        </div>
        <div className='relative m-auto w-full text-center pl-0 pt-12 md:p-12 md:text-right lg:my-24 lg:px-16 flex justify-center md:block'>
          <div className='relative h-[360px] w-[360px] z-30'>
            <div className='absolute top-[48%] left-0 -translate-y-1/2 z-30'>
              <div className=' animate-levitate animate-infinite animate-duration-[10000ms] animate-ease-in-out z-20'>
                <Image
                  src='/assets/pill-pink.png'
                  alt='bit'
                  width={230}
                  height={230}
                  className='drop-shadow-lg'
                />
              </div>
            </div>
            <div className='absolute -top-12 -right-12 z-20'>
              <div className='animate-levitate-reverse animate-infinite animate-duration-[10000ms] animate-ease-in-out'>
                <Image
                  src='/assets/pill-green.png'
                  alt='bit'
                  width={240}
                  height={240}
                  className='drop-shadow-lg'
                />
              </div>
            </div>
            <div className='absolute bottom-3 -right-2 z-10'>
              <div className='animate-levitate animate-infinite animate-duration-[10000ms] animate-ease-in-out'>
                <Image
                  src='/assets/pill-orange.png'
                  alt='bit'
                  width={210}
                  height={210}
                  className='drop-shadow-lg'
                  overrideSrc="/assets/pill-orange.png"
                />
              </div>
            </div>
            <div className='animate-pulse-subtle absolute bottom-[50px] left-1/3 z-0 h-[180px] w-[180px] rounded-full bg-pink-500 object-contain opacity-50 blur-3xl delay-1000'></div>
            <div className='animate-pulse-subtle absolute bottom-0 end-0 right-[25px] z-0 h-[180px] w-[180px] rounded-full bg-orange-500 object-contain opacity-50 blur-3xl delay-2000'></div>
            <div className='animate-pulse-subtle absolute end-0 top-0 z-0 h-[180px] w-[180px] rounded-full bg-green-500 object-contain opacity-50 blur-3xl delay-3000'></div>
            <div className='animate-pulse animate-duration-[5000ms] absolute end-0 top-0 z-0 h-[360px] w-[360px] rounded-full bg-stone-500 object-contain opacity-20 blur-3xl'></div>
            <div className='animate-pulse animate-duration-[5000ms] absolute bottom-0 h-[10px] w-[360px] rounded-full bg-stone-900 object-contain opacity-80 blur-sm'></div>
          </div>
        </div>
      </div>
      {/* <div className="absolute -bottom-36 right-48 w-96 h-96 bg-lime-400 rounded-full blur-3xl opacity-50 z-0 animate-blob mix-hard-light"></div>
      <div className="absolute -bottom-36 right-36 w-96 h-96 bg-orange-400 rounded-full blur-3xl opacity-50 z-0 animate-blob mix-hard-light"></div>
      <div className="absolute -bottom-36 -right-0 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-50 z-0 animate-blob mix-hard-light"></div> */}
      {/* <div className='md:ml-auto mt-auto flex max-w-[1460px] basis-full flex-col lg:self-end p-3'>
        <Logos />
      </div> */}
    </div>

  )
}


export default HomePageHero;