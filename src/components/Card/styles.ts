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

  @media only screen and (max-width: 768px) {
    padding: 0 15px;
  }

  @media only screen and (max-width: 475px) {
    padding: 0 10px;
    width: 92%;
  }
`

const CardImage = styled(VerticalContainer)`
  background-image: url(${IMAGES.hotelBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
  min-height: 188px;
  position: relative;


  @media ${BREAKPOINTS.tablet} {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .save-percentage, .rating {
    width: 50%;
  }

  .save-percentage {
    background: ${COLORS.gradient1};
    border-top-left-radius: 17px;

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
      min-height: 41px;

      @media ${BREAKPOINTS.laptop} {
        font-size: 16px;
      }
    }
  }

  .rating {
    align-items: flex-end;
    display: flex;
    justify-content: right;
    margin-right: 38px;
    border-top-right-radius: 17px;

    span {
      color: ${COLORS.black};
      font-family: ${FONTS.manrope};
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
    }

    .rating-container {
      align-items: center;
      background: ${COLORS.white};
      border-radius: 5px;
      display: flex;
      justify-content: center;
      max-height: 25px;
      max-width: 60px;
      span {
        justify-content: right!important;
        width: 100%;
        margin: 15px;
      }
    }
  }

  .rating-without-discount {
    justify-content: right!important;
    width: 100%;
    margin: 15px;
  }
`

const PriceContainer = styled.div`
  height: 120px;
  width: 153px;
  right: 8px;
  position: absolute;
  bottom: -25px;

  @media ${BREAKPOINTS.tablet} {
    right: 0;
  }

  .inner-trapezoid {
    height: 120px;
    width: 153px;
    background: ${COLORS.flushOrange};
    clip-path: polygon(0 0, 100% 0, 100% 76%, 0% 100%);
    position: absolute;
    right: 0;

    @media ${BREAKPOINTS.tablet} {
      height: 62px;
      width: 92px;
    }
  }

  .outer-trapezoid {
    height: 125px;
    width: 161px;
    background: ${COLORS.cyprus};
    clip-path: polygon(0 0, 100% 0, 100% 76%, 0% 100%);
    position: relative;

    @media ${BREAKPOINTS.tablet} {
      position: absolute;
      top: 50px;
      right: 0;

      height: 70px;
      width: 100px;
    }
  }

  p {
    color: ${COLORS.white};
    font-family: ${FONTS.manrope};
    font-weight: 600;
    font-size: 32px;
    line-height: 0;
    padding-left: 7px;
  }

  span {
    color: ${COLORS.white};
    font-family: ${FONTS.manrope};
    font-weight: 400;
    font-size: 22px;
    line-height: 0;
    padding-left: 7px;
  }
`

const CardInfo = styled(VerticalContainer)`
  border: 1px solid ${COLORS.silver};
  border-bottom-left-radius: 17px;
  border-bottom-right-radius: 17px;
  gap: 10px;
  padding: 50px 32px;

  @media only screen and (max-width: 375px) {
    padding: 40px 15px;
  }

  .hotel-name {
    h4 {
      color: ${COLORS.toryBlue};
    }
  }

  .location {
    display: flex;
    gap: 12px;

    span {
      align-items: flex-end;
      color: ${COLORS.black};
      display: flex;
      font-family: ${FONTS.manrope};
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
    }
  }

  .extra-info {
    display: flex;
    align-items: center;
    gap: 15px;

    span {
      color: ${COLORS.onyx};
      font-family: ${FONTS.manrope};
      font-weight: 400;
      font-size: 18px;
      line-height: 28.07px;
    }
  }

  .description {
    span {
      color: ${COLORS.blackPearl};
      font-family: ${FONTS.manrope};
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
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
    }

    .price {
      color: ${COLORS.toryBlue};
      font-size: 32px;
      font-weight: 600;
      line-height: 38px;
    }
  }
`

export {
  StyledCard,
  CardImage,
  PriceContainer,
  CardInfo
}
