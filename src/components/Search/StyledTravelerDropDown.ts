import { COLORS } from "@/utils/colors"
import styled from "styled-components"
import HorizontalContainer from "../Layout/HorizontalContainer"
import { VerticalContainer } from "../Layout/VerticalContainer"

const StyledTravelerDropDown = styled(VerticalContainer).attrs((props: {
  isShown?: boolean
}) => props)`
  background: ${COLORS.white};
  border-radius: 10px;
  margin: 5px 0 0;
  width: 100%;
  transition: height .5s ease-in-out;

  &.open {
    height: 375px;
    transition: all 0.5s ease-in-out;
  }

  &.close {
    height: 0;
    transition: all 0.5s ease-in-out;
  }
`

const StyledRoomOptions = styled(VerticalContainer).attrs((props: {
  isShown?: boolean
}) => props)`
  border: 1px solid ${COLORS.silver};
  border-radius: 10px;
  margin: 36px 35px;
  height: 100%;
  &.open {
    transition: all 0.5s ease-in-out;
  }

  &.close {
    transition: all 0.5s ease-in-out;
  }

  .room-option__container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .room-option__left {
    display: flex;
    justify-content: center;
    margin: 31px 0;
    max-width: 160px;
    width: 100%;
  }

  .room-option__right {
    margin: 31px 34px;
  }

  .room-option__name-input-container {
    margin-top: 19px;
    max-width: 618px;
    width: 100%;

    input {
      border: 1px solid ${COLORS.silver};
      border-radius: 5px;
      padding: 20px 0 15px 20px;
      width: 100%;

      &:focus {
        outline: none;
      }
    }
  }

  .room-option__adults-children-container {
    display: flex;
    flex-direction: row;
    gap: 50px;
    margin-top: 35px;

    h5 {
      font-weight: 700;
      font-size: 16px;
      line-height: 30px;
    }

    p {
      color: ${COLORS.doveGray};
    }
  }
`


const ButtonContainer = styled.div.attrs((props: {
  isShown?: boolean
}) => props)`

`

const StyledQuantityButton = styled.div`
  align-items: center;
  background: transparent;
  border-radius: 8px;
  border: 1px solid ${COLORS.doveGray};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0 0;
  height: 52px;
  padding: 0 16px;
  width: 122px;

  .button {
    background: transparent;
    border: none;
    color: ${COLORS.black};
    cursor: pointer;
    font-weight: 700;
    font-size: 27px;
    line-height: auto;
    outline: none;
  }
`

const StyledSelectAges = styled.div`
  align-items: center;
  background: transparent;
  border-radius: 8px;
  border: 1px solid ${COLORS.doveGray};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0 0;
  height: 52px;
  padding: 0 16px;
  width: 122px;
`

export {
  StyledTravelerDropDown,
  StyledRoomOptions,
  ButtonContainer,
  StyledQuantityButton,
  StyledSelectAges,
}
