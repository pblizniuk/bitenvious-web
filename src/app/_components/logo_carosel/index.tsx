'use client'
import Icon from '@/app/_components/icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'
import { Keyboard, FreeMode, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

type LogoCarouselProps = {
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
export function LogoCarousel(props: LogoCarouselProps) {
  const iconClasses = 'h-[35px] w-[35px] fill-current text-white md:h-[45px] md:w-[45px] mix-blend-overlay transition-all opacity-20'
  const listClasses = ''

  return (
    <section className="carousel">
      {/* <TitleSectionWidget
        title={Title}
        description={Description}
      /> */}
      <div className='pb-2'>
        <Swiper
          freeMode={{
            momentum: false
          }}
          grabCursor={true}
          slidesPerView={2}
          loop={true}
          autoplay= {{
            delay: 0,
            disableOnInteraction: true
          }}
          speed={5000}
          modules={[Keyboard, FreeMode, Autoplay]}
          className="overflow-hidden transition-transform  translate-x-36 [&.swiper-initialized]:translate-x-0 duration-[1500ms] out-expo delay-100"
          keyboard={{
            enabled: true
          }}
          breakpoints={{
            768: {
              slidesPerView: 3
            },
            1024: {
              slidesPerView: 5
            },
            1440: {
              slidesPerView: 6
            },
          }}
          // autoplay: {
          //   // delay: 1,
          //   // disableOnInteraction: true
          // }
          // speed: {5000},
          // freeModeMomentum: {false}
        >
          <SwiperSlide className={listClasses}>
            <Icon
              name='reactjs'
              color='white'
              size='50'
              className={iconClasses}
            />
          </SwiperSlide>
          <SwiperSlide className={listClasses}>
            <Icon
              name='nextjs'
              color='white'
              size='50'
              className={iconClasses}
            />
          </SwiperSlide>
          <SwiperSlide className={listClasses}>
            <Icon
              name='strapi'
              color='white'
              size='40'
              className={iconClasses}
            />
          </SwiperSlide>
          <SwiperSlide className={listClasses}>
            <Icon
              name='wordpress'
              color='white'
              size='50'
              className={iconClasses}
            />
          </SwiperSlide>
          <SwiperSlide className={listClasses}>
            <Icon
              name='woocommerce'
              color='white'
              size='50'
              className={iconClasses}
            />
          </SwiperSlide>
          <SwiperSlide className={listClasses}>
            <Icon
              name='tailwind'
              color='white'
              size='50'
              className={iconClasses}
            />
          </SwiperSlide>
          <SwiperSlide className={listClasses}>
            <Icon
              name='chatgpt'
              color='white'
              size='50'
              className={iconClasses}
            />
          </SwiperSlide>
          <SwiperSlide className={listClasses}>
            <Icon
              name='css3'
              color='white'
              size='50'
              className={iconClasses}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default LogoCarousel;
