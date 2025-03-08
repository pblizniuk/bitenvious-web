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
    <div className="group mx-auto my-8 flex max-w-[1440px] flex-col content-center items-center border-t p-12 md:py-16 lg:my-16 lg:py-24">
      <div className="max-w-[700px] text-center">
        <h3 className="mb-8 mt-auto block p-2 text-3xl font-thin text-stone-900 md:text-4xl lg:text-5xl lg:leading-relaxed">
          {Title}
        </h3>
        {ButtonText && ButtonLink && (
          <Link
            className="mb-auto inline-block rounded-full border-2 border-gray-900 bg-gray-900 px-6 py-3 text-xl font-semibold text-white shadow lg:w-2/4"
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
