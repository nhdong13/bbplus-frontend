import IMAGES from "@/assets/images";
import { BREAKPOINTS } from "@/utils/breakpoints";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import { notificationData } from "@/utils/tempData";
import styled from "styled-components";
import HorizontalContainer from "../Layout/HorizontalContainer";
import { H4, H5 } from "../Typography";


interface NotificationDropDown {
  notificationDropDown: boolean
  innerRef: any
}

const StyledNotificationDropDown = styled.div.attrs((props: {
  notificationDropDown: boolean
}) => props)`
  background: ${COLORS.white};
  border-radius: 12px;
  box-shadow: 4px 3px 18px -5px rgba(0,0,0,0.75);
  opacity: ${({ notificationDropDown }) => notificationDropDown ? "1" : "0"};
  min-width: 546px;
  width: 100%;
  position: absolute;
  top: 55px;
  right: 0;

  &.open {
    animation: fadeIn 0.5s;
    display: block;
    z-index: 999;
  }

  &.close {
    animation: fadeOut 0.5s;
    display: none;
  }

  @media ${BREAKPOINTS.tablet} {
    min-width: 450px;
  }

  @media ${BREAKPOINTS.mobileLg} {
    min-width: 375px;
  }
`

const Title = styled.div`
  padding: 38px 38px 21px;
  span {
    color: ${COLORS.black};
    font-family: ${FONTS.manrope};
    font-size: 16px;
    line-height: 21px;
  }
`

const NotificationItem = styled(HorizontalContainer).attrs((props: {
  notificationLength: number
}) => props)`
  gap: 30px;
  border-bottom: 0.75px solid ${COLORS.darkSilver};
  max-height: 105px;
  padding: 30px 38px 17px;

  @media ${BREAKPOINTS.mobileLg} {
    gap: 12px;
  }

  &:hover {
    background: ${COLORS.silver};
    transition: all 0.3s ease-in-out;
  }

  &:nth-child(${props => props.notificationLength + 1}) {
    border: none;
    &:hover {
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }

  span {
    color: ${COLORS.black};
    font-family: ${FONTS.manrope};
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
  }

  img {
    @media ${BREAKPOINTS.mobileLg} {
      width: 50px;
    }
  }
`

const NotificationDropDown = ({ innerRef, notificationDropDown }: NotificationDropDown) => {
  return (
    <>
      <StyledNotificationDropDown ref={innerRef} notificationDropDown={notificationDropDown} className={notificationDropDown ? "open" : "close"}>
        <Title>
          <H4>Notification</H4>
        </Title>
        {
          notificationData?.map((item, index) => {
            return (
              <NotificationItem key={index} alignItems="center" notificationLength={notificationData.length}>
                <img src={item.avatar ? item.avatar : IMAGES.faviconSVG} width="57px" height="57px" />
                <H5 color={COLORS.onyx} lineHeight="21px" >{item.text}</H5>
              </NotificationItem>
            )
          })
        }
      </StyledNotificationDropDown>
    </>
  )
}

export default NotificationDropDown;
