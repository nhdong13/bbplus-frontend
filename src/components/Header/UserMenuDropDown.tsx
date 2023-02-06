import { COLORS } from "@/utils/colors"
import styled from "styled-components"
import { HorizontalContainer } from "../Layout/HorizontalContainer"

const StyledUserMenuDropDown = styled.div`
  position: absolute;
  top: 55px;
  right: 0;
  min-width: 350px;
  transition: all 0.5s ease-in-out;
  z-index: 2;
`
const NavItemContainer = styled.div.attrs((props: {
  dropdown?: boolean
}) => props)`
  background: ${COLORS.white};
  border-radius: 10px;
  box-shadow: 4px 3px 18px -5px rgba(0,0,0,0.75);
  opacity: ${({ dropdown }) => dropdown ? "1" : "0"};
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
  gap: 10px;
`

interface UserMenuDropDown {
  dropdown?: boolean
}

const UserMenuDropDown = ({ dropdown }: UserMenuDropDown) => {
  return (
    <StyledUserMenuDropDown className={dropdown ? "open" : "close"}>
      <NavItemContainer dropdown={dropdown}>
        <NavItem><span>Account setting</span></NavItem>
        <NavItem><span>Report</span></NavItem>
        <NavItem><span>Help center</span></NavItem>
        <NavItem><span>Logout</span></NavItem>
      </NavItemContainer>
    </StyledUserMenuDropDown>
  )
}

export default UserMenuDropDown;
