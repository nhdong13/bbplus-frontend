import { COLORS } from '@/utils/colors';
import styled, { css } from "styled-components";

const StyledMobileTravelerDropDown = styled.div.attrs((props: {
  isShown?: boolean
}) => props)`
  background: ${COLORS.white};
  box-shadow: 4px 3px 18px -5px rgba(0,0,0,0.75);
  margin: 0;
  max-width: 1230px;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

    display: block;
  ${props => props.isShown && css`
    animation: fadeIn 1s;
  `}

  ${props => !props.isShown && css`
    display: none;
    animation: fadeOut 1s;
  `}

  .dropdown-header {
    width: 100%;
    max-width: 430px;
    margin: auto;
  }

  .dropdown-header__container {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;

    h4 {
      font-size: 18px;
      font-weight: 700;
      line-height: 25px;
    }
  }

  .dropdown-room-options {
    margin: 10px;
  }

  .dropdown-room-options__title-container {

  }
`;

export {
  StyledMobileTravelerDropDown
}
