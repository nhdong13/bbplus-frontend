import HorizontalContainer from "@/components/Layout/HorizontalContainer";
import { VerticalContainer } from "@/components/Layout/VerticalContainer";
import { BREAKPOINTS } from "@/utils/breakpoints";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import styled from "styled-components";

const StyledHome = styled.div`
  background: ${COLORS.cyprus};

  & > div {
    @media only screen and (max-width: 1240px) {
      max-width: 1024px;      
    }

    @media ${BREAKPOINTS.laptop} {
      padding: 10px;
    }
  }
`

const HomepageWelcomeTitle = styled.div`
  margin: 70px 0 0;

  @media ${BREAKPOINTS.laptop} {
    display: none;
  }
`

const StyledHomeBody = styled(VerticalContainer)`
  max-width: 1920px;
  margin: 50px auto 240px;

  @media ${BREAKPOINTS.tablet} {
    margin: 0 auto 20px;
  }

  .booking-section-container {
    margin: 90px auto 0;
    max-width: 1440px;
    width: 100%;

    @media ${BREAKPOINTS.tablet} {
      margin: 20px 0;
    }

    @media ${BREAKPOINTS.mobileLg} {
      margin: 0;
    }

    & > div {
      justify-content: center;
      width: 100%;

      @media ${BREAKPOINTS.desktopSm} {
        justify-content: center;
      }

      @media ${BREAKPOINTS.tablet} {
        margin: 10px 20px;
        width: auto;
      }

      @media ${BREAKPOINTS.mobileLg} {
        margin: 0 20px;
        width: auto;
      }
    }

    & > .booking-table-container {
      @media ${BREAKPOINTS.mobileLg} {
        margin: 15px;
      }
    }

    .booking-carousel > table {
      @media ${BREAKPOINTS.desktopSm} {
        padding: 0 20px;
      }
    }

    & > .booking-table{
      @media ${BREAKPOINTS.desktopSm} {
        width: 95%!important;
      }

      @media ${BREAKPOINTS.tablet} {
        width: auto!important;;
      }
    }

    .recent-booking-table-button {
      margin: 0 56px;

      @media ${BREAKPOINTS.laptop} {
        margin: 0;
      }

      & > div {
        @media ${BREAKPOINTS.laptop} {
          border-radius: 5px;
        }
      }

      span {
        @media ${BREAKPOINTS.tablet} {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
`

const StyledCarouselTitle = styled(HorizontalContainer)`
  margin: 0 56px 20px 25px;

  @media ${BREAKPOINTS.laptop} {
    margin: 20px 15px;
    padding: 0 20px;
  }

  @media ${BREAKPOINTS.mobileLg} {
    display: flex;
    justify-content: center;
    margin: 15px;
  }

  span {
    color: ${COLORS.cyprus};
    font-family: ${FONTS.manrope};
    font-weight: 600;
    font-size: 40px;
    line-height: 63.6px;
    text-align: left;

    @media ${BREAKPOINTS.tablet} {
      font-size: 18px;
      line-height: 28px;
    }
  }

  .controls {
    @media ${BREAKPOINTS.tablet} {
      display: none!important;
    }
  }
`

const CarouselWrapper = styled.div`
  .carousel {
    width: 1440px!important;
  }

  &.carousel-container {
    max-width: 1400px;
    width: 100%;
  }

  .carousel, &.carousel-container {
    @media only screen and (min-width: 1521px) {
      max-width: 1440px;
    }

    @media only screen and (max-width: 1520px) {
      max-width: 1440px;
    }

     @media only screen and (max-width: 1475px) {
      max-width: 1095px;
    }

    @media only screen and (max-width: 1439px) {
      max-width: 1095px;
    }

    @media only screen and (max-width: 1380px) {
      max-width: 1095px;
    }

    @media only screen and (max-width: 1160px) {
      max-width: 720px;
    }

    @media only screen and (max-width: 992px) {
      max-width: 720px;
    }

    @media only screen and (max-width: 769px) {
      max-width: 650px;
    }

    @media only screen and (max-width: 650px) {
      max-width: 450px;
    }

    @media only screen and (max-width: 550px) {
      max-width: 340px;
    }

    @media only screen and (max-width: 475px) {
      max-width: 320px;
    }

    .carousel__slider-tray--horizontal {
      gap: 25px;

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
        gap: 0;
        width: 850%!important;
      }
    }

    .carousel__slide {
      width: 340px!important;
    }
  }
`

export {
  StyledHome,
  HomepageWelcomeTitle,
  StyledHomeBody,
  StyledCarouselTitle,
  CarouselWrapper,
}
