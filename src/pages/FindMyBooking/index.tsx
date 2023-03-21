
import MainLayout from "@/components/Layout/MainLayout";
import BookingTable from "@/components/Table";
import { H5 } from "@/components/Typography";
import { COLORS } from "@/utils/colors";

import {
  SearchResultBackground,
  SearchBar,
  SearchItem,
  ButtonEditSearch,
  SearchResultContainer,
} from "./styles";

export default function SearchResult() {
  return (
    <>
      <MainLayout>
        <SearchResultBackground>
          <SearchBar>
            <SearchItem className="border-0">
              <div className="group-h5">
                <H5 lineHeight="10px" fontWeight="700">Bedbank Plus Booking ID</H5>
                <H5 lineHeight="10px" color={COLORS.outerSpace}>Enter the bedbank plus booking ID</H5>
              </div>
            </SearchItem>
            <SearchItem className="guest-email border-0">
              <div className="group-h5">
                <H5 lineHeight="10px" fontWeight="700">Guest Email</H5>
                <H5 lineHeight="10px" color={COLORS.outerSpace}>Enter the email address</H5>
              </div>
            </SearchItem>
            <SearchItem className="edit-search border-0 btn-edit">
              <ButtonEditSearch>Edit Search</ButtonEditSearch>
            </SearchItem>
          </SearchBar>
          <div className="btn-mobile">Edit Search</div>
        </SearchResultBackground>

        <SearchResultContainer>
          <div className="booking-section-container">
            <BookingTable />
          </div>
        </SearchResultContainer>
      </MainLayout>
    </>
  );
}
