import StrapiImage from '@/app/_components/strapi_image'
import ScrollSwipeLeft from '@/app/_animations/scroll_swipe_left'

type ProductScrollProps = {
  productScroll: {
    id: string
    Title: string
    Description: string
    Categories: string
    Image: {
      url: string
    }
  }[]
}

const ProductScroll = (props: ProductScrollProps) => {

  const { productScroll } = props

  return (
    <ScrollSwipeLeft>
      <section className='section-cta pb-16 lg:pb-24 overflow-hidden w-full'>
        <div className='m-auto relative overflow-x-scroll max-w-none be-scroll snap-mandatory snap-x pb-8 border-t border-b
    '> {/* ease-in-view transition-transform  translate-x-36 [&.visible]:translate-x-0 duration-[1500ms] out-expo delay-100} */}
          <div className='flex flex-row pt-8'>
            {productScroll?.length && productScroll.map((item) => {
              const pills = item.Categories.split(', ')

              return (
                <div key={item.id} className='group cta w-[calc(100vw-max(48px,min(4.44vw,64px)))] max-w-[435px] md:w-scroll-column pr-6 md:px-6 shrink-0 first:ml-8 last:mr-8 snap-center relative'>
                  <StrapiImage
                    src={item.Image.url}
                    alt={item.Title}
                    width={220}
                    height={220}
                    className='mb-6 block w-full transform overflow-hidden rounded-lg border object-cover object-top shadow-sm'
                  />
                  <div className="overflow-hidden">
                    <h3 className='text-xl font-semibold text-stone-700 md:text-xl mb-3'>
                      {item.Title}
                    </h3>
                    <p className='text-lg font-light md:mt-4 md:text-lg mb-3'>{item.Description}</p>
                    {pills && pills.map((pill, index) => {
                      return (
                        <div key={index} className='block mb-2'>
                          <div className='inline-block px-3 py-1 text-sm font-light text-stone-100 bg-stone-700 rounded-md'>
                            {pill}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </ScrollSwipeLeft>
  )
}

export default ProductScroll
