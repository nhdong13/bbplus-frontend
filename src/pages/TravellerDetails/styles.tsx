import IMAGES from "@/assets/images";
import { BREAKPOINTS } from "@/utils/breakpoints";
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

const TravellerDetailsFormContainer = styled.div`
  width: 100%;
  display: flex;

  .detail-form {
    width: 915px;

    .other-details, .payment-information, .important-information {
      display: flex;
      flex-direction: column;
      margin-top: 33px;
      width: 835px;
      background: ${COLORS.white};
      border: 0.5px solid ${COLORS.black};
      border-radius: 4px;
      margin-top: 25px;
      padding: 26px 40px;

      p {
        font-size: 20px;
        margin-bottom: 23px;
        span {
          margin-left: 73px;
        }
      }

      .input-container p {
        font-size: 16px;
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

    .payment-information, .important-information {
      margin-bottom: 44px;

      p {
        margin-bottom: 15px;
      }

      .additional-info, .line-info {
        display: flex;
        margin-bottom: 26px;
        span {
          margin-top: 8px;
          margin-left: 29px;
          font-size: 16px;
          display: flex;
          align-items: center;
          padding-left: 36px;
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
      }

      .first-line-container, .second-line-container {
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
        margin-bottom: 15px;
      }
    }
  }

  .trip-summary {
    width: 451px;
    margin: 25px 30px 0 49px;

    .divider {
      border: 0.5px dashed ${COLORS.smogray};
      margin-top: 30px;
    }

    .total-price-container {
      width: calc(100% - 76px);
      height: 656px;
      background: ${COLORS.cyprus};
      padding: 30px 40px 21px 36px;
      color: ${COLORS.white};
      text-align: center;

      p:first-child, p:nth-child(4) {
        font-size: 20px;
      }
      p.total-price-value {
        font-size: 25px;
        font-family: ${FONTS.manropeBold};
        margin-top: 22px;
      }
      p:nth-child(3) {
        color: ${COLORS.parkinglotGray};
      }

      .price-details {
        width: 100%;
        p {
          width: 100%;
        }
      }
    }

    .accommodation-container {
      width: calc(100% - 66px);
      height: 514px;
      margin-top: 23px;
      background: ${COLORS.lightGray};
      padding: 29px 33px;

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
    }
  }
`;

const TravellerDetailsPageContainer = styled.div`
  width: 1440px;
  padding: 50px 240px;
`;

export {
  BookingProgressBar,
  TravellerDetailsFormContainer,
  TravellerDetailsPageContainer,
};
