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

interface IRoomModal extends IModal {
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
        <StyledRoomModalContent>
          <Span
            margin="0px"
            className="close-btn"
            textAlign="right"
            onClick={onCloseModal}
          >
            <ReactSVG src={IMAGES.iconClose} />
          </Span>
          <Container gridTemplateColumns="45% 55%" maxWidth="100%" width="100%" margin="none">
            <Details>
              <Span fontSize="24px" fontWeight="bold" margin="0 0 8px">
                {title}
              </Span>
              <Benefits>
                {RoomModalDetail.benefits.map((item) => {
                  return (
                    <div className="item" key={item}>
                      <ReactSVG className="tick-icon" src={IMAGES.iconTick} />
                      <Span fontSize="14px" fontWeight="500">{item}</Span>
                    </div>
                  );
                })}
              </Benefits>
              <Span margin="16px 0 28px 0" fontSize="14px" fontWeight="500">
                <Span fontWeight="bold" fontSize="22px">Size: &nbsp;</Span>
                {RoomModalDetail.area}
              </Span>
              <Span fontSize="14px" fontWeight="500">
                <Span fontWeight="bold" fontSize="22px">Bed type: &nbsp;</Span>{" "}
                {RoomModalDetail.bed} king bed
              </Span>
              <Span fontSize="14px" fontWeight="500">
                <Span fontWeight="bold" fontSize="22px">Max persons: &nbsp;</Span>
                {RoomModalDetail.maxPersons}
              </Span>
              <Span margin="28px 0 0 0" fontWeight="bold" fontSize="22px">
                Facilities:
              </Span>
              <Facilities>
                {RoomModalDetail.facilities.map((item) => (
                  <div className="item" key={item}>
                    <ReactSVG className="tick-icon" src={IMAGES.iconTick} />
                    <Span fontSize="14px" fontWeight="500">{item}</Span>
                  </div>
                ))}
              </Facilities>
              <Span margin="28px 0 0 0" fontSize="14px" fontWeight="500">
                <Span fontWeight="bold" fontSize="22px">Smocking: &nbsp;</Span>No smocking
              </Span>
            </Details>
            <RoomImage>
              <img className="room-image" src={selectedImage} alt="" />
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
          <Span margin="28px 0 4px 0" fontWeight="bold" fontSize="22px">
            Non-Refundable:
          </Span>
          <Span fontSize="14px" fontWeight="500">
            If you change or cancel your booking you will not get a refund or
            credit to use for a future stay. This policy will apply regardless of
            COVID-19, subject to any local consumer laws.
          </Span>
          <Span margin="8px 0 4px 0" fontWeight="bold" fontSize="22px">
            Fully Refundable before Mar 6
          </Span>
          <Span lineHeight="28px" fontSize="14px" fontWeight="500">
            Cancel your reservation before Mar 6 at 11:59pm, and you'll get a full
            refund.
            <br />
            After that, you won't get a refund. Times are based on the property’s local time.
          </Span>
        </StyledRoomModalContent>
      </StyledRoomModal>
    </Modal>
  );
}

const StyledRoomModal = styled.div`
  box-sizing: border-box;
  width: 820px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: 100vh;
  overflow: auto;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
`

const StyledRoomModalContent = styled.div`
  box-sizing: border-box;
  padding: 20px 28px 32px 28px;
  display: flex;
  flex-direction: column;
  outline: none;
  background-color: white;
  height: auto;
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: auto;

  span {
    display: block;
  }
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
    width: 388px;
    height: 250px;
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
  margin-top: 8px;
  display: grid;
  grid-template-columns: 50% 50%;
  row-gap: 12px;
`;

const RoomImage = styled.div`
  padding: 8px 0px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & > div {
    width: 388px;
  }
  .carousel__inner-slide {
    width: 56px;
    height: 55px;
  }
  .carousel__slide {
    width: 56px!important;
    height: 55px!important;
  }
`;
