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
  font-family: ${FONTS.manropeBold};
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
  .flex {
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
    @media ${BREAKPOINTS.laptop} {
      min-width: 80px;
      margin-right: 8px;
    }
  }
  .horizontal-room {
    @media ${BREAKPOINTS.laptop} {
      display: flex;
      gap: 3px;
      max-width: 244px;
      overflow-x: auto;
      /* &::-webkit-scrollbar {
        display: none;
      } */
    }
  }
  .haha {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: auto;
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
      width: auto;
      height: 14px;
      line-height: 14px;
      border-right: 0;
      padding: 4px;
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
  .flex {
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
      width: 396px;
      display: flex;
      align-items: center;
      p {
        display: block;
      }
    }
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
    &:last-child {
      border-right: 0;
    }
    @media ${BREAKPOINTS.laptop} {
      width: 29px;
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
      gap: 4px;
    }
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
      cursor: not-allowed;
    }
  }
`
const GridViewContainer = styled.div `
  max-width: 1400px;
  padding: 0 20px;
  margin: auto;
  height: 100%;
  max-height: 500px;
  overflow-y: auto;
  /* &::-webkit-scrollbar {
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