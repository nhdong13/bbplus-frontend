import IMAGES from "@/assets/images";
import { BREAKPOINTS } from "@/utils/breakpoints";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import styled from "styled-components";

const SearchResultBackground = styled.div.attrs(
  (props: {

  }) => props
)`
  height: 130px;
  background: #EFEFEF;
  .btn-mobile {
    display: none;
    height: 43px;
    background: ${COLORS.white};
    margin-top: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
    font-size: 10px;
  }

  .booking-section-container {
    margin: 20px;
  }

  @media ${BREAKPOINTS.laptop} {
    background: ${COLORS.cyprus};
    height: auto;
    padding: 10px;
    .btn-mobile {
      display: flex;
      align-items: center;
      justify-content: center
    }
  }
  .guest-email {
    border-right: none;
    flex: 2;
  }

  .edit-search {
    border-right: none;
    justify-content: end;
  }
`;

const SearchBar = styled.div`
  max-width: 1400px;
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media ${BREAKPOINTS.laptop} {
    background: ${COLORS.white};
    border-radius: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0;
    .border-0 {
      border-bottom: 0;
      display: flex;
      justify-content: center;
      text-align: center;
      grid-column: 1 / -1;
    }
    .btn-edit {
      display: none;
    }

  }
`;

const SearchItem = styled.div`
  border-right: 2px solid ${COLORS.silver};
  height: 100%;
  padding: 0px 35px;
  display: flex;
  align-items: center;
  flex: 1;
  h5 {
    line-height: 20px;
    padding: 8px 0px;
  }
  @media ${BREAKPOINTS.laptop} {
    border-right: 0;
    border-bottom: 1px solid ${COLORS.parkinglotGray};
    padding: 0 20px;
    display: flex;
    justify-content: center;
    h5 {
      font-size: 10px;
      line-height: 14px;
      padding: 0;
      text-align: center;
      &:first-child {
        margin-bottom: 10px;
      }
    }
    .group-h5 {
      padding: 20px 0;
    }
  }
`;

const ButtonEditSearch = styled.div`
  cursor: pointer;
  width: 174px;
  height : 58px;
  border: 2px solid ${COLORS.greenBlue};
  background: ${COLORS.white};
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchResultContainer = styled.div`
  max-width: 1400px;
  margin: 60px auto;
  width: 100%;
  height: 100%;

  .booking-section-container {
    margin: 0 35px;

    @media ${BREAKPOINTS.laptop} {
      padding: 10px;
      margin: 0;
    }

    .booking-table {
      @media ${BREAKPOINTS.desktopLg} {
        width: 100%;
      }
    }
  }

  @media ${BREAKPOINTS.laptop} {
    padding: 0;
  }
`;

export {
  SearchResultBackground,
  SearchBar,
  SearchItem,
  ButtonEditSearch,
  SearchResultContainer,
};
