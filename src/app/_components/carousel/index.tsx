'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from '@/app/_components/strapi_image'
import { SwiperOptions } from 'swiper/types'
import { Keyboard, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import TitleSectionWidget from '@/app/_widgets/title_section'

type CarouselProps = {
  Title: string,
  Description: string,
  Images: {
    data: []
  },
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

  const { Title, Description, Images } = props;
  const { data } = Images

  return (
    <section className="carousel">
      <TitleSectionWidget
        title={Title}
        description={Description}
      />
      <div className='-rotate-6 pt-24 pb-48 scale-110'>
        <Swiper
          freeMode={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView='auto'
          loop={true}
          // loopAdditionalSlides={3}
          modules={[Keyboard, FreeMode]}
          className="overflow-hidden transition-transform  translate-x-36 [&.swiper-initialized]:translate-x-0 duration-[1500ms] out-expo delay-100"
          keyboard={{
            enabled: true
          }}
          breakpoints={{
            640: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 3
            },
            1024: {
              slidesPerView: 4
            },
            1440: {
              slidesPerView: 5
            },
          }}
        >
          {data?.length > 0 &&
            data?.map((image: Image) => (
              <SwiperSlide
                key={image.id}
                className="flex-auto justify-center items-center p-3 w-[50vw] md:w-[30vw] max-w-[465px] overflow-hidden"
              >
                <div key={image.id}>
                  <Image
                    src={image.url}
                    alt={image.alternativeText}
                    width={0}
                    height={0}
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
  );
};

export default ImageCarousel;
