import IMAGES from "@/assets/images";
import HorizontalContainer from "@/components/Layout/HorizontalContainer";
import { COLORS } from "@/utils/colors";
import React, { useEffect, useState } from "react";
import UserMenuDropDown from "./UserMenuDropDown";
import NotificationDropDown from "./NotificationDropDown";
import useComponentVisible from "@/utils/clickOutSide";
import { DividerContainer, HeaderContainer } from "./StyledHeader";
import { H4 } from "../Typography";
import Divider from "../Layout/Divider";
import { useNavigate } from "react-router-dom";

interface HeaderInterface {
  hasDivider?: boolean
}

export default function Header({ hasDivider }: HeaderInterface) {
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
    if (notificationDropDown) setNotificationDropDown(!notificationDropDown);
    setDropDown(!dropdown);
    setUserMenuVisible(!dropdown);
  };

  const handleNotificationDropDown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (dropdown) setDropDown(!dropdown);
    setNotificationDropDown(!notificationDropDown);
    setNotificationVisible(!notificationDropDown);
  };

  useEffect(() => {
    if (!userMenuVisible) setDropDown(false);
    if (!notificationVisible) setNotificationDropDown(false);
  }, [userMenuVisible, notificationVisible])

  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer dropdown={dropdown}>
        <HorizontalContainer
          alignItems="center"
          justifyContent="space-between"
          width={"100%"}
          className="header-horizontal-container"
        >
          <img src={IMAGES.bbplusLogoWhite} alt="bb-plus-logo" width="260px" height="auto" className="logo" onClick={()=>navigate("/")}/>
          <div className="header-group">
            <div className="header-group-left">
              <button onClick={(e) => handleNotificationDropDown(e)} data-count="2">
                <div style={{ position: "relative" }}>
                  <div style={{ position: "relative" }}>
                    <img
                      className="letter-icon"
                      src={IMAGES.iconLetter}
                      alt="letter"
                      width="34px"
                      height="22px"
                    />
                  </div>
                </div>
              </button>
              <H4
                color={COLORS.white}
                fontWeight="400"
                lineHeight="38px"
              >
                XYZ Travel
              </H4>
            </div>
            <div className="header-group-right" >
              <button onClick={(e) => handleDropdown(e)}>
                <img
                  className="user-icon"
                  src={IMAGES.defaultUser}
                  alt="user" width="31px"
                  height="31px"
                />
                <div
                  style={{ height: "57px", display: "flex", alignItems: "center" }}
                  onClick={(e) => handleDropdown(e)}>
                  <img src={IMAGES.iconAnchor} alt="user" width="19px" height="13px" className="icon-dropdown" />
                </div>
                <NotificationDropDown innerRef={notificationRef} notificationDropDown={notificationVisible} />
                <UserMenuDropDown innerRef={userMenuRef} dropdown={userMenuVisible} />
              </button>
            </div>
          </div>
        </HorizontalContainer>

      </HeaderContainer>
      {hasDivider &&
        <DividerContainer>
          <Divider color={COLORS.gradient1} height="2px" width="100%" maxWidth="1440px" />
        </DividerContainer>
      }
    </>
  )
}
