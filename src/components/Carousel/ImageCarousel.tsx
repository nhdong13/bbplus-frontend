import IMAGES from "@/assets/images";
import { ImageCarousel } from "@/utils/types/Carousel";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import { useState } from "react";
import styled from "styled-components";

export default function ImageCarousel({
  width,
  height,
  orientation,
  visibleSlides,
  images,
  showControl,
  borderRadius,
  onSelectImage,
}: ImageCarousel) {
  const [arrowRightBtnColor, setArrowRightBtnColor] = useState<boolean>(false);
  const [arrowLeftBtnColor, setArrowLeftBtnColor] = useState<boolean>(false);

  const handleHoverArrowBtn = (rightSide: boolean) => {
    if (rightSide) setArrowRightBtnColor(!arrowRightBtnColor);
    if (!rightSide) setArrowLeftBtnColor(!arrowLeftBtnColor);
  };
  return (
    <Wrapper
      width={width}
      height={height}
      orientation={orientation || "vertical"}
    >
      <CarouselProvider
        visibleSlides={visibleSlides || 4}
        totalSlides={images.length}
        step={1}
        dragEnabled={false}
        naturalSlideWidth={66}
        naturalSlideHeight={54}
        // isIntrinsicHeight={true}
        orientation={orientation || "vertical"}
      >
        <ActionWrap
          showControl={showControl !== undefined ? showControl : true}
        >
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
          {images.map((thumbnail, index) => (
            <Slide
              key={thumbnail}
              index={index}
              className="slide"
              onClick={() => {
                onSelectImage(thumbnail);
              }}
            >
              <Thumbnail width="100%" height="100%" imageUrl={thumbnail} borderRadius={borderRadius}/>
            </Slide>
          ))}
        </Slider>
        <ActionWrap
          showControl={showControl !== undefined ? showControl : true}
        >
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
  borderRadius?: string;
}

const Thumbnail = styled.div<IThumbnail>`
  background-image: url(${(props) => props.imageUrl});
  object-fit: cover;
  background-position: 50% 50%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  margin: auto;
  cursor: pointer;
`;

interface IWrapper {
  width?: string;
  height?: string;
  orientation?: string;
}

const Wrapper = styled.div<IWrapper>`
  width: ${(props) => props.width};
  display: inline-block;
  .carousel {
    display: ${(props) =>
      props.orientation === "vertical" ? "block" : "flex"};
  }
  .arrow-up,
  .arrow-down {
    margin: 0;
    img {
      width: 14px;
    }
  }
  .arrow-down {
    transform: ${(props) =>
      props.orientation === "vertical" ? "rotate(90deg)" : ""};
  }
  .arrow-up {
    transform: ${(props) =>
      props.orientation === "vertical" ? "rotate(-90deg)" : "rotate(-180deg)"};
  }
  .carousel__slider-tray {
    display: flex;
    gap: 8px;
  }
  .carousel__slider-tray-wrap--vertical {
    width: ${(props) => props.width};
    height: ${(props) => props.height} !important;
    padding-bottom: 0 !important;
  }
  .carousel__slider-tray-wrap--horizontal {
    height: ${(props) => props.height} !important;
    .carousel__slide {
      padding-bottom: 0 !important;
    }
  }
  .carousel__slide {
    width: 66px;
    height: 64px;
    padding-bottom: 0px;
  }
  .carousel__inner-slide {
    width: 66px;
    height: 64px;
  }
  .carousel__slide-focus-ring {
    display: none;
  }
`;
interface IActionWrap {
  showControl?: boolean;
}
const ActionWrap = styled.div<IActionWrap>`
  display: ${(props) => (props.showControl ? "flex" : "none")};
  flex-direction: row;
  justify-content: center;
`;
