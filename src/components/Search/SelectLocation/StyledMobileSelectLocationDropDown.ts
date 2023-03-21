import { COLORS } from '@/utils/colors';
import styled, { css } from 'styled-components';
const StyledMobileSelectLocationDropDown = styled.div.attrs((props: {
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

  ${props => props.isShown && css`
    display: block;
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

  .dropdown-search {
    display: flex;
    flex-direction: column;
    margin: 15px 10px 0;

    .dropdown-search__container  {
      position: relative;
      input {
        border: 1px solid ${COLORS.blackPearl};
        border-radius: 5px;
        font-size: 18px;
        font-weight: 700;
        line-height: 25px;
        min-height: 50px;
        padding: 0 30px;
        width: -webkit-fill-available;

        &::placeholder {
          padding: 10px 0;
        }
      }
      img{
        position: absolute;
        right: 30px;
        top: 20px;
      }
    }

    .popular-places {
      margin: 10px 0;
    }

    .popular-places__list {
      cursor: pointer;
      height: 100%;
      max-height: 300px;
      .item {
        gap: 13px;
        display: flex;
        align-items: center;
        margin: 15px 0;
      }
      img {
        width: 13px;
      }

      span {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
`

export {
  StyledMobileSelectLocationDropDown

}
