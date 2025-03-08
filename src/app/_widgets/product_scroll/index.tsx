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
      <section className="section-cta w-full overflow-hidden pb-16 lg:pb-24">
        <div
          className="be-scroll relative m-auto max-w-none snap-x snap-mandatory overflow-x-scroll border-b border-t pb-8
    "
        >
          {' '}
          {/* ease-in-view transition-transform  translate-x-36 [&.visible]:translate-x-0 duration-[1500ms] out-expo delay-100} */}
          <div className="flex flex-row pt-8">
            {productScroll?.length &&
              productScroll.map((item) => {
                const pills = item.Categories.split(', ')

                return (
                  <div
                    key={item.id}
                    className="cta md:w-scroll-column group relative w-[calc(100vw-max(48px,min(4.44vw,64px)))] max-w-[435px] shrink-0 snap-center pr-6 first:ml-8 last:mr-8 md:px-6"
                  >
                    <StrapiImage
                      src={item.Image.url}
                      alt={item.Title}
                      width={385}
                      height={647}
                      className="mb-6 block w-full transform overflow-hidden rounded-lg border object-cover object-top shadow-sm"
                    />
                    <div className="overflow-hidden">
                      <h3 className="mb-3 text-xl font-semibold text-stone-700 md:text-xl">
                        {item.Title}
                      </h3>
                      <p className="mb-3 text-lg font-light md:mt-4 md:text-lg">
                        {item.Description}
                      </p>
                      {pills &&
                        pills.map((pill, index) => {
                          return (
                            <div key={index} className="mb-2 block">
                              <div className="inline-block rounded-md bg-stone-700 px-3 py-1 text-sm font-light text-stone-100">
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
