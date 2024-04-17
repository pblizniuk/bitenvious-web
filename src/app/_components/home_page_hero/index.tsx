'use client'
// import { useCallback, useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import type { Container, Engine } from "@tsparticles/engine";

import React from 'react'
import StrapiImage from '@/app/_components/strapi_image'
import Link from 'next/link'
import Logos from '@/app/_components/logos'
import { motion } from 'framer-motion'

// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

// export const ParticlesWrapper = ({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) => {
//   const [init, setInit] = useState(false);

//   // this should be run only once per application lifetime
//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//       // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//       // starting from v2 you can add only the features you need reducing the bundle size
//       //await loadAll(engine);
//       //await loadFull(engine);
//       await loadSlim(engine);
//       //await loadBasic(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesLoaded = (container) => {
//     console.log(container);
//   };

//   if(init) {
//     return (
//       <>
//       <Particles id="tsparticles" url="/scripts/particles.json" particlesLoaded={particlesLoaded}>
//         {/* You can use the `Particles` component to add custom shapes or presets */}
//       </Particles>
//       {children}
//       </>
//     )
//   } else {
//     return null;

//   }
// ;
// };


type Props = {
  Title: string
  Description: string
  url: string
}

const HomePageHero = (props: Props) => {
  const { Title, Description, url } = props
  return (
    // <ParticlesWrapper>
    <div className='flex relative w-screen overflow-hidden flex-col bg-gradient-to-br from-stone-800 to-stone-900 pt-60'>
      <div className='m-auto max-w-[1460px] sm:grid md:grid-cols-2 lg:grid-cols-3'>
        <div className='p-4 md:p-8 lg:py-24 lg:col-span-2'>
          <div className='mx-auto max-w-3xl'>
            <motion.div
            initial={{ y:50, opacity: 0 }}
            animate={{ y:0, opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.5
            }}
            >
              <h1 className='text-3xl font-medium  md:text-5xl/tight mb-4 md:mb-8 bg-gradient-to-b from-stone-50 to-stone-300 bg-clip-text text-transparent'>
                {Title}
              </h1>
            </motion.div>
            <motion.div
            initial={{ y:50, opacity: 0 }}
            animate={{ y:0, opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.3
            }}
            >
            <p className='font-montserrat text-xl font-light text-stone-300 md:mt-4 md:block md:text-2xl/relaxed mb-8 md:mb-12'>
              {Description}
            </p>
            </motion.div>
            <motion.div
            initial={{ y:50, opacity: 0 }}
            animate={{ y:0, opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.5
            }}
            >
            <Link
              href='contact'
              className='relative inline-block transform rounded-full border border-stone-50 bg-transparent px-8 py-4 text-white shadow w-2/4 text-center font-semibold text-lg hover:bg-stone-50 hover:text-stone-900 transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105'
            >
              Get Started Today
            </Link>
            </motion.div>
          </div>
        </div>
        <div className='relative m-auto w-full p-8 text-center md:p-12 md:text-right lg:my-24 lg:px-16'>

            <div className='relative h-[360px] w-[360px] z-30'>
            <StrapiImage
              src={url}
              alt={Title}
              width={360}
              height={360}
            />
            </div>
            <div className='animate-pulse absolute end-0 top-0 z-10 h-[460px] w-[460px] rounded-full bg-stone-200 object-contain opacity-40 blur-3xl'></div>
            <div className='animate-pulse-subtle absolute bottom-[50px] left-1/3 z-20 h-[180px] w-[180px] rounded-full bg-pink-500 object-contain opacity-50 blur-3xl delay-1000'></div>
            <div className='animate-pulse-subtle absolute bottom-0 end-0 right-[25px] z-20 h-[180px] w-[180px] rounded-full bg-orange-500 object-contain opacity-50 blur-3xl delay-2000'></div>
            <div className='animate-pulse-subtle absolute end-0 top-0 z-20 h-[180px] w-[180px] rounded-full bg-green-500 object-contain opacity-50 blur-3xl delay-3000'></div>
        </div>
      </div>
      {/* <div className="absolute -bottom-36 right-48 w-96 h-96 bg-lime-400 rounded-full blur-3xl opacity-50 z-0 animate-blob mix-hard-light"></div>
          <div className="absolute -bottom-36 right-36 w-96 h-96 bg-orange-400 rounded-full blur-3xl opacity-50 z-0 animate-blob mix-hard-light"></div>
          <div className="absolute -bottom-36 -right-0 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-50 z-0 animate-blob mix-hard-light"></div> */}
      <div className='ml-auto mt-auto flex max-w-[1460px] basis-full flex-col self-end p-3'>
        <Logos />
      </div>
    </div>
    // </ParticlesWrapper>

  )
}


export default HomePageHero;