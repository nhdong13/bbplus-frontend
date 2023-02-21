import React, { useContext, useEffect, useState } from "react";

import {
  ButtonBack,
  ButtonNext,
  Slide,
  Slider
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselContext } from "pure-react-carousel";
import styled from "styled-components";
import useWindowSize from "@/utils/windowResize";
import Card from "../Card";
import IMAGES from "@/assets/images";
import { StyledCarouselTitle } from "@/pages/Home/styles";
import { CarouselSlider } from "@/utils/types/Carousel";
import { COLORS } from "@/utils/colors";


const CarouselSlider = ({ setSlideCount, setCurrentSlide, data, carouselTitle }: CarouselSlider) => {
  const screenWidth = useWindowSize();
  const carouselContext = useContext(CarouselContext);
  const [arrowRightBtnColor, setArrowRightBtnColor] = useState<boolean>(false);
  const [arrowLeftBtnColor, setArrowLeftBtnColor] = useState<boolean>(false);

  useEffect(() => {
    const updateCarouselSlide = (slideToBeVisible: number) => {
      const {
        currentSlide,
        totalSlides,
        visibleSlides
      } = carouselContext.state;

      setSlideCount(slideToBeVisible);

      if (
        currentSlide >= totalSlides - visibleSlides ||
        currentSlide >= totalSlides - slideToBeVisible
      ) {
        setCurrentSlide(totalSlides - slideToBeVisible);
      }
    };

    if (screenWidth < 500) {
      updateCarouselSlide(1);
    } else if (screenWidth > 1920) {
      updateCarouselSlide(3.5);
    }
    else updateCarouselSlide(4);
  }, [screenWidth, setSlideCount, setCurrentSlide, carouselContext]);

  const handleHoverArrowBtn = (rightSide: boolean) => {
    if (rightSide) setArrowRightBtnColor(!arrowRightBtnColor)
    if (!rightSide) setArrowLeftBtnColor(!arrowLeftBtnColor)
  }

  return (
    <Wrapper>
      <StyledCarouselTitle justifyContent="space-between">
        <span>
          {carouselTitle}
        </span>
        <div className="controls">
          <ButtonNext className="btn-arrow reverse-arrow"
            onMouseEnter={() => handleHoverArrowBtn(false)}
            onMouseLeave={() => handleHoverArrowBtn(false)}
          >
            <img src={arrowLeftBtnColor ? IMAGES.iconAnchorLinearGradient : IMAGES.iconAnchorGrey} alt="arrow" />
          </ButtonNext>
          <ButtonNext className="btn-arrow"
            onMouseEnter={() => handleHoverArrowBtn(true)}
            onMouseLeave={() => handleHoverArrowBtn(true)}
          >
            <img src={arrowRightBtnColor ? IMAGES.iconAnchorLinearGradient : IMAGES.iconAnchorGrey} alt="arrow" />
          </ButtonNext>
        </div>
      </StyledCarouselTitle>
      <Slider>
        {data.map((item, index) => {
          return (
            <Slide index={index} className="slide" key={index}>
              <Card index={index} data={item} />
            </Slide>
          )
        })}
      </Slider>

    </Wrapper>
  );
};

const Wrapper = styled.div`
  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .btn-arrow {
      align-items: center;
      border-radius: 10px;
      background: transparent;
      border: 1px solid #898989;
      border-image-slice: 1;
      cursor: pointer;
      display: flex;
      justify-content: center;
      height: 58px;
      width: 58px;

      &:hover {
        border: double 1px transparent;
        border-radius: 10px;
        background-image: linear-gradient(white, white), ${COLORS.gradient1};
        background-origin: border-box;
        background-clip: content-box, border-box;
        transition: all .5s ease-in-out;
      }
      
    }

    .reverse-arrow {
      transform: rotateY(180deg);
    }

    .dot-group {
      display: flex;
      align-items: center;
      justify-content: center;

      .carousel__dot {
        width: 8px;
        height: 8px;
        border: none;
        border-radius: 50%;
        margin: 0 4px;
        padding: 0;
        background-color: #c3c4ca;
      }

      .carousel__dot--selected {
        width: 16px;
        height: 8px;
        border-radius: 10px;
        background-color: #6267a1;
        transition: background 0.4s ease;
      }
    }
  }
`;

export default CarouselSlider;
