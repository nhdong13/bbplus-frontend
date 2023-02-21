import styled from "styled-components";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import { BREAKPOINTS } from "@/utils/breakpoints";

const AccountSettingContainer = styled.div`
  /* width: 1920; */
  margin: auto;

  #account-setting-section {
    max-width: 1400px;
    margin: auto;
    @media ${BREAKPOINTS.laptop}  {
      max-width: 768px;
      padding: 15px;
    }
    .fill-information-title {
      font-family: ${FONTS.manrope};
      font-weight: 400;
      font-size: 18px;
      line-height: 35px;
    }

    .body-section {
      margin-top: 50px;
      .body-section-item{
        display: flex;
        &:last-child{
          margin-top: 28px;
          margin-bottom: 28px;
        }
        @media ${BREAKPOINTS.laptop}  {
          display: grid;
        }
      }
    }
    .legenbox-right{
      margin-left: 28px;
      padding-right: 28px;
      @media ${BREAKPOINTS.laptop}  {
        margin-left: 0;
        margin-top: 28px;
        padding-right: 35px;
        padding-bottom: 28px;
      }
    }
    
  }
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const BreadcrumbContainer = styled.div`
  width: 100%;
  height: 49px;
  background-color: ${COLORS.periwinkleapprox};
`;

const BreadcrumbBody = styled.div`
  max-width: 1400px;
  height: 100%;
  margin: auto;
  font-size: 17px;
  font-family: ${FONTS.manrope};
  line-height: 40px;
  font-weight: 500;

  display: flex;
  align-items: center;

  .company-information {
    color: ${COLORS.blueRibbon};
  }

  div + div:before {
    padding: 8px;
    color: ${COLORS.black};
    content: "  >";
  }
  @media ${BREAKPOINTS.laptop}  {
    max-width: 768px;
    padding: 0 15px;
  }
`;

const Input = styled.input`
  width: 339px;
  height: 68px;
  padding: 0px 16px;

  background: ${COLORS.white};
  border: 2px solid #000;
  border-radius: 8px;

  font-weight: normal;
  font-size: 18px;
  text-align: left;
  color: #000;
`;

const TitleInput = styled.div`
  font-family: ${FONTS.manrope};
  font-weight: normal;
  font-size: 16px;
  line-height: 88px;
  text-align: left;
  color: #000;
`;

const LegendBox = styled.fieldset`
  border: 1px solid #000;
  padding: 0 35px;
  width: 50%;
  @media ${BREAKPOINTS.laptop}  {
    width: auto;
  }
  .contact-title {
    /* font-family: ${FONTS.manropeBold}; */
    font-weight: normal;
    font-size: 20px;
    line-height: 35px;
    margin-top: 9px;
    text-align: left;
    color: #000;
  }
  .red-start {
    color: red;
  }
`;


const LabelText = styled.label`
  /* font-family: ${FONTS.manropeRegular}; */
  font-weight: normal;
  font-size: 16px;
  text-align: left;
  color: #000;
`;

const LegendText = styled.legend`
  /* font-family: ${FONTS.montserratRegular}; */
  font-weight: normal;
  font-size: 23px;
  line-height: 27px;
  text-align: left;
  color: #005cff;
  padding-right: 40px;
`;

const InputDetails = styled.legend`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 18px;
`;

const AccountSettingHeader = styled.div`
  margin-top: 50px;
`;
const NextStepBox = styled.div`
  padding: 0 35px;
  width: 50%;
  margin-left: 28px;
  position: relative;
  @media ${BREAKPOINTS.laptop}  {
    margin-left: 0;
    margin-top: 28px;
    padding:0;
  }
`;

const ButtonNextStep = styled.div`
  position: absolute;
  right: 0;
  bottom:0;
  background: ${COLORS.gradient1};
  width: 207px;
  height: 64px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${COLORS.white};
  @media ${BREAKPOINTS.laptop}  {
    position: relative;
  }
`


export {
  AccountSettingContainer,
  BreadcrumbContainer,
  BreadcrumbBody,
  Input,
  TitleInput,
  InputSection,
  LegendBox,
  LabelText,
  LegendText,
  InputDetails,
  AccountSettingHeader,
  NextStepBox,
  ButtonNextStep
};