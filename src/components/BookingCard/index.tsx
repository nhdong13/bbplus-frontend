
import { H3, H4 } from "../Typography";
import IMAGES from "@/assets/images";
import { useEffect, useState } from "react";
import { HotelData } from "@/utils/types/CardHotel";
import { StyledBookingButtonContainer, StyledBookingCard } from "./styles";

interface BookingCardData {
  data?: HotelData
  index?: number
}

export default function BookingCard({ data, index }: BookingCardData) {
  return (
    <StyledBookingCard key={index}>
      <div className="booking-card__container">
        <div>
          <H4>Most Popular</H4>
          <div className="booking-card__description-items-container">
            <div className="booking-card__description-item">
              <img src={IMAGES.iconTick} width="30px" height="30px" />
              <span>Meet and greet at airport</span>
            </div>
            <div className="booking-card__description-item">
              <img src={IMAGES.iconTick} width="30px" height="30px" />
              <span>Meet and greet at airport</span>
            </div>
            <div className="booking-card__description-item">
              <img src={IMAGES.iconTick} width="30px" height="30px" />
              <span>Meet and greet at airport</span>
            </div>
            <div className="booking-card__description-item">
              <img src={IMAGES.iconTick} width="30px" height="30px" />
              <span>Meet and greet at airport</span>
            </div>
            <div className="booking-card__description-item">
              <img src={IMAGES.iconTick} width="30px" height="30px" />
              <span>Meet and greet at airport</span>
            </div>
          </div>
          <div className="booking-card__price-container">
            <div className="booking-card_price-person">
              <H3>FJ$XXX</H3>
              <p>per person</p>
            </div>
            <div className="booking-card__total-cost">
              <p>FJ$XXX</p>
              <p>Total Cost for X pax</p>
            </div>
          </div>
          <div className="booking-card__booking-button-container">
            <BookingButton text="customize" />
            <BookingButton text="quote" />
            <BookingButton text="quick book" />
          </div>
        </div>
      </div>
    </StyledBookingCard>
  )
}

interface BookingButton {
  text: string
}

const BookingButton = ({ text }: BookingButton) => {
  const [buttonText, setButtonText] = useState<string>(text);
  useEffect(() => {
    setButtonText(text);
  }, [text]);

  return (
    <>
      <StyledBookingButtonContainer text={text}>
        <p>{buttonText}</p>
      </StyledBookingButtonContainer>
    </>
  )
}
