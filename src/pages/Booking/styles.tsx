import IMAGES from "@/assets/images";
import { BREAKPOINTS } from "@/utils/breakpoints";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import styled from "styled-components";

const WIDTH = "1400px";

const BookingOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: end;
  gap: 40px;
  span {
    display: inline-block;
    font-family: ${FONTS.manrope};
  }
  .price-line {
    span:last-child {
      padding-left: 28px;
      font-weight: 400;
    }
  }
  @media ${BREAKPOINTS.tablet} {
    padding: 0 10px;
    display: block;
    .total-price {
      font-size: 12px;
      font-weight: normal;
      line-height: 16px;
      font-family: Manrope;
      margin-bottom: 10px;
    }
    .price-p-person {
      font-size: 18px;
      line-height: 25px;
      color: ${COLORS.cyprus};
    }
    .price-f-pax {
      font-size: 14px;
      font-weight: 600;
      line-height: 19px;
    }
    .price-line {
      display: flex;
      align-items: center;
      span {
        display: inline-block;
        font-family: Manrope;
      }
      span:last-child {
        margin-left: 10px;
        padding-left: 0;
        font-size: 12px;
        font-family: Manrope;
      }
      :last-child {
        margin-top: 10px;
      }
    }
  }
`;

const BookingHeader = styled.div`
  box-sizing: border-box;
  max-width: 1400px;
  margin: auto;
  padding: 0 20px 0 30px;
  padding-bottom: 28px;
  display: grid;
  grid-template-columns: 55% 45%;
  align-items: baseline;
  justify-content: space-between;
  flex-direction: row;
  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media ${BREAKPOINTS.tablet} {
    grid-template-columns: 100%;
    padding: 0;
    & > div {
      width: 100%;
    }
  }
