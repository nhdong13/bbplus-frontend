export interface GradientButton {
  color: string
  text: string
  fontWeight?: string
  textColor?: string
  borderGradient?: string
  borderWidth?: string
  isSelected?: boolean
  height?: string
  padding?: string
  maxWidth?: string
  width?: string
  fontSize?: string
  textPadding?: string
  className?: string
  showButtonAnimation?: boolean,
  borderRadius?: string,
  handleSubmit?: () => void,
}


export interface QuantityButton {
  onClickDecreaseNumber: () => void,
  onClickIncreaseNumber: () => void,
  numberOfPeople: number,
  watchInputValue?: (e: React.KeyboardEvent) => void,
}
