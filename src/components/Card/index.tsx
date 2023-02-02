import IMAGES from "@/assets/images"
import { COLORS } from "@/utils/colors"
import { FONTS } from "@/utils/fonts"
import { HotelData } from "@/utils/types/CardHotel"
import styled from "styled-components"
import { GradientButton } from "../Button"
import { HorizontalContainer } from "../Layout/HorizontalContainer"
import { VerticalContainer } from "../Layout/VerticalContainer"

const StyledCard = styled.div`
  cursor: pointer;
  height: auto;
  width: 390px;
`

const CardImage = styled(VerticalContainer)`
  background-image: url(${IMAGES.hotelBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
  height: 200px;
  position: relative;

  .save-percentage, .rating {
    width: 50%;
  }

  .save-percentage {
    background: ${COLORS.gradient1};
    border-top-left-radius: 17px;

    span {
      color: ${COLORS.white};
      font-family: ${FONTS.manrope};
      font-weight: 700;
      font-size: 25px;
      line-height: 36.81px;
      text-transform: uppercase;
      padding: 16px 35px 0;
    }
  }

  .rating {
    align-items: center;
    display: flex;
    justify-content: center;

    span {
      color: ${COLORS.black};
      font-family: ${FONTS.manrope};
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
    }

    .rating-container {
      align-items: center;
      background: ${COLORS.white};
      border-radius: 20px;
      display: flex;
      justify-content: center;
      padding: 0 18px;
    }
  }

  .rating-without-discount {
    justify-content: right!important;
    width: 100%;
    margin: 15px;
  }
`

const PriceContainer = styled.div`
  height: 120px;
  width: 153px;
  right: 8px;
  position: absolute;
  bottom: -25px;

  .inner-trapezoid {
    height: 120px;
    width: 153px;
    background: ${COLORS.flushOrange};
    clip-path: polygon(0 0, 100% 0, 100% 76%, 0% 100%);
    position: absolute;
    right: 0;
  }

  .outer-trapezoid {
    height: 125px;
    width: 161px;
    background: ${COLORS.cyprus};
    clip-path: polygon(0 0, 100% 0, 100% 76%, 0% 100%);
    position: relative;
  }

  p {
    color: ${COLORS.white};
    font-family: ${FONTS.manrope};
    font-weight: 600;
    font-size: 32px;
    line-height: 0;
    padding-left: 7px;
  }

  span {
    color: ${COLORS.white};
    font-family: ${FONTS.manrope};
    font-weight: 400;
    font-size: 22px;
    line-height: 0;
    padding-left: 7px;
  }
`

const CardInfo = styled(VerticalContainer)`
  border: 1px solid ${COLORS.silver};
  border-bottom-left-radius: 17px;
  border-bottom-right-radius: 17px;
  gap: 10px;
  padding: 50px 32px;

  .hotel-name {
    span {
      color: ${COLORS.toryBlue};
      font-family: ${FONTS.manrope};
      font-weight: 600;
      font-size: 27px;
      line-height: 32.4px;
      text-align: left;
    }
  }

  .location {
    display: flex;
    gap: 7px;

    span {
      color: ${COLORS.black};
      font-family: ${FONTS.manrope};
      font-weight: 400;
      font-size: 20px;
      line-height: 38.59px;
    }
  }

  .extra-info {
    display: flex;
    align-items: center;
    gap: 15px;

    span {
      color: #383838;
      font-family: ${FONTS.manrope};
      font-weight: 400;
      font-size: 18px;
      line-height: 28.07px;
    }
  }

  .description {
    span {
      color: ${COLORS.blackPearl};
      font-family: ${FONTS.manrope};
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
    }
  }
`

interface CardData {
  data: HotelData
}


export default function Card({ data }: CardData) {
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