`;

const Link = styled.div`
  width: 100%;
  padding: 0px;

  & > div {
    display: flex;
    flex-direction: row;
    max-width: 500px;
    justify-content: space-between;
  }
  span {
    font-weight: bold;
  }
  &.mobile {
    display: none;
  }

  @media ${BREAKPOINTS.tablet} {
    margin-top: 20px;
    padding: 0 20px;
    box-sizing: border-box;
    &.desktop {
      display: none;
    }
    &.mobile {
      display: block;
    }
    span {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

const ButtonNextStep = styled.button`
  background-color: #ff8003;
  color: white;
  width: fit-content;
  height: fit-content;
  padding: 16px 42px;
  border-radius: 17px;
  font-weight: bold;
  font-size: 16px;
  width: 194px;
  height: 48.6px;
  @media ${BREAKPOINTS.laptop} {
    width: 100%;
    font-size: 12px;
    padding: 10px 0px;
    line-height: 16px;
    border-radius: 5px;
    margin-top: 10px;
    height: 36px;
    font-family: Manrope;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
`;

const BookingContent = styled.div`
  border-top: 2px solid ${COLORS.platinum};
  display: grid;
  grid-template-columns: calc((100% - ${WIDTH}) / 2) auto calc(
      (100% - ${WIDTH}) / 2
    );
  padding-top: 4px;
  margin-bottom: 40px;
  @media ${BREAKPOINTS.tablet} {
    display: block;
    border-top: 0px;
    padding-top: 0px;
  }
`;

interface ContainerStyle {
  width: string;
}

const Left = styled.div<ContainerStyle>`
  width: ${(props) => props.width};
  background-color: #f0f1f2;
  padding: 20px 36px 40px 20px;
  @media ${BREAKPOINTS.tablet} {
    background-color: white;
    padding: 40px 0 0 0;
  }
`;
const Right = styled.div<ContainerStyle>`
  width: ${(props) => props.width};
  padding-left: 60px;
  padding-right: 20px;
  @media ${BREAKPOINTS.tablet} {
    padding-left: 0;
    padding-right: 0px;
  }
`;

const HotelInformation = styled.div`
  .hotel__image {
    width: 421px;
    height: 280px;
    border-radius: 12px;
    object-fit: cover;
  }
  .location {
    .icon,
    p,
    span {
      display: inline-block;
      vertical-align: bottom;
      line-height: 16px;
      padding: 0 12px 0 0;
    }
    .icon {
      display: inline-block;
    }
  }
  .hotel-info-container {
    padding-left: 12px;
  }
  .divider {
    border-bottom: 2px dashed #b1b1b1;
    border-bottom-style: dotted;
    margin-top: 36.6px;
    margin-bottom: 40px;
  }
  @media ${BREAKPOINTS.mobileLg} {
    .divider {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  @media ${BREAKPOINTS.tablet} {
    box-sizing: border-box;
    .hotel-info-container {
      padding-left: 2px;
      h1 {
        font-size: 18px;
        line-height: 25px;
      }
    }
    .location {
      margin-top: 10px;
      .icon,
      p,
      span {
        vertical-align: unset;
        padding: 0 10px 0 0;
      }
      .icon,
      svg {
        width: 9px;
        height: 13px;
        /* display: block; */
      }
      path {
        fill: black;
      }
      span {
        font-size: 12px;
      }
    }
  }
`;

const Container = styled.div`
  width: 1400px;
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: 40% 60%;
  box-sizing: border-box;
  @media ${BREAKPOINTS.tablet} {
    display: block;
    width: 100%;
    padding: 0 10px;
  }
`;

const ContainerLeft = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f1f2;
  @media ${BREAKPOINTS.tablet} {
    display: none;
  }
`;

const ContainerRight = styled.div`
  width: 100%;
  height: 100%;
`;

const HotelImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    position: relative;
    margin-top: 20px;
    height: fit-content;
  }

  & > div > img {
    display: block;
  }

  .overlay {
    opacity: 0;
    background-image: url(${IMAGES.search});
    background-repeat: no-repeat;
    width: 421px;
    height: 280px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 12px;
    background-position: 50% 50%;
    cursor: pointer;
    &:hover {
      opacity: 1;
      background-color: #4c4c4c4d;
    }
  }

  @media ${BREAKPOINTS.tablet} {
    justify-content: space-between;
    padding: 0;
    margin: 10px 0;
    .hotel__image,
    .overlay {
      width: 330px;
      height: 230px;
      margin: 0px;
    }
    .hotel__image {
      margin-right: 10px;
      border-radius: 5px;
    }
    .overlay {
      display: none;
    }
  }
`;

const HotelPrice = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  border-bottom: 2px dashed #b1b1b1;
  border-bottom-style: dotted;
  & > span {
    padding: 4px 0;
    line-height: 100%;
  }
  .price-line {
    span:last-child {
      padding-left: 20px;
    }
  }
  @media ${BREAKPOINTS.tablet} {
    .total-price {
      font-size: 12px;
      font-weight: normal;
      line-height: 16px;
      font-family: Manrope;
      margin-bottom: 10px;
    }
    .price-p-person {
      font-size: 18px;
      line-height: 25px;
      color: ${COLORS.cyprus};
    }
    .price-f-pax {
      font-size: 14px;
      font-weight: 600;
      line-height: 19px;
    }
    .price-line {
      display: flex;
      align-items: center;
      span {
        display: inline-block;
        font-family: Manrope;
      }
      span:last-child {
        margin-left: 10px;
        font-size: 12px;
        font-family: Manrope;
      }
      :last-child {
        margin-top: 10px;
      }
    }
    padding-bottom: 0;
    padding-top: 10px;
    border-bottom: none;
    border-top: 2px dotted #b1b1b1;;
  }
`;

interface IButton {
  width?: string;
  height?: string;
  color?: string;
  padding?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  fontSize?: string;
}

const Button = styled.button<IButton>`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  padding: ${(props) => props.padding || "12px 18px"};
  border: ${(props) => props.border || "2px solid #00b492ff"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  color: ${COLORS.blueRYB};
  background-color: ${(props) => props.backgroundColor || "white"};
  font-weight: bold;
  font-size: ${(props) => props.fontSize};
  @media ${BREAKPOINTS.mobileLg} {
    border-radius: 5px;
    border-width: 1px;
  }
`;

const HotelDetail = styled.div`
  margin-top: 20px;
  .action {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
  ul {
    margin-top: 12px;
  }
  li {
    background-image: url(${IMAGES.iconTick});
    background-repeat: no-repeat;
    background-size: 38px 100%;
    background-position: -10px 0;
    object-fit: contain;
    padding-left: 38px;
    list-style: none;
    padding: 4px 30px;
    span {
      font-weight: 500;
    }
  }
  .group-btn {
    margin-top: 28px;
    gap: 12px;
  }

  .most-popular {
    height: 40px;

    .most-popular-text {
      vertical-align: -webkit-baseline-middle;
    }

    .most-popular-button {
      float: right;

      button {
        border: 2px solid #00B492;
      }

      @media ${BREAKPOINTS.mobileLg} {
        button {
          border: 1px solid #00B492;
        }
      }

      .room-only {
        margin-right: 13px;
      }
    }
  }

  @media ${BREAKPOINTS.tablet} {
    margin-top: 10px;
    margin-bottom: 20px;
    & > div:first-child {
      justify-content: flex-start;
      gap: 10px;
      span {
        font-size: 12px;
        line-height: 16px;
      }
    }
    .most-popular {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }
    .most-popular-button span {
      color: ${COLORS.blueFrench};
    }
    .most-popular-text {
      color: ${COLORS.black};
      font-weight: 700;
    }
    .action {
      margin-bottom: 10px;
      button {
        padding: 5px 10px;
        font-size: 16px;
        border-radius: 5px;
        color: ${COLORS.blueFrench};
      }
    }
    .holiday-includes {
      font-weight: bold;
      line-height: 16px;
    }
    ul {
      margin-top: 10px;
      li {
        padding: 0px 0px 0px 22px;
        font-size: 12px;
        line-height: 16px;
        margin-bottom: 10px;
      }
    }
    & > div:last-child {
      margin-top: 10px;
      justify-content: center;
      flex-direction: row;
      button {
        padding: 10px;
        box-sizing: border-box;
        height: 39px;
        width: 143.5px;
        span {
          font-size: 14px;
          line-height: 14px;
        }
      }
      button:first-child {
        span {
          color: white;
        }
      }

      button:last-child {
      }
    }
  }
`;
const ButtonToScroll = styled.a`
  text-decoration: none;
  color: ${COLORS.black} ;
`;

export {
  BookingOption,
  BookingHeader,
  Link,
  ButtonNextStep,
  Col,
  BookingContent,
  Left,
  Right,
  HotelInformation,
  Container,
  ContainerLeft,
  ContainerRight,
  HotelImage,
  HotelPrice,
  HotelDetail,
  Button,
  ButtonToScroll
};
