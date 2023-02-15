import { FONTS } from '@/utils/fonts';
import { COLORS } from './../../utils/colors';
import styled from "styled-components";

const StyledSelectDate = styled.div`
  background-color: ${COLORS.white};
  max-width: 1232px;
  width: 100%;

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
    padding: 0 20px;
    max-width: 1192px;
    margin: auto;
  }

  .rmdp-day-picker {
    justify-content: space-evenly;
    gap: 125px;
    max-width: 1140px;
    margin: auto;

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

  .rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) span:hover {
    color: ${COLORS.white};
    background-color: ${COLORS.summerGreen};
    border-radius: 0px;
  }

  .rmdp-range, .rmdp-range-hover {
    background-color: ${COLORS.summerGreen};
  }

  .rmdp-day.rmdp-range.start,
  .rmdp-day.rmdp-range.end,
  .rmdp-range-hover.end{
    border-radius: 0px;
  }
`

const ResultContainer = styled.div``

export {
  StyledSelectDate,
  ResultContainer,
}
