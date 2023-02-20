import { BREAKPOINTS } from "@/utils/breakpoints";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import styled from "styled-components";

const SignUpFormContainer = styled.div`
  background: ${COLORS.white};
  color: ${COLORS.white};
  margin: 105px auto;
  box-shadow: 0 0 11.5px rgba(0, 0, 0, 0.25);
  display: flex;
  width: 1440px;
  height: 1262px;
  text-align: center;

  .left-side-column {
    background: ${COLORS.cyprus};
    width: 369.84px;
    padding: 81px;

    .registration-detail {
      width: 287px;
      &:nth-child(-n + 2) {
        margin-bottom: 167.1px;
      }

      .icon-container {
        background: ${COLORS.white};
        width: 96px;
        height: 96px;
        margin: auto;
        border-radius: 50%;
        img {
          transform: translateY(28px);
        }
      }

      .header {
        font-size: 20px;
        margin-top: 17.2px;
      }

      p {
        margin-top: 8px;
      }
    }
  }

  .right-side-column {
    display: flex;
    height: 100%;
    width: 100%;
    color: ${COLORS.black};

    .form-container {
      width: 100%;
      text-align: left;
      margin: 60.7px 180px 72px 18.7px;

      .flex {
        display: flex;
        gap: 12.5px;
      }

      .sub-header {
        display: flex;
        align-items: baseline;

        .step-bullet {
          width: 64px;
          line-height: 64px;
          border-radius: 50%;
          background: ${COLORS.gradient1};
          font-size: 20px;
          font-family: ${FONTS.montserrat};
          position: relative;
          z-index: 99;
          color: ${COLORS.white};
          text-align: center;
        }

        svg {
          overflow: initial;
          position: absolute;
        }

        h2 {
          padding-left: 35px;
        }
      }

      .form-input-fields {
        padding-left: 99px;
      }

      .step-1 .registrationid-input {
        width: calc(100% - 49.4px);
        height: 84px;
        line-height: 86px;
        text-align: left;
        padding: 0 24.7px;
        margin-top: 21.6px;
        background: ${COLORS.whiteFligt};
        border: 2px dashed ${COLORS.black};
        border-radius: 4.42px;
        input {
          text-align-last: right;
        }
      }

      .step-2,
      .step-3 {
        margin-top: 55px;
      }

      .form-confirmation {
        margin-top: 48px;
        padding-left: 99px;
        input {
          width: 23.12px;
          height: 20px;
        }
        & > span {
          margin-left: 20px;
        }
        .submit-btn {
          float: right;
        }
      }
    }
  }

  a {
    color: ${COLORS.linkBlue};
    text-decoration: none;
  }

  @media ${BREAKPOINTS.mobileLg} {
    width: 350px;
    height: auto;
    margin: 20px;
    box-shadow: none;
    border: 2px solid ${COLORS.parkinglotGray};
    border-radius: 10px;
    padding: 20px;

    .left-side-column {
      display: none;
    }

    .right-side-column {
      .form-container {
        width: 100%;
        text-align: left;
        margin: 0;

        .flex {
          display: block;
        }

        .sub-header {
          .step-bullet {
            width: 47px;
            line-height: 47px;
            font-size: 24px;
            font-family: ${FONTS.manrope};
            font-weight: 700;
            z-index: 99;
          }

          svg {
            overflow: initial;
            position: absolute;
            display: none;
          }

          h2 {
            padding-left: 10px;
            font-family: ${FONTS.manrope};
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
          }
        }

        .form-input-fields {
          padding-left: 0;
        }

        .step-1 .registrationid-input {
          width: 288px;
          height: 32px;
          text-align: left;
          padding: 7px 31px;
          margin-top: 10px;
          background: ${COLORS.white};
          border: 1px solid ${COLORS.parkinglotGray};
          border-radius: 3px;
          font-family: ${FONTS.manrope};
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;

          span {
            width: 150px;
            display: block;
          }
          input {
            display: none;
          }
        }

        .step-2,
        .step-3 {
          margin-top: 30px;
        }

        .form-confirmation {
          margin-top: 30px;
          padding-left: 0;
          input {
            width: 16px;
            height: 16px;
          }
          & > span {
            margin-left: 10px;
            font-family: ${FONTS.manrope};
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            vertical-align: text-top;
          }
          .submit-btn {
            float: right;
          }
        }
      }
    }
  }
`;

export { SignUpFormContainer };
