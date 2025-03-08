'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from '@/app/_components/strapi_image'
import { SwiperOptions } from 'swiper/types'
import { Keyboard, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

type ProjectCarouselProps = {
  items: {
    id: string
    Title: string
    Description: string
    Image: {
      url: string
    }
  }[]
  options?: SwiperOptions
}

const ProjectCarousel = (props: ProjectCarouselProps) => {
  const { items } = props
  return (
    <Swiper
      slidesPerView={2}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      modules={[Keyboard, FreeMode]}
      className="overflow-hidden"
      keyboard={{
        enabled: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      }}
    >
      {items &&
        items.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="w-[50vw] max-w-[465px] flex-auto items-center justify-center overflow-hidden md:w-[30vw]"
            >
              <div key={item.id} className="group p-4 text-center">
                <Image
                  src={item.Image.url}
                  alt={item.Title}
                  width={220}
                  height={220}
                  className="mb-6 block w-full transform overflow-hidden rounded-lg border object-cover object-top shadow-sm transition duration-300 group-hover:scale-95 group-hover:shadow-lg"
                />
                <h3 className="text-xl font-bold text-stone-700 md:text-2xl">
                  {item.Title}
                </h3>
                <p className="text-lg font-light md:mt-4 md:text-xl">
                  {item.Description}
                </p>
              </div>
            </SwiperSlide>
          )
        })}
    </Swiper>
  )
}

export default ProjectCarousel
