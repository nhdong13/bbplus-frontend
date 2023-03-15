import styled from "styled-components";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Typography as Span } from "../Typography";
import { IModal } from "@/utils/types/Modal";
import { ReactSVG } from "react-svg";
import IMAGES from "@/assets/images";
import { Container } from "@/styles";
import { HOTEL_RESULT_DATA } from "@/utils/dataTest";
import { COLORS } from "@/utils/colors";
import { StyledModal } from "./styles";
import { GradientButton } from "../Button";

interface IRoomExtras extends IModal {}

export default function RoomExtras({
  title,
  isOpen,
  onCloseModal,
}: IRoomExtras) {
  const onChangeQty = () => {};
  return (
    <Modal open={isOpen} onClose={onCloseModal}>
      <StyledModal>
        <Span
          textAlign="right"
          padding="20px 28px 0 28px"
          style={{
            alignSelf: "end",
          }}
          onClick={onCloseModal}
        >
          <ReactSVG
            className="close-btn"
            onClick={onCloseModal}
            src={IMAGES.iconClose}
          />
        </Span>
        <Span padding="0 28px" fontSize="20px" fontWeight="bold">
          {title}
        </Span>
        <Container display="block" maxWidth="880px">
          <Details>
            {HOTEL_RESULT_DATA[1].roomOptions.map((option, index) => {
              return (
                <Option key={option.title + index}>
                  <div>
                    <Span>{option.title}</Span>
                    <Span fontSize="12px">
                      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </Span>
                  </div>
                  <div className="price">
                    <Span textAlign="center" fontWeight="bold">
                      {option.price}
                    </Span>
                  </div>
                  <div className="qty">
                    <Span
                      fontSize="12px"
                      textAlign="center"
                      color={COLORS.electricRed}
                    >
                      Qty
                    </Span>
                    <FormControl fullWidth>
                      <Select
                        label="qty"
                        displayEmpty
                        defaultValue={0}
                        input={<OutlinedInput />}
                        // inputProps={{ "aria-label": "Without label" }}
                        onChange={onChangeQty}
                      >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </Option>
              );
            })}
          </Details>
        </Container>
        <Action>
          <Span fontSize="24px" fontWeight="bold">
            $XXX{" "}
            <Span fontSize="16px" fontWeight="normal">
              total
            </Span>
          </Span>
          <GradientButton
            isSelected
            text="Update trip"
            color={COLORS.gradient2}
            handleSubmit={onCloseModal}
          />
        </Action>
      </StyledModal>
    </Modal>
  );
}

const Details = styled.div`
  max-height: 360px;
  padding: 20px 28px 68px 28px;
  margin-top: 32px;
  display: grid;
  grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  height: fit-content;
  gap: 20px;
  row-gap: 12px;
  overflow-y: auto;
`;

const Option = styled.div`
  display: grid;
  grid-template-columns: 60% 20% 20%;
  padding: 30px 20px;
  border-radius: 12px;
  border: 1px solid ${COLORS.grayAf};
  &:hover {
    background-color: #d0d8f3;
  }
  & > div {
    display: flex;
    flex-direction: column;
    span {
      word-wrap: break-word;
    }
  }
  .MuiInputBase-root {
    width: fit-content;
    min-width: 54px;
    height: 40px;
  }
  .MuiSelect-select {
    padding: 0 0 0 12px !important;
  }
  .MuiSvgIcon-root {
    right: 0;
  }
  .MuiFormControl-root {
    width: fit-content;
  }
  .qty {
    align-items: center;
    gap: 4px;
  }
  .price {
    justify-content: center;
  }
`;

const Action = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 28px;
  border-top: 1px solid black;
`;
const Button = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 16px 16px;
  border-radius: 12px;
  background: linear-gradient(
    90deg,
    rgba(0, 180, 146, 1) 0%,
    rgba(0, 159, 199, 1) 100%
  );
`;
