import _ from "lodash";
import IMAGES from "@/assets/images";
import {
  GridViewItem,
  GridViewTitle,
  GridRoom,
  GridRoomItem,
  ListDate,
  ListContainer,
  GridViewContainer,
  GridDateItem,
  SDate,
  GridRoomCategoryTitle,
  GridRoomContainer,
  GridRoomTitleContainer,
  RoomInfoContainer,
} from "./stylesGidVIew";
import { useEffect, useMemo, useState, useRef } from "react";
import useFullSearchWidget from "@/components/Search/useFullSearch";
import { DateObject } from "react-multi-date-picker";
import { Icon } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import useWindowSize from "@/utils/windowResize";
import { SCREEN_SIZES } from "@/utils/breakpoints";

const daysCount = 15;
const daysCountMobile = 7;

export default function GridView() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [currentTotalDay, setCurrentTotalDay] = useState<number>(0);
  const [isPrevButtonDisabled, setPrevButtonDisabled] = useState<boolean>(true);
  const [isNextButtonDisabled, setNextButtonDisabled] =
    useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const calendarContainerRef = useRef<HTMLDivElement | null>(null);

  const { checkInParam, totalDay } = useFullSearchWidget();
  const checkInDate = new Date(checkInParam);

  const screenWidth = useWindowSize();
  useEffect(() => {
    if (screenWidth > SCREEN_SIZES.mobileLg) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [screenWidth, isMobile]);

  const daysCalendarCount = useMemo(() => {
    if (isMobile) {
      if (currentTotalDay > daysCountMobile) return currentTotalDay
      return daysCountMobile
    };
    return daysCount;
  }, [isMobile, currentTotalDay, daysCountMobile]);

  useEffect(() => {
    setCurrentDate(new Date(checkInParam));
    setCurrentTotalDay(totalDay);
    getDates();
  }, [checkInParam, totalDay, daysCalendarCount]);

  useEffect(() => {
    setNextButtonDisabled(currentTotalDay <= 15);
    setPrevButtonDisabled(checkInDate.getTime() === currentDate.getTime());
  }, [checkInParam, currentDate, currentTotalDay]);

  const getDates = (): DateObject[] => {
    const dates = [];
    for (let i = 0; i < daysCalendarCount; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + i
      );
      dates.push(new DateObject(date));
    }
    return dates;
  };

  const handleNext = (): void => {
    const nextDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 15
    );
    setCurrentDate(nextDate);
    setCurrentTotalDay(currentTotalDay - daysCalendarCount);
  };

  const handlePrev = (): void => {
    const prevDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - 15
    );
    if (checkInDate.getTime() > currentDate.getTime()) {
      setCurrentDate(prevDate);
    }
    setCurrentDate(prevDate);
    setCurrentTotalDay(currentTotalDay + daysCalendarCount);
  };

  const handleScrollDate = (e: any) => {
    const scrollAmount = e.target.scrollLeft;
    propertyRoomContainerRef.current.forEach(
      (roomRef: HTMLDivElement | null) => {
        if (!roomRef) return;
        roomRef.scrollLeft = scrollAmount;
      }
    );
  };

  const properties = useMemo(() => _.range(4), []);

  const propertyRoomContainerRef = useRef<Array<HTMLDivElement | null>>([]);

  const handleSrollProperty = (e: any) => {
    if (!calendarContainerRef || !calendarContainerRef.current) return;
    calendarContainerRef.current.scrollLeft = e.currentTarget.scrollLeft;
  };

  // Update room container refs with properties change
  useEffect(() => {
    propertyRoomContainerRef.current = propertyRoomContainerRef.current.slice(
      0,
      properties.length
    );
  }, [properties]);

  return (
    <>
      <ListDate>
        <SDate>
          <ListContainer>
            <div className="content">
              <div
                onClick={handlePrev}
                className={`prev-next-link ${
                  isPrevButtonDisabled ? "disabled" : ""
                }`}
              >
                <Icon component={KeyboardDoubleArrowLeftIcon} />
                Previous 15 days
              </div>
              <div
                onClick={handleNext}
                className={`prev-next-link ${
                  isNextButtonDisabled ? "disabled" : ""
                }`}
              >
                Next 15 days
                <Icon component={KeyboardDoubleArrowRightIcon} />
              </div>
            </div>
          </ListContainer>
        </SDate>
        <ListContainer>
          <div className="flex-date">
            <div className="empty">
              <p>Fiji: 134 properties found</p>
            </div>
            <GridDateItem
              onScroll={handleScrollDate}
              ref={calendarContainerRef}
            >
              <div className="horizontal-date">
                {getDates().map((date: DateObject, index2) => {
                  const isWeekend = date.toDate().getDay() % 6 === 0;

                  return (
                    <div
                      className={`date-item ${isWeekend ? "room-active" : ""}`}
                      key={index2}
                    >
                      <p>{date?.format("ddd")}</p>
                      <p className="day">{date?.format("DD")}</p>
                      <p>{date?.format("MMM")}</p>
                    </div>
                  );
                })}
              </div>
            </GridDateItem>
          </div>
        </ListContainer>
      </ListDate>
      <GridViewContainer>
        {properties.map((el, idx) => {
          return (
            <GridViewItem key={idx}>
              <GridViewTitle className={idx === 0 ? "first" : ""}>
                <div>Warwick Fiji Beach Resort</div>
                <div className="rating-container">
                  <img src={IMAGES.iconStar} width="14px" height="26px" />
                  <span>4.1</span>
                </div>
                {idx === 0 && (
                  <div className="p2">You searched for this property</div>
                )}
              </GridViewTitle>
              <GridRoom>
                <img
                  src={IMAGES.imgListView}
                  width={230}
                  height={160}
                  className="bg"
                />

                <RoomInfoContainer>
                  <GridRoomTitleContainer>
                    {_.range(4).map((el, index) => {
                      return (
                        <GridRoomCategoryTitle className="room" key={index}>
                          Room Category {index + 1}
                        </GridRoomCategoryTitle>
                      );
                    })}
                  </GridRoomTitleContainer>
                  <div
                    className="flex-room"
                    ref={(el) => (propertyRoomContainerRef.current[idx] = el)}
                    onScroll={handleSrollProperty}
                  >
                    {_.range(4).map((el2, index) => {
                      return (
                        <GridRoomContainer key={index}>
                          <GridRoomItem key={index}>
                            {/* <div className="room">Room Category {index + 1}</div> */}
                            <div className="room-price-list">
                              <div className="horizontal-room">
                                {getDates().map((date: DateObject, index2) => {
                                  const isWeekend =
                                    date.toDate().getDay() % 6 === 0;
                                  return (
                                    <div
                                      className={`room-item ${
                                        isWeekend ? "room-active" : ""
                                      }`}
                                      key={index2}
                                    >
                                      $XXXX.XX
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </GridRoomItem>
                        </GridRoomContainer>
                      );
                    })}
                  </div>
                </RoomInfoContainer>
              </GridRoom>
            </GridViewItem>
          );
        })}
      </GridViewContainer>
    </>
  );
}
