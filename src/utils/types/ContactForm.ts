export interface ContactForm {
  numberAdult: number,
  numberChild: number,
  orderNumber: number,
  isPrimaryContact?: boolean,
  handleSubmit?: () => void,
}
