import Image from '@/app/_components/strapi_image'
import Link from 'next/link'

type CTAWidgetProps = {
  Title: string
  Image?: {
    url?: string
  }
  ButtonText?: string
  ButtonLink?: string
  // ctaContent: {
  // }
}

const CTAWidget = (props: CTAWidgetProps) => {
  // const { ctaContent } = props
  const { Title, Image: image, ButtonText, ButtonLink } = props

  return (
    <div className='group mx-auto max-w-[1440px] flex flex-col items-center content-center my-8 lg:my-16 p-12 md:py-16 lg:py-24 bg-stone-100 rounded-2xl'>
      <div className='text-center max-w-[700px]'>
        <h3 className='block font-thin text-stone-900 text-3xl md:text-5xl mt-auto mb-8 p-2 leading-loose'>{Title}</h3>
        {ButtonText && ButtonLink && (
          <Link
            className='inline-block rounded-full border-2 px-6 py-3 text-xl font-semibold text-white shadow border-gray-900 bg-gray-900 mb-auto w-2/4'
            href={ButtonLink}
          >
            {ButtonText}
          </Link>
        )}
      </div>
      {/* {image?.url && (
        <div className="flex m-auto h-full w-full">
          <Image
            src={image.url}
            alt='logo'
            width={350}
            height={350}
            className='transition-all duration-1000 grayscale group-hover:grayscale-0 relative z-20 m-auto'
          />
        </div>
      )} */}
    </div>
  )
}

export default CTAWidget