import { COLORS } from "@/utils/colors";
import styled from "styled-components";
import IMAGES from "@/assets/images";
import HorizontalContainer from "@/components/Layout/HorizontalContainer";
import { CarouselProvider } from "pure-react-carousel";
import CarouselSlider from "@/components/Carousel/index";
import { hotels, searchResultDate } from "@/utils/tempData";
import { H4, H5 } from "@/components/Typography";
import { BREAKPOINTS } from "@/utils/breakpoints"
import { useEffect, useState } from "react";
import { FONTS } from "@/utils/fonts";
import _ from "lodash";
import {
  ListResultContainer,
  HotelCardContainer,
  CarouselWrapper,
  ShowMapButton
} from "./styles";
import useHome from "@/pages/Home/hooks";
import { MODAL_TYPES, useGlobalModalContext } from "@/components/Modal";

export default function PackageView() {

  const {
    slideCount,
    setSlideCount,
    currentSlide,
    setCurrentSlide
  } = useHome();

  const { showModal } = useGlobalModalContext();

  const onClickCard = (index: number) => {
    if (index && index % 2 === 0) {
      showModal(MODAL_TYPES.CALENDAR);
    }
  }

  return (
    <>
      {
        [1, 2, 3].map(el => {
          return (
            <ListResultContainer key={el}>
              <HotelCardContainer className="hotels">
                <div className="hotel-card__container">
                  <div className="hotel-card__background-image">
                    <div className={"rating"}>
                      <div className="rating-container">
                        <img src={IMAGES.iconStar} width="14px" height="26px" />
                        <span>4.1</span>
                      </div>
                    </div>
                  </div>
                  <div className="hotel-card__info-container">
                    <div className="hotel-card__info">
                      <H4>Warwick Fiji Beach Resort </H4>
                      <div className="location">
                        <img src={IMAGES.locationIcon} alt="location" width="17px" height="25px" />
                        <p>Coral coast, Viti Levu, Fiji</p>
                      </div>
                    </div>
                    <div className="hotel-card__button">
                      <p>*Accessible by road transfer</p>
                      <ShowMapButton>
                        <H5>Show on map</H5>
                      </ShowMapButton>
                    </div>
                  </div>
                </div>
              </HotelCardContainer>
              <HorizontalContainer justifyContent="center" className="booking-carousel">
                <CarouselWrapper className="carousel-container">
                  <CarouselProvider
                    visibleSlides={3}
                    totalSlides={searchResultDate.length}
                    step={1}
                    currentSlide={currentSlide}
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    isIntrinsicHeight={true}
                  >
                    <CarouselSlider
                      setSlideCount={setSlideCount}
                      setCurrentSlide={setCurrentSlide}
                      data={searchResultDate}
                      carouselTitle={""}
                      typeCard="booking-card"
                      onClickCard={onClickCard}
                    />
                  </CarouselProvider>
                </CarouselWrapper>
              </HorizontalContainer>
            </ListResultContainer>
          )
        })
      }

    </>
  );
}
