import IMAGES from "@/assets/images"
import { COLORS } from "@/utils/colors"
import styled from "styled-components"
import HorizontalContainer from "../Layout/HorizontalContainer"

const StyledUserMenuDropDown = styled.div`
  position: absolute;
  top: 55px;
  right: 0;
  min-width: 292px;
  transition: all 0.5s ease-in-out;
  width: 100%;
  z-index: 2;

  &.open {
    animation: fadeIn 0.5s;
    display: block;
    z-index: 3;
  }

  &.close {
    animation: fadeOut 0.5s;
    display: none;
    z-index: -1;
  }
`
const NavItemContainer = styled.div`
  background: ${COLORS.white};
  border-radius: 12px;
  box-shadow: 4px 3px 18px -5px rgba(0,0,0,0.75);
  transition: all 0.5s ease-in-out;
  padding: 40px 40px 20px;

  &.open {
    animation: fadeIn 0.5s;
    display: block;
  }

  &.close {
    animation: fadeOut 0.5s;
    display: none;
  }

  span {
    color: ${COLORS.blackPearl};
    font-size: 18px;
    line-height: 24px;
    padding: 10px 0;
  }
`

const NavItem = styled(HorizontalContainer)`
  cursor: pointer;
  gap: 33px;
`

interface UserMenuDropDown {
  dropdown?: boolean
  innerRef: any
}

const UserMenuDropDown = ({ innerRef, dropdown }: UserMenuDropDown) => {
  return (
    <StyledUserMenuDropDown ref={innerRef} className={dropdown ? "open" : "close"}>
      <NavItemContainer >
        <NavItem>
          <img src={IMAGES.iconEye} />
          <span>Account setting</span>
        </NavItem>
        <NavItem>
          <img src={IMAGES.iconChartBlue} />
          <span>Report</span>
        </NavItem>
        <NavItem>
          <img src={IMAGES.iconQuestionMarkBlue} />
          <span>Help center</span>
        </NavItem>
        <NavItem>
          <img src={IMAGES.iconArrowBackBlue} />
          <span>Logout</span>
        </NavItem>
      </NavItemContainer>
    </StyledUserMenuDropDown>
  )
}

export default UserMenuDropDown;
