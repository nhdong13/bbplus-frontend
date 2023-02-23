import { Overlay, StyledButton } from "./gradientButtonStyles"
import { GradientButton } from "@/utils/types/Button"

const GradientButton = ({
  text,
  isSelected,
  color,
  maxWidth,
  fontSize,
  height,
  textPadding,
  showButtonAnimation,
  width,
  className,
  borderRadius,
  handleSubmit
}: GradientButton) => {
  return (
    <>
      <StyledButton
        className={`gradient-button ${className}`}
        color={color}
        maxWidth={maxWidth}
        fontSize={fontSize}
        height={height}
        textPadding={textPadding}
        showButtonAnimation={showButtonAnimation}
        width={width}
        borderRadius={borderRadius}
        onClick={handleSubmit}
      >
        <Overlay
          isSelected={isSelected}
          height={height}
          showButtonAnimation={showButtonAnimation}
        >
          <span>{text}</span>
        </Overlay>
      </StyledButton>
    </>
  )
}

export {
  GradientButton,
}
