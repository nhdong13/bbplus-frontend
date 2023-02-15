import { Overlay, StyledButton } from "./gradientButtonStyles"
import { GradientButton } from "@/utils/types/Button"

const GradientButton = ({ text, isSelected, color, maxWidth, fontSize, height, textPadding, showButtonAnimation }: GradientButton) => {
  return (
    <>
      <StyledButton color={color} maxWidth={maxWidth} fontSize={fontSize} height={height} textPadding={textPadding} showButtonAnimation={showButtonAnimation}>
        <Overlay isSelected={isSelected} height={height} showButtonAnimation={showButtonAnimation}>
          <span>{text}</span>
        </Overlay>
      </StyledButton>
    </>
  )
}

export {
  GradientButton,
}
