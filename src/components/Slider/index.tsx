import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import Slide from "./components/Slide"

// Import Swiper styles

import "swiper/css"
import "swiper/css/pagination"

import "./styles.scss"

const sliderData = [
  "Slide 1",
  "Slide 2",
  "Slide 3",
  "Slide 4",
  "Slide 5",
  "Slide 6",
  "Slide 7",
  "Slide 8",
]

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {sliderData.map((slide) => (
          <SwiperSlide className="h-[280px] bg-green-900 text-white">
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Slider
