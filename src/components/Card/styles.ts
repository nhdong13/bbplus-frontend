import { BREAKPOINTS } from './../../utils/breakpoints';
import IMAGES from "@/assets/images"
import { COLORS } from "@/utils/colors"
import { FONTS } from "@/utils/fonts"
import styled from "styled-components"
import { VerticalContainer } from "../Layout/VerticalContainer"

const StyledCard = styled.div`
  cursor: pointer;
  height: auto;
  width: 340px;

  @media ${BREAKPOINTS.mobileLg}  {
    max-width: 320px;
    width: 100%;
  }
`

const CardImage = styled(VerticalContainer)`
  background-image: url(${IMAGES.hotelBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
  min-height: 209px;
  position: relative;

  @media ${BREAKPOINTS.mobileLg} {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    min-height: 188px;
  }

  .save-percentage, .rating {
    width: 50%;

    @media ${BREAKPOINTS.mobileLg} {
      width: auto;
    }
  }

  .save-percentage {
    background: ${COLORS.gradient1};
    border-top-left-radius: 17px;

    @media ${BREAKPOINTS.mobileLg} {
      border-top-left-radius: 5px;
    }

    span {
      align-items: center;
      color: ${COLORS.white};
      display: flex;
      font-family: ${FONTS.manrope};
      font-weight: 700;
      font-size: 16px;
      line-height: 32px;
      text-transform: uppercase;
      justify-content: center;

      @media ${BREAKPOINTS.mobileLg} {
        padding: 5px 16px;
      }
    }
  }

  .rating {
    align-items: flex-end;
    border-top-right-radius: 17px;
    display: flex;
    justify-content: right;
    margin-right: 38px;

    @media ${BREAKPOINTS.mobileLg} {
      border-top-right-radius: 5px;
    }

    span {
      color: ${COLORS.black};
      font-family: ${FONTS.manrope};
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;

      @media ${BREAKPOINTS.mobileLg} {
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
      }
    }

    .rating-container {
      align-items: center;
      background: ${COLORS.white};
      border-radius: 5px;
      display: flex;
      gap: 11px;
      justify-content: center;
      padding: 0 10px;
      
      span {
        justify-content: right!important;
        width: 100%;
      }

      @media ${BREAKPOINTS.mobileLg} {
        padding: 0 15px;
        gap: 10px;
      }
    }
  }

  .rating-without-discount {
    justify-content: right!important;
    margin: 15px;
    width: 100%;

    @media ${BREAKPOINTS.mobileLg} {
      margin: 18px 37px;
    }
  }
`

const PriceContainer = styled.div`
  height: 120px;
  right: 8px;
  position: absolute;
  bottom: -25px;
  width: 153px;

  .inner-trapezoid {
    align-items: center;
    background: ${COLORS.flushOrange};
    clip-path: polygon(0 0, 100% 0, 100% 76%, 0% 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 120px;
    position: absolute;
    right: 0;
    width: 153px;

    @media ${BREAKPOINTS.tablet} {
      height: 62px;
      width: 92px;
    }
  }

  .outer-trapezoid {
    background: ${COLORS.cyprus};
    clip-path: polygon(0 0, 100% 0, 100% 76%, 0% 100%);
    height: 125px;
    position: relative;
    width: 161px;

    @media ${BREAKPOINTS.tablet} {
      position: absolute;
      top: 50px;
      right: 0;

      height: 67px;
      width: 97px;
    }
  }

  p {
    color: ${COLORS.white};
    font-family: ${FONTS.manrope};
    font-size: 28px;
    line-height: 34px;

    @media ${BREAKPOINTS.laptop} {
      font-size: 16px;
      line-height: 20px;
    }
  }

  span {
    color: ${COLORS.white};
    font-family: ${FONTS.manrope};
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    padding-left: 7px;

    @media ${BREAKPOINTS.laptop} {
      font-size: 14px;
      line-height: 18px;
    }
  }
`

const CardInfo = styled(VerticalContainer)`
  border-bottom: 1px solid ${COLORS.silver};
  border-left: 1px solid ${COLORS.silver};
  border-right: 1px solid ${COLORS.silver};
  border-bottom-left-radius: 17px;
  border-bottom-right-radius: 17px;
  gap: 10px;
  padding: 50px 32px;

  @media ${BREAKPOINTS.mobileLg} {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 38px 10px 43px;
    text-align: center;
  }

  .hotel-name {
    h4 {
      color: ${COLORS.toryBlue};
      line-height: 22px;

      @media ${BREAKPOINTS.mobileLg} {
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
      }
    }
  }

  .location {
    display: flex;
    gap: 12px;

    @media ${BREAKPOINTS.mobileLg} {
      justify-content: center;
      gap: 10px;
    }

    span {
      align-items: flex-end;
      color: ${COLORS.black};
      display: flex;
      font-family: ${FONTS.manrope};
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;

      @media ${BREAKPOINTS.mobileLg} {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
      }
    }

    img {
      height: 16px;
      width: 16px;
    }
  }

  .extra-info {
    align-items: center;
    display: flex;
    gap: 15px;

    @media ${BREAKPOINTS.mobileLg} {
      gap: 10px;
    }

    span {
      color: ${COLORS.onyx};
      font-family: ${FONTS.manrope};
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;

      @media ${BREAKPOINTS.mobileLg} {
        font-size: 16px;
      }
    }

    img {
      @media ${BREAKPOINTS.mobileLg} {
        width: 16px;
      }
    }
  }

  .description {
    span {
      color: ${COLORS.blackPearl};
      font-family: ${FONTS.manrope};
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;

      @media ${BREAKPOINTS.mobileLg} {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }

  .custom-itineraries-price {
    align-items: flex-end;
    display: flex;
    justify-content: center;
    gap: 10px;

    .high-light-price {
      color: ${COLORS.red};
      font-size: 19px;
      font-weight: 400;
      line-height: 23px;

       @media ${BREAKPOINTS.mobileLg} {
        font-size: 14px;
        line-height: 20px;
      }
    }

    .price {
      color: ${COLORS.toryBlue};
      font-size: 32px;
      font-weight: 600;
      line-height: 38px;

       @media ${BREAKPOINTS.mobileLg} {
        font-size: 28px;
        line-height: 30px;
      }
    }
  }
`

const ViewDetailButtonContainer = styled.div`
  margin: 16px auto 0;

  @media ${BREAKPOINTS.mobileLg} {
    margin: 0 auto;
  }

  div {
    width: 250px;

    @media ${BREAKPOINTS.mobileLg} {
      border-radius: 3px;
      height: 39px;
      max-width: 143px;
      padding: 0;
    }
  }

  span {
    font-weight: 700;

    @media ${BREAKPOINTS.mobileLg} {
      font-size: 14px;
      line-height: 19px;
      padding: 10px 30px;
    }
  }
`

export {
  StyledCard,
  CardImage,
  PriceContainer,
  CardInfo,
  ViewDetailButtonContainer
}
