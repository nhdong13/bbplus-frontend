import { COLORS } from '@/utils/colors';
import styled from 'styled-components';

const StyledSelectLocationDropDown = styled.div.attrs((props: {
  isShown?: boolean
}) => props)`
  background-color: ${COLORS.white};
  border-radius: 5px;
  box-shadow: 4px 3px 18px -5px rgba(0,0,0,0.75);
  display: ${({ isShown }) => isShown ? "block" : "none"};
  padding: 33px 0;
  max-width: 555px;
  position: absolute;
  top: 100px;
  left: 0;
  max-height: 200px;
  width: 100%;

  .popular-places__container {
    padding: 0 45px;
  }

  .popular-places {
    padding: 0;
  }

  .popular-places__list {
    
  }
`

export {
  StyledSelectLocationDropDown,
}
