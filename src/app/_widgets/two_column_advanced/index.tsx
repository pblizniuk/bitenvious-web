import Link from 'next/link'
type Props = {
  item: {
    title: string
    subtitle: string
    content: string
    url: string
    buttonText: string
  }[]
}

const TwoColumnAdvanced = (props: Props) => {
  const { item } = props

  return (
    <div className='mx-auto max-w-[1340px] sm:grid lg:grid-cols-2 mb-16 lg:mb-32'>
      {item?.map((item, i) => {
        const { title, subtitle, content, url, buttonText } = item

        return (
          <div key={i} className='flex flex-row gap-6 md:px-6 md:items-center border-t'>
            <h3 className='hidden md:block text-2xl font-normal md:text-3xl -rotate-180 whitespace-nowrap writing-tb leading-none'>{subtitle}</h3>
            <div className='p-8 flex flex-col self-stretch md:border-l md:pt-16'>
              <h2 className='block text-4xl font-normal md:text-5xl mb-8 leading-loose'>{title}</h2>
              <h3 className='md:hidden text-2xl font-normal md:text-3xl mb-8'>{subtitle}</h3>
              <p className='mb-8 md:text-lg leading-relaxed'>
                {content}</p>
              <Link
                className='rounded-full border-2 px-6 py-3 text-xl font-semibold text-white shadow border-gray-900 bg-gray-900 self-start mb-auto'
                href={url}
              >
                {buttonText}
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TwoColumnAdvanced