import { StyledSelectDate, ResultContainer, StyledPopupSelectDate } from "./StyledSelectDate";
import { Calendar, DateObject } from "react-multi-date-picker"
import { useEffect, useRef, useState } from "react";
import Divider from "../Layout/Divider";
import { COLORS } from "@/utils/colors";
import { GradientButton } from "../Button";
import HorizontalContainer from "../Layout/HorizontalContainer";
import moment from "moment";
import IMAGES from "@/assets/images";
import useWindowSize from "@/utils/windowResize";
import { H4 } from "../Typography";

interface SelectDate {
  isShown?: boolean
  getArriveDate: (n: string) => void,
  totalDates: (n: number) => void,
  closePopup: (n: boolean) => void,
}
export default function SelectDate({ isShown, getArriveDate, totalDates, closePopup }: SelectDate) {
  const weekDays: string[] = ["S", "M", "T", "W", "T", "F", "S"];
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
      <StyledSelectDate isShown={screenWidth < 768 ? false : isShown}>
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
      </StyledSelectDate>
      <PopupSelectDate
        isShown={screenWidth < 768 ? isShown : false}
        closePopup={closePopup}
        weekDays={weekDays}
      />
    </>
  )
}

interface PopupSelectDate {
  isShown?: boolean
  closePopup: (n: boolean) => void,
  weekDays: string[],
}

const PopupSelectDate = ({ isShown, closePopup, weekDays }: PopupSelectDate) => {
  const [popup, setPopup] = useState<boolean>(false);
  const [dates, setDates] = useState<any>([]);
  const didMountRef = useRef(false);

  useEffect(() => {
    if (isShown) {
      setPopup(isShown)
    }
    const getBodyElement = document.querySelector("body");
    if (getBodyElement && isShown) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      getBodyElement.style.overflow = "hidden";
    } else if (getBodyElement && isShown) {
      getBodyElement.style.overflow = "scroll";
    }

  }, [isShown]);

  const didMount = useDidMount()

  useEffect(() => {
    if (didMount) {
      document.querySelectorAll(".rmdp-month-name").forEach(p => {
        p.innerHTML = `${p.innerHTML + "&ensp;" + date.year}`;
        p.innerHTML = [...new Set(p.innerHTML)].join("")
      });
    }
  }, [document.querySelectorAll(".rmdp-month-name")])

  const handleClosePopup = () => {
    setPopup(false);
    closePopup(false);
  };

  const [date, setDate] = useState(
    new DateObject(),
  );

  return (
    <>
      <StyledPopupSelectDate isShown={popup}>
        <div className="popup-calendar__container">
          <div className="popup-calendar__title">
            <H4>When do you want to arrive?</H4>
            <div onClick={handleClosePopup}>
              <img src={IMAGES.iconClose} />
            </div>
          </div>
          <div className="popup-calendar__mobile-calendar-container">
            <Calendar
              fullYear
              range
              rangeHover
              hideWeekDays
              weekDays={weekDays}
              minDate={new Date()}
              maxDate="30"
              format="YYYY/MM/DD"
              onChange={(dateObjects: any) => {
                setDates(dateObjects)
              }}
              value={dates}
              currentDate={date}
              plugins={[<MobileCalendarHeader position="top" />]}
              className={COLORS.persianGreen}
            />
          </div>
        </div>
      </StyledPopupSelectDate>
    </>
  )
}

interface MobileCalendarHeader {
  position?: string
}

const MobileCalendarHeader = ({ position }: MobileCalendarHeader) => {
  const weekDays: string[] = ["S", "M", "T", "W", "T", "F", "S"];
  return (
    <>
      <HorizontalContainer className="mobile-calendar-header__title-container">
        {weekDays.map((item, index) => {
          return (
            <div key={index}>
              <span>{item}</span>
            </div>
          )
        })}
      </HorizontalContainer>
    </>
  )
}

function useDidMount() {
  const [didMount, setDidMount] = useState(false)
  useEffect(() => { setDidMount(true) }, [])

  return didMount
}
