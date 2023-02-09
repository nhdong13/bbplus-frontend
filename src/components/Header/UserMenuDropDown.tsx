import IMAGES from "@/assets/images"
import { BREAKPOINTS } from "@/utils/breakpoints"
import { COLORS } from "@/utils/colors"
import styled from "styled-components"
import HorizontalContainer from "../Layout/HorizontalContainer"
import { H5 } from "../Typhography"

const StyledUserMenuDropDown = styled.div`
  position: absolute;
  top: 55px;
  right: 0;
  min-width: 292px;
  transition: all 0.5s ease-in-out;
  width: 100%;
  z-index: 2;

  @media ${BREAKPOINTS.mobileLg} {
    min-width: 250px;
  }

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

  @media ${BREAKPOINTS.mobileLg} {
    padding: 20px;
  }

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

  h5 {
    @media ${BREAKPOINTS.mobileLg} {
      font-size: 14px;
    }
  }
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
          <H5>Account setting</H5>
        </NavItem>
        <NavItem>
          <img src={IMAGES.iconChartBlue} />
          <H5>Report</H5>
        </NavItem>
        <NavItem>
          <img src={IMAGES.iconQuestionMarkBlue} />
          <H5>Help center</H5>
        </NavItem>
        <NavItem>
          <img src={IMAGES.iconArrowBackBlue} />
          <H5>Logout</H5>
        </NavItem>
      </NavItemContainer>
    </StyledUserMenuDropDown>
  )
}

export default UserMenuDropDown;
