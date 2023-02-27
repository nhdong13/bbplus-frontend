import IMAGES from "@/assets/images";
import { BREAKPOINTS } from "@/utils/breakpoints";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import styled from "styled-components";

const SearchResultContainer = styled.div.attrs(
  (props: {

  }) => props
)`
  height: 130px;
  background: #EFEFEF;
  
`;

const SearchContent = styled.div`
  max-width: 1400px;
  padding: 0 20px;
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  
`;

const SearchItem = styled.div`
  border-right: 2px solid #C9C9C9;
  cursor: pointer;
  padding: 0 42px;
  height: 100%;
`;



export {
  SearchResultContainer,
  SearchContent,
  SearchItem,
};
