import styled from "styled-components";
import { Container } from "@/styles";
import { Typography as Span } from "../Typography";
import { Modal } from "@mui/material";
import { RoomModalDetail } from "@/utils/dataTest";
import { ReactSVG } from "react-svg";
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import IMAGES from "@/assets/images";
import { useState } from "react";
import { IModal } from "@/utils/types/Modal";

interface IRoomModal extends IModal{
  title: string;
  details: {
    [T: string]: {
      name: string;
      detail: string | string[];
    };
  };
  isOpen: boolean;
  onCloseModal: () => void;
}

export default function RoomModal({
  title,
  details,
  isOpen,
  onCloseModal,
}: IRoomModal) {
  const [selectedImage, setSelectedImage] = useState<string>(IMAGES.hotelBg);

  return (
    <Modal open={isOpen} onClose={onCloseModal}>
      <StyledRoomModal>
        <Span
          margin="0 0 20px"
          className="close-btn"
          textAlign="right"
          onClick={onCloseModal}
        >
          <ReactSVG src={IMAGES.iconClose} />
        </Span>
        <Container maxWidth="880px">
          <Details>
            <Span fontSize="20px" fontWeight="bold">
              {title}
            </Span>
            <Benefits>
              {RoomModalDetail.benefits.map((item) => {
                return (
                  <div className="item">
                    <ReactSVG className="tick-icon" src={IMAGES.iconTick} />
                    <Span>{item}</Span>
                  </div>
                );
              })}
            </Benefits>
            <Span>
              <Span fontWeight="bold">Size: &nbsp;</Span>
              {RoomModalDetail.area}
            </Span>
            <Span>{RoomModalDetail.bed} king bed</Span>
            <Span>
              <Span fontWeight="bold">Max persons: &nbsp;</Span>
              {RoomModalDetail.maxPersons}
            </Span>
            <Span margin="28px 0 0 0" fontWeight="bold">
              In the bathroom:
            </Span>
            <Benefits>
              {RoomModalDetail.bathroom.map((item) => (
                <div className="item">
                  <ReactSVG className="tick-icon" src={IMAGES.iconTick} />
                  <Span>{item}</Span>
                </div>
              ))}
            </Benefits>
            <Span margin="28px 0 0 0">
              <Span fontWeight="bold">View: &nbsp;</Span>
              {RoomModalDetail.view}
            </Span>
            <Span margin="28px 0 0 0" fontWeight="bold">
              Facilities:
            </Span>
            <Facilities>
              {RoomModalDetail.facilities.map((item) => (
                <div className="item">
                  <ReactSVG className="tick-icon" src={IMAGES.iconTick} />
                  <Span>{item}</Span>
                </div>
              ))}
            </Facilities>
            <Span margin="28px 0 0 0">
              <Span fontWeight="bold">Smocking: &nbsp;</Span>No smocking
            </Span>
          </Details>
          <RoomImage>
            <img className="room-image" src={IMAGES.hotelBg} alt="" />
            <ImageCarousel
              width="400px"
              height="64px"
              visibleSlides={5}
              images={[
                IMAGES.thumb1,
                IMAGES.thumb2,
                IMAGES.thumb3,
                IMAGES.thumb4,
                IMAGES.hotelBg,
              ]}
              onSelectImage={setSelectedImage}
              orientation="horizontal"
              showControl={false}
            />
          </RoomImage>
        </Container>
      </StyledRoomModal>
    </Modal>
  );
}

const StyledRoomModal = styled.div`
  padding: 20px 28px 68px 28px;
  display: flex;
  flex-direction: column;
  outline: none;
  background-color: white;
  width: 880px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .close-btn {
    cursor: pointer;
  }
  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    span {
      white-space: nowrap;
    }
  }
  .tick-icon {
    width: 24px;
    height: 24px;
  }
  .room-image {
    width: 100%;
    height: 350px;
    object-fit: cover;
    margin-bottom: 12px;
  }
`;

const Benefits = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  row-gap: 8px;
`;

const Details = styled.div`
  span {
    display: block;
    span {
      display: inline-block;
    }
  }
`;

const Facilities = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const RoomImage = styled.div`
  padding: 8px 10px 0 40px;
`;
