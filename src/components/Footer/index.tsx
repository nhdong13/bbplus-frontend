import IMAGES from "@/assets/images"
import { COLORS } from "@/utils/colors"
import { FONTS } from "@/utils/fonts"
import styled from "styled-components"
import Divider from "../Layout/Divider"
import { HorizontalContainer } from "../Layout/HorizontalContainer"
import { VerticalContainer } from "../Layout/VerticalContainer"

const StyledFooter = styled.div`
  background-color: ${COLORS.cyprus};
  display: flex;
  margin: auto;
  justify-content: center;
  width: 100%;
`

const Copyright = styled.div`
  align-items: center;
  background: ${COLORS.gradient1};
  display: flex;
  justify-content: center;
  height: 53px;
  text-align: center;
  width: 100%;

  span {
    color: ${COLORS.white};
    font-family: ${FONTS.montserrat};
    font-size: 21.45px;
    font-weight: 100;
    line-height: 14px;
  }
`

const StyledRightFooter = styled(VerticalContainer)`
  p {
    color: ${COLORS.white};
    font-family: ${FONTS.montserrat};
    font-size: 26px;
    line-height: 14px;
  }

  span {
    color: ${COLORS.white};
    font-family: ${FONTS.montserrat};
    font-size: 23px;
    font-weight: 100;
    line-height: 35px;
  }
`

export default function Footer() {
  return (
    <>
      <VerticalContainer>
        <StyledFooter>
          <HorizontalContainer
            alignItems="center"
            gap="22px"
            padding="12px"
          >
            <img src={IMAGES.bbplusLogoWhite} alt="bbplusLogoWhite" width="260px" height="auto" />
            <Divider height="100%" width="0.2px" />
            <StyledRightFooter>
              <HorizontalContainer>
                <p>GlobalBedbank Group</p>
              </HorizontalContainer>

              <HorizontalContainer gap="60px" padding="10px">
                <VerticalContainer>
                  <span>HLB Building</span>
                  <span>Nadi, Fiji</span>
                </VerticalContainer>

                <VerticalContainer>
                  <span>Tel : (679) 6724244</span>
                  <span>Email : info@pacificbedbank.com</span>
                </VerticalContainer>
              </HorizontalContainer>
            </StyledRightFooter>
          </HorizontalContainer>
        </StyledFooter>
        <HorizontalContainer>
          <Copyright>
            <span>Copyright c GlobalBedbank Group. All rights reserved</span>
          </Copyright>
        </HorizontalContainer>
      </VerticalContainer>
    </>
  )
}
