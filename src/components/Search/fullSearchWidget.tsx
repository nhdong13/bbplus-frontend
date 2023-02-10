import { COLORS } from "@/utils/colors"
import Divider from "../Layout/Divider"
import HorizontalContainer from "../Layout/HorizontalContainer"
import {
  FromContainer,
  ResultContainer,
  SearchButtonContainer,
  SearchContainer,
  SelectBookingDateTime,
  SelectRoomContainer,
  StyledTravelerDropDown,
  SelectBookingDateTimeContainer,
  FilterGradientButtonContainer,
} from "./StyledFullSearchWidget"
import { TravelerDropDown } from "@/utils/types/CardHotel";
import { GradientButton } from "../Button";
import { buttonItems } from "@/utils/tempData";
import useFullSearchWidget from "./useFullSearch";
import IMAGES from "@/assets/images";
import { H5 } from "../Typography";
export default function FullSearchWidget() {
  const {
    selectedBooking,
    selectCreateItinerary,
    handleSelectBookingType,
    showTravelerDropDown,
  } = useFullSearchWidget();

  return (
    <>
      <SearchContainer>
        <FilterGradientButtonContainer gap="13px">
          {buttonItems.map((item, index) => {
            return (
              <div className="filter-gradient-button" key={index} onClick={() => handleSelectBookingType(index)}>
                <GradientButton
                  color={COLORS.gradient1}
                  text={item.title}
                  isSelected={selectedBooking === index ? true : false}
                />
              </div>
            )
          })}
        </FilterGradientButtonContainer>
        <SelectBookingDateTime>
          <SelectBookingDateTimeContainer selectCreateItinerary={selectCreateItinerary}>
            <FromContainer className="leaving-from">
              <div>
                <H5 lineHeight="10px" fontWeight="700">Leaving from</H5>
                <H5 lineHeight="10px" color={COLORS.outerSpace}>Search by city or airport</H5>
              </div>
            </FromContainer>
            {selectCreateItinerary ?
              <>
                <FromContainer className="going-to">
                  <div>
                    <H5 lineHeight="10px" fontWeight="700">Going to</H5>
                    <H5 lineHeight="10px" color={COLORS.outerSpace}>Search by city or airport</H5>
                  </div>
                </FromContainer>
              </> : <></>
            }
            <FromContainer className="arrive-days">
              <HorizontalContainer gap="55px">
                <div>
                  <H5 lineHeight="10px" fontWeight="700">Arrival date</H5>
                  <H5 lineHeight="10px" color={COLORS.outerSpace}>Day|Date|Month</H5>
                </div>
              </HorizontalContainer>
            </FromContainer>
            <FromContainer className="no-days">
              <HorizontalContainer gap="55px">
                <div>
                  <H5 lineHeight="10px" fontWeight="700">No. of days</H5>
                  <H5 lineHeight="10px" color={COLORS.outerSpace}>x days</H5>
                </div>
              </HorizontalContainer>
            </FromContainer>
            <FromContainer className="travellers" style={{ border: "none" }}>
              <div onClick={showTravelerDropDown}>
                <H5 lineHeight="10px" fontWeight="700">Travellers</H5>
                <H5 lineHeight="10px" color={COLORS.outerSpace}>X guests (X rooms)</H5>
              </div>
            </FromContainer>
          </SelectBookingDateTimeContainer>
          <div style={{ display: "flex" }} className="search-button-container">
            <HorizontalContainer margin={"0 25px 0 0"}>
              <SearchButton />
            </HorizontalContainer>
          </div>
        </SelectBookingDateTime>
        <div className="mobile-search-button">
          <SearchButton />
        </div>
      </SearchContainer>
    </>
  )
}

const TravelerDropDown = ({ isShown }: TravelerDropDown) => {
  return (
    <>
      <StyledTravelerDropDown gap="20px" isShown={isShown}>
        <SelectRoomContainer margin="20px 0 0" isShown={isShown}>
          <div style={{ padding: "0 30px" }}>
            <p>Room 1</p>
          </div>
          <Divider color={COLORS.silver} height="100%" width="1px" />
        </SelectRoomContainer>
        <Divider color={COLORS.silver} width="100%" height="1px" />
        <ResultContainer justifyContent="space-between" isShown={isShown}>
          <p>2 adults, 2 children (1 room)</p>
          <GradientButton color={COLORS.gradient1} text="Apply" isSelected={true} width="68px" height="72px" />
        </ResultContainer>
      </StyledTravelerDropDown>
    </>
  )
}

const SearchButton = () => {
  return (
    <>
      <SearchButtonContainer>
        <img src={IMAGES.iconSearch} width="25px" height="25px" />
      </SearchButtonContainer>
    </>
  )
}
