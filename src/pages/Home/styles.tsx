import IMAGES from "@/assets/images";
import { GradientButton } from "@/components/Button";
import Divider from "@/components/Layout/Divider";
import { HorizontalContainer } from "@/components/Layout/HorizontalContainer";
import MainLayout from "@/components/Layout/MainLayout";
import { VerticalContainer } from "@/components/Layout/VerticalContainer";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import { useState } from "react";
import styled from "styled-components";

const StyledHome = styled.div`
  background: ${COLORS.cyprus};
`

const HomepageWelcomeTitle = styled.div`
  margin: 70px 0 0;
  .welcome-user-name {
    color: ${COLORS.anakiwa};
    font-family: ${FONTS.manrope};
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
  }

  .welcome-description {
    color: ${COLORS.white};
    font-family: ${FONTS.manrope};
    font-weight: 500;
    font-size: 50px;
    line-height: 60px;
  }
`

const SearchContainer = styled(VerticalContainer)`
  gap: 13px;
`

const SelectBookingDateTime = styled(HorizontalContainer).attrs((props: {
  isItinerary?: boolean
}) => props)`
  background: ${COLORS.white};
  border: none;
  border-radius: 16px;
  justify-content: ${({ isItinerary }) => isItinerary ? "none" : "space-between"};
  width: 100%;
`

const FromContainer = styled(VerticalContainer)`
  cursor: pointer;
  div {
    padding: 6px 62px 43px 48px;
  }

  p {
    font-family: ${FONTS.manrope};
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
  }

  span {
    color: ${COLORS.border};
    font-family: ${FONTS.manrope};
    font-size: 19px;
    line-height: 22px;
  }
`

const SearchButtonContainer = styled.div`
  align-items: center;
  background: ${COLORS.flushOrange};
  border-radius: 17px;
  cursor: pointer;
  display: flex;
  height: 119px;
  justify-content: center;
  margin: auto;
  width: 119px;
`

const StyledTravelerDropDown = styled(VerticalContainer).attrs((props: {
  isShown?: boolean
}) => props)`
  background: ${COLORS.white};
  border-radius: 10px;
  height: ${({ isShown }) => isShown ? "375px" : "0"};
  margin: 5px 0 0;
  width: 100%;
  transition: height .5s ease-in-out;
`

const SelectRoomContainer = styled(HorizontalContainer).attrs((props: {
  isShown?: boolean
}) => props)`
  border: 1px solid ${COLORS.silver};
  border-radius: 10px;
  margin: 20px 36px;
  height: ${({ isShown }) => isShown ? "200px" : "0"};
  opacity: ${({ isShown }) => isShown ? "1" : "0"};
  transition: height .3s ease-in-out, opacity 1s ease-in, opacity .5s ease-out;
`

const ResultContainer = styled(HorizontalContainer).attrs((props: {
  isShown?: boolean
}) => props)`
  margin: 20px 36px;
  opacity: ${({ isShown }) => isShown ? "1" : "0"};
  transition: opacity 0.5s ease-in, opacity 1s ease-out;
`

const StyledHomeBody = styled(VerticalContainer)`
  max-width: 1920px;
  margin: 50px auto;

  .booking-section-container {
    margin-top: 90px;
  }
`

const StyledCarouselTitle = styled(HorizontalContainer)`
  margin: 0 56px 27px 25px;

  span {
    color: ${COLORS.cyprus};
    font-family: ${FONTS.manrope};
    font-weight: 600;
    font-size: 53px;
    line-height: 63.6px;
    text-align: left;
  }
`

const CarouselWrapper = styled.div`
  &.carousel-container {
    margin: 12px auto;
    max-width: 272px;
    filter: drop-shadow(0px 12px 30px rgba(50, 50, 50, 0.2));

    /* Total-width (including margin) + 1 additional margin */
    @media (min-width: 832px) {
      max-width: 704px;
    }

    @media (min-width: 1088px) {
      max-width: 960px;
    }

    @media (min-width: 1272px) {
      max-width: 1152px;
    }

    @media (min-width: 1504px) {
      max-width: 1650px;
    }
  }

  .carousel__inner-slide {
    width: calc(100% - 16px);
    margin-left: 8px;

    @media (min-width: 1272px) {
      width: calc(100% - 24px);
      margin-left: 12px;
    }

    @media (min-width: 1272px) {
      width: calc(100% - 32px);
      margin-left: 16px;
    }
  }
`;


export {
  StyledHome,
  HomepageWelcomeTitle,
  SearchContainer,
  SelectBookingDateTime,
  FromContainer,
  SearchButtonContainer,
  StyledTravelerDropDown,
  SelectRoomContainer,
  ResultContainer,
  StyledHomeBody,
  StyledCarouselTitle,
  CarouselWrapper,
}
