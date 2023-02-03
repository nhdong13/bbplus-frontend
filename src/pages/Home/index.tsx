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
import { CarouselProvider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CarouselSlider from "@/components/Carousel/index";

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
import styled from "styled-components";

const CarouselWrapper = styled.div`
  &.carousel-container {
    margin: 12px auto;
    max-width: 272px;
    filter: drop-shadow(0px 12px 30px rgba(50, 50, 50, 0.2));

    /* Total-width (including margin) + 1 additional margin */
    @media (min-width: 832px) {
      max-width: 704px;
    }

    @media (min-width: 1088px) {
      max-width: 960px;
    }

    @media (min-width: 1272px) {
      max-width: 1152px;
    }

    @media (min-width: 1504px) {
      max-width: 1650px;
    }
  }

  .carousel__inner-slide {
    width: calc(100% - 16px);
    margin-left: 8px;

    @media (min-width: 1272px) {
      width: calc(100% - 24px);
      margin-left: 12px;
    }

    @media (min-width: 1272px) {
      width: calc(100% - 32px);
      margin-left: 16px;
    }
  }
`;

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

  const [slideCount, setSlideCount] = useState<number>(2);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

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
            <HorizontalContainer>
              <CarouselWrapper className="carousel-container">
                <CarouselProvider
                  visibleSlides={slideCount}
                  totalSlides={hotels.length}
                  step={1}
                  currentSlide={currentSlide}
                  naturalSlideWidth={100}
                  naturalSlideHeight={125}
                  isIntrinsicHeight={true}
                >
                  <CarouselSlider
                    setSlideCount={setSlideCount}
                    setCurrentSlide={setCurrentSlide}
                    data={hotels}
                    carouselTitle={"Hot Deals"}
                  />
                </CarouselProvider>
              </CarouselWrapper>
            </HorizontalContainer>
          </div>
          <div className="booking-section-container">
            <HorizontalContainer>
              <CarouselWrapper className="carousel-container">
                <CarouselProvider
                  visibleSlides={slideCount}
                  totalSlides={popularHolidays.length}
                  step={1}
                  currentSlide={currentSlide}
                  naturalSlideWidth={100}
                  naturalSlideHeight={125}
                  isIntrinsicHeight={true}
                >
                  <CarouselSlider
                    setSlideCount={setSlideCount}
                    setCurrentSlide={setCurrentSlide}
                    data={popularHolidays}
                    carouselTitle={"Most popular holidays"}
                  />
                </CarouselProvider>
              </CarouselWrapper>
            </HorizontalContainer>
          </div>
          <div className="booking-section-container">
            <HorizontalContainer>
              <CarouselWrapper className="carousel-container">
                <CarouselProvider
                  visibleSlides={slideCount}
                  totalSlides={customItineraries.length}
                  step={1}
                  currentSlide={currentSlide}
                  naturalSlideWidth={100}
                  naturalSlideHeight={125}
                  isIntrinsicHeight={true}
                >
                  <CarouselSlider
                    setSlideCount={setSlideCount}
                    setCurrentSlide={setCurrentSlide}
                    data={customItineraries}
                    carouselTitle={"My custom itineraries"}
                  />
                </CarouselProvider>
              </CarouselWrapper>
            </HorizontalContainer>
          </div>

          <div className="booking-section-container">
            <StyledCarouselTitle justifyContent="space-between" style={{ maxWidth: "1641px", margin: "0 auto 27px" }}>
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
