import { BREAKPOINTS } from "@/utils/breakpoints";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import styled from "styled-components";

interface TypographyStyle {
  color?: string
  fontSize?: string
  fontWeight?: string
  overflow?: number
  margin?: string
  padding?: string
  fontFamily?: string
  lineHeight?: string
  textAlign?: string
}

export const Typography = styled.span<TypographyStyle>`
  color: ${props => props.color};
  font-family: ${props => props.fontFamily || FONTS.manrope};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight};
  margin: ${props => props.margin};
  overflow: ${props => props.overflow};
  padding: ${props => props.padding};
  text-align: ${props => props.textAlign};
`

export const H1 = styled.h1<TypographyStyle>`
  color: ${props => props.color};
  font-family: ${props => props.fontFamily || FONTS.manrope};
  font-size: 40px;
  font-weight: ${props => props.fontWeight || 700};
  line-height: ${props => props.lineHeight || "48px"};
  margin: ${props => props.margin};
  overflow: ${props => props.overflow};
  padding: ${props => props.padding};
  text-align: ${props => props.textAlign};
`

export const H2 = styled.h2<TypographyStyle>`
  color: ${props => props.color};
  font-family: ${props => props.fontFamily || FONTS.manrope};
  font-size: 32px;
  font-weight: ${props => props.fontWeight || 500};
  line-height: ${props => props.lineHeight || "38.4px"};
  margin: ${props => props.margin};
  overflow: ${props => props.overflow};
  padding: ${props => props.padding};
  text-align: ${props => props.textAlign};
`

export const H3 = styled.h3<TypographyStyle>`
  color: ${props => props.color};
  font-family: ${props => props.fontFamily || FONTS.manrope};
  font-size: 28px;
  font-weight: ${props => props.fontWeight || 500};
  line-height: ${props => props.lineHeight || "33.6px"};
  margin: ${props => props.margin};
  overflow: ${props => props.overflow};
  padding: ${props => props.padding};
  text-align: ${props => props.textAlign};
`

export const H4 = styled.h4<TypographyStyle>`
  color: ${props => props.color};
  font-family: ${props => props.fontFamily || FONTS.manrope};
  font-size: 18px;
  font-weight: ${props => props.fontWeight || 700};
  line-height: ${props => props.lineHeight || "21.6px"};
  margin: ${props => props.margin};
  overflow: ${props => props.overflow};
  padding: ${props => props.padding};
  text-align: ${props => props.textAlign};

  @media ${BREAKPOINTS.mobileLg} {
    font-size: 12px;
    line-height: 16px;
  }
`

export const H5 = styled.h5<TypographyStyle>`
  color: ${props => props.color};
  font-family: ${props => props.fontFamily || FONTS.manrope};
  font-size: 16px;
  font-weight: ${props => props.fontWeight || 400};
  line-height: ${props => props.lineHeight || "20px"};
  margin: ${props => props.margin};
  overflow: ${props => props.overflow};
  padding: ${props => props.padding};
  text-align: ${props => props.textAlign};

  @media ${BREAKPOINTS.mobileLg} {
    font-size: 12px;
    line-height: 16px;
  }
`

export const FooterText = styled.span<TypographyStyle>`
  color: ${props => props.color || COLORS.white};
  font-family: ${props => props.fontFamily || FONTS.manrope};
  font-size: ${props => props.fontSize || "18px"};
  font-weight: ${props => props.fontWeight || 200};
  line-height: ${props => props.lineHeight || "36px"};
  margin: ${props => props.margin};
  overflow: ${props => props.overflow};
  padding: ${props => props.padding};
  text-align: ${props => props.textAlign};

  @media ${BREAKPOINTS.mobileLg}  {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
`
