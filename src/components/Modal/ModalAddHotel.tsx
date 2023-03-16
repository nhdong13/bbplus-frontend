import { IModal } from "@/utils/types/Modal";
import {
  FormControl,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
} from "@mui/material";
import styled from "styled-components";
import { GradientButton } from "../Button";
import { Typography as Span } from "../Typography";
import { ReactSVG } from "react-svg";
import IMAGES from "@/assets/images";
import { COLORS } from "@/utils/colors";

interface IModalAddHotel extends IModal {
  hotels: string[];
  callback: () => void;
}

export default function ModalAddHotel({
  isOpen,
  onCloseModal,
  title,
  hotels,
  callback,
}: IModalAddHotel) {
  return (
    <Modal open={isOpen} onClose={onCloseModal}>
      <StyledModalAddHotel>
        <div className="header">
          <Span fontSize="24px" fontWeight="bold">
            {title}
          </Span>
          <Span className="close-btn" textAlign="right" onClick={onCloseModal}>
            <ReactSVG src={IMAGES.iconClose} />
          </Span>
        </div>
        <div className="content">
          <FormControl fullWidth>
            <Select
              label="qty"
              displayEmpty
              defaultValue={""}
              input={<OutlinedInput />}
              // inputProps={{ "aria-label": "Without label" }}
              IconComponent={(props) => (
                <ReactSVG
                  className="dropdown"
                  src={IMAGES.iconDropDownBlue}
                ></ReactSVG>
              )}
            >
              <MenuItem disabled value="">
                Select the second hotel from the list
              </MenuItem>
              {hotels.map((hotel) => (
                <MenuItem value={hotel}>{hotel}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <Divider />
        <div className="footer">
          <Span>Fiji Gateway Hotel</Span>
          <GradientButton
            isSelected
            text="Update trip"
            color={COLORS.gradient1}
            borderRadius="5px"
            textPadding="0 40.5px"
            fontWeight="bold"
            handleSubmit={() => {
              callback();
              onCloseModal();
            }}
          />
        </div>
      </StyledModalAddHotel>
    </Modal>
  );
}

const StyledModalAddHotel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  outline: none;
  background-color: white;
  width: 600px;
  height: 278px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    padding: 20px 30px;
  }
  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
  }
  .content {
    height: 150px;
    padding: 0px 30px;
  }
  .MuiInputBase-root {
    position: relative;
    height: 58px;
    .MuiOutlinedInput-notchedOutline {
      border-color: black;
    }
    .dropdown {
      position: absolute;
      pointer-events: none;
      right: 20px;
      width: fit-content;
      height: fit-content;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${COLORS.grayAf};
`;
