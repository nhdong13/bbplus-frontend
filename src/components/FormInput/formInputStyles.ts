import IMAGES from "@/assets/images";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import styled from "styled-components";

const StyledInputContainer = styled.div.attrs(
  (props: {
    textColor?: string;
    fontSize?: string;
    iconUrl?: string;
    marginTop?: string;
    maxHeight?: string;
    valid?: boolean;
  }) => props
)`
  position: relative;
  border-radius: 4.5px;
  border: 2px solid ${COLORS.black};
  width: 100%;
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

  input {
    height: ${(props) => (props.maxHeight ? props.maxHeight : "71px")};
    width: 100%;
    box-sizing: border-box;
    padding: 28px;
    color: ${(props) => props.textColor || COLORS.black};
    font-family: ${FONTS.manrope};
    font-size: ${(props) => props.fontSize || "16px"};
  }
`;

export { StyledInputContainer };
