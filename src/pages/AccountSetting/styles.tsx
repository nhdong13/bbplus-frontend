import styled from "styled-components";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import { BREAKPOINTS } from "@/utils/breakpoints";

const StyledAccountSetting = styled.div`  
  margin-bottom: 59px;
  @media ${BREAKPOINTS.laptop} {
    margin-bottom: 0;
    margin-top: 30px;
  }
`

const AccountSettingContainer = styled.div`
  margin: auto;
  #account-setting-section {
    max-width: 1400px;
    margin: auto;
    .table-desktop {
      display: block;
    }
    .table-mobile {
      display: none;
    }
    @media ${BREAKPOINTS.laptop} {
      .table-desktop {
        display: none;
      }
      .table-mobile {
        display: block;
      }
    }
    @media ${BREAKPOINTS.laptop} {
      max-width: 768px;
      padding: 20px;
      border-radius: 5px;
      border: 2px solid ${COLORS.parkinglotGray};
      margin: 15px;
      h2 {
        font-size: 16px;
        line-height: 30px;
      }
      .step-1 {
        display: none;
      }
      .step-show-label {
        .input-container,.select-container  {
          width: 100%;
        }
        label {
          display: block;
          font-weight: 700;
          font-size: 12px;
        }
        .legend-item {
          display: grid;
        }
      }
      .step-user {
        .legend-box-container {
          margin-bottom: 10px;
        }     
      }
     
    }
    .fill-information-title {
      font-weight: 400;
      font-size: 18px;
      line-height: 35px;
      margin-bottom: 49px;
      @media ${BREAKPOINTS.laptop} {
        font-size: 12px; 
        line-height: 16px;
      }
    }

    .body-section {
      @media ${BREAKPOINTS.laptop} {
        margin-top: 20px;
      }
      .body-section-item {
        display: flex;
        &:last-child {
          margin-top: 78px;
          margin-bottom: 28px;
          @media ${BREAKPOINTS.laptop} {
            margin-bottom: 0;
          }
        }
        @media ${BREAKPOINTS.laptop} {
          display: block;
        }
      }
    }
    .legenbox-right {
      margin-left: 28px;
      padding-right: 28px;
      .currency {
        width: 286px;
      }
      @media ${BREAKPOINTS.laptop} {
        margin-left: 0;
        margin-top: 28px;
        padding-right: 0;
        padding-bottom: 20px;
        .currency {
          width: 100%;
        }
      }
    }
    .w-100{
      width: 100% !important;
      @media ${BREAKPOINTS.laptop} {
        width: auto!important;;
      }
    }
  }
`;

const BreadcrumbContainer = styled.div`
  width: 100%;
  height: 49px;
  background-color: ${COLORS.purple};
  @media ${BREAKPOINTS.laptop} {
    display: none;
  }
`;

const BreadcrumbBody = styled.div`
  max-width: 1400px;
  height: 100%;
  margin: auto;
  font-family: ${FONTS.manropeBold};
  line-height: 40px;
  display: flex;
  align-items: center;

  @media ${BREAKPOINTS.laptop} {
    max-width: 768px;
    padding: 0 15px;
  }
`;
const BreadcrumbItem = styled.div.attrs((props: {
  activeColor?: boolean
}) => props)`
  color: ${(props) => props.activeColor ? COLORS.blueRibbon : COLORS.black};
  font-size: 17px;
  cursor: pointer;
  &:not(:first-child) {
    &:before {
      content: "  >";
      padding: 8px;
    }
  }
`;

