import styled from "styled-components";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import { TextField } from "@mui/material";

const AccountSettingContainer = styled.div`
  width: 1920;
  margin: auto;

  #account-setting-section {
    width: 1400px;
    margin: auto;

    .fill-information-title {
      font-family: "Manrope";
      font-weight: 400;
      font-size: 18px;
      line-height: 35px;
    }

    #body-section {
      display: flex;
      flex-direction: row;
      #body-section-1 {
        width: 50%;
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
  width: 1400px;
  height: 100%;
  margin: auto;

  font-size: 17px;
  font-family: "Manrope";
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
`;

const Input = styled.input`
  width: 305px;
  height: 68px;
  padding: 0px 16px;

  background: #fff;
  border: 2px solid #000;
  border-radius: 8px;

  font-weight: normal;
  font-size: 18px;
  text-align: left;
  color: #000;
`;

const TitleInput = styled.div`
  font-family: "Manrope";
  font-weight: normal;
  font-size: 16px;
  line-height: 88px;
  text-align: left;
  color: #000;
`;

const LegendBox = styled.fieldset`
  border: 1px solid #000;
  padding: 20px 40px;

  margin-top: 50px;

  .contact-title {
    font-family: "Manrope-Bold";
    font-weight: normal;
    font-size: 20px;
    line-height: 35px;
    text-align: left;
    color: #000;
  }
  .red-start {
    color: red;
  }
`;

const LegendBoxFinance = styled(LegendBox)`
  margin-top: 100px;
  margin-bottom: 150px;
`;

const LegendBoxLogo = styled(LegendBox)`
  margin-left: 28px;
`;

const LabelText = styled.label`
  font-family: "Manrope-Regular";
  font-weight: normal;
  font-size: 16px;
  text-align: left;
  color: #000;
`;

const LegendText = styled.legend`
  font-family: "Montserrat-Regular";
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
  LegendBoxFinance,
  AccountSettingHeader,
  LegendBoxLogo,
};
