import { BREAKPOINTS } from "@/utils/breakpoints"
import { COLORS } from "@/utils/colors"
import { FONTS } from "@/utils/fonts"
import styled from "styled-components"

const ContactFormContainer = styled.div.attrs((props: {
  isPrimaryContact?: boolean
}) => props)`
  h3 {
    display: ${props => props.isPrimaryContact ? 'block' : 'none'};
  }

  width: 835px;
  background: ${props => props.isPrimaryContact ? COLORS.blueWater : COLORS.white};
  border: 0.5px solid ${props => props.isPrimaryContact ? COLORS.percyBlue : COLORS.black};
  border-radius: 4px;
  margin-top: 25px;
  padding: 26px 40px;

  .sub-header {
    margin-top: 30px;
    font-size: 20px;
  }

  .no-margin {
    margin-top: 10px;
  }
  .header_c {
    font-size: 21px;
  }

  .divider {
    width: 778px;
    height: 0px;
    margin-top: 46.7px;
    margin-bottom: 30px;
    margin-left: 10px;
    border: 0.5px dashed ${COLORS.smogray};
  }
`
export {
  ContactFormContainer
}
