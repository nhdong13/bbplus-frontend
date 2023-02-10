import { VerticalContainer } from '@/components/Layout/VerticalContainer';
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

  .header-horizontal-container {
    height: auto;
    max-width: 1400px;
    margin-top: 84px;
    margin-bottom: 37px;
    padding: 0 20px;
    width: 100%;

    @media ${BREAKPOINTS.laptop} {
      height: auto;
      max-width: 768px;
      margin: 0;
      padding: 15px;
    }

    @media ${BREAKPOINTS.mobileLg} {
      padding: 0 25px;
    }

    .logo {
      position: relative;
      z-index: 2;

      @media ${BREAKPOINTS.tablet} {
        width: 200px;
      }

      @media ${BREAKPOINTS.mobileLg} {
        height: 17px;
        width: 85px;
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
    gap: 63px;

    @media ${BREAKPOINTS.tablet} {
      gap: 30px;
    }
  }

  .header-group-left,
  .header-group-right {
    cursor: pointer;
    gap: 9px;
    position: relative;
  }

  .alert-icon {
    background: ${COLORS.red};
    border: none;
    border-radius: 50px;
    height: 18px;
    position: absolute;
    top: -11px;
    left: 22px;
    width: 18px;

    @media ${BREAKPOINTS.mobileLg} {
      height: 14px;
      top: -8px;
      left: 15px;
      width: 14px;
    }

    span {
      position: relative;
      top: -2px;
      left: 30%;

      @media ${BREAKPOINTS.mobileLg} {
        font-size: 10px;
        top: -4px;
      }
    }
  }

  .header-group-right > div > img {
    transform: ${({ dropdown }) => dropdown ? "rotate(180deg)" : "rotate(0)"};
    transition: all 0.5s ease-in-out;
  }

  .header-group-right {
    .user-icon {
      @media ${BREAKPOINTS.mobileLg} {
        height: 20px;
        width: 20px;
      }
    }
    .icon-dropdown {
        @media ${BREAKPOINTS.mobileLg} {
          width: 12px;
        }
    }
  }

  .header-group-left {
    .letter-icon {
      @media ${BREAKPOINTS.mobileLg} {
        height: 16px;
        width: 20px;
      }
    }
  }
`

const DividerContainer = styled(VerticalContainer)`
  background: ${COLORS.cyprus};
  width: 100%;

  & > div {
    @media ${BREAKPOINTS.laptop} {
      max-width: 97%;
    }

    @media ${BREAKPOINTS.mobileLg} {
      max-width: 95%;
    }
  }
`

export {
  HeaderContainer,
  DividerContainer,
}
