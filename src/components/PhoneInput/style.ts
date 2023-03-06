import IMAGES from "@/assets/images";
import { BREAKPOINTS } from "@/utils/breakpoints";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import styled from "styled-components";

const StyledPhoneInputContainer = styled.div.attrs(
  (props: {
    textColor?: string;
    fontSize?: string;
    iconUrl?: string;
    marginTop?: string;
    maxHeight?: string;
    valid?: boolean;
    width?: string
  }) => props
)`
  position: relative;
  border-radius: 4.5px;
  border: 2px solid ${COLORS.black};
  width: ${(props) => props.width || "100%"};
  margin-top: ${(props) => props.marginTop || "26.9px"};
  display: flex;

  input {
    border:0;
    outline:0;
    height: ${(props) => (props.maxHeight ? props.maxHeight : "71px")};
    box-sizing: border-box;
    padding: 28px;
    color: ${(props) => props.textColor || COLORS.black};
    font-family: ${FONTS.manrope};
    font-size: ${(props) => props.fontSize || "16px"};
  }

  @media ${BREAKPOINTS.mobileLg} {
    margin-top: 10px;
    border: 1px solid ${COLORS.parkinglotGray};
    border-radius: 3px;

    input {
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

const PhoneSelect  = styled.div `
  display: flex;
  align-items: center;
  padding-left: 28px;
  cursor: pointer;
  img:first-child{
    margin-right: 5px;
  }
`

export { StyledPhoneInputContainer, PhoneSelect };
