import { BREAKPOINTS } from "@/utils/breakpoints";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import IMAGES from "@/assets/images";
import styled from "styled-components";

const AuthenticationFormContainer = styled.div.attrs(
  (props: { centralizeItems?: boolean }) => props
)`
  margin-top: 183.3px;
  margin-bottom: 419.3px;
  display: flex;
  justify-content: flex-end;
  max-width: 1400px;
  /* margin: 183.3px auto 419.3px auto; */
  padding-top: 183px;
  padding-bottom: 419px;
  margin: auto;
  font-family: ${FONTS.manrope};

  @media ${BREAKPOINTS.laptop} {
    margin: 40px auto;
    justify-content: center;
  }
  @media ${BREAKPOINTS.mobileLg} {
    display: block;
    margin: 0;
    padding: 30px 20px 15px 20px;
  }
  a {
    color: ${COLORS.linkBlue};
    cursor: pointer;
    text-decoration: none;
  }

  h2.header {
    margin-top: 14px;
  }

  .sub-header {
    p {
      margin-top: 20.2px;
    }
    p:nth-child(2) {
      color: ${COLORS.doveGray};
    }
  }

  .body {
    margin-bottom: 23px;
    @media ${BREAKPOINTS.mobileLg} {
      margin-bottom: 10px !important;
    }
    img.form-sent-success-icn {
      margin-top: 38.9px;
    }

    p.sub-text-under-form-sent-icon {
      margin-top: 42.9px;
    }

    .remember-me-n-forgot-password-container {
      margin-top: 30px;
      display: flex;
      .remember-me-container {
        margin-right: auto;
        span {
          position: absolute;
          padding-left: 10px;
        }
      }
    }
  }
  .b-reset {
    margin-bottom: 186px;
  }
  .b-updated {
    margin-bottom: 81px;
  }
  .b-your-email {
    margin-bottom: 141px;
  }

  .footer {
    p {
      margin-top: 24.6px;
    }

    p.retry-forgot-password {
      margin: 24.6px auto;
      width: 412px;
    }

    .password-conditions {
      margin-top: 17.4px;
      p {
        margin-top: 8px;
        padding-left: 36px;
        font-size: 16px;
        display: flex;
        align-items: center;
        &:first-child {
          padding-left: 0;
        }
        img {
          width: 33px;
          height: 31.5px;
          transform: translate(-40px, -7px);
          position: absolute;
        }
      }
    }
  }

  .gradient-button {
    @media ${BREAKPOINTS.mobileLg} {
      padding: 10px 30px;
      height: 20px;
      margin-top: 10px;
      span {
        font-weight: 700;
        font-size: 12px;
      }
    }
  }
`;
const AuthenticationFormWrapper = styled.div.attrs(
  (props: { centralizeItems?: boolean }) => props
)`
  background: ${COLORS.white};
  width: 586.2px;
  height: 528.2px;
  box-shadow: 0 0 11.5px rgba(0, 0, 0, 0.25);
  padding: 73.4px;
  text-align: ${(props) => (props.centralizeItems ? "center" : "")};

  @media ${BREAKPOINTS.mobileLg} {
    width: auto;
    height: auto;
    padding: 10px 20px;
    margin: 0;
    border: 2px solid ${COLORS.parkinglotGray};
    border-radius: 10px;
    box-shadow: none;

    a {
      font-size: 12px;
    }

    h2.header {
      margin-top: 10px;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
    }

    .sub-header {
      p {
        margin-top: 10px;
        font-size: 12px;
      }
      p:nth-child(2) {
        color: ${COLORS.doveGray};
      }
    }

    .body {
      img.form-sent-success-icn {
        margin-top: 12px;
        width: 70px;
        height: 70px;
      }

      p.sub-text-under-form-sent-icon {
        margin-top: 12px;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
      }

      .remember-me-n-forgot-password-container {
        margin-top: 20px;
        .remember-me-container {
          .remember-me-switcher {
            width: 16px;
            height: 16px;
            outline: 1px solid ${COLORS.parkinglotGray};
            -moz-appearance: none;
            -webkit-appearance: none;
            -o-appearance: none;
            border-radius: 3px;
          }
          span {
            font-size: 12px;
            font-weight: 400;
          }
        }
      }
    }

    .footer {
      margin-top: auto;

      p {
        margin-top: 10px;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
      }

      p.retry-forgot-password {
        margin: 10px auto;
        width: auto;
      }

      .password-conditions {
        margin-top: 10px;

        p {
          margin-top: 10px;
          padding-left: 0px;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          display: flex;

          img {
            width: 20px;
            height: 20px;
            transform: none;
            position: unset;
          }
        }
      }
    }

    .footer.lower-footer {
      transform: translateY(0);
    }
  }
`;

const AuthenticationLogoMobile = styled.div`
  background-image: url(${IMAGES.logoMobile});
  background-repeat: no-repeat;
  background-position: center;
  height: 40px;
  margin-bottom: 15px;
`;

const BackgroundAuthentication = styled.div`
  background-image: url(${IMAGES.backgroundAuthen});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  /* height: 1231px; */
`

export {
  BackgroundAuthentication,
  AuthenticationFormContainer,
  AuthenticationFormWrapper,
  AuthenticationLogoMobile,
};
