import IMAGES from "@/assets/images";
import { BREAKPOINTS } from "@/utils/breakpoints";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import styled from "styled-components";

const StyledSelectContainer = styled.div.attrs(
  (props: {
    textColor?: string;
    fontSize?: string;
    iconUrl?: string;
    marginTop?: string;
    maxHeight?: string;
    valid?: boolean;
    width?: string,
    padding?: string,
  }) => props
)`
  position: relative;
  border-radius: 4.5px;
  border: 2px solid ${COLORS.black};
  width: ${(props) => props.width || "100%"};
  margin-top: ${(props) => props.marginTop || "26.9px"};
  
  .icon {
    background-image: url(${(props) => props.iconUrl || ""});
    height: 27.12px;
    width: 27.12px;
    padding: 4px;
    position: absolute;
    box-sizing: border-box;
    top: 50%;
    right: 54.3px;
    transform: translateY(-50%);
    display: ${(props) => (props.iconUrl ? "inline-block" : "none")};
    background-repeat: no-repeat;
  }

  .label {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${(props) => (props.maxHeight ? props.maxHeight : "71px")};
    width: 100%;
    box-sizing: border-box;
    padding: ${(props) => (props.padding ? props.padding : "28px")};
    color: ${(props) => props.textColor || COLORS.black};
    font-family: ${FONTS.manrope};
    font-size: ${(props) => props.fontSize || "16px"};
    border: none;
  }

  @media ${BREAKPOINTS.mobileLg} {
    margin-top: 10px;
    border: 1px solid ${COLORS.parkinglotGray};
    border-radius: 3px;

    .label {
      height: 40px;
      padding: 0px 31px;
      gap: 10px;
      font-size: 12px;
    }

    .icon {
      display: none;
    }
  }
`;

export { StyledSelectContainer };
