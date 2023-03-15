import { HotelData } from "./CardHotel";

export interface CarouselSlider {
  data: HotelData[];
  setSlideCount: any;
  setCurrentSlide: any;
  carouselTitle: string;
  typeCard?: string;
  onClickCard: (id: number) => void
}

export interface ImageCarousel {
  width?: string;
  height?: string;
  borderRadius?: string;
  orientation?: "vertical" | "horizontal";
  visibleSlides?: number;
  images: string[];
  showControl?: boolean;
  onSelectImage: (imageUrl: string) => void;
}
