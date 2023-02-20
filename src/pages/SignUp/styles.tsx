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

    .step-bullet-column {
      margin-left: 18.7px;
      margin-top: 48.6px;
      width: 64px;

      .step-bullet {
        width: 64px;
        line-height: 64px;
        border-radius: 50%;
        background: ${COLORS.gradient1};
        font-size: 20px;
        font-family: ${FONTS.montserrat};
        position: relative;
        z-index: 99;
      }

      svg {
        overflow: initial;
      }
    }

    .form-container {
      width: 100%;
      text-align: left;
      margin: 60.7px 180px 72px 35px;
      .flex {
        display: flex;
        gap: 12.5px;
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

      .step-2, .step-3 {
        margin-top: 55px;
      }

      .form-confirmation {
        margin-top: 48px;
        input {
          width: 23.12px;height:20px;
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

  
  & > div {
    @media ${BREAKPOINTS.laptop} {
      padding: 10px;
    }
  }

  a {
    color: ${COLORS.linkBlue};
    text-decoration: none;
  }

  h2.header {
    margin-top: 10px;
  }

  .sub-header p {
    margin-top: 25px;
  }

  .sub-header p:nth-child(2) {
    color: ${COLORS.doveGray};
  }

  .body {
    height: 100%;
    .remember-me-n-forgot-password-container {
      margin-top: 30px;
      display: flex;
      .remember-me-container {
        margin-right: auto;
        span {
          position: absolute;
          padding-left: 10px;
          transform: translateY(7px);
        }
      }
    }
  }

  .footer {
    margin-top: auto;
    p {
      margin-top: 25px;
    }
  }
`


export {
  SignUpFormContainer
}
