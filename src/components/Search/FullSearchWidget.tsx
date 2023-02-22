import { COLORS } from "@/utils/colors"
import HorizontalContainer from "../Layout/HorizontalContainer"
import {
  FromContainer,
  SearchButtonContainer,
  SearchContainer,
  SelectBookingDateTime,
  SelectBookingDateTimeContainer,
  FilterGradientButtonContainer,
} from "./StyledFullSearchWidget"
import { GradientButton } from "../Button";
import { buttonItems } from "@/utils/tempData";
import useFullSearchWidget from "./useFullSearch";
import IMAGES from "@/assets/images";
import { H5 } from "../Typography";
import TravelerDropDown from "./TravellerDropDown/TravelerDropDown";
import SelectDate from "./SelectDateDropDown/SelectDate";
import SelectLocationDropDown from "./SelectLocation/SelectLocationDropDown";
import MobileSelectLocationDropDown from "./SelectLocation/MobileSelectLocationDropDown";
import MobileTravelerDropDown from "./TravellerDropDown/MobileTravelerDropDown";
export default function FullSearchWidget() {
  const {
    selectedBooking,
    selectCreateItinerary,
    handleSelectBookingType,
    showTravelerDropDown,
    travelerDropDown,
    selectDateDropDown,
    showDatePicker,
    setGetArriveDate,
    getArriveDate,
    totalDates,
    setTotalDates,
    showLeavingPlaces,
    showGoingToPlaces,
    selectLeavingPlaces,
    setSelectLeavingPlaces,
    selectGoingPlaces,
    setGoingPlaces,
    setSelectDateDropDown,
    isMobile,
    leavingDropDownRef,
    goingDropDownRef,
    selectDateDropDownRef,
    travelerDropDownRef,
    setTravelerDropDown,
  } = useFullSearchWidget();

  return (
    <>
      <SearchContainer>
        <FilterGradientButtonContainer gap="14px">
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
              <div onClick={showLeavingPlaces}>
                <H5 lineHeight="10px" fontWeight="700">Leaving from</H5>
                <H5 lineHeight="10px" color={COLORS.outerSpace}>Search by city or airport</H5>
              </div>
              {
                !isMobile ?
                  <SelectLocationDropDown
                    innerRef={leavingDropDownRef}
                    leaving
                    isShown={selectLeavingPlaces} />
                  :
                  <></>
              }
            </FromContainer>
            {selectCreateItinerary ?
              <>
                <FromContainer className="going-to">
                  <div onClick={showGoingToPlaces}>
                    <H5 lineHeight="10px" fontWeight="700">Going to</H5>
                    <H5 lineHeight="10px" color={COLORS.outerSpace}>Search by city or airport</H5>
                  </div>
                  {
                    !isMobile ?
                      <SelectLocationDropDown
                        innerRef={goingDropDownRef}
                        isShown={selectGoingPlaces} />
                      :
                      <></>
                  }
                </FromContainer>
              </> : <></>
            }
            <FromContainer className="arrive-days">
              <HorizontalContainer gap="55px">
                <div onClick={showDatePicker}>
                  <H5 lineHeight="10px" fontWeight="700">Arrival date</H5>
                  <H5 lineHeight="10px" color={COLORS.outerSpace}>{getArriveDate ? getArriveDate : "Day|Date|Month"}</H5>
                </div>
              </HorizontalContainer>
            </FromContainer>
            <FromContainer className="no-days" isOpen={selectDateDropDown}>
              <HorizontalContainer gap="55px">
                <div onClick={showDatePicker}>
                  <H5 lineHeight="10px" fontWeight="700">No. of days</H5>
                  <HorizontalContainer className="select-dates__container" alignItems="center" gap="32px">
                    <H5 lineHeight="10px" color={COLORS.outerSpace}>{totalDates ? totalDates : "x"} days</H5>
                    <img className="select-dates__dropdown-icon" src={IMAGES.iconDropDownBlue} width="13px" height="9px" />
                  </HorizontalContainer>
                </div>
              </HorizontalContainer>
            </FromContainer>
            <FromContainer
              className="travellers"
              style={{ border: "none" }}
              onClick={showTravelerDropDown}
            >
              <div >
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
          {!isMobile ?
            <SelectDate
              innerRef={selectDateDropDownRef}
              isShown={selectDateDropDown}
              getArriveDate={(e: string) => setGetArriveDate(e)}
              totalDates={(e: number) => setTotalDates(e)}
              closePopup={(e: boolean) => setSelectDateDropDown(e)}
            /> : <></>}
          {
            !isMobile ? <TravelerDropDown
              innerRef={travelerDropDownRef}
              isShown={travelerDropDown} />
              :
              <></>
          }
        </SelectBookingDateTime>
        {isMobile ?
          <>
            <SelectDate
              isShown={selectDateDropDown}
              getArriveDate={(e: string) => setGetArriveDate(e)}
              totalDates={(e: number) => setTotalDates(e)}
              closePopup={(e: boolean) => setSelectDateDropDown(e)}
            />
            <MobileSelectLocationDropDown
              isShown={selectLeavingPlaces}
              closePopup={(e: boolean) => setSelectLeavingPlaces(e)}
            />
            <MobileSelectLocationDropDown
              isShown={selectGoingPlaces}
              closePopup={(e: boolean) => setGoingPlaces(e)}
            />
            <TravelerDropDown
              isShown={travelerDropDown}
              closePopup={(e: boolean) => setTravelerDropDown(e)}
            />
          </>
          : <></>
        }
        <div className="mobile-search-button">
          <SearchButton />
        </div>
      </SearchContainer>
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
