import IMAGES from "@/assets/images";
import { Container } from "@/styles";
import { IModal } from "@/utils/types/Modal";
import { Modal } from "@mui/material";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import { Typography as Span } from "../Typography";

interface ITextModal extends IModal {
  paragraph?: string;
}

export default function TextModal({
  isOpen,
  title,
  paragraph,
  onCloseModal,
}: ITextModal) {
  return (
    <Modal open={isOpen} onClose={onCloseModal}>
      <StyledTextModal>
        <Span
          className="close-btn"
          textAlign="right"
          onClick={onCloseModal}
        >
          <ReactSVG src={IMAGES.iconClose} />
        </Span>
        <Container display="flex" flexDirection="column" maxWidth="800px">
          <Span fontSize="20px" fontWeight="bold">
            {title}
          </Span>
          <Span>{paragraph}</Span>
        </Container>
      </StyledTextModal>
    </Modal>
  );
}

const StyledTextModal = styled.div`
  padding: 20px 28px 32px 28px;
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
`;
