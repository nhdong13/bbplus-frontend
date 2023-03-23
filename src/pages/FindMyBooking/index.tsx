
import { useState } from "react"

import MainLayout from "@/components/Layout/MainLayout";
import BookingTable from "@/components/Table";
import { H5 } from "@/components/Typography";
import { COLORS } from "@/utils/colors";
import useFullSearchWidget from "@/components/Search/useFullSearch";
import FullSearchWidget from "@/components/Search/FullSearchWidget";

import {
  SearchResultBackground,
  SearchBar,
  SearchItem,
  ButtonEditSearch,
  SearchResultContainer,
} from "./styles";

import {
  SearchWidgetBackground,
  SearchWidgetContainer,
} from "../SearchResult/styles";

export default function FindMyBooking() {
  const [searchMode, setSearchMode] = useState<number>(0);

  const { filterFindMyBooking } = useFullSearchWidget();

  return (
    <>
      <MainLayout>
        {
          searchMode === 0
            ?
            <SearchResultBackground>
              <SearchBar>
                <SearchItem className="border-0">
                  <div className="group-h5">
                    <H5 lineHeight="10px" fontWeight="700">Bedbank Plus Booking ID</H5>
                    <H5 lineHeight="10px" color={COLORS.outerSpace}>
                      {filterFindMyBooking?.booking_id || "Enter the bedbank plus booking ID"}
                    </H5>
                  </div>
                </SearchItem>
                <SearchItem className="guest-email border-0">
                  <div className="group-h5">
                    <H5 lineHeight="10px" fontWeight="700">Guest Email</H5>
                    <H5 lineHeight="10px" color={COLORS.outerSpace}>
                      {filterFindMyBooking?.guest_email || "Enter the email address"}
                    </H5>
                  </div>
                </SearchItem>
                <SearchItem className="edit-search border-0 btn-edit">
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


        <SearchResultContainer>
          <div className="booking-section-container">
            <BookingTable />
          </div>
        </SearchResultContainer>
      </MainLayout>
    </>
  );
}
