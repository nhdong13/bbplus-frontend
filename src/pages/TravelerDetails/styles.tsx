
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import styled from "styled-components";

const BookingProgressBar = styled.div`
  width: 100%;
  display: flex;
  padding: 0 100px;

  .progress-step {
    width: 100%;

    div {
      width: fit-content;
      text-align: -webkit-center;

      .progress-step-text {
        font-family: ${FONTS.manropeBold};
        font-size: 16px;
      }

      .progress-step-point {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin-top: 13.4px;
      }

      svg {
        overflow: initial;
        position: absolute;
        z-index: -1;
      }
    }
  }

  .progress-step.passed-point {
    .progress-step-text {
      color: ${COLORS.blueRibbon};
    }
    .progress-step-point {
      background: ${COLORS.cyprus};
    }
    svg line {
      stroke: ${COLORS.anakiwa};
    }
  }
  .progress-step.ongoing-point {
    .progress-step-text {
      color: ${COLORS.blueRibbon};
    }
    .progress-step-point {
      background: ${COLORS.anakiwa};
      border: 5px solid ${COLORS.cyprus};
      width: 15px;
      height: 15px;
    }
    svg line {
      stroke: ${COLORS.anakiwa};
    }
  }
  .progress-step.unpassed-point {
    .progress-step-text {
      color: ${COLORS.asexualGrey};
    }
    .progress-step-point {
      background: ${COLORS.asexualGrey};
    }
    svg line {
      stroke: ${COLORS.asexualGrey};
    }
  }
`;

const TravelerDetailsFormContainer = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: space-evenly;
  margin-top: 25px;
  gap: 49px;

  .detail-form {
    width: 915px;

    .other-details,
    .payment-information,
    .important-information {
      display: flex;
      flex-direction: column;
      margin-top: 33px;
      width: 835px;
      background: ${COLORS.white};
      border: 0.5px solid ${COLORS.black};
      border-radius: 4px;
      padding: 26px 40px;

      p {
        font-size: 20px;
        margin-bottom: 23px;
        span.image {
          margin-left: 73px;
        }
      }
      .input-container {
        display: grid;
      }

      .input-container p {
        font-size: 16px;
      }
      .input-container span {
        margin-bottom: 13.4px;
      }

      .code-container {
        display: flex;
        margin-bottom: 50px;
        p {
          margin-bottom: 13.4px;
        }
        & > div {
          width: 33%;
        }
      }
    }

    .payment-information,
    .important-information {
      margin-bottom: 44px;

      p {
        margin-bottom: 15px;
      }

      .additional-info,
      .line-info {
        display: flex;
        span {
          margin-left: 29px;
          font-size: 16px;
          display: flex;
          align-items: center;
          padding-left: 36px;
          line-height: 32px;
          &:first-child {
            margin-left: 0;
          }
          img {
            width: 33px;
            height: 31.5px;
            transform: translate(-36px, 0px);
            position: absolute;
          }
          p {
            font-size: 16px;
            margin-bottom: 0;
          }
        }
        a {
          text-decoration: none;
          color: ${COLORS.blueRibbon};
        }
      }

      .first-line-container,
      .second-line-container {
        display: flex;
        margin-bottom: 28px;
        p {
          margin-bottom: 13.4px;
        }
        & > div:nth-child(2) {
          margin-left: 30px;
        }
      }
    }

    .important-information {
      .payment-btn {
        margin: 20px 0 15px 8px;
        .gradient-button {
          box-sizing: border-box;
        }
      }
    }
  }

  .trip-summary {
    width: 451px;
    .section {
      display: block;
      font-weight: bold;
      font-size: 20px;
      text-align: left;
    }

    .divider {
      border: 0.5px dashed ${COLORS.smogray};
      /* margin-top: 30px; */
    }

    .total-price-container {
      width: calc(100% - 76px);
      background: ${COLORS.cyprus};
      padding: 30px 40px 21px 36px;
      color: ${COLORS.white};
      text-align: center;

      p:first-child,
      p:nth-child(4) {
        font-size: 20px;
        font-weight: bold;
      }
      p.total-price-value {
        font-size: 25px;
        font-family: ${FONTS.manropeBold};
        margin-top: 22px;
      }
      p:nth-child(3) {
        color: ${COLORS.parkinglotGray};
        font-size: 17px;
      }

      .price-details {
        width: 100%;
        p {
          width: 100%;
          font-weight: bold;
          font-size: 16px;
        }
      }
      .line {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
        p {
          text-align: left;
        }
        .icon {
          margin-left: 4px;
          width: fit-content;
          height: fit-content;
          display: inline-block;
          vertical-align: middle;
          cursor: pointer;
          svg {
            width: 26px;
            height: 26px;
          }
        }
      }
      .last {
        padding-bottom: 0;
      }
      p.note {
        font-size: 14px;
        font-weight: 300;
        text-align: left;
        font-style: italic;
        margin-bottom: 15px;
      }
      .checkbox-group {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        gap: 12px;
        align-items: center;
        .MuiButtonBase-root {
          width: 18px;
          height: 18px;
          padding: 0;
          background: linear-gradient(#fff, #fff) padding-box,
            ${COLORS.gradient2};
          border-radius: 6px;
          border: 2px solid transparent;
        }
        .MuiCheckbox-root {
          .MuiSvgIcon-root {
            display: none;
          }
        }
        .Mui-checked {
          .MuiSvgIcon-root {
            display: block;
            color: rgba(0, 159, 199, 1);
          }
        }
        .MuiTypography-root {
          font-family: Manrope;
          margin-left: 8px;
        }
        .MuiFormControlLabel-root {
          margin: 0;
        }
      }
      .action-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 28px;
        .btn {
          border-radius: 8px;
        }
        .btn span {
          padding: 0;
        }
      }
    }

    .accommodation-container {
      width: calc(100% - 64px);
      margin-top: 23px;
      background: ${COLORS.lightGray};
      padding: 29px 32px;
      padding-bottom: 38px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

      .divider {
        margin: 28px 0;
      }

      a {
        text-decoration: none;
        color: ${COLORS.blueRibbon};
      }

      p {
        font-size: 20px;
        display: flex;
        margin-top: 17px;
        span {
          font-size: 16px;
          a {
            padding-left: 16px;
          }
        }
        span:first-child {
          width: 100px;
        }
      }

      p.sub-header {
        margin-top: 40px;
        &:first-child {
          margin-top: 0;
        }
      }
      span.sub-header {
        font-weight: bold;
        font-size: 20px;
        line-height: 20px;
      }
    }
  }
`;

const TravelerDetailsPageContainer = styled.div`
  width: 1440px;
  padding: 50px 0;
  margin: auto;
`;

export {
  BookingProgressBar,
  TravelerDetailsFormContainer,
  TravelerDetailsPageContainer,
};
