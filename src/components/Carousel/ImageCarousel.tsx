import IMAGES from "@/assets/images";
import { BREAKPOINTS } from "@/utils/breakpoints";
import { ImageCarousel } from "@/utils/types/Carousel";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import { useState } from "react";
import { ReactSVG } from "react-svg";
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
            <ReactSVG
              src={
                arrowLeftBtnColor
                  ? IMAGES.iconArrowDownGradient
                  : IMAGES.iconArrowUp
              }
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
              <Thumbnail
                width="100%"
                height="100%"
                imageUrl={thumbnail}
                borderRadius={borderRadius}
              />
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
            <ReactSVG
              src={
                arrowRightBtnColor
                  ? IMAGES.iconArrowDownGradient
                  : IMAGES.iconArrowUp
              }
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
      props.orientation === "vertical" ? "rotate(-180deg)" : ""};
  }
  .arrow-up {
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
  @media ${BREAKPOINTS.tablet} {
    width: 50px;
    .carousel__slider {
      margin: 10px 0;
    }

    .carousel__slide,
    .carousel__inner-slide {
      width: 50px !important;
      height: 50px;
      padding-bottom: 0px;
    }

    .carousel__slider-tray,
    .carousel__slider-tray-wrapper,
    .carousel__slider {
      width: fit-content !important;
    }
    .carousel__slider-tray-wrapper {
      height: 230px !important;
    }
    .carousel__slider-tray {
      gap: 10px;
    }
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
