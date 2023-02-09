import { BREAKPOINTS } from "@/utils/breakpoints"
import { COLORS } from "@/utils/colors"
import { FONTS } from "@/utils/fonts"
import styled from "styled-components"

const HeaderContainer = styled.div.attrs((props: {
  dropdown?: boolean
}) => props)`
  background-color: ${COLORS.cyprus};
  display: flex;
  margin: auto;
  justify-content: center;

  & > div {
    height: 77px;
    max-width: 1570px;
    padding-top: 95px;

    @media ${BREAKPOINTS.tablet} {
      height: auto;
      max-width: 768px;
      padding: 15px;
    }

    .logo {
      position: relative;
      z-index: 2;

      @media ${BREAKPOINTS.tablet} {
        width: 200px;
      }

      @media ${BREAKPOINTS.mobileSm} {
        width: 150px;
      }
    }
  }

  .header-group,
  .header-group-left,
  .header-group-right {
    display: flex;
    align-items: center;
  }

  .header-group {
    gap: 60px;

    @media ${BREAKPOINTS.tablet} {
      display: none;
    }
  }

  .header-group-left,
  .header-group-right {
    cursor: pointer;
    gap: 20px;
    position: relative;
  }

  .header-user-name {
    color: ${COLORS.white};
    font-family: ${FONTS.manrope};
    font-size: 25px;
    line-height: 43px;
    text-align: left;
  }

  .alert-icon {
    background: ${COLORS.red};
    border: none;
    border-radius: 50px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 22px;
    width: 20px;

    span {
      font-family: ${FONTS.manrope};
      color: ${COLORS.white};
      font-size: 14px;
      line-height: 14px;
      position: relative;
      left: 32%;
    }
  }

  .header-group-right > div > img {
    transform: ${({ dropdown }) => dropdown ? "rotate(180deg)" : "rotate(0)"};
    transition: all 0.5s ease-in-out;
  }
`
export {
  HeaderContainer
}
