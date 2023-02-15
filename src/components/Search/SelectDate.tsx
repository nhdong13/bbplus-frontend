import { StyledSelectDate, ResultContainer } from "./StyledSelectDate";
import { Calendar } from "react-multi-date-picker"
import { useState } from "react";
import Divider from "../Layout/Divider";
import { COLORS } from "@/utils/colors";
import { GradientButton } from "../Button";

export default function SelectDate() {
  const [values, setValues] = useState([])
  return (
    <>
      <StyledSelectDate>
        <Calendar
          numberOfMonths={3}
          disableMonthPicker
          disableYearPicker
          range
          onChange={setValues}
          rangeHover
        />

        <Divider color={COLORS.silver} width="100%" max-maxWidth="1232px" height="1px" />
        <ResultContainer>
          Mon, 13 Fed 2023
          <GradientButton
            color={COLORS.gradient1}
            text="Apply"
            isSelected={true}
            maxWidth="162px"
            fontSize="16px"
            height="60px"
            textPadding="4px 33px" />
        </ResultContainer>
      </StyledSelectDate>
    </>
  )
}
