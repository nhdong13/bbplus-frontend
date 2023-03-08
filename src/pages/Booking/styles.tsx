import IMAGES from "@/assets/images";
import { COLORS } from "@/utils/colors";
import { FONTS } from "@/utils/fonts";
import styled from "styled-components";

const WIDTH = "1400px";

const BookingOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 40px;
  span {
    display: block;
    font-family: ${FONTS.manropeBold};
    span {
      display: inline-block;
    }
  }
`;

const BookingHeader = styled.div`
  max-width: 1400px;
  margin: auto;
  padding-bottom: 40px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-direction: row;
`;

const Link = styled.div`
  width: 100%;
  margin: auto;
  padding: 0px 35px;

  & > div {
    display: flex;
    flex-direction: row;
    max-width: 500px;
    justify-content: space-between;
  }
  span {
    font-weight: bold;
  }
`;

const ButtonNextStep = styled.button`
  background-color: #ff8003;
  color: white;
  width: fit-content;
  height: fit-content;
  padding: 16px 42px;
  border-radius: 8px;
  font-weight: bold;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
`;

const BookingContent = styled.div`
  border-top: 2px solid ${COLORS.platinum};
  display: grid;
  grid-template-columns: calc((100% - ${WIDTH}) / 2) auto calc(
      (100% - ${WIDTH}) / 2
    );
  padding-top: 4px;
  margin-bottom: 40px;
`;

interface ContainerStyle {
  width: string;
}

const Left = styled.div<ContainerStyle>`
  width: ${(props) => props.width};
  background-color: #f0f1f2;
  padding-top: 20px;
  padding-right: 56px;
  padding-bottom: 40px;
`;
const Right = styled.div<ContainerStyle>`
  width: ${(props) => props.width};
  padding-left: 40px;
`;

const HotelInformation = styled.div`
  .hotel__image {
    width: 421px;
    height: 280px;
    min-height: 280px;
    margin-left: 12px;
    border-radius: 12px;
    object-fit: cover;
    background-position: 50% 50%;
  }
  .location {
    img,
    p,
    span {
      display: inline-block;
      vertical-align: bottom;
      line-height: 16px;
      padding: 0 12px 0 0;
    }
  }
  .hotel-info-container {
    padding-left: 12px;
  }
`;

const Container = styled.div`
  width: 1400px;
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: 40% 60%;
`;

const ContainerLeft = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f1f2;
`;

const ContainerRight = styled.div`
  width: 100%;
  height: 100%;
`;

const HotelImage = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  position: relative;

  & > div > img {
    display: inline-block;
    margin-top: 30px;
  }

  .overlay {
    opacity: 0;
    background-image: url(${IMAGES.search});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    width: 421px;
    height: 280px;
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 5px;
    margin-top: 30px;
    border-radius: 12px;
    cursor: pointer;
    &:hover {
      opacity: 1;
      background-color: #4c4c4c4d;
    }
  }
`;

const HotelPrice = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  border-bottom: 2px dashed #b1b1b1;
  border-bottom-style: dotted;
  & > span {
    padding: 4px 0;
    line-height: 100%;
  }
`;

interface IButton {
  width?: string;
  height?: string;
  color?: string;
  padding?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
}

const Button = styled.button<IButton>`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  padding: ${(props) => props.padding || "12px 18px"};
  border: ${(props) => props.border || "2px solid #00b492ff"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  color: ${COLORS.blueRYB};
  background-color: ${(props) => props.backgroundColor || "white"};
`;

const HotelDetail = styled.div`
  margin-top: 12px;
  .action {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
  ul {
    margin-top: 12px;
  }
  li {
    background-image: url(${IMAGES.iconTick});
    background-repeat: no-repeat;
    background-size: 38px 100%;
    background-position: -10px 0;
    object-fit: contain;
    padding-left: 38px;
    list-style: none;
    padding: 4px 30px;
    span {
      font-weight: 500;
    }
  }
  .group-btn {
    margin-top: 28px;
    gap: 12px;
  }
`;

export {
  BookingOption,
  BookingHeader,
  Link,
  ButtonNextStep,
  Col,
  BookingContent,
  Left,
  Right,
  HotelInformation,
  Container,
  ContainerLeft,
  ContainerRight,
  HotelImage,
  HotelPrice,
  HotelDetail,
  Button,
};
