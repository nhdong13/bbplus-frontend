import IMAGES from "@/assets/images";
import CustomHotelOption from "@/components/BookingSearchResult/CustomHotelOption";
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import MainLayout from "@/components/Layout/MainLayout";
import { H1, H5, Typography } from "@/components/Typography";
import { Breadcrumb, BreadcrumbItem } from "@/styles";
import { COLORS } from "@/utils/colors";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  BookingContainer,
  ButtonEditSearch,
  SearchBar,
  SearchItem,
  SearchResultBackground,
  SearchWidgetBackground,
  SearchWidgetContainer,
} from "../SearchResult/styles";

import {
  BookingContent,
  BookingHeader,
  BookingOption,
  Button,
  ButtonNextStep,
  Container,
  ContainerLeft,
  ContainerRight,
  HotelDetail,
  HotelImage,
  HotelInformation,
  HotelPrice,
  Left,
  Link,
  Right,
  ButtonToScroll
} from "./styles";
import AboutHotel from "@/components/BookingSearchResult/AboutHotel";
import { useNavigate, useParams } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { MODAL_TYPES, useGlobalModalContext } from "@/components/Modal";
import { GradientButton } from "@/components/Button";
 
import useFullSearchWidget from "@/components/Search/useFullSearch";
import FullSearchWidget from "@/components/Search/FullSearchWidget";
import { isMobileResponsive } from "@/utils/constant";

const clickToScrollHrefOptions = {
  hotelRules: "hotel_rules_href",
  customization: "customization_href",
  amenities: "amenities_href",
  faq: "faq_href"
}

