import { LegendField } from "@/pages/AccountSetting/styles";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import styled from "styled-components";
import { FormInput } from "../FormInput";
import Select from "../Select";

const LegendItem = styled.div.attrs((props: { isError?: boolean }) => props)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => (props.isError ? "0px" : "18px")};
  width: 100%;

  input:focus {
    outline: none;
  }

  .legend-box-container {
    display: flex;
    flex-direction: row;
    gap: 13px;
  }
`;

const LabelText = styled.label`
  font-family: ${FONTS.manropeRegular};
  font-weight: normal;
  font-size: 16px;
  text-align: left;
  color: ${COLORS.black};
`;

interface ILegendBox {
  legendBoxTitle: string,
  formInputLabel?: string,
  hasPhoneInput?: boolean
  hasSelectDropDown?: boolean
  hasFormInput?: boolean
  hasCheckBox?: boolean
  formInputWidth?: string
}

export default function LegendComboBox({
  legendBoxTitle,
  formInputLabel,
  hasPhoneInput,
  hasSelectDropDown,
  hasFormInput,
  hasCheckBox,
  formInputWidth
}: ILegendBox) {
  return (
    <LegendItem>
      <LabelText>{legendBoxTitle}</LabelText>
      <div className="legend-box-container">
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
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="" />
          </FormGroup>
        }
      </div>
    </LegendItem>
  )
}
