import { COLORS } from "@/utils/colors";
import styled from "styled-components";
import { BREAKPOINTS } from "@/utils/breakpoints"

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
  background: #00B492;
  display: flex;
  align-items: center;
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
  }
`
const GridRoom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 0;
  .bg {
    border-radius: 10px;
    object-fit: cover;
  }
`
const GridRoomItem = styled.div`
  border-bottom: 1px solid ${COLORS.silver};
  height: 40px;
  display: flex;
  align-items: center;
  .room {
    min-width: 250px;
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
  }
  .room-active {
    background: #E8F4FF;
  }
`
const ListDate = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid ${COLORS.silver};
`
const ListContainer = styled.div`
  max-width: 1400px;
  padding: 0 20px;
  margin: auto;
  width: 100%;
  height: 100%;
  .haha {
    display: flex;
    justify-content: space-between;
  }
`
const GridDateItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .room {
    min-width: 250px;
  }
  .room-item {
    display: inline-block;
    padding: 10px 0;
    width: 57px;
    text-align: center;
    border-right: 1px solid ${COLORS.silver};
    &:last-child {
      border-right: 0;
    }
  }
  .room-active {
    background: #E8F4FF;
  }
`
const SDate = styled.div`
  height: 43px;
  background: ${COLORS.antiFlashWhite};
  .content {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    margin-left: 540px;
    color: ${COLORS.blueRibbon};
    div {
        cursor: pointer;
    }
  }
`
export {
    GridViewItem,
    GridViewTitle,
    GridRoom,
    GridRoomItem,
    ListDate,
    ListContainer,
    GridDateItem,
    SDate
}