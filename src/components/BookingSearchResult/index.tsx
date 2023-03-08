import IMAGES from "@/assets/images";
import { COLORS } from "@/utils/colors";
import { hotels } from "@/utils/tempData";
import useWindowSize from "@/utils/windowResize";
import {
  ButtonBack,
  ButtonNext,
  CarouselContext,
  Slide,
} from "pure-react-carousel";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import BookingCard from "../BookingCard";
import CarouselSlider from "../Carousel";
import HorizontalContainer from "../Layout/HorizontalContainer";
import { H4, H5 } from "../Typography";

const StyledBookingSearchResult = styled.div`
  border: 1px solid #d8d8d8;
  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 15px;
    margin: 100px auto 55px;
  }
`;

const HotelCardContainer = styled.div`
  .hotel-card__container {
    border: 1px solid #d8d8d8;
    border-radius: 17px;
  }

  .hotel-card__background-image {
    background-color: antiquewhite;
    border-top-left-radius: 17px;
    border-top-right-radius: 17px;
    height: 100%;
    min-height: 298px;
    width: 421px;
  }
  .hotel-card__info-container {
    padding: 0 31px 35px;
  }

  .hotel-card__info {
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-top: 10px;
    .location {
      display: flex;
    }
  }

  .hotel-card__button {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;

    p {
      color: #38aa00;
    }
  }
`;

const ShowMapButton = styled.button`
  border: 2px solid #00b492;
  border-radius: 6px;
  padding: 20px 35px 13px 20px;
  width: 45%;

  h5 {
    color: ${COLORS.toryBlue};
  }
`;

export default function BookingSearchResult({
  setSlideCount,
  setCurrentSlide,
  data,
}: CarouselSlider) {
  return (
    <>
      <StyledBookingSearchResult>
        <div>
          <HotelCardContainer>
            <div className="hotel-card__container">
              <div className="hotel-card__background-image"></div>
              <div className="hotel-card__info-container">
                <div className="hotel-card__info">
                  <H4>Warwick Fiji Beach Resort </H4>
                  <div className="location">
                    <img
                      src={IMAGES.locationIcon}
                      alt="location"
                      width="17px"
                      height="25px"
                    />
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
          <HorizontalContainer gap="15px">
            <BookingCard />
            <BookingCard />
            <BookingCard />
          </HorizontalContainer>
        </div>
      </StyledBookingSearchResult>
    </>
  );
}
