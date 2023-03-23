import IMAGES from "@/assets/images";
import { BREAKPOINTS } from "@/utils/breakpoints";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import styled from "styled-components";

const WrapperSelect = styled.div.attrs(
  (props: {
    width?: string,
    borderWidth?: string,
    borderRadius?: string,
    borderGradient?: string,
  }) => props
)`
  position: relative;
  /* width: ${(props) => props.width || "100%"}; */
  .options {
    list-style: none;
    font-size: 16px;
    border: 1px solid ${COLORS.doveGray};
    border-radius: ${(props) => props.borderRadius || "11px"};
    margin-top: 10px;
    position: absolute;
    z-index: 10;
    background: ${props => props.borderGradient || COLORS.white};
    min-width: 210px;
    border-width: ${(props) => props.borderWidth || "1px"};

    width: ${props => props.borderGradient ? "fit-content" : props.width};

    li {
      cursor: pointer;
      padding: 10px 20px;
      color: ${COLORS.black};
      font-weight: normal;
      &:not(.selected):hover{
        background: ${COLORS.blueRibbon};
        opacity: 0.5;
        color: ${COLORS.white};
      }
      &:first-child {
        border-top-left-radius: 11px;
        border-top-right-radius: 11px;
      }
      &:last-child {
        border-bottom-left-radius: 11px;
        border-bottom-right-radius: 11px;
      }
    }
    .selected {
      background: ${COLORS.blueRibbon};
      color: ${COLORS.white};
    }
  }
`

const StyledSelectContainer = styled.div.attrs(
  (props: {
    textColor?: string;
    fontSize?: string;
    iconUrl?: string;
    marginTop?: string;
    maxHeight?: string;
    valid?: boolean;
    width?: string,
    borderWidth?: string,
    borderRadius?: string,
    borderGradient?: string,
    padding?: string,
    showOption?: boolean,
    fontWeight?: string,
  }) => props
)`
  position: relative;
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
    border-radius: 7px;
    border: 2px solid ${COLORS.greenBlue};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
    img {
      transform: ${({ showOption }) => showOption ? "rotate(180deg)" : "rotate(0)"};
      transition: all 0.5s ease-in-out;
    }
  }

  @media ${BREAKPOINTS.laptop} {
    margin-top: 10px;
    border-radius: 3px;
    .label {
      height: 40px;
      padding: 0px 31px;
      gap: 10px;
      font-size: 12px;
      border: 1px solid ${COLORS.greenBlue};
      border-radius: 3px;
    }

    .icon {
      display: none;
    }
  }
`;

export { WrapperSelect, StyledSelectContainer };