export default function Booking() {
  const [selectedImage, setSelectedImage] = useState<string>(IMAGES.hotelBg);
  const [hotels, setHotels] = useState<string[]>([]);
  const [searchMode, setSearchMode] = useState<number>(0);
  const isMobile = isMobileResponsive()
  const onSelectImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };
  const navigate = useNavigate();
  const { bookingType } = useParams();

  const { showModal } = useGlobalModalContext();

  const onChangeHotels = (hotelName: string) => {
    setHotels((hotel) => {
      if (!hotel.includes(hotelName)) {
        return [...hotel, hotelName];
      }
      return hotel;
    });
  };
  return (
    <>
      <Helmet>
        <title>Booking</title>
      </Helmet>
      <MainLayout>

        {
          searchMode === 0
          ?
            <SearchResultBackground>
              <SearchBar>
                <SearchItem>
                  <div className="group-h5">
                    <H5 lineHeight="10px" fontWeight="700">
                      Leaving from
                    </H5>
                    <H5 lineHeight="10px" color={COLORS.outerSpace}>
                      Search by city or airport
                    </H5>
                  </div>
                </SearchItem>
                <SearchItem>
                  <div>
                    <H5 lineHeight="10px" fontWeight="700">
                      Going to
                    </H5>
                    <H5 lineHeight="10px" color={COLORS.outerSpace}>
                      Search by destination or hotel
                    </H5>
                  </div>
                </SearchItem>
                <SearchItem className="arrive-days">
                  <div className="group-h5">
                    <H5 lineHeight="10px" fontWeight="700">
                      Arrival Date
                    </H5>
                    <H5 lineHeight="10px" color={COLORS.outerSpace}>
                      Day|Date|Month
                    </H5>
                  </div>
                </SearchItem>
                <SearchItem>
                  <div className="group-h5">
                    <H5 lineHeight="10px" fontWeight="700">
                      No. of days
                    </H5>
                    <H5 lineHeight="10px" color={COLORS.outerSpace}>
                      X nights
                    </H5>
                  </div>
                </SearchItem>
                <SearchItem className="arrive-days border-0">
                  <div className="group-h5">
                    <H5 lineHeight="10px" fontWeight="700">
                      Travellers
                    </H5>
                    <H5 lineHeight="10px" color={COLORS.outerSpace}>
                      X guests (X rooms)
                    </H5>
                  </div>
                </SearchItem>
                <SearchItem className="arrive-days border-0 btn-edit">
                  <ButtonEditSearch onClick={() => setSearchMode(1)}>Edit Search</ButtonEditSearch>
                </SearchItem>
              </SearchBar>
              <div className="btn-mobile" onClick={() => setSearchMode(1)}>Edit Search</div>
            </SearchResultBackground>
            :
            <SearchWidgetBackground>
              <SearchWidgetContainer>
                <div className="line"></div>
                <FullSearchWidget
                  className="full-result"
                  handleSearch={() => setSearchMode(0)}
                />
              </SearchWidgetContainer>
            </SearchWidgetBackground>
        }

        <BookingContainer>
          <BookingHeader>
            <div>
              <Breadcrumb>
                <BreadcrumbItem>
                  <ReactSVG className="icon" src={IMAGES.home} />
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem>Fiji properties</BreadcrumbItem>
                <BreadcrumbItem>Coral coast resorts</BreadcrumbItem>
                <BreadcrumbItem>Warwick Fiji Beach Resort</BreadcrumbItem>
              </Breadcrumb>
              <Link className="desktop">
                <div>
                  <ButtonToScroll href={`#${clickToScrollHrefOptions.customization}`}><Typography>Customization</Typography></ButtonToScroll>
                  <ButtonToScroll href={`#${clickToScrollHrefOptions.amenities}`}><Typography>Amenities</Typography></ButtonToScroll>
                  <ButtonToScroll href={`#${clickToScrollHrefOptions.hotelRules}`}><Typography>House rules</Typography></ButtonToScroll>
                  <ButtonToScroll href={`#${clickToScrollHrefOptions.faq}`}><Typography>FAQ</Typography></ButtonToScroll>
                </div>
              </Link>
            </div>
            <div>
              <BookingOption>
                <div>
                  <Typography
                    className="total-price"
                    fontWeight="bold"
                    padding="0 0 10px"
                  >
                    Total Price
                  </Typography>
                  <div className="price-line">
                    <Typography
                      className="price-p-person"
                      color="#104c94"
                      fontSize="28px"
                      fontWeight="800"
                    >
                      FJ$XXX
                    </Typography>
                    <Typography
                      color={isMobile ? "#FF0000" : "#e00000"}
                      fontSize="16px"
                      fontWeight="normal"
                    >
                      Per person
                    </Typography>
                  </div>

                  <div className="price-line">
                    <Typography
                      className="price-f-pax"
                      fontWeight="800"
                      lineHeight="16px"
                    >
                      FJ$X,XXX
                    </Typography>
                    <Typography color={isMobile ? "#FF0000" : "#e00000"} fontWeight="normal">
                      Total cost pay for X pax
                    </Typography>
                  </div>
                </div>
                <ButtonNextStep
                  onClick={() => {
                    navigate("/step3");
                  }}
                >
                  Next Step
                </ButtonNextStep>
                <Link className="mobile">
                  <div>
                    <Typography>Customization</Typography>
                    <Typography>Amenities</Typography>
                    <Typography>House rules</Typography>
                    <Typography>FAQ</Typography>
                  </div>
                </Link>
              </BookingOption>
            </div>
          </BookingHeader>
          <BookingContent>
            <ContainerLeft></ContainerLeft>
            <Container>
              <Left width="">
                {/* hotel 1 */}
                <HotelInformation>
                  <div className="hotel-info-container">
                    <div className="">
                      <H1 fontSize="30px" color="#004442">
                        Warwick Fiji Beach Resort
                      </H1>
                      <div className="location">
                        <ReactSVG
                          className="icon"
                          src={isMobile? IMAGES.mobileLocation : IMAGES.locationIcon}
                          width="17px"
                          height="25px"
                        />
                        <Typography fontWeight="500">
                          Coral coast, Viti Levu, Fiji
                        </Typography>
                        <Typography color={COLORS.blueFrench} fontWeight="500">
                          Show on map
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <HotelImage>
                    <ImageCarousel
                      width="66px"
                      height="280px"
                      images={[
                        IMAGES.thumb1,
                        IMAGES.thumb2,
                        IMAGES.thumb3,
                        IMAGES.thumb4,
                        IMAGES.hotelBg,
                      ]}
                      borderRadius={isMobile ? "5px" : "17px"}
                      onSelectImage={onSelectImage}
                    />
                    <div>
                      <img className="hotel__image" src={selectedImage} />
                      <div className="overlay"></div>
                    </div>
                  </HotelImage>
                  <HotelDetail>
                    <div className="most-popular">
                      <Typography color={COLORS.toryBlue} fontWeight="500" className="most-popular-text">
                        Most Popular
                      </Typography>
                      {isMobile ? <div className="most-popular-button">
                          <Button
                            border="1px"
                            backgroundColor="transparent"
                            borderRadius="5px"
                            padding="5px"
                            className="room-only"
                          >
                              <Typography fontSize="16px" fontWeight="normal">
                                Room Only
                              </Typography>
                            </Button>

                          <Button
                            border="1px"
                            backgroundColor="transparent"
                            borderRadius="5px"
                            padding="5px"
                          >
                            <Typography
                              fontSize="16px"
                              fontWeight="normal"
                            >
                              Ultimate Holiday
                            </Typography>
                          </Button>
                        </div>
                        :
                        <div className="most-popular-button">
                          <Button
                            width="120px"
                            height="40px"
                            border="2px"
                            backgroundColor="transparent"
                            borderRadius="17px"
                            padding="0"
                            className="room-only"
                          >
                              <Typography fontSize="16px" fontWeight="normal">
                                Room Only
                              </Typography>
                            </Button>

                          <Button
                            width="170px"
                            height="40px"
                            border="2px"
                            backgroundColor="transparent"
                            borderRadius="17px"
                            padding="0"
                          >
                            <Typography
                              fontSize="16px"
                              fontWeight="normal"
                            >
                              Ultimate Holiday
                            </Typography>
                          </Button>
                        </div>
                      }
                    </div>
                    <Typography
                      className="holiday-includes"
                      fontSize={isMobile ? "12px" : "24px"}
                      fontWeight="bold"
                    >
                      Holiday includes
                    </Typography>
                    <ul>
                      <li>
                        <Typography>Meet and greet at airport</Typography>
                      </li>
                      <li>
                        <Typography>Return airport transfer</Typography>
                      </li>
                      <li>
                        <Typography>
                          Accommodation at Warwick Fiji Beach Resort
                        </Typography>
                      </li>
                      <li>
                        <Typography>Ocean view room</Typography>
                      </li>
                      <li>
                        <Typography>Half board meal</Typography>
                      </li>
                      <li>
                        <Typography>1 hour spa treatment</Typography>
                      </li>
                      <li>
                        <Typography>Welcome refreshing drink</Typography>
                      </li>
                      <li>
                        <Typography>Free selected watersport</Typography>
                      </li>
                    </ul>
                    {bookingType !== "multi-hotel" && (
                      <HotelPrice>
                        <Typography className="total-price" fontWeight="bold">
                          Total Price
                        </Typography>
                        <div className="price-line">
                          <Typography
                            className="price-p-person"
                            color="#104c94"
                            fontSize="28px"
                            fontWeight="800"
                          >
                            FJ$XXX
                          </Typography>
                          <Typography
                            color={isMobile ? "#FF0000" : "#e00000"}
                            fontSize="16px"
                            fontWeight="normal"
                          >
                            Per person
                          </Typography>
                        </div>

                        <div className="price-line">
                          <Typography
                            className="price-f-pax"
                            fontWeight="800"
                            lineHeight="16px"
                          >
                            FJ$X,XXX
                          </Typography>
                          <Typography color={isMobile ? "#FF0000" : "#e00000"} fontWeight="normal">
                            Total cost pay for X pax
                          </Typography>
                        </div>
                      </HotelPrice>
                    )}
                    {bookingType !== "multi-hotel" && (
                      <div className="flex col group-btn">
                        <Button
                          width="100%"
                          border="none"
                          backgroundColor="#ff8003"
                          padding="16px 20px"
                          borderRadius="17px"
                        >
                          <Typography
                            fontSize="18px"
                            fontWeight="bold"
                            color="black"
                          >
                            Enter traveler
                          </Typography>
                        </Button>
                        <Button
                          width="100%"
                          border="2px solid #d9bf50"
                          backgroundColor="#fff3d6"
                          borderRadius="17px"
                        >
                          <Typography
                            fontSize="18px"
                            fontWeight={isMobile ? "600" : "bold"}
                            color="black"
                          >
                            Quick Quote
                          </Typography>
                        </Button>
                      </div>
                    )}
                  </HotelDetail>
                </HotelInformation>
                {/* hotel 2 */}
                {bookingType === "multi-hotel" && (
                <HotelInformation>
                  <div className="divider" />
                  <div className="hotel-info-container">
                    <div className="">
                      <H1 fontSize="30px" color="#004442">
                        Fiji Gateway Hotel
                      </H1>
                      <div className="location">
                        <ReactSVG
                          className="icon"
                          src={IMAGES.locationIcon}
                          width="17px"
                          height="25px"
                        />
                        <Typography fontWeight="500">
                          Nadi, Viti Levu, Fiji
                        </Typography>
                        <Typography color={COLORS.blueFrench} fontWeight="500">
                          Show on map
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <HotelImage>
                    <ImageCarousel
                      width="66px"
                      height="280px"
                      images={[
                        IMAGES.thumb1,
                        IMAGES.thumb2,
                        IMAGES.thumb3,
                        IMAGES.thumb4,
                        IMAGES.hotelBg,
                      ]}
                      borderRadius="12px"
                      onSelectImage={onSelectImage}
                    />
                    <div>
                      <img className="hotel__image" src={selectedImage} />
                      <div className="overlay"></div>
                    </div>
                  </HotelImage>
                  <HotelDetail>
                    <div className="most-popular">
                      <Typography color={COLORS.toryBlue} fontWeight="500" className="most-popular-text">
                        Most Popular
                      </Typography>
                      {isMobile ? <div className="most-popular-button">
                          <Button
                            border="1px"
                            backgroundColor="transparent"
                            borderRadius="5px"
                            padding="5px"
                            className="room-only"
                          >
                              <Typography fontSize="16px" fontWeight="normal">
                                Room Only
                              </Typography>
                            </Button>

                          <Button
                            border="1px"
                            backgroundColor="transparent"
                            borderRadius="5px"
                            padding="5px"
                          >
                            <Typography
                              fontSize="16px"
                              fontWeight="normal"
                            >
                              Ultimate Holiday
                            </Typography>
                          </Button>
                        </div>
                        :
                        <div className="most-popular-button">
                          <Button
                            width="120px"
                            height="40px"
                            border="2px"
                            backgroundColor="transparent"
                            borderRadius="17px"
                            padding="0"
                            className="room-only"
                          >
                              <Typography fontSize="16px" fontWeight="normal">
                                Room Only
                              </Typography>
                            </Button>

                          <Button
                            width="170px"
                            height="40px"
                            border="2px"
                            backgroundColor="transparent"
                            borderRadius="17px"
                            padding="0"
                          >
                            <Typography
                              fontSize="16px"
                              fontWeight="normal"
                            >
                              Ultimate Holiday
                            </Typography>
                          </Button>
                        </div>
                      }
                    </div>
                    <Typography
                      className="holiday-includes"
                      fontSize={isMobile ? "12px" : "24px"}
                      fontWeight="bold"
                    >
                      Holiday includes
                    </Typography>
                    <ul>
                      <li>
                        <Typography>Welcome refreshing drink</Typography>
                      </li>
                      <li>
                        <Typography>
                          Accommodation at Fiji Gateway Hotel
                        </Typography>
                      </li>
                      <li>
                        <Typography>Garden view room</Typography>
                      </li>
                    </ul>
                      {bookingType === "multi-hotel" && (
                        <HotelPrice>
                          <Typography className="total-price" fontWeight="bold">
                            Total Price
                          </Typography>
                          <div className="price-line">
                            <Typography
                              className="price-p-person"
                              color="#104c94"
                              fontSize="28px"
                              fontWeight="800"
                            >
                              FJ$XXX
                            </Typography>
                            <Typography
                              color={isMobile ? "#FF0000" : "#e00000"}
                              fontSize="16px"
                              fontWeight="normal"
                            >
                              Per person
                            </Typography>
                          </div>

                          <div className="price-line">
                            <Typography
                              className="price-f-pax"
                              fontWeight="800"
                              lineHeight="16px"
                            >
                              FJ$X,XXX
                            </Typography>
                            <Typography color={isMobile ? "#FF0000" : "#e00000"} fontWeight="normal">
                              Total cost pay for X pax
                            </Typography>
                          </div>
                        </HotelPrice>
                      )}
                    <div className="flex col group-btn">
                      <Button
                        width="100%"
                        border="none"
                        backgroundColor="#ff8003"
                        padding="16px 20px"
                        borderRadius="17px"
                      >
                        <Typography
                          fontSize="18px"
                          fontWeight="bold"
                          color="black"
                        >
                          Enter traveler
                        </Typography>
                      </Button>
                      <Button
                        width="100%"
                        border="2px solid #d9bf50"
                        backgroundColor="#fff3d6"
                        borderRadius="17px"
                      >
                        <Typography
                          fontSize="18px"
                          fontWeight={isMobile ? "600" : "bold"}
                          color="black"
                        >
                          Quick Quote
                        </Typography>
                      </Button>
                    </div>
                  </HotelDetail>
                </HotelInformation>)}
              </Left>
              <Right width="">
                <CustomHotelOption onChangeHotels={onChangeHotels} />
                {bookingType === "multi-hotel" && (
                  <CustomHotelOption onChangeHotels={onChangeHotels} />
                )}
              </Right>
            </Container>
            <ContainerRight></ContainerRight>
          </BookingContent>
          {hotels.length > 1 && (
            <div className="selected-hotels">
              {hotels.map((hotelName, index) => (
                <GradientButton
                  isSelected
                  text={hotelName}
                  color={index === 1 ? "white" : COLORS.gradient2}
                  borderRadius="17px"
                  fontWeight="bold"
                  borderGradient={index === 1 ? COLORS.borderGradient : ""}
                  borderWidth={index === 1 ? "2px" : ""}
                  textColor={index === 1 ? COLORS.blueRibbon : ""}
                  fontSize="18px"
                />
              ))}
            </div>
          )}
          <AboutHotel
            clickToScrollHrefOptions = {clickToScrollHrefOptions}
            bookingType = {bookingType || ""}
          />
        </BookingContainer>
      </MainLayout>
    </>
  );
}
