import { Overlay, StyledButton } from "./gradientButtonStyles"
import { GradientButton } from "@/utils/types/Button"

const GradientButton = ({ text, isSelected, color, maxWidth, fontSize, height, textPadding }: GradientButton) => {
  return (
    <>
      <StyledButton color={color} maxWidth={maxWidth} fontSize={fontSize} height={height} textPadding={textPadding}>
        <Overlay isSelected={isSelected} height={height}>
          <span>{text}</span>
        </Overlay>
      </StyledButton>
    </>
  )
}

export {
  GradientButton,
}
