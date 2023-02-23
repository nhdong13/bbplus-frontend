import { HotelData } from "./CardHotel"

export interface CarouselSlider {
  data: HotelData[],
  setSlideCount: any,
  setCurrentSlide: any
  carouselTitle: string
}
