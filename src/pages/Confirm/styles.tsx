import { COLORS } from "@/utils/colors";
import styled from "styled-components";

export const StyledConfirmationPage = styled.div`
  padding: 72px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    margin-bottom: 12px;
  }
  .group-btn {
    width: fit-content;
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
    margin-top: 52px;
    margin-left: 48px;
    .btn {
      padding: 0 64px;
      border-radius: 8px;
      span {
        padding: 0;
        font-weight: bold;
      }
    }
  }
  .mark {
    display: inline-block;
    height: fit-content;
    vertical-align: middle;
    cursor: pointer;
    svg {
      width: 24px;
      height: 24px;
      tspan {
        fill: black;
      }
      path {
        stroke: black!important;
      }
    }
  }
`;

export const Board = styled.div`
  margin-top: 48px;
  padding: 20px 48px 48px 48px;
  width: 100%;
  border: 1px solid black;
  border-radius: 4px;
  .sub-header {
    padding-bottom: 16px;
    padding-top: 20px;
    display: block;
  }
  .booking-details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 2px solid ${COLORS.platinum};
    border-bottom-style: dotted;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      span {
        padding-bottom: 8px;
      }
    }
  }
  .booking-summary {
    display: flex;
    flex-direction: column;
  }
  .summary {
    display: grid;
    grid-template-columns: 20% 60% 20%;
    padding-bottom: 12px;
    border-bottom: 2px solid ${COLORS.platinum};
    border-bottom-style: dotted;
    & > div {
      display: flex;
      flex-direction: column;
      &:last-child {
        align-items: flex-end;
      }
      span:first-child {
        margin-bottom: 12px;
      }
      span:not(:first-child),
      & > div {
        padding-bottom: 12px;
      }
    }
    .hidden {
      opacity: 0;
    }
  }
  .booking-itinerary-details {
    padding-bottom: 28px;
    border-bottom: 2px solid ${COLORS.platinum};
    border-bottom-style: dotted;
  }
  .itinerary {
    background-color: ${COLORS.lightGray};
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    .form-header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background-color: ${COLORS.cyprus};
      margin-top: 8px;
      margin-bottom: 28px;
      padding: 33px 28px;
      border-radius: 4px;
    }
    .form-information {
      padding: 0 28px 12px 28px;
      & > span {
        display: block;
        margin-bottom: 8px;
      }
    }
    .line {
      display: grid;
      grid-template-columns: min-content auto min-content;
      padding-bottom: 16px;
      span {
        width: fit-content;
        white-space: nowrap;
        line-height: 16px;
      }
      & > div {
        border-bottom: 2px solid ${COLORS.grayAf};
        border-bottom-style: dotted;
        margin: 0 12px;
      }
    }
    .btn {
      padding: 0px 20px;
      border-radius: 8px;
      span {
        padding: 0;
      }
    }
  }
  .booking-note {
    span {
      word-break: break-all;
    }
  }
  .hotel-rules {
    .line {
      display: grid;
      grid-template-columns: 13% 87%;
      padding: 2px 0;
      &:nth-child(5) {
        padding-bottom: 28px;
      }
      span {
        word-break: break-all;
        line-height: 32px;
      }
    }
  }
`;
