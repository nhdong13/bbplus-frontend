import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import { notificationData } from "@/utils/tempData";
import styled from "styled-components";
import HorizontalContainer from "../Layout/HorizontalContainer";


interface NotificationDropDown {
  notificationDropDown: boolean
  innerRef: any
}

const StyledNotificationDropDown = styled.div.attrs((props: {
  notificationDropDown: boolean
}) => props)`
  background: ${COLORS.white};
  border-radius: 10px;
  box-shadow: 4px 3px 18px -5px rgba(0,0,0,0.75);
  opacity: ${({ notificationDropDown }) => notificationDropDown ? "1" : "0"};
  min-width: 400px;
  width: 100%;
  position: absolute;
  top: 55px;
  right: 0;

  &.open {
    animation: fadeIn 0.5s;
    display: block;
  }

  &.close {
    animation: fadeOut 0.5s;
    display: none;
  }
`

const Title = styled.div`
  padding: 20px;
  span {
    color: ${COLORS.black};
    font-family: ${FONTS.manrope};
    font-size: 18px;
    line-height: 24px;
  }
`

const NotificationItem = styled(HorizontalContainer)`
  gap: 30px;
  padding: 10px 20px;

  &:hover {
    background: ${COLORS.silver};
    transition: all 0.3s ease-in-out;
  }

  span {
    color: ${COLORS.black};
    font-family: ${FONTS.manrope};
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
  }
`

const NotificationDropDown = ({ innerRef, notificationDropDown }: NotificationDropDown) => {
  return (
    <>
      <StyledNotificationDropDown ref={innerRef} notificationDropDown={notificationDropDown} className={notificationDropDown ? "open" : "close"}>
        <Title>
          <span>Notification</span>
        </Title>
        {
          notificationData?.map((item, index) => {
            return (
              <NotificationItem key={index}>
                <img src={item.avatar} width="20px" height="20px" />
                <span>{item.text}</span>
              </NotificationItem>
            )
          })
        }
      </StyledNotificationDropDown>
    </>
  )
}

export default NotificationDropDown;
