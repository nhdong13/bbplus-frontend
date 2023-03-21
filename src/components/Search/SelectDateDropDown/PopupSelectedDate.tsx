import { StyledPopupSelectDate } from "./StyledSelectDate";
import { Calendar, DateObject } from "react-multi-date-picker"
import { useEffect, useState } from "react";
import { GradientButton } from "../../Button";
import HorizontalContainer from "../../Layout/HorizontalContainer";
import IMAGES from "@/assets/images";
import { H4 } from "../../Typography";
import { COLORS } from "@/utils/colors";

interface PopupSelectDate {
    isShown?: boolean
    closePopup: (n: boolean) => void,
    weekDays: string[],
    initialDates: DateObject[],
    totalDay?: number
    setData: (c: DateObject[]) => void,
}

const PopupSelectDate = ({
    closePopup, weekDays,
    initialDates, totalDay, setData
}: PopupSelectDate) => {
    const [dates, setDates] = useState<DateObject[]>(initialDates);

    const didMount = useDidMount()
    const [date, setDate] = useState(
        new DateObject(),
    );
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
        closePopup(false);
    };

    return (
        <StyledPopupSelectDate>
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
                            setData(dateObjects)
                            setDates(dateObjects)
                        }}
                        value={dates}
                        currentDate={date}
                        plugins={[<MobileCalendarHeader position="top" />]}
                        className={COLORS.persianGreen}
                    />
                </div>
                <div className="popup-calendar__result-container">
                    {dates &&
                        <HorizontalContainer gap="15px" alignItems="center" justifyContent="center">
                            <HorizontalContainer gap="20px" className="result-dates">
                                <>
                                    <span>{dates[0]?.format("ddd, DD MMM YYYY")}</span>
                                    {dates[1] && <img src={IMAGES.iconArrowRight} />}
                                    <span>{dates[dates.length - 1]?.format("ddd, DD MMM YYYY")}</span>
                                    <span>{totalDay} nights</span>
                                </>
                            </HorizontalContainer>
                        </HorizontalContainer>
                    }
                    <GradientButton
                        color={COLORS.gradient1}
                        text="Apply"
                        isSelected={true}
                        handleSubmit={handleClosePopup}
                        width="100%"
                        fontSize="12px"
                        height="36px"
                        textPadding="4px 33px"
                        className="gradient-button-container"
                    />
                </div>
            </div>
        </StyledPopupSelectDate>
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

export default PopupSelectDate