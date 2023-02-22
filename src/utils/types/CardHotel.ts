export interface HotelData {
  title: string,
  location: string,
  description?: string
  url: string,
  discountPercentage?: string,
  rating?: string,
  price?: string,
  extraInfo?: string[],
}

export interface TravelerDropDown {
  isShown?: boolean
  innerRef?: any
}

export interface TableData {
  id: string,
  guestName: string,
  creationDate: string,
  CreatedBy: string,
  hotelName: string,
  checkInOut: string,
  totalPrice: string,
  status: string,
}
