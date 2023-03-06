import IMAGES from "@/assets/images";
import { ImageCarousel } from "@/utils/types/Carousel";
import useWindowSize from "@/utils/windowResize";
import {
  ButtonBack,
  ButtonNext,
  CarouselContext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

export default function ImageCarousel({ data, onSelectImage }: ImageCarousel) {
  const screenWidth = useWindowSize();
  const carouselContext = useContext(CarouselContext);
  const [arrowRightBtnColor, setArrowRightBtnColor] = useState<boolean>(false);
  const [arrowLeftBtnColor, setArrowLeftBtnColor] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const updateCarouselSlide = (slideToBeVisible: number) => {};

    if (screenWidth < 500) {
      updateCarouselSlide(1);
    } else if (screenWidth > 1920) {
      updateCarouselSlide(3.5);
    } else updateCarouselSlide(4);
  }, [screenWidth, carouselContext]);

  const handleHoverArrowBtn = (rightSide: boolean) => {
    if (rightSide) setArrowRightBtnColor(!arrowRightBtnColor);
    if (!rightSide) setArrowLeftBtnColor(!arrowLeftBtnColor);
  };
  return (
    <Wrapper>
      <CarouselProvider
        visibleSlides={4}
        totalSlides={data.length}
        step={1}
        dragEnabled={false}
        naturalSlideWidth={66}
        naturalSlideHeight={54}
        // isIntrinsicHeight={true}
        orientation="vertical"
      >
        <ActionWrap>
          <ButtonBack
            className="arrow-up reverse-arrow"
            onMouseEnter={() => handleHoverArrowBtn(false)}
            onMouseLeave={() => handleHoverArrowBtn(false)}
          >
            <img
              src={
                arrowLeftBtnColor
                  ? IMAGES.iconAnchorLinearGradient
                  : IMAGES.iconAnchorGrey
              }
              alt="arrow"
            />
          </ButtonBack>
        </ActionWrap>
        <Slider>
          {data.map((thumbnail, index) => (
            <Slide
              key={thumbnail}
              index={index}
              className="slide"
              onClick={() => {
                onSelectImage(thumbnail);
                setCurrentSlide(index);
              }}
            >
              <Thumbnail width="66px" height="64px" imageUrl={thumbnail} />
            </Slide>
          ))}
        </Slider>
        <ActionWrap>
          <ButtonNext
            className="arrow-down"
            onMouseEnter={() => handleHoverArrowBtn(true)}
            onMouseLeave={() => handleHoverArrowBtn(true)}
          >
            <img
              src={
                arrowRightBtnColor
                  ? IMAGES.iconAnchorLinearGradient
                  : IMAGES.iconAnchorGrey
              }
              alt="arrow"
            />
          </ButtonNext>
        </ActionWrap>
      </CarouselProvider>
    </Wrapper>
  );
}

interface IThumbnail {
  imageUrl: string;
  width: string;
  height: string;
}

const Thumbnail = styled.div<IThumbnail>`
  background-image: url(${(props) => props.imageUrl});
  object-fit: cover;
  background-position: 50% 50%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 12px;
  margin: auto;
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 66px;
  display: inline-block;
  .arrow-up,
  .arrow-down {
    margin: 0;
    img {
      width: 14px;
    }
  }
  .arrow-down {
    transform: rotate(90deg);
  }
  .arrow-up {
    transform: rotate(-90deg);
  }
  .carousel__slider-tray {
    display: flex;
    gap: 8px;
  }
  .carousel__slider-tray-wrapper {
    height: 284px !important;
    padding-bottom: 0 !important;
  }
  .carousel__slide {
    width: 66px;
    height: 64px;
    padding-bottom: 0px;
  }
  .carousel__slide-focus-ring {
    display: none;
  }
`;

const ActionWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
