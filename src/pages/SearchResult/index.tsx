import IMAGES from "@/assets/images";
import { GradientButton } from "@/components/Button";
import { FormInput } from "@/components/FormInput";
import MainLayout from "@/components/Layout/MainLayout";
import BookingSearchResult from "@/components/BookingSearchResult";

import { H2 } from "@/components/Typography";
import { COLORS } from "@/utils/colors";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SearchResultContainer,
  SearchContent,
  SearchItem
} from "./styles";
import useResetPassword from "./hooks";
import useWindowSize from "@/utils/windowResize";

export default function SearchResult() {

  const wd = useWindowSize();

  return (
    <>
      <MainLayout>
        <SearchResultContainer>
          <SearchContent>
            <SearchItem>
              <p>Leaving from</p>
              <p>Search by city or airport</p>
            </SearchItem>
            <SearchItem>
              <p>Going to</p>
              <p>Search by destination or hotel</p>
            </SearchItem>
            <SearchItem>
              <p>Arrival Date</p>
              <p>Day|Date|Month</p>
            </SearchItem>
            <SearchItem>
              <p>Travellers</p>
              <p>X Guest</p>
            </SearchItem>
          </SearchContent>

        </SearchResultContainer>
        <BookingSearchResult />
      </MainLayout>
    </>
  );
}
