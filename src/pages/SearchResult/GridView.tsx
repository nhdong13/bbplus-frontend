
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
} from './stylesGidVIew'
import { useEffect, useState } from "react"
import useFullSearchWidget from "@/components/Search/useFullSearch";
import { DateObject } from "react-multi-date-picker"

interface IProps {
  checkIn: string,
}
export default function GridView({ checkIn }: IProps) {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const {
    dates
  } = useFullSearchWidget();

  useEffect(() => {
    setCurrentDate(new Date(checkIn))
    getDates();
  }, [checkIn]);

  const getDates = (): DateObject[] => {
    const dates = [];
    for (let i = 0; i < 15; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i)
      dates.push(new DateObject(date));
    }
    return dates;
  }

  const handleNext = (): void => {
    const nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 15)
    setCurrentDate(nextDate)
  }

  const handlePrev = (): void => {
    if (getDates()[0]?.format("DD MMM YYYY") != checkIn) {
      const nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 15)
      setCurrentDate(nextDate)
    }
  }
  return (
    <>
      <ListDate>
        <SDate>
          <ListContainer>
            <div className="content">
              <div onClick={handlePrev} className={getDates()[0]?.format("DD MMM YYYY") != checkIn ? '' : 'disabled'}>Previous 15 days</div>
              <div onClick={handleNext}>Next 15 days</div>
            </div>
          </ListContainer>
        </SDate>
        <ListContainer>
          <div className="flex-date">

            <>
              <div className="empty">
                <p>Fiji: 134 properties found</p>
              </div>
              <GridDateItem>
                <div className="horizontal-date">
                  {
                    getDates().map((date: DateObject, index2) => {
                      const isWeekend = date.toDate().getDay() % 6 === 0

                      return (
                        <div className={`date-item ${isWeekend ? 'room-active' : ''}`} key={index2}>
                          <p>{date?.format("ddd")}</p>
                          <p className="day">{date?.format("DD")}</p>
                          <p>{date?.format("MMM")}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </GridDateItem>
            </>
          </div>
        </ListContainer>
      </ListDate>
      <GridViewContainer>
        {
          _.range(4).map((el, idx) => {
            return <GridViewItem key={idx}>
              <GridViewTitle className={idx === 0 ? 'first' : ''}>
                <div>Warwick Fiji Beach Resort</div>
                <div className="rating-container">
                  <img src={IMAGES.iconStar} width="14px" height="26px" />
                  <span>4.1</span>
                </div>
                {idx === 0 && <div className="p2">You searched for this property</div>}
              </GridViewTitle>
              <GridRoom>
                <img src={IMAGES.imgListView} width={230} height={160} className="bg" />
                <div className="flex-room">
                  {
                    _.range(4).map((el2, index) => {
                      return (
                        <GridRoomItem key={index}>
                          <div className="room">Room Category {index + 1}</div>
                          <div className="haha">
                            <div className="horizontal-room">
                              {
                                getDates().map((date: DateObject, index2) => {
                                  const isWeekend = date.toDate().getDay() % 6 === 0
                                  return (
                                    <div className={`room-item ${isWeekend ? 'room-active' : ''}`} key={index2}>$XXX</div>
                                  )
                                })
                              }
                            </div>
                          </div>
                        </GridRoomItem>
                      )
                    })
                  }
                </div>
              </GridRoom>
            </GridViewItem>
          })
        }
      </GridViewContainer>
    </>
  );
}
