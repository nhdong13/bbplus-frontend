import { BREAKPOINTS } from "@/utils/breakpoints"
import { COLORS } from "@/utils/colors"
import { FONTS } from "@/utils/fonts"
import styled from "styled-components"

const StyledButton = styled.div.attrs((props: {
  color?: string
  maxWidth?: string
  textColor?: string
  fontSize?: string
  fontWeight?: string
  height?: string
  padding?: string
  textPadding?: string
  showButtonAnimation?: boolean
  width?: string
  borderRadius?: string
  borderGradient?: string
  borderWidth?: string
  borderColor?: string
  margin?: string
}) => props)`
  align-items: center;
  background: ${props => props.borderGradient || props.color};
  border: ${props => props.borderWidth || 0} solid ${props => props.borderColor || "transparent"};
  border-radius: ${props => props.borderRadius || "17px"};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height || "52px"};
  max-width: ${props => props.maxWidth};
  padding: ${props => !props.borderGradient && props.padding ? props.padding : props.borderWidth || "1px"};
  width: ${props => props.borderGradient ? "fit-content" : props.width};
  margin: ${props => props.margin || "initial"};
  span {
    color: ${props => props.textColor || COLORS.white};
    display: flex;
    align-items: center;
    font-family: ${FONTS.manrope};
    font-size: ${props => props.fontSize || "16px"};
    font-weight: ${props => props.fontWeight};
    line-height: 20px;
    padding: ${props => props.textPadding || "0 50px 0 38px"};
    @media ${BREAKPOINTS.laptop} {
      font-size: 12px;
    }
    white-space: nowrap;
    width: fit-content;
  }

  &.open {
    opacity: 1;
    transition: all 2s ease-in-out;
  }

  &.close {
    opacity: 0;
    transition: all 2s ease-in-out;
  }
  @media ${BREAKPOINTS.mobileLg} {
    border-radius: 5px;
  }

`

const Overlay = styled.div.attrs((props: {
  isSelected?: boolean
  height?: string
  showButtonAnimation?: boolean
  width?: string;
  padding?: string;
  borderGradient?: string
  borderRadius?: string
  fontWeight?: string
}) => props)`
  background: ${({ isSelected, borderGradient }) => isSelected ? 'transparent' : borderGradient ? "white" : COLORS.cyprus};
  border-radius: ${props => props.borderRadius || "17px"};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height || "52px"};
  padding: ${props => props.borderGradient ? props.padding : ""};
  transition: all 0.5s ease-in-out;
  width: ${props => props.borderGradient ? props.width : "100%"};

  &.open {
    opacity: 1;
    transition: all 2s ease-in-out;
  }

  &.close {
    opacity: 0;
    transition: all 2s ease-in-out;
  }

  span {
    font-weight: ${props => props.fontWeight};
  }
`
export {
  StyledButton,
  Overlay
}
