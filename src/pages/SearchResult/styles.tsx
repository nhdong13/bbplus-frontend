import IMAGES from "@/assets/images";
import { BREAKPOINTS } from "@/utils/breakpoints";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import styled from "styled-components";

const SearchResultBackground = styled.div.attrs(
  (props: {

  }) => props
)`
  height: 130px;
  background: #EFEFEF;
  .btn-mobile {
    display: none;
    height: 43px;
    background: ${COLORS.white};
    margin-top: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
    font-size: 10px;
  }
  @media ${BREAKPOINTS.laptop} {
    background: ${COLORS.cyprus};
    height: auto;
    padding: 10px;
    .btn-mobile {
      display: flex;
      align-items: center;
      justify-content: center 
    }
  }
  .arrive-days {
    border-right: none;
    &:last-child {
      padding-left: 110px;
      padding-right: 0;
    }
  }
  
`;

const SearchBar = styled.div`
  max-width: 1400px;
  padding: 0 20px;
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media ${BREAKPOINTS.laptop} {
    background: ${COLORS.white};
    border-radius: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0;
    .border-0 {
      border-bottom: 0;
      display: flex;
      justify-content: center;
      text-align: center;
      grid-column: 1 / -1;
    }
    .btn-edit {
      display: none;
    }
    
  }
`;

const SearchItem = styled.div`
  border-right: 2px solid ${COLORS.silver};
  cursor: pointer;
  height: 100%;
  padding: 0px 35px;
  display: flex;
  align-items: center;
  h5 {
    line-height: 20px;
    padding: 8px 0px;
  }
  @media ${BREAKPOINTS.laptop} {
    border-right: 0;
    border-bottom: 1px solid ${COLORS.parkinglotGray};
    padding: 0 20px;
    display: flex;
    justify-content: center;
    h5 {
      font-size: 10px;
      line-height: 14px;
      padding: 0;
      text-align: center;
      &:first-child {
        margin-bottom: 10px;
      }
    }
    .group-h5 {
      padding: 20px 0;
    }
  }
`;

const ButtonEditSearch = styled.div`
  cursor: pointer;
  width: 174px;
  height : 58px;
  border: 2px solid ${COLORS.greenBlue};
  background: ${COLORS.white};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const SearchResultContainer = styled.div`
  max-width: 1400px;
  padding: 0 20px;
  margin: auto;
  width: 100%;
  height: 100%;
  @media ${BREAKPOINTS.laptop} {
    padding: 0;
  }
`;

const Breadcrumb = styled.div`
  display: flex;
  max-width: 1400px;
  padding: 34px 35px 20px 35px;
  margin: 0 auto;
  @media ${BREAKPOINTS.laptop} {
    padding-top: 15px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
  }
`;

const BreadcrumbItem = styled.div`
  margin-right: 20px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  color: ${COLORS.blueRYB};
  &::after {
    content: ">";
    margin-left: 15px;
  }
  &:last-child {
    &::after {
      content: '';
    }
  }
  @media ${BREAKPOINTS.laptop} {
    font-size: 14px;
    font-weight: normal;
    margin-right: 5px;
    &::after {
      content: ">";
      margin-left: 5px;
    }
  }
`;

const SearchOption = styled.div`
  display: flex;
  max-width: 1400px;
  padding-left: 35px;
  margin: auto;
  margin-bottom: 27px;
  align-items: center;
  justify-content: space-between;
  .title{
    font-size: 28px;
    font-family: ${FONTS.manropeBold};
    color: ${COLORS.cyprus};
    display: block;
  }
  .mobile {
    display: none;
  }
  .group-right {
    display: flex;
  }

  @media ${BREAKPOINTS.laptop} {
    display: grid;
    margin-bottom: 0;
    .choose {
      text-align: center;
      font-size: 14px;
    }
    .filter-select {
      margin-bottom: 35px;
    }
    .mark-up {
      width: 100%;
      left: 79px;
      font-size: 14px;
    }
    .title {
      font-size: 18px;
      display: none;
    }
    .title-desk {
      display: none;
    }
    .title-mobile {
      display: block;
      text-align: center;
      margin-top: 10px;
      font-size: 18px;
      margin-bottom: 25px;
    }
    .flex {
      margin-top: 0;
    }
    .mt-10 {
      margin: 10px 0;
      text-align: center;
      font-size: 12px;
    }
  }
`;

const SearchOptionItem = styled.div`
  margin-right: 20px;
  font-size: 16px;
  position: relative;
  .label {
    width: 175px;
    padding: 0 20px;
  }
  p {
    position: absolute;
    top: -28px;
  }
  
`;

const SearchOptionSelect = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 74px;
    height: 44px;
    position: relative;
    border-radius: 4.5px;
    border: 2px solid ${COLORS.black};
    text-align: center;
  }
  @media ${BREAKPOINTS.laptop} {
    justify-content: center;
    input, .gradient-button {
      height: 40px;
      padding: 0px 10px;
      font-size: 12px;
    }
    input {
      border: 1px solid ${COLORS.parkinglotGray}
    }
  }
`;

