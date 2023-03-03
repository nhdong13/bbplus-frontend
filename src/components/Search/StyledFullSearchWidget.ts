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
  selectCreateItinerary?: boolean
}) => props)`
  @media ${BREAKPOINTS.laptop} {
    display: grid;
    grid-template-areas:
    "leavingFrom ${props => props.selectCreateItinerary ? "goingTo" : "leavingFrom"}" 
    "arriveDays noDays"
    "travellers travellers"
    ;
    width: 100%;
  }

  .leaving-from {
    grid-area: leavingFrom;
  }

  .show-input-search{
    display: flex;
    align-items: center;
    flex-direction: initial;
    padding: 0 20px;
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
  }

  .going-to {
    grid-area: goingTo;
  }

  .arrive-days {
    border-right: none;
    grid-area: arriveDays;
  }

  .no-days {
    border-left: none;
    grid-area: noDays;
  }

  .travellers {
    grid-area: travellers;
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

  @media only screen and (max-width: 1240px) {
    padding: 10px 20px;
  }

  @media ${BREAKPOINTS.laptop} {
    border: none;
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
