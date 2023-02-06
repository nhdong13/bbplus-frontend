import { Overlay, StyledButton } from "./gradientButtonStyles"
import { GradientButton } from "@/utils/types/Button"

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
