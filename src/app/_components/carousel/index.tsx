'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from '@/app/_components/strapi_image'
import { SwiperOptions } from 'swiper/types'
import { Keyboard, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import TitleSectionWidget from '@/app/_widgets/title_section'

type CarouselProps = {
  Title: string
  Description: string
  Images: {
    data: []
  }
  options?: SwiperOptions
}

type Image = {
  id: string
  url: string
  alternativeText: string
}

/**
 * Renders an image carousel using the Swiper component.
 * @param props The carousel props.
 * @returns The rendered image carousel.
 */
export function ImageCarousel(props: CarouselProps) {
  const { Title, Description, Images } = props
  const { data } = Images

  if (data.length === 0) return null

  let shuffled = data
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  return (
    <section className="carousel">
      <TitleSectionWidget title={Title} description={Description} />
      <div className="-rotate-6 scale-110 py-16 md:pb-48 md:pt-24">
        <Swiper
          freeMode={true}
          grabCursor={true}
          slidesPerView={1.5}
          loop={true}
          modules={[Keyboard, FreeMode]}
          className="out-expo translate-x-36  overflow-hidden transition-transform delay-100 duration-[1500ms] [&.swiper-initialized]:translate-x-0"
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2.6,
            },
            1024: {
              slidesPerView: 3.6,
            },
            1440: {
              slidesPerView: 4.6,
            },
          }}
        >
          {data?.length > 0 &&
            shuffled?.map((image: Image) => (
              <SwiperSlide
                key={image.id}
                className="w-[50vw] max-w-[465px] flex-auto items-center justify-center overflow-hidden p-3 md:w-[30vw]"
              >
                <div key={image.id}>
                  <Image
                    src={image.url}
                    alt={image.alternativeText}
                    width={400}
                    height={400}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    loading="lazy"
                    className="block h-96 w-96 transform overflow-hidden rounded-lg border border-transparent shadow-md shadow-stone-300"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ImageCarousel
