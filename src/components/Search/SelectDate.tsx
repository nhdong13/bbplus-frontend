import { StyledSelectDate, ResultContainer, StyledPopupSelectDate } from "./StyledSelectDate";
import { Calendar } from "react-multi-date-picker"
import { useEffect, useState } from "react";
import Divider from "../Layout/Divider";
import { COLORS } from "@/utils/colors";
import { GradientButton } from "../Button";
import HorizontalContainer from "../Layout/HorizontalContainer";
import moment from "moment";
import IMAGES from "@/assets/images";
import useWindowSize from "@/utils/windowResize";

interface SelectDate {
  isShown?: boolean
  getArriveDate: (n: string) => void,
  totalDates: (n: number) => void,
}
export default function SelectDate({ isShown, getArriveDate, totalDates }: SelectDate) {
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
  const [dates, setDates] = useState<any>([]);
  const [resetDates, setResetDates] = useState<boolean>(false);
  const [arriveDate, setArriveDate] = useState<string>();
  const [leavingDate, setLeavingDate] = useState<string>();
  const [showMonths, setShowMonths] = useState<number>(3);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (resetDates) {
      setDates([])
      setResetDates(false)
    }

    if (dates.length) {
      setArriveDate(dates[0].format("DD MMMM YYYY"))
      setLeavingDate(dates[1]?.format("DD MMMM YYYY"))
      getArriveDate(dates[0].format("DD MMMM YYYY"))
    }

    const diffInMs: number =
      ((new Date(leavingDate as string) as any) - (new Date(arriveDate as string) as any));
    const diffInDays: number = diffInMs / (1000 * 60 * 60 * 24);
    totalDates(diffInDays)
  }, [resetDates, dates, arriveDate, leavingDate])

  const screenWidth = useWindowSize();

  useEffect(() => {
    if (screenWidth > 1250) {
      setShowMonths(3);
    } else if (screenWidth < 1249) {
      setShowMonths(2);
    } else if (screenWidth < 768) {
      setIsMobile(true);
    }
  }, [screenWidth, showMonths, isMobile])

  return (
    <>
      {/* <StyledSelectDate isShown={screenWidth < 768 ? false : isShown}>
        <Calendar
          numberOfMonths={showMonths}
          range
          rangeHover
          weekDays={weekDays}
          minDate={new Date()}
          maxDate="30"
          format="YYYY/MM/DD"
          onChange={(dateObjects: any) => {
            setDates(dateObjects)
          }}
          value={dates}
        />
        <Divider color={COLORS.silver} width="100%" max-maxWidth="1232px" height="1px" />
        <ResultContainer>
          {dates[0] &&
            <HorizontalContainer gap="20px" alignItems="center">
              <HorizontalContainer gap="20px" className="result-dates">
                <span>{dates[0]?.format("dddd, DD MMMM YYYY")}</span>
                {dates[1] && <img src={IMAGES.iconArrowRight} />}
                <span>{dates[1]?.format("dddd, DD MMMM YYYY")}</span>
              </HorizontalContainer>
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
      </StyledSelectDate> */}
      <PopupSelectDate />
    </>
  )
}

const PopupSelectDate = () => {
  return (
    <>
      <StyledPopupSelectDate>

      </StyledPopupSelectDate>
    </>
  )
}
