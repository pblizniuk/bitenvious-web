import Image from '@/app/_components/strapi_image'
import Link from 'next/link'

type CTAWidgetProps = {
  Title: string
  ButtonText?: string
  ButtonLink?: string
}

const CTAWidget = (props: CTAWidgetProps) => {
  const { Title, ButtonText, ButtonLink } = props

  return (
    <div className='group mx-auto max-w-[1440px] flex flex-col items-center content-center my-8 lg:my-16 p-12 md:py-16 lg:py-24 border-t'>
      <div className='text-center max-w-[700px]'>
        <h3 className='block font-thin text-stone-900 text-3xl md:text-4xl lg:text-5xl mt-auto mb-8 p-2 lg:leading-relaxed'>{Title}</h3>
        {ButtonText && ButtonLink && (
          <Link
            className='inline-block rounded-full border-2 px-6 py-3 text-xl font-semibold text-white shadow border-gray-900 bg-gray-900 mb-auto lg:w-2/4'
            href={ButtonLink}
          >
            {ButtonText}
          </Link>
        )}
      </div>
    </div>
  )
}

export default CTAWidget