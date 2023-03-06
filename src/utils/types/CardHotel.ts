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
  closePopup: (n: boolean) => void,
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

export interface RoomOptions{
  id: number,
  title: string,
  price: string,
  value: string,
}
