import { COLORS } from "@/utils/colors"
import { FONTS } from "@/utils/fonts"
import styled from "styled-components"
import { Overlay, StyledButton } from "./gradientButtonStyles"
import { GradientButton } from "@/utils/types/Button"
import { HorizontalContainer } from "../Layout/HorizontalContainer"
import IMAGES from "@/assets/images"

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
