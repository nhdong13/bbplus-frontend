import { COLORS } from "@/utils/colors";
import { H5 } from "@/components/Typography";
import {
  SearchResultBackground,
  SearchBar,
  SearchItem,
  ButtonEditSearch,
} from "./styles";
import useFullSearchWidget from "@/components/Search/useFullSearch";

interface IPops {
  onClickEditSearch: () => void,
}
export default function SearchView({ onClickEditSearch }: IPops) {

  const {
    selectedLeaving, selectedGoing,
    dates, totalDay, totalGuest, dataFilter
  } = useFullSearchWidget();

  return (
    <SearchResultBackground>
      <SearchBar>
        <SearchItem>
          <div className="group-h5">
            {
              selectedLeaving
                ?
                <>
                  <H5 lineHeight="10px" fontWeight="700">Leaving from</H5>
                  <H5 lineHeight="10px" color={COLORS.outerSpace}>{selectedLeaving?.label}</H5>                
                </>
                :
                <>
                  <H5 lineHeight="10px" fontWeight="700">Leaving from</H5>
                  <H5 lineHeight="10px" color={COLORS.outerSpace}>Search by city or airport</H5>
                </>
            }

          </div>
        </SearchItem>
        <SearchItem>
          <div className="group-h5">
            {
              selectedGoing
                ?
                <>
                  <H5 lineHeight="10px" fontWeight="700">Going to</H5>
                  <H5 lineHeight="10px" color={COLORS.outerSpace}>{selectedGoing?.label}</H5>                
                </>
                :
                <>
                  <H5 lineHeight="10px" fontWeight="700">Going to</H5>
                  <H5 lineHeight="10px" color={COLORS.outerSpace}>Search by destination or hotel</H5>
                </>
            }

          </div>
        </SearchItem>
        <SearchItem className="arrive-days">
          <div className="group-h5">
            <H5 lineHeight="10px" fontWeight="700">Arrival Date</H5>
            <H5 lineHeight="10px" color={COLORS.outerSpace}>{dates.length > 0 ? dates[0]?.format("DD MMM YYYY") : "Day|Date|Month"}</H5>
          </div>
        </SearchItem>
        <SearchItem>
          <div className="group-h5">
            <H5 lineHeight="10px" fontWeight="700">No. of days</H5>
            <H5 lineHeight="10px" color={COLORS.outerSpace}>{totalDay} nights</H5>
          </div>
        </SearchItem>
        <SearchItem className="arrive-days border-0">
          <div className="group-h5">
            <H5 lineHeight="10px" fontWeight="700">Travellers</H5>
            <H5 lineHeight="10px" color={COLORS.outerSpace}>{totalGuest} guests ({dataFilter.length} rooms)</H5>
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
