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
import { GlobalContext } from './GlobalContext'
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
    dataFilter,
    totalGuest,
    handleAddRoom,
    handleChangeDataRoom,
    selectedLeaving, setSelectedLeaving,
    filterLeaving, setFilterLeaving
  } = useFullSearchWidget();

  const data = [
    { _id: 1, label: 'Sydney Airport (SYD)' },
    { _id: 2, label: 'Melbourne Airport (MEL)' },
    { _id: 3, label: 'Brisbane Airport (BNE)' },
    { _id: 4, label: 'Adelaide Airport (ADL)' },
    { _id: 5, label: 'Gold Coast Airport (OOL)' },
    { _id: 6, label: 'Auckland Airport (AKL)' },
    { _id: 7, label: 'Christchurch Airport (CHC)' },
    { _id: 8, label: 'Wellington Airport (WLG)' },
    { _id: 9, label: 'Los Angeles International Airport (LAX)' },
  ]

  const onChangeLeaving = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilterLeaving(e.target.value)
  }
  const onChangeGoing = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilterLeaving(e.target.value)
  }

  const filteredData = data.filter((el: any) => {
    if (filterLeaving === '') {
      return el;
    } else if (el.label.toLowerCase().includes(filterLeaving.toLowerCase())) {
      return el;
    }
  })


  return (
    <GlobalContext.Provider
      value={{
        dataFilter,
        handleAddRoom,
        handleChangeDataRoom
      }}>
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
            <FromContainer className={selectLeavingPlaces ? "show-input-search leaving-from" : "leaving-from"}>
              <div onClick={showLeavingPlaces} className={`${selectedLeaving ? 'selected-value' : ''}`}>
                {
                  selectedLeaving && !selectLeavingPlaces
                    ?
                    <H5 lineHeight="10px" color={COLORS.outerSpace}>{selectedLeaving?.label}</H5>
                    :
                    <>
                      {
                        isMobile
                          ?
                          <>
                            <H5 lineHeight="10px" fontWeight="700">Leaving from</H5>
                            <H5 lineHeight="10px" color={COLORS.outerSpace}>Search by city or airport</H5>
                          </>
                          :
                          selectLeavingPlaces
                            ?
                            <input className="input-search" autoFocus={true} value={filterLeaving} onChange={(e) => onChangeLeaving(e)} />
                            :
                            <>
                              <H5 lineHeight="10px" fontWeight="700">Leaving from</H5>
                              <H5 lineHeight="10px" color={COLORS.outerSpace}>Search by city or airport</H5>
                            </>
                      }
                    </>
                }
                {/* {
                   */}
              </div>
              {
                !isMobile ?
                  <SelectLocationDropDown
                    innerRef={leavingDropDownRef}
                    leaving
                    options={filteredData}
                    onClickItem={(item: any) => [setSelectedLeaving(item), setSelectLeavingPlaces(false)]}
                    isShown={selectLeavingPlaces} />
                  :
                  <></>
              }
            </FromContainer>
            {selectCreateItinerary ?
              <>
                <FromContainer className={selectGoingPlaces ? "show-input-search going-to" : "going-to"}>
                  <div onClick={showGoingToPlaces}>
                    {
                      isMobile
                        ?
                        <>
                          <H5 lineHeight="10px" fontWeight="700">Going to</H5>
                          <H5 lineHeight="10px" color={COLORS.outerSpace}>Search by city or airport</H5>
                        </>
                        :
                        selectGoingPlaces
                          ?
                          <input className="input-search" autoFocus={true} />
                          :
                          <>
                            <H5 lineHeight="10px" fontWeight="700">Going to</H5>
                            <H5 lineHeight="10px" color={COLORS.outerSpace}>Search by city or airport</H5>
                          </>
                    }

                  </div>
                  {
                    !isMobile ?
                      <SelectLocationDropDown
                        onClickItem={() => { }}
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
                <H5 lineHeight="10px" color={COLORS.outerSpace}>{totalGuest} guests ({dataFilter.length} rooms)</H5>
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
    </GlobalContext.Provider>
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
