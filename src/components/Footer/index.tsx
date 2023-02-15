import IMAGES from "@/assets/images"
import { BREAKPOINTS } from "@/utils/breakpoints"
import { COLORS } from "@/utils/colors"
import { FONTS } from "@/utils/fonts"
import styled from "styled-components"
import Divider from "../Layout/Divider"
import HorizontalContainer from "../Layout/HorizontalContainer"
import { VerticalContainer } from "../Layout/VerticalContainer"
import { FooterText, Typography } from "../Typography"

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
  @media ${BREAKPOINTS.laptop} {
    gap: 22px;
  }

  @media ${BREAKPOINTS.tablet} {
    flex-direction: column;
    padding: 10px;
  }

  .divider {
    @media ${BREAKPOINTS.tablet} {
      display: none;
    }
  }

  .footer-logo-container {
    @media ${BREAKPOINTS.tablet} {
      display: none;
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

  @media ${BREAKPOINTS.mobileLg} {
    padding: 3px 0;
  }

  span {
    @media ${BREAKPOINTS.mobileLg} {
      font-size: 12px;
      font-weight: 300;
      line-height: 17px;
    }
  }
`

const StyledRightFooter = styled(VerticalContainer)`
  @media ${BREAKPOINTS.tablet} {
    width: 100%;
  }

  .footer-company-name {
    justify-content: left;

    @media ${BREAKPOINTS.tablet} {
      justify-content: center;
    }
  }

  .footer-company-info {
    @media ${BREAKPOINTS.tablet} {
      justify-content: center;
      gap: 20px;
    }

    @media ${BREAKPOINTS.mobileLg} {
      justify-content: space-between;
      padding: 10px 0 0;
    }

    & > div {
      @media ${BREAKPOINTS.tablet} {
        width: 200px;
      }
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
            padding="36px 0"
          >
            <div className="footer-logo-container">
              <img src={IMAGES.bbplusLogoWhite} alt="bbplusLogoWhite" width="260px" height="auto" />
            </div>
            <Divider color={COLORS.white} height="170px" width="1px" margin="0 78px 0 82px" />
            <StyledRightFooter>
              <HorizontalContainer className="footer-company-name">
                <FooterText fontSize="27px" lineHeight="32px" fontWeight="400">GlobalBedbank Group</FooterText>
              </HorizontalContainer>

              <HorizontalContainer className="footer-company-info" gap="60px">
                <VerticalContainer width="140px">
                  <FooterText>HLB Building</FooterText>
                  <FooterText>Nadi, Fiji</FooterText>
                </VerticalContainer>

                <VerticalContainer width="300px">
                  <FooterText>Tel : (679) 6724244</FooterText>
                  <FooterText>Email : info@pacificbedbank.com</FooterText>
                </VerticalContainer>
              </HorizontalContainer>
            </StyledRightFooter>
          </FooterContainer>
        </StyledFooter>
        <HorizontalContainer>
          <Copyright>
            <Typography color={COLORS.white} fontSize="16px" fontFamily={FONTS.montserrat} lineHeight="65px">
              Copyright c GlobalBedbank Group. All rights reserved
            </Typography>
          </Copyright>
        </HorizontalContainer>
      </VerticalContainer>
    </>
  )
}
