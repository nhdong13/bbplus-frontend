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
import { StyledModal, StyledModalContent } from "./styles";
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
        <StyledModalContent>
          <div className="header">
            <Span padding="0 0 0 16px" fontSize="24px" fontWeight="bold">
              {title}
            </Span>
            <Span
              textAlign="right"
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
          </div>

          <Container display="block" maxWidth="820px" width="820px">
            <Details>
              {HOTEL_RESULT_DATA[1].modalOptions?.map((option, index) => {
                return (
                  <Option key={option.title + index}>
                    <div>
                      <Span fontWeight="bold" fontSize="18px">
                        {option.title}
                      </Span>
                      <Span className="detail" fontSize="14px">
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                      </Span>
                    </div>
                    <div className="price">
                      <Span fontWeight="bold" fontSize="16px">
                        _
                      </Span>
                      <Span textAlign="center" fontWeight="bold" fontSize="20px">
                        {option.price}
                      </Span>
                    </div>
                    <div className="qty">
                      <Span
                        fontSize="14px"
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
                          onChange={onChangeQty}
                          IconComponent={(props) => (
                            <ReactSVG
                              className="dropdown"
                              src={IMAGES.iconDropDownBlue}
                            ></ReactSVG>
                          )}
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
              className="btn"
              isSelected
              text="Update trip"
              color={COLORS.gradient2}
              handleSubmit={onCloseModal}
              fontWeight="bold"
              borderRadius="5px"
            />
          </Action>
        </StyledModalContent>
      </StyledModal>
    </Modal>
  );
}

const Details = styled.div`
  box-sizing: border-box;
  max-height: 533px;
  margin: 0 4px 12px 4px;
  padding: 0 12px 80px 16px;
  display: grid;
  grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  height: fit-content;
  gap: 20px;
  row-gap: 12px;
  overflow-y: scroll;
  position: relative;
  &::-webkit-scrollbar-button:single-button {
    display: flex;
    padding: 10px;
    border-style: solid;
    height: 8px;
  }
  /* Up */
  &::-webkit-scrollbar-button:single-button:vertical:decrement {
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent ${COLORS.gray80} transparent;
  }

  ::-webkit-scrollbar-button:single-button:vertical:decrement:hover {
    border-color: transparent transparent ${COLORS.gray80} transparent;
  }
  /* Down */
  ::-webkit-scrollbar-button:single-button:vertical:increment {
    border-width: 8px 8px 0 8px;
    border-color: ${COLORS.gray80} transparent transparent transparent;
  }

  &::-webkit-scrollbar {
    position: absolute;
    padding: 12px 0;
  }
  &::-webkit-scrollbar-thumb {
    background: ${COLORS.gray80};
  }
`;

const Option = styled.div`
  display: grid;
  grid-template-columns: 60% 20% 20%;
  padding: 30px 12px;
  border-radius: 12px;
  border: 1px solid ${COLORS.grayAf};
  &:nth-last-of-type(-n + 2) {
    margin-bottom: 20px;
  }
  &:hover {
    background-color: #d0d8f3;
  }
  & > div {
    display: flex;
    flex-direction: column;
    span {
      word-wrap: break-word;
    }
    &:first-child {
      .detail {
        max-width: 157px;
      }
    }
  }
  .MuiInputBase-root {
    width: fit-content;
    min-width: 48px;
    height: 40px;
    position: relative;
    .MuiOutlinedInput-notchedOutline {
      border-color: black;
    }
    .dropdown {
      position: absolute;
      pointer-events: none;
      right: 4px;
      width: fit-content;
      height: fit-content;
      svg {
        width: 12px;
        height: 6px;
      }
    }
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
    & > span:first-child {
      opacity: 0;
      line-height: 16px;
    }
  }
`;

const Action = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 28px;
  border-top: 1px solid ${COLORS.gray81};
  .btn {
    height: 62px;
    box-sizing: border-box;
    span {
      padding: 0 38px;
    }
  }
`;
