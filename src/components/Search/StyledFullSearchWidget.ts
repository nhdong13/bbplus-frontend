import { BREAKPOINTS } from '@/utils/breakpoints';
import { COLORS } from "@/utils/colors"
import { FONTS } from "@/utils/fonts"
import styled from "styled-components"
import HorizontalContainer from "../Layout/HorizontalContainer"
import { VerticalContainer } from "../Layout/VerticalContainer"

const SearchContainer = styled(VerticalContainer)`
  gap: 13px;
  margin-top: 15px;

  .mobile-search-button {
    display: none;

    @media ${BREAKPOINTS.laptop} {
      display: block;
    }

    & > div {
      @media ${BREAKPOINTS.laptop} {
        border-radius: 3px;
        max-height: 44px;
        width: 100%;
      }
    }
  }
`

const FilterGradientButtonContainer = styled(HorizontalContainer)`
  @media ${BREAKPOINTS.mobileLg} {
    gap: 5px;
    justify-content: space-between;
  }
  .filter-gradient-button {
    div {
      @media ${BREAKPOINTS.mobileLg} {
        border-radius: 3px;
        height: 26px;
      }
    }

    span {
      @media ${BREAKPOINTS.laptop} {
        font-size: 14px;
      }

      @media ${BREAKPOINTS.tablet} {
        font-size: 11px;
        padding: 0 15px;
      }

      @media ${BREAKPOINTS.mobileLg} {
        font-size: 11px;
        line-height: 14px;
        padding: 0 5px;
      }

      @media ${BREAKPOINTS.mobileSm} {
        padding: 0 2px;
      }
    }
  }
`

const SelectBookingDateTime = styled(HorizontalContainer)`
  background: ${COLORS.white};
  border: none;
  border-radius: 16px;
  justify-content: space-between;
  max-width: 1232px;
  position: relative;
  width: 100%;

  @media ${BREAKPOINTS.mobileLg} {
    border-radius: 5px;
  }

  .search-button-container {
    @media ${BREAKPOINTS.laptop} {
      display: none!important;
    }
  }
`

const SelectBookingDateTimeContainer = styled(HorizontalContainer).attrs((props: {
  selectedBooking?: number
}) => props)`
  @media ${BREAKPOINTS.laptop} {
    display: grid;
    width: 100%;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0px;
  }

  .leaving-from {
    grid-column: ${props => props.selectedBooking === 2 ? "1 / -1" : ""} ;
    @media ${BREAKPOINTS.laptop} {
      border-right: 0;
    }
  }

  .selected-value {
    display: flex;
    align-items: center;
    height: 100%;
    max-width: 160px;
    h5 {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .show-input-search{
    display: flex;
    align-items: center;
    flex-direction: initial;
    padding: 0 20px;
    height: 92px;
  }

  .input-search{
    border: 0;
    font-size: 16px;
    line-height: 25px;
    min-height: 50px;
    padding-left: 10px;
    width: 160px;
    &:focus {
      outline: none; 
    }
    @media ${BREAKPOINTS.laptop} {
      font-size: 12px;
    }
  }

  .going-to {
  }

  .arrive-days {
    border-right: none;
  }

  .no-days {
    border-left: none;
  }

  .travellers {
    grid-column: 1 / -1;
  }

  .leaving-from,
  .going-to,
  .arrive-days,
  .no-days,
  .travellers {
    @media ${BREAKPOINTS.laptop} {
      align-items: center;
      text-align: center;
    }

    h5 {
      line-height: 20px;
      padding: 8px 0;
      white-space: nowrap;
    }
  }

  .leaving-from, .arrive-days {
    @media ${BREAKPOINTS.laptop} {
      border-bottom: 1px solid ${COLORS.silver};
    }
  }

  .going-to, .no-days {
    @media ${BREAKPOINTS.laptop} {
      border-bottom: 1px solid ${COLORS.silver};
    }
  }
`

const FromContainer = styled(VerticalContainer).attrs((props: {
  isOpen?: boolean
}) => props)`
  border-right: 1px solid ${COLORS.silver};
  cursor: pointer;
  padding: 10px 42px;
  &:last-child {
    border-right: 0;
  }
  @media only screen and (max-width: 1240px) {
    padding: 10px 20px;
  }

  @media ${BREAKPOINTS.laptop} {
    /* border: none; */
  }

  .select-dates__dropdown-icon {
    transform: ${({ isOpen }) => isOpen ? "rotate(180deg)" : "rotate(0)"};
    transition: all 0.5s ease-in-out;
  }

  .select-dates__container {
    @media ${BREAKPOINTS.mobileLg} {
      gap: 10px;
    }
  }
`

const SearchButtonContainer = styled.div`
  align-items: center;
  background: ${COLORS.flushOrange};
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 71px;
  justify-content: center;
  margin: auto;
  width: 71px;
`

export {
  SearchContainer,
  SelectBookingDateTime,
  FromContainer,
  SearchButtonContainer,
  SelectBookingDateTimeContainer,
  FilterGradientButtonContainer,
}
