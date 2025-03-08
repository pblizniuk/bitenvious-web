'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
export const revalidate = 0
type Props = {
  Title: string
  Description: string
  url: string
}

const HomePageHero = (props: Props) => {
  const { Title, Description, url } = props
  return (
    <div className="relative flex min-h-screen w-screen flex-col overflow-hidden bg-gradient-to-br from-stone-800 to-stone-900 pt-32 md:pt-60">
      <div className="max-w-[1460px] sm:grid md:m-auto md:grid-cols-2 lg:grid-cols-3">
        <div className="p-8 lg:col-span-2 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.3,
              }}
            >
              <h1 className="mb-4 bg-gradient-to-b  from-stone-50 to-stone-300 bg-clip-text text-3xl font-medium text-transparent md:mb-8 md:text-5xl/tight">
                {Title}
              </h1>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.3,
                delay: 0.05,
              }}
            >
              <p className="mb-8 font-montserrat text-xl font-light text-stone-300 md:mb-12 md:mt-4 md:block md:text-2xl/relaxed">
                {Description}
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.3,
                delay: 0.1,
              }}
            >
              <Link
                href="contact"
                className="relative inline-block transform rounded-full border border-stone-50 bg-transparent px-8 py-4 text-center text-lg font-semibold text-white shadow transition-all duration-500 ease-in-out hover:scale-105 hover:bg-stone-50 hover:text-stone-900 hover:shadow-lg lg:w-2/4"
              >
                Get Started Today
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="relative m-auto flex w-full justify-center pl-0 pt-12 text-center md:block md:p-12 md:text-right lg:my-24 lg:pl-0 lg:pr-16">
          <div className="relative z-30 h-[360px] w-[360px]">
            <div className="absolute left-0 top-[48%] z-30 -translate-y-1/2">
              <div className=" z-20 animate-levitate animate-duration-[10000ms] animate-infinite animate-ease-in-out">
                <Image
                  src="/assets/pill-pink.png"
                  alt="bit"
                  width={230}
                  height={230}
                  className="drop-shadow-lg"
                />
              </div>
            </div>
            <div className="absolute -right-12 -top-12 z-20">
              <div className="animate-levitate-reverse animate-duration-[10000ms] animate-infinite animate-ease-in-out">
                <Image
                  src="/assets/pill-green.png"
                  alt="bit"
                  width={240}
                  height={240}
                  className="drop-shadow-lg"
                />
              </div>
            </div>
            <div className="absolute -right-2 bottom-3 z-10">
              <div className="animate-levitate animate-duration-[10000ms] animate-infinite animate-ease-in-out">
                <Image
                  src="/assets/pill-3.png"
                  alt="bit"
                  width={210}
                  height={210}
                  className="drop-shadow-lg"
                />
              </div>
            </div>
            <div className="absolute bottom-[50px] left-1/3 z-0 h-[180px] w-[180px] animate-pulse-subtle rounded-full bg-pink-500 object-contain opacity-50 blur-3xl delay-1000"></div>
            <div className="delay-2000 absolute bottom-0 end-0 right-[25px] z-0 h-[180px] w-[180px] animate-pulse-subtle rounded-full bg-orange-500 object-contain opacity-50 blur-3xl"></div>
            <div className="delay-3000 absolute end-0 top-0 z-0 h-[180px] w-[180px] animate-pulse-subtle rounded-full bg-green-500 object-contain opacity-50 blur-3xl"></div>
            <div className="absolute end-0 top-0 z-0 h-[360px] w-[360px] animate-pulse rounded-full bg-stone-500 object-contain opacity-20 blur-3xl animate-duration-[5000ms]"></div>
            <div className="absolute bottom-0 h-[10px] w-[360px] animate-pulse rounded-full bg-stone-900 object-contain opacity-80 blur-sm animate-duration-[5000ms]"></div>
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

export default HomePageHero
