import BlocksRendererClient from '@/app/_components/block_renderer_client'

type InfoSectionWidget = {
  Title: string
  Description?: string
  InfoItem: {
    id: string
    Title?: string
    Description?: string
    htmlContent?: any
  }[]
  sectionNumber?: number
  ShowItemNumbering?: boolean
}

const sanitizedNumber = (number: number) => {
  return number.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })
}

const InfoSectionWidget = (props: InfoSectionWidget) => {
  const {
    Title,
    Description,
    InfoItem,
    sectionNumber = null,
    ShowItemNumbering = false,
  } = props
  return (
    <div className="m-auto max-w-[1340px] sm:grid md:grid-cols-4">
      <div className="relative border-t p-8 pt-16 lg:pt-24 lg:text-right">
        <div className="top-32 md:text-right lg:sticky">
          {sectionNumber && (
            <span className="mb-3 inline-block text-xs font-normal text-stone-600 lg:text-sm">
              {sanitizedNumber(sectionNumber)}
            </span>
          )}
          {Title && (
            <h2 className="mb-6 text-2xl font-medium lg:text-3xl">{Title}</h2>
          )}
          {Description && (
            <div className="text-lg font-light lg:text-xl">
              <p>{Description}</p>
            </div>
          )}
        </div>
      </div>
      <div className="md:col-span-3">
        {InfoItem &&
          InfoItem.map((item, index) => {
            const { id, Title, Description, htmlContent } = item
            return (
              <div
                key={id + index}
                className={`border-l border-t p-8 ${index === 0 ? 'md:pt-16 lg:pt-24' : ''}`}
              >
                {Title && (
                  <h3 className="relative mb-3 text-xl font-medium  lg:text-2xl">
                    {sectionNumber || ShowItemNumbering ? (
                      <span
                        className={`absolute -top-2/4 mb-3 inline-block text-xs font-normal text-stone-600 lg:text-sm ${ShowItemNumbering ? '' : 'h-4'}`}
                      >
                        {ShowItemNumbering && sanitizedNumber(index + 1)}
                      </span>
                    ) : null}
                    {Title}
                  </h3>
                )}
                {Description && (
                  <div className="intro-description">
                    <div className="text-lg">{Description}</div>
                  </div>
                )}
                {htmlContent && (
                  <div className="project-detail">
                    <BlocksRendererClient content={htmlContent} />
                  </div>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default InfoSectionWidget
