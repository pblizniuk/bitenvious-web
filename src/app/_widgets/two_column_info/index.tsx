import React from 'react'
type Props = {
  SectionSet: {
    Title: string
    Subtitle: string
    Description: string
  }[]
}

const TwoColumnInfoWidget = (props: Props) => {
  const { SectionSet } = props
  return (
    <div className='m-auto max-w-[1340px] sm:grid md:grid-cols-2 mb-8 lg:mb-16'>
      {SectionSet?.length > 0 && (
        <>
          {SectionSet.map((item, index) => {
            return (
              <div
                key={index}
                className={`border-t p-8 lg:p-16 ${index % 2 === 0 ? '' : 'border-l'
                  }`}
              >
                {item?.Title && (
                  <h3 className='mb-3 text-xl font-semibold text-stone-700 lg:text-2xl'>
                    {item.Title}
                  </h3>
                )}
                {item.Subtitle && (
                  <div className='intro-description'>
                    <div className='text-lg mb-3'>{item.Subtitle}</div>
                  </div>
                )}
                {item.Description && (
                  <p className='mb-4 text-lg'>{item.Description}</p>
                )}
              </div>
            )
          }
          )}
        </>
      )}
    </div>
  )
}

export default TwoColumnInfoWidget