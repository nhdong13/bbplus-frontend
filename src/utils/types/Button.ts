export interface GradientButton {
  color: string
  text: string
  isSelected: boolean
  height?: string
  maxWidth?: string
  width?: string
  fontSize?: string
  textPadding?: string
  showButtonAnimation?: boolean
  className?: string
}


export interface QuantityButton {
  onClickDecreaseNumber: () => void,
  onClickIncreaseNumber: () => void,
  numberOfPeople: number,
  watchInputValue?: (e: React.KeyboardEvent) => void,
}
