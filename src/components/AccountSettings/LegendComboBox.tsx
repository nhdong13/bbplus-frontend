import { LegendField } from "@/pages/AccountSetting/styles";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import styled from "styled-components";
import { FormInput } from "../FormInput";
import Select from "../Select";
import { BREAKPOINTS } from "@/utils/breakpoints";
import React from "react";

const LegendItem = styled.div.attrs((props: { isError?: boolean }) => props)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => (props.isError ? "0px" : "18px")};
  width: 100%;
  @media ${BREAKPOINTS.laptop} {
    margin-bottom: 0;
    display: unset;
    .react-tel-input {
      border: 1px solid ${COLORS.silver};
      margin-top: 10px;
      input {
        height: 40px;
        padding: 0 38px;
        font-size: 12px;
        font-family: ${FONTS.manrope};
        border-radius: 3px;
      }
    }
  }

  input:focus {
    outline: none;
  }

  .legend-box-container {
    display: flex;
    flex-direction: row;
    gap: 13px;
    .form-control {
      border: 0;
      height: 68px;
    }
    @media ${BREAKPOINTS.laptop} {
      width: 100%;
      .input-container,.react-tel-input  {
        width: 100%;
        .form-control {
          height: 40px;
        }
      }
    }
  }
  .item-center {
    align-items: center;
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

interface ILegendBox {
  legendBoxTitle: string,
  formInputLabel?: string,
  hasPhoneInput?: boolean
  hasSelectDropDown?: boolean
  hasFormInput?: boolean
  hasCheckBox?: boolean
  formInputWidth?: string,
  isCheckboxMobile?: boolean
}

export default function LegendComboBox({
  legendBoxTitle,
  formInputLabel,
  hasPhoneInput,
  hasSelectDropDown,
  hasFormInput,
  hasCheckBox,
  formInputWidth,
  isCheckboxMobile
}: ILegendBox) {
  return (
    <LegendItem>
      {!isCheckboxMobile && <LabelText>{legendBoxTitle}</LabelText>}
      <div className={`legend-box-container ${isCheckboxMobile ? "item-center" : ""}`}>
        {hasPhoneInput &&
          <PhoneInput
            country={'us'}
            value='84'
            onChange={() => { }}
          />
        }
        {hasSelectDropDown &&
          <LegendField>
            <Select
              label="Percentage"
              width="147px"
              maxHeight="68px"
              marginTop="0px"
              padding="16px"
            />
          </LegendField>
        }
        {hasFormInput &&
          <FormInput
            width={formInputWidth ? formInputWidth : "339px"}
            maxHeight="68px"
            label={formInputLabel}
            marginTop="0px"
          />

        }
        {hasCheckBox &&
          <React.Fragment>
            <FormGroup style={{ width: 20 }}>
              <FormControlLabel control={<Checkbox />} label="" />
            </FormGroup>
            {isCheckboxMobile && <LabelText>{legendBoxTitle}</LabelText>}
          </React.Fragment>
        }
      </div>
    </LegendItem>
  )
}
