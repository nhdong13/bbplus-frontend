import { BREAKPOINTS } from '@/utils/breakpoints';
import { FONTS } from '../../../utils/fonts';
import { COLORS } from "@/utils/colors"
import styled, { css } from "styled-components"
import HorizontalContainer from "../../Layout/HorizontalContainer"
import { VerticalContainer } from "../../Layout/VerticalContainer"

const StyledTravelerDropDown = styled(VerticalContainer).attrs((props: {
  isShown?: boolean
}) => props)`
  background: ${COLORS.white};
  border-radius: 10px;
  box-shadow: 4px 3px 18px -5px rgba(0,0,0,0.75);
  margin: 5px 0 0;
  max-width: 1230px;
  width: 100%;
  position: absolute;
  top: 100px;
  z-index: 2;

  ${props => props.isShown && css`
    display: block;
    animation: fadeIn 1s;
  `}

  ${props => !props.isShown && css`
    display: none;
    animation: fadeOut 1s;
  `}

  @media ${BREAKPOINTS.laptop} {
    border: 0;
    border-radius: 0;
    margin: 0;
    top: 0;
    left: 0;
    height: 100vh;
    max-width: 100%;
    width: 100vw;

  }

  .dropdown-header__container {
    display: none;

    @media ${BREAKPOINTS.laptop} {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 10px;

      h4 {
        font-size: 18px;
        font-weight: 700;
        line-height: 25px;
      }
    }
  }

  .room-option__mobile-container {
    @media ${BREAKPOINTS.laptop} {
      overflow: scroll;
      height: calc(100vh - 230px);
    }
  }
`

const StyledRoomOptions = styled(VerticalContainer)`
  border: 1px solid ${COLORS.silver};
  border-radius: 10px;
  margin: 36px 35px 24px;
  height: 100%;

  @media ${BREAKPOINTS.laptop} {
    border: none;
    margin: 36px 10px 24px;
  }

  .divider {
    @media ${BREAKPOINTS.laptop} {
      display: none;
    }
  }

  .room-option__container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    @media ${BREAKPOINTS.laptop} {
      flex-direction: column;
      max-width: 430px;
      margin: auto;
      width: 100%;
    }

    @media ${BREAKPOINTS.mobileLg} {
      max-width: 380px;
      margin: 0;
    }

    @media ${BREAKPOINTS.mobileSm} {
      max-width: calc(100vw - 70px);
    }
  }

  .room-option__left {
    display: flex;
    justify-content: center;
    margin: 31px 0;
    max-width: 160px;
    width: 100%;

    @media ${BREAKPOINTS.laptop} {
      justify-content: left;
      margin: 0;
    }
  }

  .room-option__right {
    margin: 31px 34px;
    width: 100%;

    @media ${BREAKPOINTS.laptop} {
      justify-content: left;
      margin: 0;
    }

    & > div {
      @media ${BREAKPOINTS.laptop} {
        flex-direction: column;
        justify-content: left;
        margin: 0;
      }
    }
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
      font-size: 16px;
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

  .room-option__list-children-container {
    display: flex;
    flex-direction: row;
    gap: 33px;
    flex-wrap: wrap;
  }

  .room-option__remove-room {
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;

    @media ${BREAKPOINTS.laptop} {
      padding: 10px 0;
    }

    &:hover {
      background-color: #c9c9c959;
      transition: background 0.3s ease-in-out;
    }

    span {
      color: ${COLORS.blueRibbon};
    }
  }

  .room-option__adults-container,
  .room-option__children-container {
    @media ${BREAKPOINTS.tablet} {
      align-items: center;
    flex-direction: row;
    justify-content: space-between;
    }

    h5, p {
      @media ${BREAKPOINTS.laptop} {
        color: ${COLORS.black};
        font-weight: 700!important;
        font-size: 14px!important;
        line-height: 19px!important;
      }
    }

    .bracket {
      display: none;

      @media ${BREAKPOINTS.laptop} {
        display: flex;
      }
    }
  }

  .room-option__list-children {
    @media ${BREAKPOINTS.laptop} {
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
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

  @media ${BREAKPOINTS.laptop} {
    justify-content: center;
    margin: 0;
    padding: 0;
    height: 34px;
    width: 93px;
  }

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

  @media ${BREAKPOINTS.laptop} {
    justify-content: space-around;
    margin: 0;
    padding: 0;
    height: 34px;
    width: 95px;
  }

  .select-ages__dropdown-icon {
    transform: ${({ isOpen }) => isOpen ? "rotate(180deg)" : "rotate(0)"};
    transition: all 0.5s ease-in-out;
  }

  span {
    @media ${BREAKPOINTS.laptop} {
      font-weight: 700;
      font-size: 16px;
      line-height: 30px;
    }
  }
`

const StyledAddAnotherRoom = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 65px 20px;

  @media ${BREAKPOINTS.laptop} {
    margin: 30px 10px;
  }

  h4 {
    color: ${COLORS.blueRYB};

    @media ${BREAKPOINTS.laptop} {
      color: #0079CF;
      font-weight: 700;
      font-size: 14px;
      line-height: 19px;
    }
  }
`

const ResultContainer = styled(HorizontalContainer)`
  align-items: center;
  margin: 8px 65px 8px 88px;

  @media ${BREAKPOINTS.laptop} {
    flex-direction: column;
    gap: 10px;
    margin: 10px;
  }

  span {
    font-family: ${FONTS.manrope};
    font-size: 16px;
    line-height: 30px;

    @media ${BREAKPOINTS.laptop} {
      color: ${COLORS.black};
      font-weight: 700;
      font-size: 12px;  
      line-height: 16px;
    }
  }

  .gradient-button {
    @media ${BREAKPOINTS.laptop} {
      height: 36px;
      width: 100%;
      max-width: 410px;
      margin: 10px;
    }
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
