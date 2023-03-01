import { COLORS } from "@/utils/colors"
import { FONTS } from "@/utils/fonts"
import styled, { css } from "styled-components"
import { BREAKPOINTS } from "@/utils/breakpoints";


const StyledBookingCard = styled.div`
  .booking-card__container {
    background-color: ${COLORS.antiFlashWhite};
    border: 1px solid ${COLORS.platinum};
    border-radius: 17px;
    cursor: pointer;
    height: auto;
    max-width: 287px;
    padding: 31px 13px 42px;
    width: 100%;

    &:hover {
      background-color: ${COLORS.mistyRose};
      border: 1px solid ${COLORS.spanishOrange};
    }
    @media ${BREAKPOINTS.laptop} {
      padding: 20px;
      span {
        font-size: 12px;
      }
      img {
        width: 24px;
        height: 24px;
      }
      h4 {
        font-size: 16px !important;
      }
      .booking-card__description-item {
        gap: 5px;
      }
    }
  }

  .booking-card__description-items-container {
    display: flex;
    flex-direction: column;
    min-height: 228px;
    margin: 18px 0;
    @media ${BREAKPOINTS.laptop} {
      margin-top: 5px;
    }
  }

  .booking-card__description-item {
    align-items: center;
    display: flex;
    gap: 15px;
  }

  .booking-card__price-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 18px;
    margin-bottom: 24px;
  }

  .booking-card_price-person {
    h3 {
      color: ${COLORS.toryBlue};
    }

    p {
      color: ${COLORS.electricRed};
      font-size: 16px;
      line-height: 20px;
      font-weight: 200;
    }
  }

  .booking-card__total-cost {
    p:nth-child(2) {
      color: ${COLORS.electricRed};
    }
  }

  .booking-card__booking-button-container {
    display: flex;
    flex-direction: column;
    gap: 11px;
    
    button {
      margin: auto;
      width: 100%;
    }
  }
`;

const StyledBookingButtonContainer = styled.button.attrs((props: {
  text: string
}) => props)`
  border-radius: 5px;
  text-align: center;
  padding: 11px 0;
  max-width: 208px;

  ${({ text }) => {
    switch (text) {
      case 'customize':
        return css`
          background-color: ${COLORS.white};
          border: 2px solid ${COLORS.doveGray};
          color: ${COLORS.toryBlue};
        `
      case 'quote':
        return css`
          background-color: ${COLORS.papayaWhip};
          border: 2px solid ${COLORS.anzac};
          color: ${COLORS.black};
        `
      default:
        return css`
          background-color: ${COLORS.flushOrange};
          border: 2px solid ${COLORS.flushOrange};
          color: ${COLORS.white};
        `
    }
  }};

  p {
    font-weight: ${FONTS.manropeBold};
    line-height: 28px;
    text-transform: capitalize;
  }
`

export {
  StyledBookingCard,
  StyledBookingButtonContainer
}
