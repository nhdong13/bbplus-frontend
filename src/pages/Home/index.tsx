import IMAGES from "@/assets/images";
import { GradientButton } from "@/components/Button";
import Divider from "@/components/Layout/Divider";
import HorizontalContainer from "@/components/Layout/HorizontalContainer";
import { VerticalContainer } from "@/components/Layout/VerticalContainer";
import BookingTable from "@/components/Table";
import { COLORS } from "@/utils/colors";
import { buttonItems, customItineraries, hotels, popularHolidays } from "@/utils/tempData";
import { CarouselProvider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CarouselSlider from "@/components/Carousel/index";
import { TravelerDropDown } from "@/utils/types/CardHotel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useHome from "./hooks";
import { Helmet } from "react-helmet";

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
  CarouselWrapper,
} from "./styles";


export default function Home() {
  const {
    selectedBooking,
    travelerDropDown,
    selectCreateItinerary,
    handleSelectBookingType,
    showTravelerDropDown,
    slideCount,
    setSlideCount,
    currentSlide,
    setCurrentSlide
  } = useHome();

  return (
    <>
      <Helmet>
        <title>Agent</title>
      </Helmet>
      <div style={{ background: COLORS.cyprus }}>
        <Header />
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
      </div>
      <StyledHomeBody>
        <div className="booking-section-container">
          <HorizontalContainer justifyContent="center">
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
          <HorizontalContainer justifyContent="center">
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
          <HorizontalContainer justifyContent="center">
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
          <HorizontalContainer alignItems="center" justifyContent="space-between" maxWidth="1641px" margin="0 auto 27px">
            <StyledCarouselTitle >
              <span>
                Recent bookings
              </span>
            </StyledCarouselTitle>
            <div style={{ marginRight: "56px" }}>
              <GradientButton
                color={COLORS.gradient1}
                text="VIEW ALL"
                isSelected={true}
                maxWidth="140px"
                fontSize="17px"
                height="42px"
                textPadding="4px 33px"
              />
            </div>
          </HorizontalContainer>
          <BookingTable />
        </div>
      </StyledHomeBody>
      <Footer />
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
