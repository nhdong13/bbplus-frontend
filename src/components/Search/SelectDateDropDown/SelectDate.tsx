import { StyledSelectDate, ResultContainer, StyledPopupSelectDate } from "./StyledSelectDate";
import { Calendar, DateObject } from "react-multi-date-picker"
import { useEffect, useState } from "react";
import Divider from "../../Layout/Divider";
import { COLORS } from "@/utils/colors";
import { GradientButton } from "../../Button";
import HorizontalContainer from "../../Layout/HorizontalContainer";
import IMAGES from "@/assets/images";
import useWindowSize from "@/utils/windowResize";
import { H4 } from "../../Typography";
import PopupSelectDate from "./PopupSelectedDate";



interface SelectDate {
  isShown?: boolean
  closePopup: (n: boolean) => void,
  innerRef?: any,
  initialDates: DateObject[],
  setData: any,
  totalDay?: number
}

export default function SelectDate({
  isShown,
  closePopup, innerRef, initialDates, setData,
  totalDay
}: SelectDate) {
  const weekDays: string[] = ["S", "M", "T", "W", "T", "F", "S"];
  const [dates, setDates] = useState<DateObject[]>();
  const [showMonths, setShowMonths] = useState<number>(3);
  const [isMobile, setIsMobile] = useState<boolean>(false);

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
  
  useEffect(() => {
    setDates(initialDates)
  }, [JSON.stringify(initialDates)])

  const onClickResetData = () => {
    setData([])
    setDates([])
  }
  return (
    <>

      {
        isShown && screenWidth < 768
          ?
          <PopupSelectDate
            isShown={true}
            closePopup={closePopup}
            weekDays={weekDays}
            initialDates={initialDates}
            totalDay={totalDay}
            setData={setData}
          />
          :
          <StyledSelectDate ref={innerRef} isShown={screenWidth < 768 ? false : isShown}>
            <Calendar
              numberOfMonths={showMonths}
              range
              rangeHover
              weekDays={weekDays}
              minDate={new Date()}
              maxDate="30"
              format="YYYY/MM/DD"
              onChange={(dateObjects: any) => {
                setData(dateObjects)
                setDates(dateObjects)
              }}
              value={dates}
            />
            <Divider color={COLORS.silver} width="100%" max-maxWidth="1232px" height="1px" />
            <ResultContainer>
              {dates &&
                <HorizontalContainer gap="20px" alignItems="center">
                  <HorizontalContainer gap="20px" className="result-dates">
                    <>
                      <span>{dates[0]?.format("ddd, DD MMM YYYY")}</span>
                      {dates[1] && <img src={IMAGES.iconArrowRight} />}
                      <span>{dates[dates.length - 1]?.format("ddd, DD MMM YYYY")}</span>
                      <span>{totalDay} nights</span>
                    </>
                  </HorizontalContainer>
                  <div
                    className="result-cancel-button"
                    onClick={onClickResetData}
                  >
                    <span>Cancel</span>
                  </div>
                </HorizontalContainer>
              }
              <GradientButton
                color={COLORS.gradient1}
                text="Apply"
                handleSubmit={() => closePopup(false)}
                isSelected={true}
                maxWidth="162px"
                fontSize="16px"
                height="60px"
                width="100%"
                textPadding="4px 33px" />
            </ResultContainer>
          </StyledSelectDate>
      }

    </>
  )
}

const CalculateNights = (leavingDate?: string, arriveDate?: string) => {
  const diffInMs: number =
    ((new Date(leavingDate as string) as any) - (new Date(arriveDate as string) as any));
  const diffInDays: number = diffInMs / (1000 * 60 * 60 * 24);
  return diffInDays;
}
