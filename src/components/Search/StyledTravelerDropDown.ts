import { FONTS } from './../../utils/fonts';
import { COLORS } from "@/utils/colors"
import styled, { css } from "styled-components"
import HorizontalContainer from "../Layout/HorizontalContainer"
import { VerticalContainer } from "../Layout/VerticalContainer"

const StyledTravelerDropDown = styled(VerticalContainer).attrs((props: {
  isShown?: boolean
}) => props)`
  background: ${COLORS.white};
  border-radius: 10px;
  margin: 5px 0 0;
  max-width: 1230px;
  width: 100%;

  ${props => props.isShown && css`
    display: block;
    animation: fadeIn 1s;
  `}

  ${props => !props.isShown && css`
    display: none;
    animation: fadeOut 1s;
  `}
`

const StyledRoomOptions = styled(VerticalContainer)`
  border: 1px solid ${COLORS.silver};
  border-radius: 10px;
  margin: 36px 35px 24px;
  height: 100%;

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
    width: 100%;
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
    flex-wrap: wrap;
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

  .room-option__children-container {
    display: flex;
    flex-direction: row;
    gap: 33px;
    flex-wrap: wrap;
  }

  .room-option__remove-room {
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;

    &:hover {
      background-color: #c9c9c959;
      transition: background 0.3s ease-in-out;
    }

    span {
      color: ${COLORS.blueRibbon};
    }
  }
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
    outline: none;
  }

  input {
    width: 50px;
    text-align: center;
    border: none;
    outline: none;
  }

  input[type='number'] {
    -moz-appearance:textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

const StyledSelectAges = styled.div.attrs((props: {
  isOpen?: boolean
}) => props)`
  align-items: center;
  background: transparent;
  border-radius: 8px;
  border: 1px solid ${COLORS.doveGray};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0 0;
  height: 52px;
  padding: 0 16px;
  width: 122px;

  .select-ages__dropdown-icon {
    transform: ${({ isOpen }) => isOpen ? "rotate(180deg)" : "rotate(0)"};
    transition: all 0.5s ease-in-out;
  }
`

const StyledAddAnotherRoom = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 65px 20px;

  h4 {
    color: ${COLORS.blueRYB};

  }
`

const ResultContainer = styled(HorizontalContainer)`
  align-items: center;
  margin: 8px 65px 8px 88px;

  span {
    font-family: ${FONTS.manrope};
    font-size: 16px;
    line-height: 30px;
  }
`

export {
  StyledTravelerDropDown,
  StyledRoomOptions,
  StyledQuantityButton,
  StyledSelectAges,
  StyledAddAnotherRoom,
  ResultContainer,
}
