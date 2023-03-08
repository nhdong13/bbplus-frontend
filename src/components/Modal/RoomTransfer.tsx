import { IModal } from "@/utils/types/Modal";
import {
  FormControl,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Tab,
  Tabs,
} from "@mui/material";
import { Typography as Span } from "../Typography";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import IMAGES from "@/assets/images";
import { StyledModal } from "./styles";
import { Container } from "@/styles";
import { useState } from "react";
import { GradientButton } from "../Button";
import { COLORS } from "@/utils/colors";
import { ONE_WAY_SEAT, RETURN_SEAT } from "@/utils/dataTest";

interface IRoomTransfer extends IModal {}

const TAB = ["option", "about"];
const OPTION = ["one_way", "return"];
export default function RoomTransfer({
  title,
  isOpen,
  onCloseModal,
}: IRoomTransfer) {
  const [selectedTab, setSelectedTab] = useState<string>(TAB[0]);
  const [selectedOption, setSelectedOption] = useState<string>(OPTION[0]);
  return (
    <Modal open={isOpen} onClose={onCloseModal}>
      <StyledModal width="720px">
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
        <Span padding="0 28px 28px 28px" fontSize="20px" fontWeight="bold">
          Tewaka Fiji:&nbsp;
          <Span fontWeight="300">Warwick Fiji Resort & Spa</Span>
        </Span>
        <Container display="block" maxWidth="720px">
          <Image src={IMAGES.hotelBg} alt="" />
          <Details>
            <Tabs
              value={selectedTab}
              onChange={(_, value) => setSelectedTab(value)}
            >
              <Tab label="Select an option" value={TAB[0]} />
              <Tab label="About this supplier" value={TAB[1]} />
            </Tabs>
            <GroupButton>
              <GradientButton
                isSelected={selectedOption === OPTION[0]}
                text="One Way"
                textColor={selectedOption === OPTION[0] ? "white" : "black"}
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
                handleSubmit={() => setSelectedOption(OPTION[0])}
              />
              <GradientButton
                isSelected={selectedOption === OPTION[1]}
                text="Return"
                fontSize="14px"
                textColor={selectedOption === OPTION[1] ? "white" : "black"}
                fontWeight="600"
                width="72px"
                height="fit-content"
                padding="6px 12px"
                textPadding="0"
                borderRadius="4px"
                borderWidth="2px"
                borderGradient={COLORS.gradient2}
                color={COLORS.gradient2}
                handleSubmit={() => setSelectedOption(OPTION[1])}
              />
            </GroupButton>
            <Options>
              <div
                className={`${
                  selectedOption === OPTION[0] ? "active" : "disable"
                }`}
              >
                <Span fontWeight="bold">Departure</Span>
                {ONE_WAY_SEAT.map((item) => {
                  return (
                    <div className="option">
                      <Span>{item}</Span>
                      <Span fontWeight="bold">$XXX</Span>
                      <FormControl fullWidth>
                        <Select
                          label="qty"
                          displayEmpty
                          defaultValue={0}
                          input={<OutlinedInput />}
                          disabled={selectedOption !== OPTION[0]}
                        >
                          <MenuItem value={0}>0</MenuItem>
                          <MenuItem value={10}>10</MenuItem>
                          <MenuItem value={20}>20</MenuItem>
                          <MenuItem value={30}>30</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  );
                })}
              </div>
              <div
                className={`${
                  selectedOption === OPTION[1] ? "active" : "disable"
                }`}
              >
                <Span margin="0 12px 0" fontWeight="bold">
                  Return
                </Span>
                {RETURN_SEAT.map((item) => {
                  return (
                    <div className="option">
                      <Span>{item}</Span>
                      <Span fontWeight="bold">$XXX</Span>
                      <FormControl fullWidth>
                        <Select
                          label="qty"
                          displayEmpty
                          defaultValue={0}
                          input={<OutlinedInput />}
                          disabled={selectedOption !== OPTION[1]}
                        >
                          <MenuItem value={0}>0</MenuItem>
                          <MenuItem value={10}>10</MenuItem>
                          <MenuItem value={20}>20</MenuItem>
                          <MenuItem value={30}>30</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  );
                })}
              </div>
            </Options>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 28px 28px 28px;
  gap: 20px;
  span {
    width: 100%;
  }
  .MuiTabs-root {
    width: 100%;
    border-bottom: 1px solid #aaa;
  }
  .MuiTabs-flexContainer {
    justify-content: center;
    button {
      flex: 1;
      font-family: Manrope;
      font-weight: bold;
    }
  }
  .Mui-selected {
    color: #5277cd;
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
  .active {
    span {
      color: black;
    }
  }
  .disable {
    span {
      color: #aaa;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const GroupButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 16px;
`;

const Action = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 28px;
  border-top: 1px solid black;
`;

const Options = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  align-self: center;
  & > div {
    &:first-child .option > span {
      padding-right: 12px;
    }
    &:last-child .option > span {
      padding-left: 12px;
    }
  }
  .option {
    width: 100%;
    display: grid;
    grid-template-columns: 60% 20% 20%;
    span {
      align-self: center;
    }
    padding: 12px 0;
    border-bottom: 1px solid #aaa;
    &:last-child {
      border-bottom: 0px solid #aaa;
    }
  }
`;
