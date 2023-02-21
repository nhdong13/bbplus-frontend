import { BREAKPOINTS } from "@/utils/breakpoints";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import styled from "styled-components";

const AuthenticationFormContainer = styled.div.attrs(
  (props: { centralizeItems?: boolean }) => props
)`
  background: ${COLORS.white};
  width: 586.2px;
  height: 528.2px;
  margin: 183.3px 286.7px 419.3px 900.3px;
  box-shadow: 0 0 11.5px rgba(0, 0, 0, 0.25);
  padding: 73.4px;
  display: flex;
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  -ms-flex-direction: column !important;
  flex-direction: column !important;
  text-align: ${(props) => (props.centralizeItems ? "center" : "")};
 
  @media ${BREAKPOINTS.desktopLg} {
    margin-left:800.3px;
  }
  @media ${BREAKPOINTS.desktopSm} {
    margin-left:687.3px;
  }
  @media ${BREAKPOINTS.laptop} {
    margin: 40px auto;
  }
 
  a {
    color: ${COLORS.linkBlue};
    text-decoration: none;
  }

  h2.header {
    margin-top: 14px;
  }

  .sub-header {
    font-family: ${FONTS.manrope};
    p {
      margin-top: 20.2px;
    }
    p:nth-child(2) {
      color: ${COLORS.doveGray};
    }
  }

  .body {
    height: 100%;

    img.form-sent-success-icn {
      margin-top: 38.9px;
    }

    p.sub-text-under-form-sent-icon {
      margin-top: 42.9px;
    }

    .remember-me-n-forgot-password-container {
      margin-top: 30.9px;
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

  .footer {
    margin-top: auto;

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
        img {
          width: 33px;
          height: 31.5px;
          transform: translate(-40px, -7px);
          position: absolute;
        }
      }
    }
  }

  .footer.lower-footer {
    transform: translateY(25px);
  }

  @media ${BREAKPOINTS.mobileLg} {
    width: auto;
    height: auto;
    padding: 10px 20px;
    margin: 20px;
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
      font-family: ${FONTS.manrope};

      img.form-sent-success-icn {
        margin-top: 12px;
        width: 70px;
        height: 70px;
      }

      p.sub-text-under-form-sent-icon {
        margin-top: 12px;
        font-family: ${FONTS.manrope};
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
        font-family: ${FONTS.manrope};
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

export { AuthenticationFormContainer };
