import { COLORS } from "@/utils/colors";
import styled from "styled-components";
import { BREAKPOINTS } from "@/utils/breakpoints"
import { FONTS } from "@/utils/fonts";

const GridViewItem = styled.div`
  margin-bottom: 10px;
  .first{
    background: ${COLORS.darkGreen};
  }
`
const GridViewTitle = styled.div`
  height: 40px;
  color: ${COLORS.white};
  padding-left: 34px;
  line-height: 40px;
  background: ${COLORS.greenBlue};
  display: flex;
  align-items: center;
  font-family: ${FONTS.manrope};
  font-weight: bold;
  @media ${BREAKPOINTS.laptop} {
    font-size: 10px;
    padding-left: 11px;
    height: 22px;
    line-height: 22px;
  }
  .rating-container {
    margin-left: 44px;
    align-items: center;
    background: ${COLORS.white};
    color: ${COLORS.black};
    border-radius: 5px;
    display: flex;
    gap: 5px;
    justify-content: center;
    padding: 0 10px;
    height: 32px;

    span {
      font-weight: normal;
    }

    @media ${BREAKPOINTS.laptop} {
      margin-left: 10px;
      height: 16px;
      font-family: ${FONTS.manropeBold};
    }
  }
  .p2 {
    color: #FFBD29;
    margin-left: 19px;
    @media ${BREAKPOINTS.laptop} {
      margin-left: 10px;
    }
  }
`
const GridRoom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 0;
  @media ${BREAKPOINTS.laptop} {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3px;
    padding: 5px 0;
  }
  .bg {
    border-radius: 10px;
    object-fit: cover;
    @media ${BREAKPOINTS.laptop} {
      width: 95px;
      height: 86px;
      border-radius: 0;
    }
  }
  .flex-room {
    
    @media ${BREAKPOINTS.laptop} {
      font-size: 10px;
      display: grid;
      flex: 1 1 auto;
    }
  }
`
const GridRoomItem = styled.div`
  border-bottom: 1px solid ${COLORS.silver};
  height: 40px;
  display: flex;
  align-items: center;
  @media ${BREAKPOINTS.laptop} {
    height: auto;
    border-bottom: 0;
  }
  .room {
    min-width: 250px;
    font-weight: bold;

    @media ${BREAKPOINTS.laptop} {
      
    }
    @media ${BREAKPOINTS.mobileLg} {
      min-width: initial;
      width: 66.5px;
      font-size: 8px;
      margin-right: 5px;
    }
  }
  .horizontal-room {
    @media ${BREAKPOINTS.laptop} {
      display: flex;
      gap: 2px;
      max-width: 240px;
      overflow-x: hidden;
      /* &::-webkit-scrollbar {
        display: none;
      } */
    }
  }
  .room-price-list {
    max-width: 100%;
    overflow-x: auto;

    @media ${BREAKPOINTS.laptop} {
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* overflow-x: auto; */
    }
    font-size: 12px;
    @media ${BREAKPOINTS.mobileLg} {
      font-size: 6px;
    }
  }
  .room-item {
    display: inline-block;
    height: 40px;
    width: 57px;
    text-align: center;
    line-height: 40px;
    border-right: 1px solid ${COLORS.silver};
    &:last-child {
      border-right: 0;
    }
    @media ${BREAKPOINTS.laptop} {
      min-width: 26.5px;
      width: 26.5px;
      height: 14px;
      line-height: 14px;
      border-right: 0;
      padding: 4px 3px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .room-active {
    background: #E8F4FF;
  }
`
const ListDate = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid ${COLORS.silver};
  position: sticky;
  top: 0;
  background: #fff;
  @media ${BREAKPOINTS.laptop} {
    border-top: 1px solid ${COLORS.silver};
    margin-top: 15px;
  }
`
const ListContainer = styled.div`
  max-width: 1400px;
  padding: 0 20px;
  margin: auto;
  width: 100%;
  height: 100%;
  @media ${BREAKPOINTS.laptop} {
    width: auto;
    padding: 0 10px;
  }
  .flex-date {
    display: flex;
    justify-content: space-between;
  }
  .empty {
    width: 230px;
    height: 62px;
    p {
      display: none;
      font-family: ${FONTS.manropeBold};
      color: ${COLORS.cyprus};
      font-size: 18px;
    }
    @media ${BREAKPOINTS.laptop} {
      width: 345px;
      display: flex;
      align-items: center;
      p {
        display: block;
      }
    }
  }

  .prev-next-link {
    display: flex;
    justify-content: center;
  }
`
const GridDateItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: auto;
  /* .room {
    min-width: 250px;
  } */
  .date-item {
    display: inline-block;
    padding: 10px 0;
    width: 57px;
    text-align: center;
    border-right: 1px solid ${COLORS.silver};
    font-weight: bold;
    &:last-child {
      border-right: 0;
    }
    @media ${BREAKPOINTS.laptop} {
      width: 32.5px;
      font-size: 10px;
      border-right: 0;
      .day {
        font-family: ${FONTS.manropeBold};
      }
    }
  }

  .room-active {
    background: #E8F4FF;
  }
  .horizontal-date {
    display: flex;
    @media ${BREAKPOINTS.laptop} {
      gap: 2px;
    }
  }
  @media ${BREAKPOINTS.mobileLg} {
    width: 485px;
  }
`
const SDate = styled.div`
  height: 43px;
  background: ${COLORS.antiFlashWhite};
  @media ${BREAKPOINTS.laptop} {
    display: none;
  }
  .content {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    margin-left: 540px;
    color: ${COLORS.blueRibbon};
    div {
      cursor: pointer;
      user-select: none;
    }
    .disabled {
      color: ${COLORS.doveGray};
      pointer-events: none;
    }
  }
`
const GridViewContainer = styled.div `
  max-width: 1400px;
  padding: 0 20px;
  margin: auto;
  height: 100%;
  /* max-height: 500px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  } */
  @media ${BREAKPOINTS.laptop} {
    padding: 0 10px;
  }
`
export {
    GridViewItem,
    GridViewTitle,
    GridRoom,
    GridRoomItem,
    ListDate,
    ListContainer,
    GridViewContainer,
    GridDateItem,
    SDate
}