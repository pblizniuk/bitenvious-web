import TitleSectionWidget from '@/app/_widgets/title_section'
import Image from 'next/image'

type Props = {
  title: string,
  description: string
}

const WhoWeAreWidget = (props: Props) => {
  const { title, description } = props

  return (
    <section className='group who-we-are'>
      <TitleSectionWidget
        title={title}
        description={description}
      />
      <div className='relative m-auto w-full max-w-[1340px] flex p-8 text-center md:p-12 md:text-right lg:my-24 lg:px-16'>
        <div className='about-logo relative flex items-center mx-auto'>
          <div className="relative">
            <Image
              src='/assets/logo-xl-new.png'
              alt='logo'
              width={250}
              height={250}
              className='transition-all duration-2000 grayscale group-hover:grayscale-0 relative z-20'
            />
            <div className='animate-pulse absolute end-0 top-0 z-10 h-[250px] w-[250px] rounded-full bg-stone-800 object-contain opacity-40 blur-3xl'></div>
          </div>
          <span
            className={`pl-3 font-rock-salt text-6xl font-extrabold transition-all text-black`}
          >
            BitEnvious
          </span>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAreWidget