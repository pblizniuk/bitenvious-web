import Image from 'next/image'
import TitleSectionWidget from '../title_section'

const CoreTeamWidget = () => {
  return (
    <>
    <TitleSectionWidget
          title='Key Players'
          description='The primary team responsible for making everything possible.'
        />
        <div className='m-auto max-w-[1340px] sm:grid md:grid-cols-2 lg:grid-cols-3 mb-8 lg:mb-16 p-6 bg-stone-100 rounded-2xl'>
          <div className='border-b p-6 pl-px pt-px'>
            <div className='rounded-xl overflow-hidden h-full w-full'>
              <Image
                src='/assets/pb.jpg'
                alt='logo'
                width='450'
                height='450'
                className='transition-all grayscale hover:grayscale-0 duration-700 relative z-20 w-full h-full object-cover object-top shadow-sm'
              />
            </div>
          </div>
          <div className='border-b border-r border-l p-6'>
            <dl className='text-md md:text-lg'>
              <dt className='font-outfit font-medium text-2xl'>Paul Blizniuk</dt>
              <dt className='font-semibold'>CEO & Founder</dt>
              <dt>Design & Code</dt>
              <dt><strong>Location: </strong>Knoxville, TN</dt>
            </dl>
          </div>
          <div className='border-b p-6 hidden lg:block'>
            {/* <div className='about-logo group relative flex items-center justify-center mx-auto py-20'>
              <div className="relative">
              <Image
                src='/assets/pill-pink.png'
                alt='logo'
                width='200'
                height='200'
                className='transition-all duration-700 grayscale group-hover:grayscale-0 relative z-20 rotate-12'
              />
              <div className='animate-pulse absolute end-0 top-0 z-10 h-[200px] w-[200px] rounded-full bg-stone-800 dark:bg-white object-contain opacity-30 blur-3xl'></div>
              </div>
            </div> */}
          </div>
          <div className='border-b p-6 md:hidden lg:block'>
            {/* <div className='about-logo group relative flex items-center justify-center mx-auto py-20'>
              <div className="relative">
              <Image
                src='/assets/pill-green.png'
                alt='logo'
                width='200'
                height='200'
                className='transition-all duration-700 grayscale group-hover:grayscale-0 relative z-20 -rotate-45'
              />
              <div className='animate-pulse absolute end-0 top-0 z-10 h-[200px] w-[200px] rounded-full bg-stone-800 dark:bg-white object-contain opacity-30 blur-3xl'></div>
              </div>
            </div> */}
          </div>
          <div className='border-b border-r border-l p-6 text-right'>
            <dl className='text-md md:text-lg'>
              <dt className='font-outfit font-medium text-2xl'>Mike Potesta</dt>
              <dt className='font-semibold'>Marketing Strategist Extraordinaire</dt>
              <dt>Brand Creation & Strategy</dt>
              <dt><strong>Location: </strong>Knoxville, TN</dt>
            </dl>
          </div>
          <div className='border-b p-6 pr-px'>
            <div className='rounded-xl overflow-hidden h-full w-full'>
              <Image
                src='/assets/mp.jpg'
                alt='logo'
                width='450'
                height='450'
                className='transition-all grayscale hover:grayscale-0 duration-700 relative z-20 w-full h-full object-cover object-top shadow-sm'
              />
            </div>
          </div>
          <div className='p-6'>
          <div className='rounded-xl overflow-hidden h-full w-full'>
              <Image
                src='/assets/nc.jpg'
                alt='logo'
                width='450'
                height='450'
                className='transition-all grayscale hover:grayscale-0 duration-700 relative z-20 w-full h-full object-cover object-top shadow-sm'
              />
            </div>
          </div>
          <div className='border-r border-l p-6'>
          <dl className='text-md md:text-lg'>
              <dt className='font-outfit font-medium text-2xl'>Nic Chu</dt>
              <dt className='font-semibold'>Engineering Leader</dt>
              <dt>Engineering, Technical Strategy</dt>
              <dt><strong>Location: </strong>Chicago, IL</dt>
            </dl>
          {/* <div className='about-logo group relative flex items-center justify-center mx-auto py-20'>
            <div className="relative">
              <Image
                src='/assets/logo-xl-new.png'
                alt='logo'
                width='200'
                height='200'
                className='transition-all duration-700 grayscale group-hover:grayscale-0 relative z-20 '
              />
              <div className='animate-pulse absolute end-0 top-0 z-10 h-[200px] w-[200px] rounded-full bg-stone-800 dark:bg-white object-contain opacity-30 blur-3xl'></div>
              </div>
            </div> */}
          </div>
          <div className='p-6 md:hidden lg:block'>

          </div>
        </div>
    </>
  )
}

export default CoreTeamWidget