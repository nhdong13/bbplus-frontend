import { GradientButton } from "@/components/Button";
import HorizontalContainer from "@/components/Layout/HorizontalContainer";
import { VerticalContainer } from "@/components/Layout/VerticalContainer";
import BookingTable from "@/components/Table";
import { COLORS } from "@/utils/colors";
import { customItineraries, hotels, popularHolidays } from "@/utils/tempData";
import { CarouselProvider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CarouselSlider from "@/components/Carousel/index";
import Footer from "@/components/Footer";
import useHome from "./hooks";
import { Helmet } from "react-helmet";
import FullSearchWidget from "@/components/Search/FullSearchWidget";
import MainLayout from "@/components/Layout/MainLayout";
import {
  StyledHome,
  HomepageWelcomeTitle,
  StyledHomeBody,
  StyledCarouselTitle,
  CarouselWrapper,
} from "./styles";
import { H1, H2 } from "@/components/Typography";

export default function Home() {
  const {
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
      <MainLayout hasDivider>
        <div style={{ background: COLORS.cyprus }}>
          <StyledHome>
            <VerticalContainer
              maxWidth={"1400px"}
              padding={"20px 10px 150px"}
              margin={"auto"}
            >
              <HomepageWelcomeTitle>
                <H2
                  color={COLORS.anakiwa}
                >Hello, Mark.</H2>
                <H1
                  color={COLORS.white}
                >At Bedbank Plus, we believe in ease and simplicity</H1>
              </HomepageWelcomeTitle>
              <FullSearchWidget />
            </VerticalContainer>
          </StyledHome>
        </div>
        <StyledHomeBody>
          <div className="booking-section-container">
            <HorizontalContainer justifyContent="center" className="booking-carousel">
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
            <HorizontalContainer justifyContent="center" className="booking-carousel">
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
            <HorizontalContainer justifyContent="center" className="booking-carousel">
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
            <HorizontalContainer alignItems="center" justifyContent="space-between!important" width="auto!important" maxWidth="1440px" padding="0 20px">
              <StyledCarouselTitle >
                <span>
                  Recent bookings
                </span>
              </StyledCarouselTitle>
              <div className="recent-booking-table-button">
                <GradientButton
                  color={COLORS.gradient1}
                  text="VIEW ALL"
                  isSelected={true}
                  maxWidth="140px"
                  fontSize="16px"
                  height="42px"
                  textPadding="4px 33px"
                />
              </div>
            </HorizontalContainer>
            <BookingTable />
          </div>
        </StyledHomeBody>
      </MainLayout>
    </>
  )
}

