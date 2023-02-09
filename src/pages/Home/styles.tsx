import IMAGES from "@/assets/images";
import { GradientButton } from "@/components/Button";
import Divider from "@/components/Layout/Divider";
import HorizontalContainer from "@/components/Layout/HorizontalContainer";
import MainLayout from "@/components/Layout/MainLayout";
import { VerticalContainer } from "@/components/Layout/VerticalContainer";
import { BREAKPOINTS } from "@/utils/breakpoints";
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

const StyledHomeBody = styled(VerticalContainer)`
  max-width: 1920px;
  margin: 50px auto 240px;

  .booking-section-container {
    margin-top: 90px;
  }
`

const StyledCarouselTitle = styled(HorizontalContainer)`
  margin: 0 56px 27px 25px;

  @media ${BREAKPOINTS.mobileLg} {
    margin: 20px 15px;
  }

  span {
    color: ${COLORS.cyprus};
    font-family: ${FONTS.manrope};
    font-weight: 600;
    font-size: 53px;
    line-height: 63.6px;
    text-align: left;

    @media ${BREAKPOINTS.mobileSm} {
      font-size: 24px;
      line-height: 28px;
    }
  }

  .btn-arrow {
    @media ${BREAKPOINTS.mobileLg} {
      border-radius: 5px!important;
      height: 30px!important;
      width: 30px!important;
    }

    img {
      width: 10px;
    }

  }
`

const CarouselWrapper = styled.div`
  &.carousel-container {
    max-width: 1650px;
    width: 100%;

    @media only screen and (max-width: 1644px) {
      max-width: 1366px;
    }

    @media only screen and (max-width: 1366px) {
      max-width: 1160px;
    }

    @media only screen and (max-width: 1160px) {
      max-width: 992px;
    }

    @media only screen and (max-width: 992px) {
      max-width: 768px;
    }

    @media only screen and (max-width: 769px) {
      max-width: 650px;
    }

    @media only screen and (max-width: 650px) {
      max-width: 550px;
    }

    @media only screen and (max-width: 550px) {
      max-width: 400px;
    }

  .carousel__slider-tray--horizontal {
    gap: 26px;

    @media only screen and (max-width: 1440px) {
      width: 400%!important;
    }

    @media only screen and (max-width: 1024px) {
      width: 550%!important;
    }

    @media only screen and (max-width: 769px) {
      width: 850%!important;
    }
    
    @media only screen and (max-width: 475px) {
      width: 800%!important;
    }

    @media only screen and (max-width: 475px) {
      width: 850%!important;
    }
  }

  .carousel__slide {
    width: 390px!important;
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
