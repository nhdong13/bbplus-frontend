import IMAGES from "@/assets/images";
import HotelResults from "@/components/BookingSearchResult/HotelResults";
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
  Col,
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
} from "./styles";
import AboutHotel from "@/components/BookingSearchResult/AboutHotel";

export default function Booking() {
  const [selectedImage, setSelectedImage] = useState<string>(IMAGES.hotelBg);
  const onSelectImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
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
            <Col>
              <Breadcrumb>
                <BreadcrumbItem>HOME</BreadcrumbItem>
                <BreadcrumbItem>Fiji properties</BreadcrumbItem>
                <BreadcrumbItem>Coral coast resorts</BreadcrumbItem>
                <BreadcrumbItem>Warwick Fiji Beach Resort</BreadcrumbItem>
              </Breadcrumb>
              <Link>
                <div>
                  <Typography>Customization</Typography>
                  <Typography>Amenities</Typography>
                  <Typography>House rules</Typography>
                  <Typography>FAQ</Typography>
                </div>
              </Link>
            </Col>
            <div>
              <BookingOption>
                <div>
                  <Typography fontWeight="bold">Total Price</Typography>
                  <Typography color="#104c94" fontSize="28px" fontWeight="800">
                    FJ $XXX &nbsp;
                    <Typography
                      color="#e00000"
                      fontSize="16px"
                      fontWeight="normal"
                    >
                      per person
                    </Typography>
                  </Typography>
                  <Typography fontWeight="800" lineHeight="16px">
                    FJ $X,XXX &nbsp;
                    <Typography color="#e00000" fontWeight="normal">
                      Total cost pay for X pax
                    </Typography>
                  </Typography>
                </div>
                <ButtonNextStep>Next Step</ButtonNextStep>
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
                        <img
                          src={IMAGES.locationIcon}
                          alt="location"
                          width="17px"
                          height="25px"
                        />
                        <Typography fontWeight="500">
                          Coral coast, Viti Levu, Fiji
                        </Typography>
                        <Typography color="#005cff" fontWeight="500">
                          Show on map
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <HotelImage>
                    <ImageCarousel
                      data={[
                        IMAGES.thumb1,
                        IMAGES.thumb2,
                        IMAGES.thumb3,
                        IMAGES.thumb4,
                        IMAGES.hotelBg,
                      ]}
                      onSelectImage={onSelectImage}
                    />
                    <div>
                      <img className="hotel__image" src={selectedImage} />
                      <div className="overlay"></div>
                    </div>
                  </HotelImage>
                  <HotelPrice>
                    <Typography fontWeight="bold">Total Price</Typography>
                    <Typography
                      color="#104c94"
                      fontSize="28px"
                      fontWeight="800"
                    >
                      FJ $XXX &nbsp;
                      <Typography
                        color="#e00000"
                        fontSize="16px"
                        fontWeight="normal"
                      >
                        Per person
                      </Typography>
                    </Typography>
                    <Typography fontWeight="800" lineHeight="16px">
                      FJ $X,XXX &nbsp;
                      <Typography color="#e00000" fontWeight="normal">
                        Total cost pay for X pax
                      </Typography>
                    </Typography>
                  </HotelPrice>
                  <HotelDetail>
                    <div className="flex justify-between items-center">
                      <Typography
                        fontSize="18px"
                        color="#104c94"
                        fontWeight="bold"
                        lineHeight="18px"
                      >
                        Most Popular
                      </Typography>
                      <div className="action">
                        <Button>Room Only</Button>
                        <Button>Ultimate Holiday</Button>
                      </div>
                    </div>
                    <Typography fontSize="18px">Holiday includes</Typography>
                    <ul>
                      <li>
                        <Typography>Meet and greet at airport</Typography>
                      </li>
                      <li>
                        <Typography>Return airport transfer</Typography>
                      </li>
                      <li>
                        <Typography>Garden view room</Typography>
                      </li>
                      <li>
                        <Typography>Welcome refreshing drink</Typography>
                      </li>
                      <li>
                        <Typography>Half board meal</Typography>
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
                      >
                        <Typography
                          fontSize="18px"
                          fontWeight="bold"
                          color="black"
                        >
                          Enter traveller details
                        </Typography>
                      </Button>
                      <Button
                        width="100%"
                        border="2px solid #d9bf50"
                        backgroundColor="#fff3d6"
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
                <HotelResults />
              </Right>
            </Container>
            <ContainerRight></ContainerRight>
          </BookingContent>
          <AboutHotel />
        </BookingContainer>
      </MainLayout>
    </>
  );
}
