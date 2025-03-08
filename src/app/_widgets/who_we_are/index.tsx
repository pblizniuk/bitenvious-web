import TitleSectionWidget from '@/app/_widgets/title_section'
import Image from 'next/image'

type Props = {
  title: string
  description: string
}

const WhoWeAreWidget = (props: Props) => {
  const { title, description } = props

  return (
    <section className="who-we-are group">
      <TitleSectionWidget title={title} description={description} />
      <div className="relative m-auto flex w-full max-w-[1340px] p-8 text-center md:p-12 md:text-right lg:my-24 lg:px-16">
        <div className="about-logo relative mx-auto flex flex-col items-center md:flex-row">
          <div className="relative">
            <Image
              src="/assets/logo-xl-new.png"
              alt="logo"
              width={250}
              height={250}
              className="relative z-20 mb-6 grayscale transition-all duration-2000 group-hover:grayscale-0 md:mb-0"
            />
            <div className="absolute end-0 top-0 z-10 h-[250px] w-[250px] animate-pulse rounded-full bg-stone-800 object-contain opacity-40 blur-3xl"></div>
          </div>
          <span
            className={`pl-3 font-rock-salt text-4xl text-black transition-all md:text-6xl`}
          >
            BitEnvious
          </span>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAreWidget
