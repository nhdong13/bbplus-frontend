import { Overlay, StyledButton } from "./gradientButtonStyles"
import { GradientButton } from "@/utils/types/Button"

const GradientButton = ({
  text,
  textColor,
  fontWeight,
  borderGradient,
  borderWidth,
  isSelected,
  color,
  maxWidth,
  fontSize,
  height,
  padding,
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
        textColor={textColor}
        maxWidth={maxWidth}
        fontSize={fontSize}
        height={height}
        padding={padding}
        textPadding={textPadding}
        showButtonAnimation={showButtonAnimation}
        width={width}
        borderRadius={borderRadius}
        borderWidth={borderWidth}
        onClick={handleSubmit}
        borderGradient={borderGradient}
      >
        <Overlay
          isSelected={isSelected}
          height={height}
          showButtonAnimation={showButtonAnimation}
          padding={padding}
          borderGradient={borderGradient}
          borderRadius={borderRadius}
          fontWeight={fontWeight}
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
