import { COLORS } from "@/utils/colors"
import { FONTS } from "@/utils/fonts"
import styled from "styled-components"

const StyledButton = styled.div.attrs((props: {
  color?: string
  maxWidth?: string
  fontSize?: string
  height?: string
  textPadding?: string
}) => props)`
  align-items: center;
  background: ${props => props.color};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: ${props => props.height || "72px"};
  max-width: ${props => props.maxWidth};
  padding: 1px;

  span {
    color: ${COLORS.white};
    font-family: ${FONTS.manrope};
    font-size: ${props => props.fontSize || "27px"};
    line-height: 32px;
    padding: ${props => props.textPadding || "20px 50px 0 38px"};
  }
`

const Overlay = styled.div.attrs((props: {
  isSelected?: boolean
  height?: string
}) => props)`
  background: ${({ isSelected }) => isSelected ? 'transparent' : COLORS.cyprus};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  height: ${props => props.height || "72px"};
  transition: all 0.5s ease-in-out;
  width: 100%;
`
export {
  StyledButton,
  Overlay
}
