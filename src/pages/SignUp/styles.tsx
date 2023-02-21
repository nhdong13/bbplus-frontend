import { BREAKPOINTS } from "@/utils/breakpoints";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import IMAGES from "@/assets/images"
import styled from "styled-components";

const SignUpFormContainer = styled.div`
  background: ${COLORS.white};
  color: ${COLORS.white};
  margin: 105px auto;
  box-shadow: 0 0 11.5px rgba(0, 0, 0, 0.25);
  display: flex;
  max-width: 1440px;
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
        /* width: calc(100% - 49.4px); */
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 84px;
        line-height: 86px;
        text-align: left;
        padding: 0 24.7px;
        padding-right: 62.7px;
        margin-top: 21.6px;
        background: ${COLORS.whiteFligt};
        border: 2px dashed ${COLORS.black};
        border-radius: 4.42px;
        .btn-choose-file{
          border-radius: 2.66px;
          border: 1px solid ${COLORS.black};
          width: 136.28px;
          height: 45.81px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          @media ${BREAKPOINTS.mobileLg} {
            width: 99px;
            height: 30px;
            border: 1px solid ${COLORS.parkinglotGray};
          }
        }
      }

      .step-2,
      .step-3 {
        margin-top: 55px;
      }

      .form-confirmation {
        margin-top: 48px;
        padding-left: 99px;
        .center-div{
          display: flex;
          align-items: center;
          input{
            margin-right: 20px;
          }
        }
        .checked-robot{
          margin-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .form-check{
            width: 304.06px;
            height: 88.78px;
            padding-left: 15px;
            border:2px solid ${COLORS.black};
            border-radius: 4.5px;
            @media ${BREAKPOINTS.laptop} {
              width: 200px;
              height: 56px;
            }
            @media ${BREAKPOINTS.mobileLg} {
              border: 1px solid ${COLORS.parkinglotGray};
            }
            input{
              margin-right: 15px;
            }
          }
        }
        
        input {
          width: 23.12px;
          height: 20px;
          cursor: pointer;
        }
        & > span {
          margin-left: 20px;
        }
      }
    }
  }

  a {
    color: ${COLORS.linkBlue};
    padding-left: 5px;
    text-decoration: underline;
    cursor: pointer;
  }

  @media ${BREAKPOINTS.mobileLg} {
    width: auto;
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
          font-family: ${FONTS.manropeBold};
          @media ${BREAKPOINTS.mobileLg} {
            font-size: 12px;
            font-family: ${FONTS.manrope};
          }
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
            @media ${BREAKPOINTS.mobileLg} {
              width: 100px;
              height: 36px;
              div{
                margin-top: 0;
              }
            }
          }
        }
      }
    }
  }

  @media ${BREAKPOINTS.laptop} {
    max-width: 768px;
    .left-side-column{
      display:none;
    }
    .registrationid-input input{
      text-align-last: left;
    }
  }
  @media ${BREAKPOINTS.tablet} {
    margin: 15px;
  }
`;

const SignUpSuccessFormContainer = styled.div `
  @media ${BREAKPOINTS.mobileLg} {
    margin: 20px;
    border: 2px solid ${COLORS.parkinglotGray};
    border-radius: 10px;
  }
`
const Background = styled.div `
  background-image: url(${IMAGES.backgroundSignUpSuccess});
  /* background-position: center; */
  background-repeat: no-repeat;
  background-size: cover;
`
const Title = styled.div `
  height: 432px;
  max-width: 1400px; 
  margin: auto;
  .title-content{
    padding-top: 130px;
    font-size: 40px;
    font-family: ${FONTS.manropeBold};
    @media ${BREAKPOINTS.mobileLg} {
      padding-top: 30px;
      font-size: 16px;
      text-align: center;
    }
  }
  @media ${BREAKPOINTS.mobileLg} {
      height: 104px;
      background: #D3E2FF;
  }
  @media ${BREAKPOINTS.laptop} {
    max-width: 768px;
  }
  @media ${BREAKPOINTS.tablet} {
    padding: 0 15px;
  }
`

const Content = styled.div `
  max-width: 1400px;
  margin: 25px auto 330px auto;
  box-shadow: 0 0 11.5px rgba(0, 0, 0, 0.25);
  padding: 0px 57px;
  padding-top: 36px;
  .desktop{
    display: block;
    p:nth-child(3){
      padding-right: 178px;
    }
  }
  .mobile{
    display: none;
  }
  @media ${BREAKPOINTS.mobileLg} {
    margin: 0px;
    box-shadow: none;
    padding: 20px;
    .mobile{
      display: block;
    }
    .desktop{
      display: none;
    }
    .mb-2{
      margin-bottom: 20px;
    }
    .text-normal{
      font-size: 12px;
      font-family: ${FONTS.manrope};
    }
  }
  @media ${BREAKPOINTS.desktopSm} {
    margin: 25px;
  }
  p{
    line-height: 44.53px;
    font-size: 16px;
    margin-bottom: 31px;
    @media ${BREAKPOINTS.mobileLg} {
      line-height: 16.39px;
      font-size: 12px !important;
      margin-bottom: 0;
    }
    &:first-child{
      font-family: ${FONTS.manropeBold};
      font-size: 18px;
      margin-bottom: 31px;
      @media ${BREAKPOINTS.mobileLg} {
        margin-bottom: 5px;
      }
    }
    &:nth-child(2){
      color: ${COLORS.linkBlue};
      font-family: ${FONTS.manropeRegular};
      margin-bottom: 52px;
      @media ${BREAKPOINTS.mobileLg} {
        margin-bottom: 20px;
      }
    }
  }
`
const CenterDiv = styled.div `
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 48px;
  @media ${BREAKPOINTS.mobileLg} {
    padding-top: 0;
    padding-bottom: 0;
    justify-content: flex-start;
    div{
      max-width:100%;
      width:100%;
    }
  }
`

export { 
  SignUpFormContainer,
  SignUpSuccessFormContainer,
  Background,
  Title,
  Content,
  CenterDiv
 };
