import { HotelData } from "./CardHotel";

export interface CarouselSlider {
  data: HotelData[];
  setSlideCount: any;
  setCurrentSlide: any;
  carouselTitle: string;
  typeCard?: string;
}

export interface ImageCarousel {
  data: string[];
  onSelectImage: (imageUrl: string) => void;
}
