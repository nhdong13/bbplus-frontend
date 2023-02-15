import { COLORS } from "@/utils/colors"
import { FONTS } from "@/utils/fonts"
import styled from "styled-components"

const StyledButton = styled.div.attrs((props: {
  color?: string
  maxWidth?: string
  fontSize?: string
  height?: string
  textPadding?: string
  showButtonAnimation?: boolean
}) => props)`
  align-items: center;
  background: ${props => props.color};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: ${props => props.height || "52px"};
  max-width: ${props => props.maxWidth};
  padding: 1px;

  span {
    color: ${COLORS.white};
    display: flex;
    align-items: center;
    font-family: ${FONTS.manrope};
    font-size: ${props => props.fontSize || "16px"};
    line-height: 20px;
    padding: ${props => props.textPadding || "0 50px 0 38px"};
  }

  &.open {
    opacity: 1;
    transition: all 2s ease-in-out;
  }

  &.close {
    opacity: 0;
    transition: all 2s ease-in-out;
  }
`

const Overlay = styled.div.attrs((props: {
  isSelected?: boolean
  height?: string
  showButtonAnimation?: boolean
}) => props)`
  background: ${({ isSelected }) => isSelected ? 'transparent' : COLORS.cyprus};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  height: ${props => props.height || "52px"};
  transition: all 0.5s ease-in-out;
  width: 100%;

  &.open {
    opacity: 1;
    transition: all 2s ease-in-out;
  }

  &.close {
    opacity: 0;
    transition: all 2s ease-in-out;
  }
`
export {
  StyledButton,
  Overlay
}
