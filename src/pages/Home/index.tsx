import IMAGES from "@/assets/images";
import { GradientButton } from "@/components/Button";
import Card from "@/components/Card";
import Divider from "@/components/Layout/Divider";
import { HorizontalContainer } from "@/components/Layout/HorizontalContainer";
import MainLayout from "@/components/Layout/MainLayout";
import { VerticalContainer } from "@/components/Layout/VerticalContainer";
import BookingTable from "@/components/Table";
import { COLORS } from "@/utils/colors";
import { buttonItems, customItineraries, hotels, popularHolidays } from "@/utils/tempData";
import { useState } from "react";

import {
  StyledHome,
  HomepageWelcomeTitle,
  SearchContainer,
  SelectBookingDateTime,
  FromContainer,
  SearchButtonContainer,
  StyledTravelerDropDown,
  SelectRoomContainer,
  ResultContainer,
  StyledHomeBody,
  StyledCarouselTitle,
} from "./styles";


export default function Home() {
  const [selectedBooking, setSelectedBooking] = useState<number>(0);
  const [travelerDropDown, setTravelerDropDown] = useState<boolean>(false);
  const [selectCreateItinerary, setSelectCreateItinerary] = useState<boolean>(true);
  const handleSelectBookingType = (id: number) => {
    setSelectedBooking(id);
    if (id === 2) {
      setSelectCreateItinerary(false);
    } else setSelectCreateItinerary(true);
  };

  const showTravelerDropDown = () => {
    setTravelerDropDown(!travelerDropDown);
  }

  return (
    <>
      <MainLayout>
        <StyledHome>
          <VerticalContainer
            maxWidth={"1570px"}
            padding={"20px 0 150px"}
            margin={"auto"}
          >
            <Divider color={COLORS.doveGray} width="100%" height="1px" />
            <HomepageWelcomeTitle>
              <p className="welcome-user-name">Hello, Mark.</p>
              <p className="welcome-description">At Bedbank Plus, we believe in ease and simplicity</p>
            </HomepageWelcomeTitle>
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
                  {selectCreateItinerary &&
                    <>
                      <Divider width="1px" height="auto" color={COLORS.silver} />
                      <FromContainer>
                        <div>
                          <p>Going to</p>
                          <span>Search by city or airport</span>
                        </div>
                      </FromContainer>
                    </>
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
            <TravelerDropDown isShown={travelerDropDown} />
          </VerticalContainer>
        </StyledHome>

        <StyledHomeBody>
          <div className="booking-section-container">
            <StyledCarouselTitle>
              <span>
                Hot Deals
              </span>
            </StyledCarouselTitle>
            <HorizontalContainer gap="30px" justifyContent="center">
              {hotels.map((item, index) => {
                return (
                  <div key={index}>
                    <Card data={item} />
                  </div>
                )
              })}
            </HorizontalContainer>
          </div>

          <div className="booking-section-container">
            <StyledCarouselTitle>
              <span>
                Most popular holidays
              </span>
            </StyledCarouselTitle>
            <HorizontalContainer gap="30px" justifyContent="center">
              {popularHolidays.map((item, index) => {
                return (
                  <div key={index}>
                    <Card data={item} />
                  </div>
                )
              })}
            </HorizontalContainer>
          </div>

          <div className="booking-section-container">
            <StyledCarouselTitle>
              <span>
                Most popular holidays
              </span>
            </StyledCarouselTitle>
            <HorizontalContainer gap="30px" justifyContent="center">
              {popularHolidays.map((item, index) => {
                return (
                  <div key={index}>
                    <Card data={item} />
                  </div>
                )
              })}
            </HorizontalContainer>
          </div>

          <div className="booking-section-container">
            <StyledCarouselTitle>
              <span>
                My custom itineraries
              </span>
            </StyledCarouselTitle>
            <HorizontalContainer gap="30px" justifyContent="center">
              {customItineraries.map((item, index) => {
                return (
                  <div key={index}>
                    <Card data={item} />
                  </div>
                )
              })}
            </HorizontalContainer>
          </div>

          <div className="booking-section-container">
            <StyledCarouselTitle>
              <span>
                Recent bookings
              </span>
            </StyledCarouselTitle>
            <BookingTable />
          </div>
        </StyledHomeBody>
      </MainLayout>
    </>
  )
}

interface TravelerDropDown {
  isShown?: boolean
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
