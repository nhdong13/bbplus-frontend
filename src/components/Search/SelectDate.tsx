import { StyledSelectDate, ResultContainer } from "./StyledSelectDate";
import { Calendar } from "react-multi-date-picker"
import { useEffect, useState } from "react";
import Divider from "../Layout/Divider";
import { COLORS } from "@/utils/colors";
import { GradientButton } from "../Button";
import HorizontalContainer from "../Layout/HorizontalContainer";

interface SelectDate {
  isShown?: boolean
}
export default function SelectDate({ isShown }: SelectDate) {
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
  const [dates, setDates] = useState<any>([]);
  const [resetDates, setResetDates] = useState<boolean>(false);

  useEffect(() => {
    if (resetDates) {
      setDates([])
      setResetDates(false)
    }
  }, [resetDates])

  return (
    <>
      <StyledSelectDate isShown={isShown}>
        <Calendar
          numberOfMonths={3}
          range
          rangeHover
          weekDays={weekDays}
          minDate={new Date()}
          format="YYYY/MM/DD"
          onChange={(dateObjects: any) => {
            setDates(dateObjects)
          }}
          value={dates}
        />
        <Divider color={COLORS.silver} width="100%" max-maxWidth="1232px" height="1px" />
        <ResultContainer>
          {dates[0] &&
            <HorizontalContainer gap="20px">
              <span className="result-dates">
                {dates[0]?.format("dddd, DD MMMM YYYY")} {`-->`} {dates[1]?.format("dddd, DD MMMM YYYY")}
              </span>
              <div
                className="result-cancel-button"
                onClick={() => setResetDates(true)}
              >
                <span>Cancel</span>
              </div>
            </HorizontalContainer>
          }
          <GradientButton
            color={COLORS.gradient1}
            text="Apply"
            isSelected={true}
            maxWidth="162px"
            fontSize="16px"
            height="60px"
            width="100%"
            textPadding="4px 33px" />
        </ResultContainer>
      </StyledSelectDate>
    </>
  )
}