const ListResultContainer = styled.div`
  border: 1px solid ${COLORS.parkinglotGray};
  max-width: 1400px;
  padding: 23px 48px 55px 48px;
  margin: auto;
  margin-bottom: 34px;
  display: flex;
  &:last-child {
    margin-bottom: 145px;
  }
  &:hover, &:active {
    background: ${COLORS.blueWater};
    cursor: pointer;
  }
  .booking-carousel {
    display: block;
    @media only screen and (max-width: 769px) {
      display: flex;
    }
    @media only screen and (max-width: 992px) {
      display: flex;
    }
  }
  .booking-card__container {
    width: auto;
  }
  .carousel-title{
    margin-right: 15px;
    @media ${BREAKPOINTS.laptop} {
      margin: 10px;
    }
  }
  @media ${BREAKPOINTS.laptop} {
    padding: 0;
    border: 0;
    display: grid;
    margin-bottom: 0;
    .hotels {
      padding: 0px 10px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const HotelCardContainer = styled.div`
  .hotel-card__container {
    border: 1px solid #D8D8D8;
    border-radius: 17px;
    width: 421px;
    margin-right: 15px;
    margin-top: 78px;
    @media ${BREAKPOINTS.laptop} {
      margin: 0 auto;
      width: auto;
    }
  }

  .hotel-card__background-image {
    background-image: url(${IMAGES.hotelBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 17px;
    border-top-right-radius: 17px;
    height: 100%;
    min-height: 298px;
    width: 421px;
    @media ${BREAKPOINTS.laptop} {
      width: auto;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    .rating {
    align-items: flex-end;
    border-top-right-radius: 17px;
    display: flex;
    justify-content: right;
    margin-right: 38px;
    padding-top: 8px;
    @media ${BREAKPOINTS.mobileLg} {
      border-top-right-radius: 5px;
    }

    span {
      color: ${COLORS.black};
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
  }
  .hotel-card__info-container {
    padding: 0 31px 35px;
    @media ${BREAKPOINTS.laptop} {
      text-align: center;
      padding: 38px 0;
    }
  }

  .hotel-card__info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    @media ${BREAKPOINTS.laptop} {
      h4 {
        font-size: 16px;
        font-weight: 700;
        color: ${COLORS.toryBlue};
      }
      p {
        font-size: 12px;
      }
      img {
        width: 16px;
        height: 16px;
      }
    }
    .location {
      display: flex;
      align-items: center;
      img {
        margin-right: 9px;
      }
      @media ${BREAKPOINTS.laptop} {
        justify-content: center;
      }
    }
  }

  .hotel-card__button {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
    p {
      color: #38AA00;
    }
    @media ${BREAKPOINTS.laptop} {
      gap: 10px;
      margin-top: 10px;
      align-items: center;
    }
  }
`
const ShowMapButton = styled.button`
  border: 2px solid #00B492;
  border-radius: 6px;
  width: 153px;
  height: 48px;
  cursor: pointer;
  
  h5 {
    color: ${COLORS.toryBlue};
  }
`

const CarouselWrapper = styled.div`
  .carousel {
    width: 1440px!important;
  }

  &.carousel-container {
    max-width: 1400px;
    width: 100%;
    @media only screen and (max-width: 475px) {
      padding-left: 10px;
    }
    @media ${BREAKPOINTS.laptop} {
      padding-bottom: 20px;
    }
  }

  .carousel, &.carousel-container {
    @media only screen and (min-width: 1521px) {
      max-width: 903px;
    }

    @media only screen and (max-width: 1520px) {
      max-width: 903px;
    }

    @media only screen and (max-width: 1475px) {
      max-width: 903px;
    }

    @media only screen and (max-width: 1439px) {
      max-width: 903px;
    }

    @media only screen and (max-width: 1380px) {
      max-width: 903px;
    }

    @media only screen and (max-width: 1160px) {
      max-width: 600px;
    }

    @media only screen and (max-width: 992px) {
      max-width: 602px;
    }

    @media only screen and (max-width: 769px) {
      max-width: 590px;
    }

    @media only screen and (max-width: 650px) {
      max-width: 600px;
    }

    @media only screen and (max-width: 550px) {
      max-width: 490px;
    }

    @media only screen and (max-width: 475px) {
      max-width: 420px;
    }

    .carousel__slider-tray--horizontal {
      gap: 15px;
      padding-bottom: 1px;
      @media only screen and (max-width: 1440px) {
        width: 400%!important;
      }

      @media only screen and (max-width: 1024px) {
        width: 550%!important;
      }

      @media only screen and (max-width: 992px) {
        width: 400%!important;
      }

      @media only screen and (max-width: 769px) {
        width: 816%!important;      
      }

      @media only screen and (max-width: 650px) {
        width: 400%!important;      
      }
      
      @media only screen and (max-width: 475px) {
        gap: 10px;
        width: 800% !important;
        .carousel__slide {
          width: 200px !important;
        }
      }
    }

    .carousel__slide {
      width: 286px !important;
    }
  }
`

export {
  SearchResultBackground,
  SearchBar,
  SearchItem,
  ButtonEditSearch,
  Breadcrumb,
  SearchResultContainer,
  BreadcrumbItem,
  SearchOption,
  SearchOptionItem,
  SearchOptionSelect,
  ListResultContainer,
  HotelCardContainer,
  ShowMapButton,
  CarouselWrapper
};
