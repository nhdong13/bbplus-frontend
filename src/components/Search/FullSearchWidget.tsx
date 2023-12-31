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
import { useSearchParams, useNavigate, createSearchParams, } from "react-router-dom";
import { dataLeaving, dataGoing } from "@/utils/tempData";
import { ISelect } from "@/utils/types/Select"
interface IProps {
  className?: string,
  handleSearch?: () => void,
  checkInUrlParam?: string,
  checkOutUrlParam?: string,

}

interface IOptionSearch {
  search_type?: string,
  leaving?: string,
  going?: string,
  checkIn?: string,
  checkOut?: string
}
export default function FullSearchWidget({
  className, handleSearch,
}: IProps) {
  const {
    selectedBooking,
    handleSelectBookingType,
    showTravelerDropDown,
    travelerDropDown,
    selectDateDropDown,
    showDatePicker,
    showLeavingPlaces,
    showGoingToPlaces,
    selectLeavingPlaces,
    setSelectLeavingPlaces,
    selectGoingPlaces,
    setGoingPlaces,
    setSelectDateDropDown,
    selectBookingID, setSelectBookingID,
    selectGuestEmail, setSelectGuestEmail,
    filterFindMyBooking, setFilterFindMyBooking,
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
    selectedGoing, setSelectedGoing,
    filterLeaving, setFilterLeaving,
    filterGoing, setFilterGoing,
    //new----
    dates, setDates,
    totalDay,

  } = useFullSearchWidget();

  const onChangeLeaving = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilterLeaving(e.target.value)
  }
  const onChangeGoing = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilterGoing(e.target.value)

  }
  const onChangeFindMyBooking = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilterFindMyBooking((prevState: any) => {
      return { ...prevState, ...{ [e.target.name]: e.target.value } };
    })
  }

  const filteredDataLeaving = dataLeaving.filter((el: any) => {
    if (filterLeaving === '') {
      return el;
    } else if (el.label.toLowerCase().includes(filterLeaving.toLowerCase())) {
      return el;
    }
  })

  const filteredDataGoing = dataGoing.filter((el: any) => {
    if (filterGoing === '') {
      return el;
    } else if (el.label.toLowerCase().includes(filterGoing.toLowerCase())) {
      return el;
    }
  })
  const navigate = useNavigate();

  const onClickSearch = () => {


    const optionSearch: IOptionSearch = {
      search_type: String(selectedBooking),
      leaving: selectedLeaving?._id.toString(),
      going: selectedGoing?._id.toString(),
      checkIn: dates[0]?.format("DD MMM YYYY").toString(),
      checkOut: dates[dates.length - 1]?.format("DD MMM YYYY").toString(),
    }

    if (selectedLeaving) {
      Object.assign(optionSearch, {
        leaving: selectedLeaving._id
      })
    }
    
    if (dataFilter.length > 0) {
      Object.assign(optionSearch, {
        room: dataFilter.map((room) => `a${room.adults},c${room.children}`)
      })
    }

    if (filterFindMyBooking?.booking_id) {
      Object.assign(optionSearch, {
        booking_id: filterFindMyBooking?.booking_id
      })
    }

    if (filterFindMyBooking?.guest_email) {
      Object.assign(optionSearch, {
        guest_email: filterFindMyBooking?.guest_email
      })
    }

    let pathName = "/search-result";
    if (selectedBooking === 1) {
      pathName = "/multi-hotel/step2"
    } else if (selectedBooking === 2) {
      pathName = "/itinerary/step2"
    }

    if (selectedBooking === 3) {
      pathName = "/find-my-booking"
    }

    navigate({
      pathname: pathName,
      search: createSearchParams({...optionSearch}).toString()
    });
    if (handleSearch) handleSearch()
  }

  const onClickItemLeaving = (item: ISelect) => {
    setSelectedLeaving(item)
    setSelectLeavingPlaces(false)
    //If clicked item selected, return default value leaving
    if (selectedLeaving && selectedLeaving._id === item._id) {
      setSelectedLeaving(undefined)
    }
  }

  const onClickItemGoing = (item: ISelect) => {
    setSelectedGoing(item)
    setGoingPlaces(false)
    //If clicked item selected, return default value leaving
    if (selectedGoing && selectedGoing._id === item._id) {
      setSelectedGoing(undefined)
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        dataFilter,
        handleAddRoom,
        handleChangeDataRoom
      }}>
      <SearchContainer className={className}>
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
        <SelectBookingDateTime className={'selected-booking'}>
          <SelectBookingDateTimeContainer selectedBooking={selectedBooking}>
            <>
              {
                selectedBooking !== 3
                  ?
                  <>
                    <FromContainer className={selectLeavingPlaces ? "show-input-search leaving-from" : "leaving-from"}>
                      <div onClick={showLeavingPlaces} className={`${selectedLeaving ? 'selected-value' : ''}`}>
                        {
                          selectedLeaving && !selectLeavingPlaces
                            ?
                            <>
                              <H5 lineHeight="10px" fontWeight="700">Leaving from</H5>           
                              <H5 lineHeight="10px" color={COLORS.outerSpace}>{selectedLeaving?.label}</H5>
                            </>
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
                                    <>
                                      <H5 lineHeight="10px" fontWeight="700">Leaving from</H5>
                                      <input className="input-search" autoFocus={true} value={filterLeaving} onChange={(e) => onChangeLeaving(e)} />
                                    </>
                                    :
                                    <>
                                      <H5 lineHeight="10px" fontWeight="700">Leaving from</H5>
                                      <H5 lineHeight="10px" color={COLORS.outerSpace}>Search by city or airport</H5>
                                    </>
                              }
                            </>
                        }

                      </div>
                      {
                        !isMobile ?
                          <SelectLocationDropDown
                            innerRef={leavingDropDownRef}
                            leaving
                            options={filteredDataLeaving}
                            onClickItem={(item: ISelect) => onClickItemLeaving(item)}
                            isShown={selectLeavingPlaces} />
                          :
                          <></>
                      }
                    </FromContainer>
                    {
                      selectedBooking !== 2
                        ?
                        <FromContainer className={selectGoingPlaces ? "show-input-search going-to" : "going-to"}>
                          <div onClick={showGoingToPlaces} className={`${selectedGoing ? 'selected-value' : ''}`}>
                            {
                              selectedGoing && !selectGoingPlaces
                                ?
                                <>
                                  <H5 lineHeight="10px" fontWeight="700">Going to</H5>                            
                                  <H5 lineHeight="10px" color={COLORS.outerSpace}>{selectedGoing?.label}</H5>
                                </>
                                :
                                <>
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
                                        <>
                                          <H5 lineHeight="10px" fontWeight="700">Going to</H5>
                                          <input className="input-search" autoFocus={true} value={filterGoing} onChange={(e) => onChangeGoing(e)} />
                                        </>
                                        :
                                        <>
                                          <H5 lineHeight="10px" fontWeight="700">Going to</H5>
                                          <H5 lineHeight="10px" color={COLORS.outerSpace}>Search by city or airport</H5>
                                        </>
                                  }
                                </>
                            }
                          </div>
                          {
                            !isMobile ?
                              <SelectLocationDropDown
                                options={filteredDataGoing}
                                onClickItem={(item: ISelect) => onClickItemGoing(item)}
                                innerRef={goingDropDownRef}
                                isShown={selectGoingPlaces} />
                              :
                              <></>
                          }
                        </FromContainer>
                        :
                        <></>
                    }
                    <FromContainer className="arrive-days">
                      <HorizontalContainer gap="55px">
                        <div onClick={showDatePicker}>
                          <H5 lineHeight="10px" fontWeight="700">Arrival date</H5>
                          <H5 lineHeight="10px" color={COLORS.outerSpace}>{dates.length > 0 ? dates[0]?.format("DD MMM YYYY") : "Day|Date|Month"}</H5>
                        </div>
                      </HorizontalContainer>
                    </FromContainer>
                    <FromContainer className="no-days" isOpen={selectDateDropDown}>
                      <HorizontalContainer gap="55px">
                        <div onClick={showDatePicker}>
                          <H5 lineHeight="10px" fontWeight="700">No. of days</H5>
                          <HorizontalContainer className="select-dates__container" alignItems="center" gap="32px">
                            <H5 lineHeight="10px" color={COLORS.outerSpace}>{totalDay} days</H5>
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
                  </>
                  :
                  <>
                    <FromContainer className={`booking-id ${selectBookingID ? "show-input-search" : "going-to"}`}>
                      <div onClick={() => setSelectBookingID(true)} className={`${selectBookingID ? 'selected-value' : ''}`}>
                        {
                          selectBookingID
                            ?
                            <input className="input-search" name="booking_id" autoFocus={true} value={filterFindMyBooking?.booking_id} onChange={(e) => onChangeFindMyBooking(e)} />
                            :
                            <>
                              <H5 lineHeight="10px" fontWeight="700">Bedbank Plus Booking ID</H5>
                              <H5 lineHeight="10px" color={COLORS.outerSpace}>Enter the bedbank plus booking ID</H5>
                            </>
                        }
                      </div>
                    </FromContainer>
                    <FromContainer className={`guest-id ${selectGuestEmail ? "show-input-search" : "going-to"}`}>
                      <div onClick={() => setSelectGuestEmail(true)} className={`${selectGuestEmail ? 'selected-value' : ''}`}>
                        {
                          selectGuestEmail
                            ?
                            <input className="input-search" name="guest_email" autoFocus={true} value={filterFindMyBooking?.guest_email} onChange={(e) => onChangeFindMyBooking(e)} />
                            :
                            <>
                              <H5 lineHeight="10px" fontWeight="700">Guest Email</H5>
                              <H5 lineHeight="10px" color={COLORS.outerSpace}>Enter the email address</H5>
                            </>
                        }
                      </div>
                    </FromContainer>
                  </>
              }
            </>

          </SelectBookingDateTimeContainer>
          <div style={{ display: "flex" }} className="search-button-container">
            <HorizontalContainer margin={"0 25px 0 0"}>
              <SearchButtonContainer onClick={onClickSearch}>
                <img src={IMAGES.iconSearch} width="25px" height="25px" />
              </SearchButtonContainer>
            </HorizontalContainer>
          </div>
          <SelectDate
            innerRef={selectDateDropDownRef}
            isShown={selectDateDropDown}
            initialDates={dates}
            totalDay={totalDay}
            setData={(d: any) => setDates(d)}
            closePopup={(e: boolean) => setSelectDateDropDown(e)}
          />
          {
            !isMobile ? <TravelerDropDown
              innerRef={travelerDropDownRef}
              isShown={travelerDropDown}
              closePopup={(e: boolean) => setTravelerDropDown(e)}
            />
              :
              <></>
          }
        </SelectBookingDateTime>
        {isMobile ?
          <>
            <MobileSelectLocationDropDown
              isShown={selectLeavingPlaces}
              options={filteredDataLeaving}
              onClickItem={(item: ISelect) => onClickItemLeaving(item)}
              closePopup={(e: boolean) => setSelectLeavingPlaces(e)}
            />
            <MobileSelectLocationDropDown
              options={filteredDataGoing}
              isShown={selectGoingPlaces}
              onClickItem={(item: ISelect) => onClickItemGoing(item)}
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
          <SearchButtonContainer onClick={onClickSearch}>
            <img src={IMAGES.iconSearch} width="25px" height="25px" />
          </SearchButtonContainer>
        </div>
      </SearchContainer>
    </GlobalContext.Provider>
  )
}

