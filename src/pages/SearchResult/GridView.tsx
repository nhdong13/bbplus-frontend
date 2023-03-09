
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
  GridDateItem,
  SDate
} from './stylesGidVIew'

export default function GridView() {

  return (
    <>

      <SDate>
        <ListContainer>
          <div className="content">
            <div>Previous 15 days</div>
            <div>Next 15 days</div>
          </div>
        </ListContainer>
      </SDate>
      <ListDate>
        <ListContainer>
          <div className="haha">
            {
              _.range(1).map((el2, index) => {
                return (
                  <>
                    <div style={{ width: 230, height: "100%" }}>
                    </div>
                    <GridDateItem key={index}>
                      <div className="room"></div>
                      {
                        _.range(15).map((el2, index2) => {
                          return (
                            <div className={`room-item ${index2 === 3 || index2 === 5 ? 'room-active' : ''}`} key={index2}>
                              <p>Wed</p>
                              <p>02</p>
                              <p>Feb</p>
                            </div>
                          )
                        })
                      }
                    </GridDateItem>
                  </>
                )
              })
            }
          </div>
        </ListContainer>
      </ListDate>
      <SearchResultContainer>
        {
          _.range(3).map((el, idx) => {
            return <GridViewItem key={idx}>
              <GridViewTitle className={idx === 0 ? 'first' : ''}>
                <div>Warwick Fiji Beach Resort</div>
                <div className="rating-container">
                  <img src={IMAGES.iconStar} width="14px" height="26px" />
                  <span>4.1</span>
                </div>
              </GridViewTitle>
              <GridRoom>
                <img src={IMAGES.imgListView} width={230} height={160} className="bg" />
                <div>
                  {
                    _.range(5).map((el2, index) => {
                      return (
                        <GridRoomItem key={index}>
                          <div className="room">Room Category {index + 1}</div>
                          {
                            _.range(15).map((el2, index2) => {
                              return (
                                <div className={`room-item ${index2 === 3 || index2 === 5 ? 'room-active' : ''}`} key={index2}>$XXX</div>
                              )
                            })
                          }
                        </GridRoomItem>
                      )
                    })
                  }
                </div>
              </GridRoom>
            </GridViewItem>
          })
        }
      </SearchResultContainer>

    </>
  );
}
