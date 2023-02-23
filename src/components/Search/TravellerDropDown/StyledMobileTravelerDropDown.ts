import { COLORS } from '@/utils/colors';
import styled from "styled-components";

const StyledMobileTravelerDropDown = styled.div`
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

  .mobile-traveler__container {

  }
`;

export {
  StyledMobileTravelerDropDown
}
