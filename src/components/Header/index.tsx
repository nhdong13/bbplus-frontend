import IMAGES from "@/assets/images";
import { HorizontalContainer } from "@/components/Layout/HorizontalContainer";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div.attrs((props: {
  dropdown?: boolean
}) => props)`
  background-color: ${COLORS.cyprus};
  display: flex;
  margin: auto;
  justify-content: center;

  .header-group,
  .header-group-left,
  .header-group-right {
    display: flex;
    align-items: center;
  }

  .header-group {
    gap: 60px;
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


export default function Header() {
  const [dropdown, setDropDown] = useState<boolean>(false);
  const handleDropdown = () => {
    setDropDown(!dropdown);
  }

  return (
    <>
      <HeaderContainer dropdown={dropdown}>
        <HorizontalContainer
          alignItems="center"
          justifyContent="space-between"
          height={"77px"}
          maxWidth={"1650px"}
          padding="80px 80px 0"
          width={"100%"}
        >
          <img src={IMAGES.bbplusLogoWhite} alt="bbplusLogoWhite" width="260px" height="auto" />
          <div className="header-group">
            <div className="header-group-left">
              <img src={IMAGES.iconLetter} alt="letter" width="34px" height="22px" />
              <div className="alert-icon">
                <span>2</span>
              </div>
              <span className="header-user-name">XYZ Travel</span>
            </div>
            <div className="header-group-right">
              <img src={IMAGES.defaultUser} alt="user" width="35px" height="35px" />
              <div onClick={handleDropdown}>
                <img src={IMAGES.iconAnchor} alt="user" width="22px" height="13px" />
              </div>
            </div>
          </div>
        </HorizontalContainer>
      </HeaderContainer>
    </>
  )
}
