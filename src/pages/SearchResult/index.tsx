
import { GradientButton } from "@/components/Button";
import Select from "@/components/Select";
import MainLayout from "@/components/Layout/MainLayout";
import { H4, H5 } from "@/components/Typography";
import { COLORS } from "@/utils/colors";

import {
  SearchResultContainer,
  Breadcrumb,
  BreadcrumbItem,
  SearchOption,
  SearchOptionItem,
  SearchOptionSelect,
  SearchWidgetBackground,
  SearchWidgetContainer
} from "./styles";
import SearchView from './SearchView'
import GridView from "./GridView";
import Package from "./PackageView";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FullSearchWidget2 from "@/components/Search/FullSearchWidget2";
import useFullSearchWidget from "@/components/Search/useFullSearch";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function SearchResult() {
  const [type, setType] = useState<number>(0);
  const [searchParam] = useSearchParams();
  const [valueFilter, setValueFilter] = useState<any>()
  const [searchMode, setSearchMode] = useState<number>(0);
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
  const checkIn: string = searchParam.get('checkIn') || 'Day|Date|Month';
  const total_date: string = searchParam.get('total_date') || 'X';
  const navigate = useNavigate();

  const handleSearch = (checkIn: string, checkOut: string) => {
    navigate({
      pathname: "/search-result",
      search: createSearchParams({
        checkIn,
        checkOut
      }).toString()
    });
    setSearchMode(0)
  }

  const {
    totalDates, setTotalDates,
    getArriveDate, setGetArriveDate,

  } = useFullSearchWidget();

  useEffect(() => {
    setTotalDates(parseInt(total_date))
    setGetArriveDate(checkIn)
  }, [checkIn, total_date])
  const Abc = (e: number) => {
    setTotalDates(e)
    console.log(e)
  }
  return (
    <>
      <MainLayout>
        {
          searchMode === 1
            ?
            <SearchView
              checkIn={checkIn}
              total_date={totalDates}
              onClickEditSearch={() => setSearchMode(1)}
            />
            :
            <SearchWidgetBackground>
              <SearchWidgetContainer>
                <div className="line"></div>
                <FullSearchWidget2
                  className="full-result"
                  handleSearch={handleSearch}
                // totalDates={totalDates}
                // getArriveDate={getArriveDate}
                // setTotalDates={(e: number) => Abc(e)}
                // setGetArriveDate={(e: string) => setGetArriveDate(e)}
                />
              </SearchWidgetContainer>
            </SearchWidgetBackground>
        }
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
            {type === 1 && <div className="title-mobile">Fiji: 134 properties found</div>}
          </SearchOption>
        </SearchResultContainer>
        {
          type === 0
            ?
            <GridView checkIn={checkIn} total_date={total_date} />
            :
            <Package />

        }
      </MainLayout>
    </>
  );
}
