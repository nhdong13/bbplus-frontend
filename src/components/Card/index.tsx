import IMAGES from "@/assets/images"
import { COLORS } from "@/utils/colors"
import { FONTS } from "@/utils/fonts"
import { HotelData } from "@/utils/types/CardHotel"
import styled from "styled-components"
import { GradientButton } from "../Button"
import { HorizontalContainer } from "../Layout/HorizontalContainer"
import { VerticalContainer } from "../Layout/VerticalContainer"
import {
  StyledCard,
  CardImage,
  PriceContainer,
  CardInfo
} from "./styles"


interface CardData {
  data: HotelData
  index?: number
}


export default function Card({ data, index }: CardData) {
  const {
    title,
    location,
    url,
    description,
    discountPercentage,
    rating,
    price,
    extraInfo
  }: HotelData = data

  return (
    <>
      <StyledCard>
        <CardImage>
          <HorizontalContainer>
            {discountPercentage &&
              <div className="save-percentage">
                <span>save {discountPercentage} %</span>
              </div>
            }
            {rating &&
              <div className={!discountPercentage ? "rating rating-without-discount " : "rating"}>
                <div className="rating-container">
                  <img src={IMAGES.leftQuotationMark} width="14px" height="26px" />
                  <span>4.1</span>
                </div>
              </div>
            }
          </HorizontalContainer>
          {discountPercentage &&
            <PriceContainer>
              <div className="outer-trapezoid">
                <div className="inner-trapezoid">
                  <p>
                    {price}
                  </p>
                  <span>per person</span>
                </div>
              </div>
            </PriceContainer>
          }
        </CardImage>
        <CardInfo>
          <div className="hotel-name">
            <span>{title}</span>
          </div>
          <div className="location">
            <img src={IMAGES.locationIcon} alt="location" width="20px" height="30px" />
            <span>{location}</span>
          </div>
          <div className="description">
            <span>{description}</span>
          </div>
          {extraInfo && extraInfo.map((item, index) => {
            return (
              <div className="extra-info" key={index}>
                <img src={IMAGES.pIcon} />
                <span>{item}</span>
              </div>
            )
          })}
          {
            (!discountPercentage && rating) &&
            <div className="custom-itineraries-price">
              <span className="high-light-price">From </span>
              <span className="price">{price}</span>
              <span className="high-light-price">per person</span>
            </div>
          }
          <div style={{ margin: "16px auto 0" }}>
            <GradientButton
              color={COLORS.flushOrange}
              text="View Details"
              isSelected={true}
              maxWidth="285px"
              height="72px"
            />
          </div>
        </CardInfo>
      </StyledCard>
    </>
  )
}
