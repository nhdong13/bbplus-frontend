import styled from "styled-components";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import { BREAKPOINTS } from "@/utils/breakpoints";

const AccountSettingContainer = styled.div`
  margin: auto;
  #account-setting-section {
    max-width: 1400px;
    margin: auto;
    @media ${BREAKPOINTS.laptop} {
      max-width: 768px;
      padding: 15px;
    }
    .fill-information-title {
      font-weight: 400;
      font-size: 18px;
      line-height: 35px;
    }

    .body-section {
      margin-top: 50px;
      .body-section-item {
        display: flex;
        &:last-child {
          margin-top: 28px;
          margin-bottom: 28px;
        }
        @media ${BREAKPOINTS.laptop} {
          display: grid;
        }
      }
    }
    .legenbox-right {
      margin-left: 28px;
      padding-right: 28px;
      @media ${BREAKPOINTS.laptop} {
        margin-left: 0;
        margin-top: 28px;
        padding-right: 35px;
        padding-bottom: 28px;
      }
    }
  }
`;

const BreadcrumbContainer = styled.div`
  width: 100%;
  height: 49px;
  background-color: ${COLORS.purple};
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
const BreadcrumbItem = styled.div`
  color: ${COLORS.blueRibbon};
  cursor: pointer;
  &:not(:first-child) {
    color: ${COLORS.black};
    &:before {
      content: "  >";
      padding: 8px;
    }
  }
`;

const LegendBox = styled.fieldset`
  border: 1px solid ${COLORS.black};
  padding: 0 35px;
  padding-top: 28px;
  width: 50%;
  @media ${BREAKPOINTS.laptop} {
    width: auto;
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
`;

const LegendTitle = styled.legend`
  font-family: ${FONTS.montserratRegular};
  font-weight: normal;
  font-size: 23px;
  line-height: 27px;
  text-align: left;
  color: #005cff;
  padding-right: 40px;
`;

const LegendItem = styled.div.attrs((props: { isError?: boolean }) => props)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => (props.isError ? "0px" : "18px")};
`;

const LegendField = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
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
`;

const AccountSettingHeader = styled.div`
  margin-top: 48px;
`;
const NextStepBox = styled.div`
  padding: 0 35px;
  width: 50%;
  margin-left: 28px;
  position: relative;
  @media ${BREAKPOINTS.laptop} {
    margin-left: 0;
    margin-top: 28px;
    padding: 0;
  }
`;

const ButtonNextStep = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  background: ${COLORS.gradient1};
  width: 207px;
  height: 64px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${COLORS.white};
  @media ${BREAKPOINTS.laptop} {
    position: relative;
  }
`;

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
  ButtonNextStep,
};
