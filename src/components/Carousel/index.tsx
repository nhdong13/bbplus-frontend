import { useContext, useEffect } from "react";

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


const CarouselSlider = ({ setSlideCount, setCurrentSlide, data, carouselTitle }: CarouselSlider) => {
  const screenWidth = useWindowSize();
  const carouselContext = useContext(CarouselContext);

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
    }
    else updateCarouselSlide(3.5);
  }, [screenWidth, setSlideCount, setCurrentSlide, carouselContext]);

  return (
    <Wrapper>
      <StyledCarouselTitle justifyContent="space-between">
        <span>
          {carouselTitle}
        </span>
        <div className="controls">
          <ButtonBack className="btn-arrow reverse-arrow">
            <img src={IMAGES.iconAnchorGrey} alt="arrow" />
          </ButtonBack>
          <ButtonNext className="btn-arrow">
            <img src={IMAGES.iconAnchorGrey} alt="arrow" />
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
      border-radius: 9.64px;
      background: transparent;
      border: 1px solid #898989;
      cursor: pointer;
      display: flex;
      justify-content: center;
      height: 65.62px;
      width: 65.78px;
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
