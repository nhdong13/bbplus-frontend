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
import { Divider, StyledModal, StyledModalContent } from "./styles";
import { GradientButton } from "../Button";
import { isMobileResponsive } from "@/utils/constant";
import { BREAKPOINTS } from "@/utils/breakpoints";

interface IRoomExtras extends IModal {}

export default function RoomExtras({
  title,
  isOpen,
  onCloseModal,
}: IRoomExtras) {
  const onChangeQty = () => {};
  const isMobile = isMobileResponsive()
  return (
    <Modal open={isOpen} onClose={onCloseModal}>
      <StyledModal width={isMobile ? "410px" : "820px"}>
        <StyledModalContent>
          <div className="header">
            <Span padding={isMobile ? "0 0 0 5px" : "0 0 0 16px"} fontSize={isMobile ? "16px" :"24px"} fontWeight="bold">
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
                className="close-btn room-extras_close-button"
                onClick={onCloseModal}
                src={IMAGES.iconClose}
              />
            </Span>
          </div>
          {isMobile && <Divider />}
          <Container display="block" maxWidth="820px" width="820px">
            <Details>
              {HOTEL_RESULT_DATA[1].modalOptions?.map((option, index) => {
                return (
                  <Option key={option.title + index}>
                    <TitleDetails>
                      <Span fontWeight="bold" fontSize="18px">
                        {option.title}
                      </Span>
                      <Span className="detail" fontSize="14px">
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                      </Span>
                    </TitleDetails>
                    <div className="price">
                      <Span fontWeight="bold" fontSize="16px">
                        _
                      </Span>
                      <Span textAlign="center" fontWeight="bold" fontSize={ isMobile ? "16px" : "20px"}>
                        {option.price}
                      </Span>
                    </div>
                    <div className="qty">
                      <Span
                        fontSize={isMobile ? "12px": "14px"}
                        fontWeight = {isMobile ? "400" : ""}
                        textAlign="center"
                        color={isMobile ? COLORS.red : COLORS.electricRed}
                      >
                        Qty
                      </Span>
                      <FormControl fullWidth={true}>
                        <Select
                          label="qty"
                          displayEmpty
                          defaultValue={0}
                          input={<OutlinedInput />}
                          onChange={onChangeQty}
                          IconComponent={(props) => (
                            <ReactSVG
                              className="dropdown"
                              src={isMobile ? IMAGES.mobileIconDropDown : IMAGES.iconDropDownBlue}
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
            <Span fontSize={isMobile ? "16px" : "24px"} fontWeight="bold" padding={isMobile ? "0 0 0 10px" : "0"}>
              $XXX&nbsp;
              <Span fontSize={isMobile ? "12px" : "16px"} fontWeight="normal">
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
              borderRadius={isMobile ? "5px" : "17px"}
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
  @media ${BREAKPOINTS.mobileLg} {
    grid-template-columns: initial; 
    &::-webkit-scrollbar {
      display: none;
    }
    margin: 0px;
    padding: 0px;
    max-height: 80vh;
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
    @media ${BREAKPOINTS.mobileLg} {
      margin-bottom: 0;
    }
  }
  @media ${BREAKPOINTS.mobileLg} {
    &:nth-last-of-type(-n + 2) {
      margin-bottom: 0;
    }
    &:last-child {
      margin-bottom: 10px;
    }
    &:first-child {
      margin-top: 10px;
    }
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
      @media ${BREAKPOINTS.mobileLg} {
        .detail {
          max-width: 238px;
        }
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
    @media ${BREAKPOINTS.mobileLg} {
      width: 100%;
      .dropdown {
        top: 45%;
        left: 50%;
        transform: translate(-50%,-50%);
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
    @media ${BREAKPOINTS.mobileLg} {
      width: 100%;
    }
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
  @media ${BREAKPOINTS.mobileLg} {
    padding: 10px;
    .price {
      flex-direction: row;
      align-items: center;
    }
    .MuiSelect-select {
      font-size: 12px;
      font-family: Manrope;
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
  @media ${BREAKPOINTS.mobileLg} {
    padding: 10px;
    .btn {
      height: 42px;
      width: 96px;
      span {
        padding: 0 38px;
      }
    }
    flex-grow: 1;
  }
`;

const TitleDetails = styled.div`
  @media ${BREAKPOINTS.mobileLg} {
    span {
      font-size: 16px;
      font-weight: 700;
    }
  }
`;