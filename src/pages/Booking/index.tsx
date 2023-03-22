import IMAGES from "@/assets/images";
import CustomHotelOption from "@/components/BookingSearchResult/CustomHotelOption";
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import MainLayout from "@/components/Layout/MainLayout";
import { H1, H5, Typography } from "@/components/Typography";
import { Breadcrumb, BreadcrumbItem } from "@/styles";
import { COLORS } from "@/utils/colors";
import { useState } from "react";
import { Helmet } from "react-helmet";
import {
  BookingContainer,
  ButtonEditSearch,
  SearchBar,
  SearchItem,
  SearchResultBackground,
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
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { MODAL_TYPES, useGlobalModalContext } from "@/components/Modal";
import { GradientButton } from "@/components/Button";

const clickToScrollHrefOptions = {
  hotelRules: "hotel_rules_href",
  customization: "customization_href",
  amenities: "amenities_href",
  faq: "faq_href"
}

export default function Booking() {
  const [selectedImage, setSelectedImage] = useState<string>(IMAGES.hotelBg);
  const [hotels, setHotels] = useState<string[]>([]);

  const onSelectImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };
  const navigate = useNavigate();
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
              <ButtonEditSearch>Edit Search</ButtonEditSearch>
            </SearchItem>
          </SearchBar>
          <div className="btn-mobile">Edit Search</div>
        </SearchResultBackground>
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
                      color="#e00000"
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
                    <Typography color="#e00000" fontWeight="normal">
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
                <HotelInformation>
                  <div className="hotel-info-container">
                    <div className="">
                      <H1 fontSize="30px" color="#004442">
                        Warwick Fiji Beach Resort
                      </H1>
                      <div className="location">
                        <ReactSVG
                          className="icon"
                          src={IMAGES.locationIcon}
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
                      borderRadius="12px"
                      onSelectImage={onSelectImage}
                    />
                    <div>
                      <img className="hotel__image" src={selectedImage} />
                      <div className="overlay"></div>
                    </div>
                  </HotelImage>
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
                        color="#e00000"
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
                      <Typography color="#e00000" fontWeight="normal">
                        Total cost pay for X pax
                      </Typography>
                    </div>
                  </HotelPrice>
                  <HotelDetail>
                    <Typography
                      className="holiday-includes"
                      fontSize="24px"
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
                    <div className="flex col group-btn">
                      <Button
                        width="100%"
                        border="none"
                        backgroundColor="#ff8003"
                        padding="16px 20px"
                        borderRadius="9px"
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
                        borderRadius="9px"
                      >
                        <Typography
                          fontSize="18px"
                          fontWeight="bold"
                          color="black"
                        >
                          Quick Quote
                        </Typography>
                      </Button>
                    </div>
                  </HotelDetail>
                </HotelInformation>
              </Left>
              <Right width="">
                <CustomHotelOption onChangeHotels={onChangeHotels} />
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
                  borderRadius="8px"
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
          />
        </BookingContainer>
      </MainLayout>
    </>
  );
}
