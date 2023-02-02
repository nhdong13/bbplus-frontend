import { COLORS } from "@/utils/colors"
import { FONTS } from "@/utils/fonts"
import styled from "styled-components"

interface GradientButton {
  color: string
  text: string
  isSelected: boolean
  height?: string
  maxWidth?: string
  width?: string
}

const StyledButton = styled.div.attrs((props: {
color?: string
maxWidth?: string
}) => props)`
  align-items: center;
  background: ${props => props.color};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 72px;
  max-width: ${props => props.maxWidth};
  padding: 1px;

  span {
    color: ${COLORS.white};
    font-family: ${FONTS.manrope};
    font-size: 27px;
    line-height: 32px;
    padding: 20px 50px 0 38px;
  }
`

const Overlay = styled.div.attrs((props: {
  isSelected?: boolean
}) => props)`
  background: ${({ isSelected }) => isSelected ? 'transparent' : COLORS.cyprus};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  height: 72px;
  transition: all 0.5s ease-in-out;
  width: 100%;
`

const GradientButton = ({ text, isSelected, color, maxWidth }: GradientButton) => {
  return (
    <>
      <StyledButton color={color} maxWidth={maxWidth}>
        <Overlay isSelected={isSelected}>
          <span>{text}</span>
        </Overlay>
      </StyledButton>
    </>
  )
}

export {
  GradientButton,
}
