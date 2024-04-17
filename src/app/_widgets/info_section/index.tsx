import Image from 'next/image'

type InfoSectionWidget = {
  Title: string
  Description: string
  InfoItem: {
    id: string
    Title: string
    Description: string
  }[]
  sectionNumber?: number
  ShowItemNumbering?: boolean
}

const sanitizedNumber = (number: number) => {
  return number.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })
}

const InfoSectionWidget = (props: InfoSectionWidget) => {
  const { Title, Description, InfoItem, sectionNumber = null, ShowItemNumbering = false } = props
  return (
    <div className='m-auto max-w-[1340px] sm:grid md:grid-cols-3'>
      <div className='border-t p-8 pt-16 lg:pt-24 lg:text-right relative'>
        <div className='top-32 lg:sticky'>
          {sectionNumber && (<span className='inline-block text-xs font-normal text-stone-600 lg:text-sm mb-3'>{sanitizedNumber(sectionNumber)}</span>)}
          <h2 className='mb-6 text-2xl font-medium lg:text-3xl'>
            {Title}
          </h2>
          <div className='text-lg font-light lg:text-xl'>
            <p>{Description}</p>
          </div>
        </div>
      </div>
      <div className='md:col-span-2'>
        {InfoItem &&
          InfoItem.map((item, index) => (
            <div
              key={item.id}
              className={`border-l border-t p-8 ${index === 0 ? 'pt-16 lg:pt-24' : ''}`}
            >
              <h3 className='mb-3 text-xl font-medium lg:text-2xl  relative'>
                {sectionNumber || ShowItemNumbering ? (
                  <span className={`inline-block text-xs font-normal text-stone-600 lg:text-sm mb-3 absolute -top-2/4 ${ShowItemNumbering ? '' : 'h-4'}`}>{ShowItemNumbering && sanitizedNumber(index + 1)}
                  </span>) : null}
                {item.Title}
              </h3>
              <div className='intro-description'>
                <div className='text-lg'>{item.Description}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default InfoSectionWidget
