import Image from 'next/image'
import TitleSectionWidget from '../title_section'

const CoreTeamWidget = () => {
  return (
    <>
      <TitleSectionWidget
        title="Key Players"
        description="The primary team responsible for making everything possible."
      />
      <div className="m-auto mb-8 max-w-[1340px] rounded-2xl p-6 sm:grid md:grid-cols-2 lg:mb-16 lg:grid-cols-3 ">
        <div className="pb-6 pl-px pt-px md:border-b md:p-6 ">
          <div className="h-full w-full overflow-hidden rounded-xl">
            <Image
              src="/assets/pb.jpg"
              alt="logo"
              width="450"
              height="450"
              className="relative z-20 h-full w-full object-cover object-top shadow-sm grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </div>
        <div className="p-6 md:border-b md:border-l md:border-r ">
          <dl className="text-md md:text-lg">
            <dt className="font-outfit text-2xl font-medium">Paul Blizniuk</dt>
            <dt className="font-semibold">CEO & Founder</dt>
            <dt>Design & Code</dt>
            <dt>
              <strong>Location: </strong>Knoxville, TN
            </dt>
          </dl>
        </div>
        <div className="hidden p-6 md:border-b lg:block ">
          {/* <div className='about-logo group relative flex items-center justify-center w-full h-full'>
            <div className="relative">
              <Image
                src='/assets/logo-xl-new.png'
                alt='logo'
                width='150'
                height='150'
                className='transition-all duration-700 grayscale group-hover:grayscale-0 relative'
              />
              <div className='animate-pulse absolute end-0 top-0 z-10 h-[150px] w-[150px] rounded-full bg-stone-800 object-contain opacity-30 blur-3xl'></div>
            </div>
          </div> */}
        </div>
        {/* <div className='md:border-b p-6 md:hidden lg:block '>
          <div className='about-logo group relative flex items-center justify-center w-full h-full'>
            <div className="relative">
              <Image
                src='/assets/logo-xl-new.png'
                alt='logo'
                width='150'
                height='150'
                className='transition-all duration-700 grayscale group-hover:grayscale-0 relative'
              />
              <div className='animate-pulse absolute end-0 top-0 z-10 h-[150px] w-[150px] rounded-full bg-stone-800 object-contain opacity-30 blur-3xl'></div>
            </div>
          </div>
        </div>
        <div className='md:border-b md:border-r md:border-l p-6 text-right '>
          <dl className='text-md md:text-lg'>
            <dt className='font-outfit font-medium text-2xl'>Mike Potesta</dt>
            <dt className='font-semibold'>Marketing Strategist</dt>
            <dt>Brand Creation & Strategy</dt>
            <dt><strong>Location: </strong>Knoxville, TN</dt>
          </dl>
        </div>
        <div className='md:border-b py-6 md:p-6 pr-px '>
          <div className='rounded-xl overflow-hidden h-full w-full'>
            <Image
              src='/assets/mp.jpg'
              alt='logo'
              width='450'
              height='450'
              className='transition-all grayscale hover:grayscale-0 duration-700 relative z-20 w-full h-full object-cover object-top shadow-sm'
            />
          </div>
        </div> */}
        <div className="py-6 md:p-6"></div>
        <div className="md:border-l md:border-r md:p-6 ">
          <div className="h-full w-full overflow-hidden rounded-xl">
            <Image
              src="/assets/nc.jpg"
              alt="logo"
              width="450"
              height="450"
              className="relative z-20 h-full w-full object-cover object-top shadow-sm grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </div>
        <div className="p-6 md:hidden lg:block">
          <dl className="text-md md:text-lg">
            <dt className="font-outfit text-2xl font-medium">Nic Chu</dt>
            <dt className="font-semibold">Engineering Leader</dt>
            <dt>Engineering, Technical Strategy</dt>
            <dt>
              <strong>Location: </strong>Chicago, IL
            </dt>
          </dl>
          {/* <div className='about-logo group relative flex items-center justify-center w-full h-full'>
            <div className="relative">
              <Image
                src='/assets/logo-xl-new.png'
                alt='logo'
                width='150'
                height='150'
                className='transition-all duration-700 grayscale group-hover:grayscale-0 relative'
              />
              <div className='animate-pulse absolute end-0 top-0 z-10 h-[150px] w-[150px] rounded-full bg-stone-800 object-contain opacity-30 blur-3xl'></div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default CoreTeamWidget
