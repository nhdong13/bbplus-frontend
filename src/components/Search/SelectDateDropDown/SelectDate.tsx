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




interface SelectDate {
  isShown?: boolean
  setTotalDates: (n: number) => void,
  closePopup: (n: boolean) => void,
  innerRef?: any,
  initialDates: DateObject[],
  setData: any,
  totalDay?: number
}

export default function SelectDate({
  isShown,
  setTotalDates,
  closePopup, innerRef, initialDates, setData,
  totalDay
}: SelectDate) {
  const weekDays: string[] = ["S", "M", "T", "W", "T", "F", "S"];
  const [dates, setDates] = useState<DateObject[]>(initialDates);
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

  const onClickResetData = () => {
    setData([])
    setDates([])
  }

  return (
    <>
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
      <PopupSelectDate
        isShown={screenWidth < 768 ? isShown : false}
        closePopup={closePopup}
        weekDays={weekDays}
        totalDates={(e: number) => setTotalDates(e)}
      />
    </>
  )
}

interface PopupSelectDate {
  isShown?: boolean
  closePopup: (n: boolean) => void,
  weekDays: string[],
  totalDates: (n: number) => void
}

const PopupSelectDate = ({ isShown, closePopup, weekDays, totalDates }: PopupSelectDate) => {
  const [popup, setPopup] = useState<boolean>(false);
  const [dates, setDates] = useState<any>([]);
  const [totalNights, setTotalNights] = useState<number>(0);

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

    if (dates.length) {
      const arriveDate = dates[0].format("DD MMMM YYYY")
      const leavingDate = (dates[1]?.format("DD MMMM YYYY"))
      const diffInDays = CalculateNights(leavingDate, arriveDate);
      totalDates(diffInDays)
      setTotalNights(diffInDays)
    }


  }, [isShown, dates]);

  const didMount = useDidMount()

  useEffect(() => {
    if (didMount) {
      document.querySelectorAll(".rmdp-month-name").forEach(p => {
        p.innerHTML = `${p.innerHTML + "&ensp;" + date.year}`;
      });
    }
  }, [didMount])

  const handleClosePopup = () => {
    const getBodyElement = document.querySelector("body");
    if (getBodyElement) {
      getBodyElement.style.overflow = "scroll";
    }
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
          <div className="popup-calendar__result-container">
            {dates[0] &&
              <HorizontalContainer gap="15px" alignItems="center" justifyContent="center">
                <HorizontalContainer gap="20px" className="result-dates">
                  <span>{dates[0]?.format("ddd, DD MMM YYYY")}</span>
                  {dates[1] && <img src={IMAGES.iconArrowRight} />}
                  <span>{dates[1]?.format("ddd, DD MMM YYYY")}</span>
                  {totalNights > 0 && <span>({totalNights} nights)</span>}
                </HorizontalContainer>
              </HorizontalContainer>
            }
            <GradientButton
              color={COLORS.gradient1}
              text="Apply"
              isSelected={true}
              width="100%"
              fontSize="12px"
              height="36px"
              textPadding="4px 33px"
              className="gradient-button-container"
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

const CalculateNights = (leavingDate?: string, arriveDate?: string) => {
  const diffInMs: number =
    ((new Date(leavingDate as string) as any) - (new Date(arriveDate as string) as any));
  const diffInDays: number = diffInMs / (1000 * 60 * 60 * 24);
  return diffInDays;
}

const getTotalDaysInRange = (datesInRange: DateObject[]): number => {
  if (!datesInRange || datesInRange.length === 0) {
    return 0;
  }
  const firstDate = datesInRange[0].toDate();
  const lastDate = datesInRange[datesInRange.length - 1].toDate();
  const diffTime = lastDate.getTime() - firstDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays + 1;
}