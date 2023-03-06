
import { GradientButton } from "@/components/Button";
import Select from "@/components/Select";
import IMAGES from "@/assets/images";
import MainLayout from "@/components/Layout/MainLayout";
import BookingSearchResult from "@/components/BookingSearchResult";
import HorizontalContainer from "@/components/Layout/HorizontalContainer";
import { CarouselProvider } from "pure-react-carousel";
import { hotels } from "@/utils/tempData";
import CarouselSlider from "@/components/Carousel/index";
import { H4, H5 } from "@/components/Typography";
import { COLORS } from "@/utils/colors";

import {
  SearchResultBackground,
  SearchBar,
  SearchItem,
  ButtonEditSearch,
  SearchResultContainer,
  Breadcrumb,
  BreadcrumbItem,
  SearchOption,
  SearchOptionItem,
  SearchOptionSelect,
  ListResultContainer,
  HotelCardContainer,
  ShowMapButton,
  CarouselWrapper,
  GridView,
  GridViewTitle,
  GridRoom,
  GridRoomItem,
} from "./styles";
import DateView from './DateView'
import useHome from "@/pages/Home/hooks";
import _ from "lodash";

export default function SearchResult() {

  const {
    slideCount,
    setSlideCount,
    currentSlide,
    setCurrentSlide
  } = useHome();

  return (
    <>
      <MainLayout>
        <SearchResultBackground>
          <SearchBar>
            <SearchItem>
              <div className="group-h5">
                <H5 lineHeight="10px" fontWeight="700">Leaving from</H5>
                <H5 lineHeight="10px" color={COLORS.outerSpace}>Search by city or airport</H5>
              </div>
            </SearchItem>
            <SearchItem>
              <div>
                <H5 lineHeight="10px" fontWeight="700">Going to</H5>
                <H5 lineHeight="10px" color={COLORS.outerSpace}>Search by destination or hotel</H5>
              </div>
            </SearchItem>
            <SearchItem className="arrive-days">
              <div className="group-h5">
                <H5 lineHeight="10px" fontWeight="700">Arrival Date</H5>
                <H5 lineHeight="10px" color={COLORS.outerSpace}>Day|Date|Month</H5>
              </div>
            </SearchItem>
            <SearchItem>
              <div className="group-h5">
                <H5 lineHeight="10px" fontWeight="700">No. of days</H5>
                <H5 lineHeight="10px" color={COLORS.outerSpace}>X nights</H5>
              </div>
            </SearchItem>
            <SearchItem className="arrive-days border-0">
              <div className="group-h5">
                <H5 lineHeight="10px" fontWeight="700">Travellers</H5>
                <H5 lineHeight="10px" color={COLORS.outerSpace}>X guests (X rooms)</H5>
              </div>
            </SearchItem>
            <SearchItem className="arrive-days border-0 btn-edit">
              <ButtonEditSearch>Edit Search</ButtonEditSearch>
            </SearchItem>
          </SearchBar>
          <div className="btn-mobile">Edit Search</div>
        </SearchResultBackground>
        <SearchResultContainer>
          <Breadcrumb>
            <BreadcrumbItem>HOME</BreadcrumbItem>
            <BreadcrumbItem>Fiji properties</BreadcrumbItem>
            <BreadcrumbItem>Coral coast resorts</BreadcrumbItem>
          </Breadcrumb>
          <SearchOption>
            <SearchOptionItem className="title">
              <div>Fiji: 134 properties found</div>
              <div className="flex">
                <Select
                  label="Filter by: Select"
                  marginTop="0px"
                  maxHeight="48px"
                  typeIconDown={true}
                />
                <Select
                  label="Sort by: Select"
                  marginTop="0px"
                  typeIconDown={true}
                  maxHeight="48px"
                />
              </div>
            </SearchOptionItem>
            <SearchOptionItem className="choose">
              <div>Choose your option</div>
              <div className="flex-option">
                <div className="btn active">Grid view</div>
                <div className="btn">Packages</div>
              </div>
            </SearchOptionItem>
            <SearchOptionSelect>
              <SearchOptionItem>
                <div>Markup</div>
                <div className="flex">
                  <input value={"20%"} />
                  <div>
                    <GradientButton
                      color={COLORS.gradient1}
                      text="Apply"
                      isSelected={true}
                      maxWidth="90px"
                      height="48px"
                    />
                  </div>
                </div>
              </SearchOptionItem>
            </SearchOptionSelect>
          </SearchOption>
          <DateView />
          {
            _.range(3).map((el, idx) => {
              return <GridView key={idx}>
                <GridViewTitle className={idx === 0 ? 'first' : ''}>
                  <div>Warwick Fiji Beach Resort</div>
                  <div className="rating-container">
                    <img src={IMAGES.iconStar} width="14px" height="26px" />
                    <span>4.1</span>
                  </div>
                </GridViewTitle>
                <GridRoom>
                  {
                    _.range(5).map((el2, index) => {
                      return (
                        <GridRoomItem key={index}>
                          <div className="room">Room Category {index + 1}</div>
                          {
                            _.range(15).map((el2, index2) => {
                              return (
                                <div className={`room-item ${index2 === 3 || index2 === 5 ? 'room-active' : ''}`} key={index2}>$XXX</div>
                              )
                            })
                          }
                        </GridRoomItem>
                      )
                    })
                  }
                </GridRoom>
              </GridView>
            })
          }
          {/* {
            [1, 2, 3].map(el => {
              return (-
                <ListResultContainer key={el}>
                  <HotelCardContainer className="hotels">
                    <div className="hotel-card__container">
                      <div className="hotel-card__background-image">
                        <div className={"rating"}>
                          <div className="rating-container">
                            <img src={IMAGES.iconStar} width="14px" height="26px" />
                            <span>4.1</span>
                          </div>
                        </div>
                      </div>
                      <div className="hotel-card__info-container">
                        <div className="hotel-card__info">
                          <H4>Warwick Fiji Beach Resort </H4>
                          <div className="location">
                            <img src={IMAGES.locationIcon} alt="location" width="17px" height="25px" />
                            <p>Coral coast, Viti Levu, Fiji</p>
                          </div>
                        </div>
                        <div className="hotel-card__button">
                          <p>*Accessible by road transfer</p>
                          <ShowMapButton>
                            <H5>Show on map</H5>
                          </ShowMapButton>
                        </div>
                      </div>
                    </div>
                  </HotelCardContainer>
                  <HorizontalContainer justifyContent="center" className="booking-carousel">
                    <CarouselWrapper className="carousel-container">
                      <CarouselProvider
                        visibleSlides={3}
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
                          carouselTitle={""}
                          typeCard="booking-card"
                        />
                      </CarouselProvider>
                    </CarouselWrapper>
                  </HorizontalContainer>
                </ListResultContainer>
              )
            })
          } */}
        </SearchResultContainer>
      </MainLayout>
    </>
  );
}
