import { BREAKPOINTS } from '../../../utils/breakpoints';
import { FONTS } from '@/utils/fonts';
import { COLORS } from '../../../utils/colors';
import styled from "styled-components";

const StyledSelectDate = styled.div.attrs((props: {
  isShown?: boolean
}) => props)`
  background-color: ${COLORS.white};
  border-radius: 5px;
  box-shadow: 4px 3px 18px -5px rgba(0,0,0,0.75);;
  max-width: 1232px;
  width: 100%;
  position: absolute;
  top: 100px;
  z-index: 2;

  display: ${({ isShown }) => isShown ? "block" : "none"};

  .rmdp-wrapper,
  .rmdp-top-class,
  .rmdp-calendar,
  .rmdp-header,
  .rmdp-day-picker {
    width: 100%;
  }

  .rmdp-shadow {
    box-shadow: none;
  }

  .rmdp-header {
    padding: 24px 20px;
    max-width: 1192px;
    margin: auto;

    @media only screen and (max-width: 1249px) {
      max-width: 900px;
    }

    @media only screen and (max-width: 972px) {
      max-width: 650px;
    }
  }

  .rmdp-day-picker {
    justify-content: space-evenly;
    gap: 50px;
    max-width: 1140px;
    margin: auto;

    @media only screen and (max-width: 972px) {
      gap: 25px;
    }

    & > div {
      margin-right: 0!important;
      width: 350px;
    }

    .rmdp-week-day {
      color: ${COLORS.black}!important;
      font-family: ${FONTS.manrope};
      font-weight: 700;
      font-size: 14px;
    }

  }

  .rmdp-arrow {
    border: solid black;
    border-width: 0 2px 2px 0;
  }

  .rmdp-header-values {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
  }

  .rmdp-header-values span {
    font-family: ${FONTS.manrope};
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
  }

  .rmdp-range {
    box-shadow: none;
    justify-content: unset;
  }

  .rmdp-day span {
    font-size: 16px;
    line-height: 41px;
  }

  .rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) span:hover {
    color: ${COLORS.black};
    background-color: ${COLORS.crayola};
    border-radius: 0px;
  }

  .rmdp-range.start, .rmdp-range.end, .rmdp-range-hover {
    color: ${COLORS.black};
    background-color: ${COLORS.crayola}!important;
  }

  .rmdp-range {
    background-color: ${COLORS.bubbles};
    color: ${COLORS.black};
  }

  .rmdp-day.rmdp-range.start,
  .rmdp-day.rmdp-range.end,
  .rmdp-range-hover.start,
  .rmdp-range-hover.end {
    border-radius: 0px;
  }

  .rmdp-day.rmdp-today span {
    background-color: transparent;
    color: ${COLORS.black};
  }

  .rmdp-week {
    gap: 0;
    justify-content: center;
  }

  .rmdp-week-day, .rmdp-day {
    padding: 0 10px;
  }
`

const ResultContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 34px;
  padding: 10px 77px;

  .result-dates {
    font-size: 16px;
    font-weight: 500;
    line-height: 17px;
  }

  .result-cancel-button {
    color: ${COLORS.spanishBlue};
    cursor: pointer;
    font-size: 16px;
    line-height: 17px;
    text-decoration: underline;
  }
`

const StyledPopupSelectDate = styled.div.attrs((props: {
  isShown?: boolean
}) => props)`
  background-color: ${COLORS.white};
  display: ${({ isShown }) => isShown ? "block" : "none"};
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  .popup-calendar__container {
    position: relative;
    overflow: hidden;
    padding: 10px;
  }

  .popup-calendar__title {
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    max-width: 400px;

    h4 {
      font-family: ${FONTS.manrope};
      font-size: 18px;
      font-weight: 700;
      line-height: 25px;
    }

    img {
      cursor: pointer;
    }
  }

  .popup-calendar__mobile-calendar-container {
    .rmdp-shadow {
      box-shadow: none;
    }

    .rmdp-header {
      display: none;
    }

    .rmdp-wrapper,
    .rmdp-top-class,
    .rmdp-calendar {
      width: 100%;
    }

    .rmdp-day-picker  {
      flex-direction: column;
      height: calc(100vh - 250px);
      padding: 0 10px;
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .rmdp-week-day {
      color: ${COLORS.black};
    }

    .rmdp-week {
      justify-content: center;
    }

     .rmdp-week-day, .rmdp-day {
      height: 48px;
      width: 48px;
    }

    .rmdp-day-picker > div {
      margin: 0!important;
    }

    .rmdp-border-top {
      border: none;
    }
  }

  .mobile-calendar-header__title-container {
    display: flex;
    justify-content: center;
    margin: auto;
    max-width: 336px;
    width: 100%;

    & > div {
      height: 42p;
      width: 45px;

    }

    span {
      font-family: ${FONTS.manrope};
      font-size: 16px;
      line-height: 24px;
    }

    .rmdp-day span {
      color: ${COLORS.eerieBlack}
    }
  }

  .popup-calendar__result-container {
    height: 250px;
    position: relative;

    & > div {
      position: absolute;
      top: 60px;
    }

    div {
      border-radius: 5px!important;
    }

    .result-dates {
      color: ${COLORS.black};
    }

    span {
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
    }
  }

  .rmdp-day.rmdp-today span {
    color: ${COLORS.black};
  }

  .rmdp-day.rmdp-today span,
  .rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) span:hover {
    background-color: transparent;
  }

  .rmdp-range {
    box-shadow: none;
  }

  .rmdp-range.start,
  .rmdp-range.end {
    border-radius: 0px;
  }

  .rmdp-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    max-width: 336px;
    width: 100%;
  }

  .rmdp-full-year {
    display: flex!important;
    flex-direction: column;
  }

  .rmdp-day-picker.rmdp-full-year > div > div:nth-child(2) {
    display: none!important;
  }

  .rmdp-month-name {
    color: ${COLORS.outerSpace};
    font-size: 14px;
    font-weight: 500;
    display: flex;
    margin: 3px 15px;
  }

  .rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) span:hover {
    color: ${COLORS.black};
    background-color: ${COLORS.persianGreen};
  }

  .rmdp-range.start, .rmdp-range.end, .rmdp-range-hover {
    color: ${COLORS.black};
    background-color: ${COLORS.persianGreen}!important;
    border-radius: 0!important;
  }

  .rmdp-range.start,
  .rmdp-range.end,
  .rmdp-range.start > span  {
    background-color: ${COLORS.persianGreen}!important;
  }

  .rmdp-range.start ~ .rmdp-range{
    background-color: ${COLORS.areoBlue};
    box-shadow: none;
  }

  .rmdp-range, .rmdp-range span {
    background-color: ${COLORS.areoBlue};
    box-shadow: none;
    border-radius: 0!important;
    color: ${COLORS.black}!important;
  }
`;

export {
  StyledSelectDate,
  ResultContainer,
  StyledPopupSelectDate,
}
