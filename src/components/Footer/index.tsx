import IMAGES from "@/assets/images"
import { BREAKPOINTS } from "@/utils/breakpoints"
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

  @media ${BREAKPOINTS.tablet} {
    flex-direction: column;
  }
`

const FooterContainer = styled(HorizontalContainer)`
  gap: 60px;

  @media ${BREAKPOINTS.laptop} {
    gap: 22px;
  }

  @media ${BREAKPOINTS.tablet} {
    flex-direction: column;
  }

  .divider {
    @media ${BREAKPOINTS.tablet} {
      display: none;
    }
  }

  .footer-logo-container {
    @media ${BREAKPOINTS.tablet} {
      display: flex;
      width: 100%;
    }
  }
`

const Copyright = styled.div`
  align-items: center;
  background: ${COLORS.gradient1};
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;

  @media ${BREAKPOINTS.tablet} {
    height: auto;
    padding: 15px;
  }

  span {
    color: ${COLORS.white};
    font-family: ${FONTS.montserrat};
    font-size: 22px;
    font-weight: 100;
    line-height: 23px;
    padding: 15px 0;

    @media ${BREAKPOINTS.tablet} {
      font-size: 18px;
      line-height: 24px;
    }
  }
`

const StyledRightFooter = styled(VerticalContainer)`
  @media ${BREAKPOINTS.tablet} {
    width: 100%;
  }

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

  .footer-company-name {
    justify-content: left;
  }

  .footer-company-info {
    @media ${BREAKPOINTS.tablet} {
      flex-direction: column;
      gap: 16px;
    }
  }
`

export default function Footer() {
  return (
    <>
      <VerticalContainer>
        <StyledFooter>
          <FooterContainer
            alignItems="center"
            padding="12px"
          >
            <div className="footer-logo-container">
              <img src={IMAGES.bbplusLogoWhite} alt="bbplusLogoWhite" width="260px" height="auto" />
            </div>
            <Divider height="100%" width="0.2px" />
            <StyledRightFooter>
              <HorizontalContainer className="footer-company-name">
                <p>GlobalBedbank Group</p>
              </HorizontalContainer>

              <HorizontalContainer className="footer-company-info" gap="60px">
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
          </FooterContainer>
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
