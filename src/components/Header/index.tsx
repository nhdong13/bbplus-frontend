import IMAGES from "@/assets/images";
import HorizontalContainer from "@/components/Layout/HorizontalContainer";
import { BREAKPOINTS } from "@/utils/breakpoints";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import UserMenuDropDown from "./UserMenuDropDown";
import NotificationDropDown from "./NotificationDropDown";
import useComponentVisible from "@/utils/clickOutSide";

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

export default function Header() {
  const [dropdown, setDropDown] = useState<boolean>(false);
  const [notificationDropDown, setNotificationDropDown] = useState<boolean>(false);

  const {
    ref: userMenuRef,
    isComponentVisible: userMenuVisible,
    setIsComponentVisible: setUserMenuVisible,
  } = useComponentVisible(false);

  const {
    ref: notificationRef,
    isComponentVisible: notificationVisible,
    setIsComponentVisible: setNotificationVisible,
  } = useComponentVisible(false);

  const handleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.persist();
    if (notificationDropDown) setNotificationDropDown(!notificationDropDown);
    setDropDown(!dropdown);
    setUserMenuVisible(!dropdown);
  };

  const handleNotificationDropDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (dropdown) setDropDown(!dropdown);
    setNotificationDropDown(!notificationDropDown);
    setNotificationVisible(!notificationDropDown);
  }, [dropdown]);

  useEffect(() => {
    if (!userMenuVisible) setDropDown(false);
    if (!notificationVisible) setNotificationDropDown(false);
  }, [userMenuVisible, notificationVisible])


  return (
    <>
      <HeaderContainer dropdown={dropdown}>
        <HorizontalContainer
          alignItems="center"
          justifyContent="space-between"
          width={"100%"}
        >
          <img src={IMAGES.bbplusLogoWhite} alt="bb-plus-logo" width="260px" height="auto" className="logo" />
          <div className="header-group">
            <div className="header-group-left">
              <div onClick={(e) => handleNotificationDropDown(e)}>
                <div style={{ position: "relative" }}>
                  <img
                    src={IMAGES.iconLetter}
                    alt="letter"
                    width="34px"
                    height="22px"
                  />
                </div>
                <div className="alert-icon">
                  <span>2</span>
                </div>
                <NotificationDropDown innerRef={notificationRef} notificationDropDown={notificationVisible} />
              </div>
              <span className="header-user-name">XYZ Travel</span>
            </div>
            <div className="header-group-right" >
              <img src={IMAGES.defaultUser} alt="user" width="35px" height="35px" onClick={(e) => handleDropdown(e)} />
              <div
                style={{ height: "50px", display: "flex", alignItems: "center" }}
                onClick={(e) => handleDropdown(e)}>
                <img src={IMAGES.iconAnchor} alt="user" width="22px" height="13px" />
              </div>
              <UserMenuDropDown innerRef={userMenuRef} dropdown={userMenuVisible} />
            </div>
          </div>
        </HorizontalContainer>
      </HeaderContainer>
    </>
  )
}
