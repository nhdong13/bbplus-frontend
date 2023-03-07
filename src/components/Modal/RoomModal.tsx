import styled from "styled-components";
import { Container } from "@/styles";
import { Typography as Span } from "../Typography";
import { Modal } from "@mui/material";
import { RoomModalDetail } from "@/utils/dataTest";
import { ReactSVG } from "react-svg";
import IMAGES from "@/assets/images";

interface IRoomModal {
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
  return (
    <Modal open={isOpen} onClose={onCloseModal}>
      <StyledRoomModal>
        <Span className="close-btn" textAlign="right" onClick={onCloseModal}>
          X
        </Span>
        <Container display="flex" flexDirection="column">
          <Span fontWeight="bold">{title}</Span>
          <Benefits>
            {RoomModalDetail.benefits.map((item) => {
              return (
                <div className="item">
                  <ReactSVG src={IMAGES.iconTick} />
                  <Span>{item}</Span>
                </div>
              );
            })}
          </Benefits>
        </Container>
      </StyledRoomModal>
    </Modal>
  );
}

const StyledRoomModal = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  outline: none;
  background-color: white;
  width: 800px;
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
  }
`;

const Left = styled.div``;

const Benefits = styled.div`
  svg {
    width: 24px;
    height: 24px;
  }
`;
