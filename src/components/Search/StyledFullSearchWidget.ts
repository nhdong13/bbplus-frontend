import { COLORS } from "@/utils/colors"
import { FONTS } from "@/utils/fonts"
import styled from "styled-components"
import HorizontalContainer from "../Layout/HorizontalContainer"
import { VerticalContainer } from "../Layout/VerticalContainer"

const SearchContainer = styled(VerticalContainer)`
  gap: 13px;
`

const SelectBookingDateTime = styled(HorizontalContainer).attrs((props: {
  isItinerary?: boolean
}) => props)`
  background: ${COLORS.white};
  border: none;
  border-radius: 16px;
  justify-content: ${({ isItinerary }) => isItinerary ? "none" : "space-between"};
  width: 100%;
`

const FromContainer = styled(VerticalContainer)`
  cursor: pointer;
  div {
    padding: 6px 62px 43px 48px;
  }

  p {
    font-family: ${FONTS.manrope};
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
  }

  span {
    color: ${COLORS.border};
    font-family: ${FONTS.manrope};
    font-size: 19px;
    line-height: 22px;
  }
`

const SearchButtonContainer = styled.div`
  align-items: center;
  background: ${COLORS.flushOrange};
  border-radius: 17px;
  cursor: pointer;
  display: flex;
  height: 119px;
  justify-content: center;
  margin: auto;
  width: 119px;
`

const StyledTravelerDropDown = styled(VerticalContainer).attrs((props: {
  isShown?: boolean
}) => props)`
  background: ${COLORS.white};
  border-radius: 10px;
  height: ${({ isShown }) => isShown ? "375px" : "0"};
  margin: 5px 0 0;
  width: 100%;
  transition: height .5s ease-in-out;
`

const SelectRoomContainer = styled(HorizontalContainer).attrs((props: {
  isShown?: boolean
}) => props)`
  border: 1px solid ${COLORS.silver};
  border-radius: 10px;
  margin: 20px 36px;
  height: ${({ isShown }) => isShown ? "200px" : "0"};
  opacity: ${({ isShown }) => isShown ? "1" : "0"};
  transition: height .3s ease-in-out, opacity 1s ease-in, opacity .5s ease-out;
`

const ResultContainer = styled(HorizontalContainer).attrs((props: {
  isShown?: boolean
}) => props)`
  margin: 20px 36px;
  opacity: ${({ isShown }) => isShown ? "1" : "0"};
  transition: opacity 0.5s ease-in, opacity 1s ease-out;
`

export {
  SearchContainer,
  SelectBookingDateTime,
  FromContainer,
  SearchButtonContainer,
  StyledTravelerDropDown,
  SelectRoomContainer,
  ResultContainer,
}
