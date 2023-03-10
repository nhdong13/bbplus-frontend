import { IModal } from "@/utils/types/Modal";
import { Modal } from "@mui/material";
import styled from "styled-components";
import IMAGES from "@/assets/images";
import { ReactSVG } from "react-svg";
import { Typography as Span } from "../Typography";
import Calendar from "../Calendar";
import { GradientButton } from "../Button";
import { COLORS } from "@/utils/colors";

interface IModalCalendar extends IModal {}

export default function ModalCalendar({
  isOpen,
  onCloseModal,
}: IModalCalendar) {
  return (
    <Modal open={isOpen} onClose={onCloseModal}>
      <StyledModalCalender>
        <div className="modal-header">
          <GradientButton
            isSelected={false}
            text="Filter By Room"
            textColor="black"
            fontSize="14px"
            fontWeight="600"
            width="72px"
            height="100%"
            padding="6px 12px"
            textPadding="0"
            borderWidth="2px"
            borderRadius="4px"
            borderGradient={COLORS.gradient2}
            color={COLORS.gradient2}
          />
          <Span className="close-btn" textAlign="right" onClick={onCloseModal}>
            <ReactSVG src={IMAGES.iconClose} />
          </Span>
        </div>

        <Calendar />
      </StyledModalCalender>
    </Modal>
  );
}

const StyledModalCalender = styled.div`
  padding: 20px 28px 68px 28px;
  display: flex;
  flex-direction: column;
  outline: none;
  background-color: white;
  width: 960px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .modal-header {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 40px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${COLORS.grayAf};
  }
`;
