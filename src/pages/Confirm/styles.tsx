import { COLORS } from "@/utils/colors";
import { BREAKPOINTS } from "@/utils/breakpoints";
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
      padding: 0 107.5px;
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

  @media ${BREAKPOINTS.mobileLg} {
    padding: 15px 0px;

    h3 {
      font-size: 18px;
    }

    .sub-header {
      font-size: 16px;
    }

    .group-btn {
      margin: 2px 0 20px 0;
      width: 100%;
      display: flex;
      gap: 10px;

      .btn {
        padding: 0;
        border-radius: 5px;
        height: 39px;
        width: 100%;
        margin: 0;
        span {
          font-size: 14px;
        }
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
      padding: 0px 24px;
      span {
        padding: 0;
      }

      @media ${BREAKPOINTS.tablet} {
        border-radius: 5px;
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

  @media ${BREAKPOINTS.mobileLg} {
    padding: 5px 0px;
    margin-top: 0;
    border: none;

    .booking-details {
      flex-direction: column;
      font-size: 16px;

      & > div {
        span {
          padding-bottom: 3px;
        }

        span:not(:last-child):not(.sub-header) {
          padding-bottom: 33px;
        }

        .sub-header {
          font-size: 18px;
          padding-bottom: 20px;
          padding-top: 20px;
        }
      }
    }

    .label {
      font-size: 14px;
    }

    .big-label {
      font-size: 16px;
    }

    .booking-summary {
      font-size: 16px;

      .sub-header {
        font-size: 18px;
        padding-top: 10px;
        padding-bottom: 20px;
      }

      .summary {
        display: flex;
        flex-direction: column;

        > div {
          margin-bottom: 20px;

          span {
            margin-bottom: 10px;
          }

          span:not(:first-child) {
            padding-bottom: 0;
          }

          .taxes {
            font-size: 14px;
          }

          .agency-markup {
            font-size: 14px;

            span {
              padding: 0;
            }
          }

          > div {
            margin-bottom: 10px;
            padding-bottom: 0;
          }

          .small-text {
            font-size: 14px;
          }

          .big-booking-label {
            font-size: 16px;
          }
        }

        >:last-child {
          align-items: start;
        }
      }
    }

    .booking-itinerary-details, .booking-note, .hotel-rules {
      .sub-header {
        font-size: 18px;
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }

    .itinerary {
      box-shadow: none;

      .form-header {
        padding: 10px;
        margin-bottom: 20px;
        margin-top: 0;

        span {
          font-size: 18px;
        }

        .btn {
          padding: 10px;
          height: auto;

          > div {
            height: auto;

            span {
              font-size: 14px;
              font-weight: 600;
            }
          }
        }
      }

      .form-information {
        padding: 0 10px 20px 10px;
        > span {
          font-size: 16px;
        }

        .line {
          font-size: 14px;
          margin-bottom: 10px;
          padding-bottom: 0;

          span {
            line-height: 19px;
          }
        }

        div:last-child {
          margin-bottom: 0px;
        }
      }

      .form-information:nth-child(2), .form-information:nth-child(3) {
        padding-bottom: 30px;
      }
    }

    .booking-note {
      font-size: 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid #E2E2E2;
      border-bottom-style: dotted;
    }

    .hotel-rules {
      .line {
        font-size: 16px;
        grid-template-columns: 50% 50%;
        padding: 0;
        margin-bottom: 33px;

        span {
          line-height: 18px;
        }

        span.label {
          font-weight: 700;
        }
      }
    }
  }
`;
