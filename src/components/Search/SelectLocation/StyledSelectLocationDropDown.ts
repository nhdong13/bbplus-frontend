import { COLORS } from '@/utils/colors';
import styled from 'styled-components';

const StyledSelectLocationDropDown = styled.div.attrs((props: {
  isShown?: boolean
  isLeaving?: boolean
}) => props)`
  background-color: ${COLORS.white};
  border-radius: 5px;
  box-shadow: 4px 3px 18px -5px rgba(0,0,0,0.75);
  display: ${({ isShown }) => isShown ? "block" : "none"};
  padding: 33px 0;
  max-width: 555px;
  position: absolute;
  top: 100px;
  left: ${({ isLeaving }) => isLeaving ? 0 : "21%"};
  max-height: 200px;
  overflow-y: auto;
  width: 100%;
  z-index: 10;

  .popular-places__container {
    padding: 0 45px;
  }

  .popular-places {
    padding: 0;
  }

  .popular-places__list {
    
  }
  .list__item {
    gap: 20px;
    margin: 15px 0;
    display: flex;
    align-items: center;
  } 
`

export {
  StyledSelectLocationDropDown,
}
