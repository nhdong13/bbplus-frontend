import { BREAKPOINTS } from './../../utils/breakpoints';
import { FONTS } from '@/utils/fonts';
import { COLORS } from './../../utils/colors';
import styled from "styled-components";

const StyledSelectDate = styled.div.attrs((props: {
  isShown?: boolean
}) => props)`
  background-color: ${COLORS.white};
  border-radius: 5px;
  box-shadow: 4px 3px 18px -5px rgba(0,0,0,0.75);;
  max-width: 1232px;
  width: 100%;

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

const StyledPopupSelectDate = styled.div`
  background-color: ${COLORS.white};
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

export {
  StyledSelectDate,
  ResultContainer,
  StyledPopupSelectDate,
}
