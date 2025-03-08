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
    <div className="mx-auto max-w-[1340px] sm:grid lg:grid-cols-2">
      {item?.map((item, i) => {
        const { title, subtitle, content, url, buttonText } = item

        return (
          <div
            key={i}
            className="flex flex-row gap-6 border-t md:items-center md:px-6"
          >
            <h3 className="writing-tb hidden -rotate-180 whitespace-nowrap text-2xl font-normal leading-none md:block md:text-3xl">
              {subtitle}
            </h3>
            <div className="flex flex-col self-stretch p-8 md:border-l md:pt-16">
              <h2 className="block text-4xl font-normal leading-loose md:mb-8 md:text-5xl">
                {title}
              </h2>
              <h3 className="mb-4 text-2xl font-normal md:mb-8 md:hidden md:text-3xl">
                {subtitle}
              </h3>
              <p className="leading-relaxed">{content}</p>
              {url && (
                <Link
                  className="mb-auto self-start rounded-full border-2 border-gray-900 bg-gray-900 px-6 py-3 text-xl font-semibold text-white shadow"
                  href={url}
                >
                  {buttonText}
                </Link>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TwoColumnAdvanced
