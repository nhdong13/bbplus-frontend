import { COLORS } from "@/utils/colors"
import Divider from "../Layout/Divider"
import HorizontalContainer from "../Layout/HorizontalContainer"
import { FromContainer, ResultContainer, SearchButtonContainer, SearchContainer, SelectBookingDateTime, SelectRoomContainer, StyledTravelerDropDown } from "./StyledFullSearchWidget"
import { TravelerDropDown } from "@/utils/types/CardHotel";
import { GradientButton } from "../Button";
import { buttonItems } from "@/utils/tempData";
import useFullSearchWidget from "./useFullSearch";
import IMAGES from "@/assets/images";
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
        <HorizontalContainer gap="13px">
          {buttonItems.map((item, index) => {
            return (
              <div key={index} onClick={() => handleSelectBookingType(index)}>
                <GradientButton color={COLORS.gradient1} text={item.title} isSelected={selectedBooking === index ? true : false} />
              </div>
            )
          })}
        </HorizontalContainer>
        <SelectBookingDateTime isItinerary={selectCreateItinerary}>
          <HorizontalContainer>
            <FromContainer>
              <div>
                <p>Leaving from</p>
                <span>Search by city or airport</span>
              </div>
            </FromContainer>
            {selectCreateItinerary ?
              <>
                <Divider width="1px" height="auto" color={COLORS.silver} />
                <FromContainer>
                  <div>
                    <p>Going to</p>
                    <span>Search by city or airport</span>
                  </div>
                </FromContainer>
              </> : <></>
            }
            <Divider width="1px" height="auto" color={COLORS.silver} />
            <FromContainer>
              <div>
                <p>Arrival date</p>
                <span>Day|Date|Month</span>
              </div>
            </FromContainer>
            <FromContainer>
              <div>
                <p>No. of days</p>
                <span>x days</span>
              </div>
            </FromContainer>
            <Divider width="1px" height="auto" color={COLORS.silver} />
            <FromContainer>
              <div onClick={showTravelerDropDown}>
                <p>Travellers</p>
                <span>X guests (X rooms)</span>
              </div>
            </FromContainer>
          </HorizontalContainer>
          <HorizontalContainer margin={selectCreateItinerary ? "0" : "0 49.5px 0 0"}>
            <SearchButtonContainer>
              <img src={IMAGES.iconSearch} width="42px" height="42px" />
            </SearchButtonContainer>
          </HorizontalContainer>
        </SelectBookingDateTime>
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