const LegendBox = styled.fieldset`
  border: 1px solid ${COLORS.black};
  padding: 28px 35px;
  width: 50%;
  height: fit-content;
  @media ${BREAKPOINTS.laptop} {
    width: auto;
    border: 0;
    padding: 0;
  }
  .contact-title {
    font-family: ${FONTS.manropeBold};
    font-weight: normal;
    font-size: 20px;
    line-height: 35px;
    margin-top: 10px;
    margin-bottom: 8px;
    text-align: left;
    color: ${COLORS.black};
    @media ${BREAKPOINTS.laptop} {
      font-size: 12px;
      line-height: 0;
    }
  }
  .user-title { 
    font-size: 18px;
    font-family: ${FONTS.manropeBold};
    margin-bottom: 20px;
    @media ${BREAKPOINTS.laptop} {
      font-size: 12px;
      font-weight: 400;
      margin-bottom: 10px;
    }
  }
  .red-start {
    color: red;
  }
`;

const LabelText = styled.label`
  font-family: ${FONTS.manropeRegular};
  font-weight: normal;
  font-size: 16px;
  text-align: left;
  color: ${COLORS.black};
  @media ${BREAKPOINTS.laptop} {
    display: none;
  }
`;

const LegendTitle = styled.legend`
  font-family: ${FONTS.montserratRegular};
  font-weight: normal;
  font-size: 23px;
  line-height: 27px;
  text-align: left;
  color: #005cff;
  padding-right: 40px;
  padding-left: 5px;
  @media ${BREAKPOINTS.laptop} {
    color: #0079CF;
    font-size: 12px;
    line-height: 0;
    margin-bottom: 20px;
    font-family: ${FONTS.manrope};
  }
  
`;

const LegendItem = styled.div.attrs((props: { isError?: boolean }) => props)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => (props.isError ? "0px" : "18px")};
  @media ${BREAKPOINTS.laptop} {
    margin-bottom: 0;
    display: unset;
  }
`;

const LegendField = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 10px;
  width: auto;
`;

const TextErrorInput = styled.p`
  font-family: ${FONTS.manropeRegular};
  font-size: 14px;
  color: ${COLORS.red};
  display: flex;
  justify-content: flex-end;
  padding-right: 12px;
  margin-bottom: 14px;
  margin-top: 5px;
  @media ${BREAKPOINTS.laptop} {
    font-size: 10px;
    padding-right: 70px;
  }
`;

const AccountSettingHeader = styled.div`
  margin-top: 61px;
  @media ${BREAKPOINTS.laptop} {
    margin-top: 0;
  }
  h2 {
    margin-bottom: 24px;
  }
`;
const NextStepBox = styled.div`
  padding-left: 70px;
  width: 50%;
  margin-left: 28px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  @media ${BREAKPOINTS.laptop} {
    margin-left: 0;
    margin-top: 20px;
    padding: 0;
    width: 100%;
  }
`;

const NextStepBoxPre = styled.div`
  margin-top: 190px;
  margin-bottom: 100px;
  display: flex;
  justify-content: flex-end;
  @media ${BREAKPOINTS.laptop} {
    margin: 0;
  }
`
const ButtonNextStep = styled.div`
  background: ${COLORS.gradient1};
  width: 207px;
  height: 64px;
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${COLORS.white};
  @media ${BREAKPOINTS.laptop} {
    width: 124px;
    height: 36px;
    border-radius: 5px;
    font-size: 12px;
  }
`;

const StyledPlatformSetting = styled.div`
  .react-tel-input {
    border: 2px solid ${COLORS.black};
    border-radius: 5px;
    width: 339px;

    /* input {
      height: 68px;
      width: 100%;
      box-sizing: border-box;
      padding: 28px;
      color: #000000;
      font-family: Manrope;
      font-size: 16px;
      border: none;
    } */
  }

  .flag-dropdown  {
    background-color: transparent;
    border: none;
  }
`

export {
  AccountSettingContainer,
  BreadcrumbContainer,
  BreadcrumbBody,
  BreadcrumbItem,
  LegendBox,
  LabelText,
  LegendTitle,
  LegendItem,
  LegendField,
  TextErrorInput,
  AccountSettingHeader,
  NextStepBox,
  NextStepBoxPre,
  ButtonNextStep,
  StyledPlatformSetting,
  StyledAccountSetting,
};
