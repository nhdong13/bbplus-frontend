
import _ from "lodash";
import IMAGES from "@/assets/images";
import {
  SearchResultContainer,
} from './styles'
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
import { useSearchParams } from "react-router-dom";

interface IDate {
  dayOfWeek: string,
  day: number,
  month: number
}
interface IProps {
  checkIn: string,
  total_date: string
}
export default function GridView({ checkIn, total_date }: IProps) {
  const [searchParam] = useSearchParams();
  const [data, setData] = useState<IDate[]>();
  const date: string = searchParam.get('checkIn') || '';
  const day = new Date(date).getDate();
  const [currentDate, setCurrentDate] = useState<Date>(new Date(date));
  const dayOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const getDates = (): IDate[] => {
    const dates: IDate[] = [];
    for (let i = 0; i < 15; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i)
      dates.push({
        dayOfWeek: dayOfWeek[date.getDay()],
        day: date.getDate(),
        month: date.getMonth()
      })
    }
    return dates;
  }

  const handleNext = (): void => {
    const nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 15)
    setCurrentDate(nextDate)
  }

  const handlePrev = (): void => {
    if (getDates()[0].day !== day && getDates()[0].month >= new Date(date).getMonth()) {
      const nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 15)
      setCurrentDate(nextDate)
    }
  }

  useEffect(() => {
    getDates();
  }, [checkIn]);

  return (
    <>

      <SDate>
        <ListContainer>
          <div className="content">
            <div onClick={handlePrev} className={getDates()[0].day !== day && getDates()[0].month >= new Date(date).getMonth() ? '' : 'disabled'}>Previous 15 days</div>
            <div onClick={handleNext}>Next 15 days</div>
          </div>
        </ListContainer>
      </SDate>
      <ListDate>
        <ListContainer>
          <div className="flex">

            <>
              <div className="empty">
                <p>Fiji: 134 properties found</p>
              </div>
              <GridDateItem>
                <div className="horizontal-date">
                  {
                    getDates().map((date: IDate, index2) => {
                      return (
                        <div className={`date-item ${index2 <= parseInt(total_date) ? 'room-active' : ''}`} key={index2}>
                          <p>{date.dayOfWeek || ''}</p>
                          <p className="day">{date.day || ''}</p>
                          <p>{months[date.month]}</p>
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
                <div className="flex">
                  {
                    _.range(4).map((el2, index) => {
                      return (
                        <GridRoomItem key={index}>
                          <div className="room">Room Category {index + 1}</div>
                          <div className="haha">
                            <div className="horizontal-room">
                              {
                                _.range(15).map((el2, index2) => {
                                  return (
                                    <div className={`room-item ${index2 === 3 || index2 === 5 ? 'room-active' : ''}`} key={index2}>$XXX</div>
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
