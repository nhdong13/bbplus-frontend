import { COLORS } from "@/utils/colors";
import { H5 } from "@/components/Typography";
import {
  SearchResultBackground,
  SearchBar,
  SearchItem,
  ButtonEditSearch,
} from "./styles";

interface IPops {
  arrival_date: string,
  total_date: string,
  onClickEditSearch: () => void,
}
export default function SearchView({ arrival_date, total_date, onClickEditSearch }: IPops) {
  return (
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
          <ButtonEditSearch onClick={onClickEditSearch}>Edit Search</ButtonEditSearch>
        </SearchItem>
      </SearchBar>
      <div className="btn-mobile" onClick={onClickEditSearch}>Edit Search</div>
    </SearchResultBackground>
  );
}
