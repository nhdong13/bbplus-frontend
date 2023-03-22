
import { H3, H4 } from "../Typography";
import IMAGES from "@/assets/images";
import { useEffect, useState } from "react";
import { HotelData } from "@/utils/types/CardHotel";
import { StyledBookingButtonContainer, StyledBookingCard } from "./styles";
import { useNavigate } from "react-router-dom";

interface BookingCardData {
  data?: HotelData
  index: number,
  onClickCard: () => void
}

export default function BookingCard({ data, index, onClickCard }: BookingCardData) {
  return (
    <StyledBookingCard key={index} onClick={onClickCard}>
      <div className="booking-card__container">
        <div>
          <H4>{data?.title}</H4>
          <div className="booking-ucard__description-items-container">
            {
              data?.extraInfo?.map((d: string, key: number) => {
                return (
                  <div className="booking-card__description-item" key={key}>
                    <img src={IMAGES.iconTick} width="30px" height="30px" />
                    <span>{d}</span>
                  </div>
                )
              })
            }
          </div>

        </div>
        <div>
          {
            index && index % 2 === 0
              ?
              <div className="empty">No avaialability</div>
              :
              <>
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
                  <BookingButton text="customize" directUrl='/quick-book/step2' />
                  <BookingButton text="quote" directUrl='#' />
                  <BookingButton text="quick book" directUrl='#' />
                </div>
              </>
          }
        </div>
      </div>
    </StyledBookingCard>
  )
}

interface BookingButton {
  text: string,
  directUrl: string
}

const BookingButton = ({ text, directUrl }: BookingButton) => {
  const [buttonText, setButtonText] = useState<string>(text);
  useEffect(() => {
    setButtonText(text);
  }, [text]);

  const navigate = useNavigate();

  return (
    <>
      <StyledBookingButtonContainer onClick={() => navigate(directUrl)} text={text}>
        <p>{buttonText}</p>
      </StyledBookingButtonContainer>
    </>
  )
}
