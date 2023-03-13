
import { GradientButton } from "@/components/Button";
import Select from "@/components/Select";
import MainLayout from "@/components/Layout/MainLayout";
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
} from "./styles";

import GridView from "./GridView";
import Package from "./PackageView";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchResult() {
  const [type, setType] = useState<number>(0);
  const [searchParam] = useSearchParams();
  const [valueFilter, setValueFilter] = useState<any>()
  const optionFilter = [
    { _id: 1, label: "Show All" },
    { _id: 2, label: "Apartments" },
    { _id: 3, label: "Resorts" },
    { _id: 4, label: "Hotels" },
    { _id: 5, label: "Villas" },
    { _id: 6, label: "Island resorts" },
    { _id: 7, label: "Guest homes" },
    { _id: 8, label: "Backpackers" },
  ]
  
  
  
  const optionSort = [
    { _id: 1, label: "Recommmended" },
    { _id: 2, label: "Price: low to high" },
    { _id: 3, label: "Price: high to low" },
    { _id: 4, label: "Star rating" },
  ]
  const arrival_date: string = searchParam.get('arrival_date') || 'Day|Date|Month';
  const total_date: string = searchParam.get('total_date') || 'X';

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
                <H5 lineHeight="10px" color={COLORS.outerSpace}>{arrival_date}</H5>
              </div>
            </SearchItem>
            <SearchItem>
              <div className="group-h5">
                <H5 lineHeight="10px" fontWeight="700">No. of days</H5>
                <H5 lineHeight="10px" color={COLORS.outerSpace}>{total_date} nights</H5>
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
              <div className="title-desk">Fiji: 134 properties found</div>
              <div className="flex">
                <Select
                  customLabel={<><span>Filter by:</span><span style={{ color: COLORS.blueRibbon }}>&nbsp;{valueFilter ? valueFilter.label : 'Select'}</span></>}
                  options={optionFilter}
                  marginTop="0px"
                  maxHeight="48px"
                  handleChange={(item: { _id: number | string, }) => setValueFilter(item)}
                />
                <Select
                  customLabel={<><span>Sort by:</span><span style={{ color: COLORS.blueRibbon }}>&nbsp;Select</span></>}
                  options={optionSort}
                  marginTop="0px"
                  maxHeight="48px"
                />
              </div>
            </SearchOptionItem>
            <div className="group-right">
              <SearchOptionItem className="choose">
                <div className="mt-10">Choose your option</div>
                <div className="flex-option">
                  <div className={`btn ${type === 0 ? ' active' : ''}`} onClick={() => setType(0)}>Grid view</div>
                  <div className={`btn ${type === 1 ? ' active' : ''}`} onClick={() => setType(1)}>Packages</div>
                </div>
              </SearchOptionItem>
              <SearchOptionSelect>
                <SearchOptionItem>
                  <div className="mt-10">Markup</div>
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
            </div>
            <div className="title-mobile">Fiji: 134 properties found</div>
          </SearchOption>


          {/* {
            [1, 2, 3].map(el => {
              return (
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
        {
          type === 0
            ?
            <GridView total_date={total_date}/>
            :
            <Package />

        }
      </MainLayout>
    </>
  );
}
