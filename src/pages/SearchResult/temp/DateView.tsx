import { COLORS } from "@/utils/colors";
import styled from "styled-components";
import IMAGES from "@/assets/images";
import { useNavigate } from "react-router-dom";
import useWindowSize from "@/utils/windowResize";
import { BREAKPOINTS } from "@/utils/breakpoints"
import { useEffect, useState } from "react";
import _ from "lodash";

import {
  GridRoom,
  GridRoomItem
} from './styles'
const Container = styled.div`
  max-width: 1400px;
  padding: 0 20px;
  margin: auto;
  width: 100%;
  height: 100%;
  @media ${BREAKPOINTS.laptop} {
    padding: 0;
  }
  .list-item {
    display: flex;
    justify-content: flex-end;
    .item {
      border-right: 1px solid ${COLORS.parkinglotGray};
      padding: 20px;
      text-align: center;
    }
  }
`;

const ShowMapButton = styled.div`
  height: 43px;
  background: ${COLORS.antiFlashWhite};
  font-size: 14px;
  .flex {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${COLORS.blueRibbon};
    div {
      cursor: pointer;
    }
  }
`
const ListDate = styled.div`
  /* border-bottom: 1px solid ${COLORS.parkinglotGray}; */
  margin-bottom: 20px;

`
const ListContainer = styled.div `
  max-width: 1400px;
  padding: 0 20px;
  margin: auto;
  width: 100%;
  height: 100%;
`
function getDaysInMonth(month: number, year: number) {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export default function DateView() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const x = getDaysInMonth(3, 2023)
  }, []);

  return (
    <>
      <ShowMapButton>
        <Container>
          <div className="flex">
            <div>Prev 15days</div>
            <div>Next 15days</div>
          </div>

        </Container>
      </ShowMapButton>
      <ListDate>
        <ListContainer>
          {/* <div className="list-item">
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 133, 14, 15].map(el => {
                return (
                  <div key={el} className="item">
                    <div>Wed</div>
                    <div>02</div>
                    <div>Feb</div>
                  </div>
                )
              })
            }
          </div> */}
          <GridRoom>
            {
              _.range(1).map((el2, index) => {
                return (
                  <GridRoomItem key={index}>
                    <div className="room"></div>
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
          </GridRoom>
        </ListContainer>
      </ListDate>

    </>
  );
}
