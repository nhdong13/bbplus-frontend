import { IModal } from "@/utils/types/Modal";
import {
  FormControl,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { Typography as Span } from "../Typography";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import IMAGES from "@/assets/images";
import { StyledModal, StyledModalContent } from "./styles";
import { Container } from "@/styles";
import { useState } from "react";
import { GradientButton } from "../Button";
import { COLORS } from "@/utils/colors";
import { ONE_WAY_SEAT, RETURN_SEAT } from "@/utils/dataTest";
import Dropdown from "../Dropdown/Dropdown";
import DatePicker from "react-multi-date-picker";

interface IRoomTransfer extends IModal {
  transferType?: string;
}

const TAB = ["option", "about"];
const OPTION = ["one_way", "return"];
const EXPAND = ["cancellation", "luggage", "waiting"];
export default function RoomTransfer({ isOpen, onCloseModal, transferType }: IRoomTransfer) {
  const [selectedTab, setSelectedTab] = useState<string>(TAB[0]);
  const [selectedOption, setSelectedOption] = useState<string>(OPTION[0]);
  const [expand, setExpand] = useState<string[]>([]);

  return (
    <Modal open={isOpen} onClose={onCloseModal}>
      <StyledModal width="820px">
        <StyledModalContent>
          <div className="header">
            <Span fontSize="24px" fontWeight="bold">
              Tewaka Fiji:&nbsp;
              <Span fontWeight="300">Warwick Fiji Resort & Spa</Span>
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

          <Container display="block" maxWidth="820px">
            <Image src={transferType === "air" ? IMAGES.airportTransfer : IMAGES.landTransfer} alt="" />
            <TabContainer>
              <Tabs
                className="tab-container"
                value={selectedTab}
                onChange={(_, value) => setSelectedTab(value)}
              >
                <Tab label="Select an option" value={TAB[0]} />
                <Tab label="About this supplier" value={TAB[1]} />
              </Tabs>
            </TabContainer>

            <Details>
              <div className="tab-panel" hidden={selectedTab !== TAB[0]}>
                <GroupButton>
                  <GradientButton
                    isSelected
                    text="One Way"
                    textColor={selectedOption === OPTION[0] ? "white" : "black"}
                    borderRadius="4px"
                    borderGradient={
                      selectedOption !== OPTION[0] ? COLORS.borderGradient : ""
                    }
                    borderWidth={selectedOption !== OPTION[0] ? "2px" : "0px"}
                    color={
                      selectedOption !== OPTION[0] ? "white" : COLORS.gradient2
                    }
                    handleSubmit={() => setSelectedOption(OPTION[0])}
                  />
                  <GradientButton
                    isSelected
                    text="Return"
                    fontSize="14px"
                    textColor={selectedOption === OPTION[1] ? "white" : "black"}
                    textPadding="0"
                    borderRadius="4px"
                    borderGradient={
                      selectedOption !== OPTION[1] ? COLORS.borderGradient : ""
                    }
                    borderWidth={selectedOption !== OPTION[1] ? "2px" : "0px"}
                    color={
                      selectedOption !== OPTION[1] ? "white" : COLORS.gradient2
                    }
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
                    <div className="date-input">
                      <DatePicker
                        format="DD/MM/YYYY"
                        disabled={selectedOption !== OPTION[0]}
                      />
                      <ReactSVG
                        className="dropdown"
                        src={IMAGES.iconDropDownBlue}
                      ></ReactSVG>
                    </div>
                    {ONE_WAY_SEAT.map((item) => {
                      return (
                        <div className="option" key={item}>
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
                    <div className="date-input">
                      <DatePicker
                        format="DD/MM/YYYY"
                        disabled={selectedOption !== OPTION[1]}
                      />
                      <ReactSVG
                        className="dropdown"
                        src={IMAGES.iconDropDownBlue}
                      ></ReactSVG>
                    </div>

                    {RETURN_SEAT.map((item) => {
                      return (
                        <div className="option" key={item}>
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
              </div>
              <div className="tab-panel" hidden={selectedTab !== TAB[1]}>
                <Span className="paragraph" fontSize="14px">
                  Tewaka Fiji provides genuinely unique experiences for travel in
                  Fiji. From the very moment you arrive at Nadi International
                  Airport, the team will be ready to personally meet you at the
                  arrivals concourse and guide you to your waiting vehicle. The
                  transition from your arrival experience to your journey to your
                  hotel will be seamless as you ensure a carefree and efficient
                  facilitation of your transfer. Your driver for the transfer will
                  provide a brief outline of the journey along with some
                  highlights that may interest you.
                  <br />
                  <br />
                  Head back to the airport in style with an included return.
                  <br />
                  <br />
                  Fine Print
                </Span>
                <Dropdown
                  className="dropdown"
                  title="Cancellation policy"
                  expand={expand.includes(EXPAND[0])}
                  onExpand={() => {}}
                  details={<></>}
                  expandIcon={
                    <ReactSVG
                      className="expand-icon"
                      src={IMAGES.iconDropDownBlue}
                    />
                  }
                ></Dropdown>
                <Dropdown
                  className="dropdown"
                  title="Luggage"
                  expand={expand.includes(EXPAND[1])}
                  onExpand={() => {}}
                  details={<></>}
                  expandIcon={
                    <ReactSVG
                      className="expand-icon"
                      src={IMAGES.iconDropDownBlue}
                    />
                  }
                ></Dropdown>
                <Dropdown
                  className="dropdown"
                  title="Waiting time changes"
                  expand={expand.includes(EXPAND[2])}
                  onExpand={() => {}}
                  details={<></>}
                  expandIcon={
                    <ReactSVG
                      className="expand-icon"
                      src={IMAGES.iconDropDownBlue}
                    />
                  }
                ></Dropdown>
              </div>
            </Details>
          </Container>
          <Action>
            <Span fontSize="24px" fontWeight="bold">
              $XXX&nbsp;
              <Span fontSize="16px" fontWeight="normal">
                total
              </Span>
            </Span>
            <GradientButton
              isSelected
              text="Update trip"
              color={COLORS.gradient2}
              handleSubmit={onCloseModal}
              fontWeight="bold"
              borderRadius="17px"
              textPadding="0 38.5px 0 38.5px"
              height="62px"
            />
          </Action>
        </StyledModalContent>
      </StyledModal>
    </Modal>
  );
}

const TabContainer = styled.div`
  width: 100%;
  margin-bottom: 24px;
  .MuiTabs-root {
    width: 100%;
  }
  .MuiTabs-flexContainer {
    justify-content: center;
    button {
      flex: 1;
      font-family: Manrope;
      font-weight: bold;
      border-bottom: 1px solid #aaa;
    }
  }
  .MuiTabs-flexContainer {
    display: grid;
    grid-template-columns: 50% 50%;
    box-sizing: border-box;
  }
  .MuiButtonBase-root {
    max-width: 100%;
    width: 100%;
  }
  .MuiTabs-indicator {
    height: 4px;
    box-sizing: border-box;
    width: 50% !important;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 28px 28px 28px;
  gap: 20px;
  span {
    width: 100%;
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
  .MuiTab-root {
    font-size: 16px;
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
  .MuiButtonBase-root {
    max-width: 100%;
  }
  .tab-panel {
    width: 100%;
    .paragraph {
      line-height: 20px;
      display: block;
      margin-bottom: 12px;
    }
    .dropdown .title {
      font-size: 16px;
    }
    .MuiPaper-root {
      box-shadow: none;
    }
    .MuiButtonBase-root {
      padding: 0;
      min-height: 32px;
      position: relative;
    }
    .MuiAccordionSummary-content {
      margin: 4px 0;
      padding-left: 24px;
    }
    .MuiAccordionSummary-expandIconWrapper {
      position: absolute;
      left: 0px;
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
  box-sizing: border-box;
  gap: 16px;
  & > div {
    width: 148px;
    height: 50px;
    padding: 0 20px;
    box-sizing: border-box;
    & > div {
      height: 50px;
    }
    span {
      width: fit-content;
      font-size: 14px;
      font-weight: 600;
      padding: 0;
    }
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

const Options = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  align-self: center;
  margin-top: 20px;
  .date-input {
    margin-top: 8px;
    display: block;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    .dropdown {
      position: absolute;
      top: calc(50% - 11px);
      right: 32px;
      pointer-events: none;
    }

    .rmdp-container {
      width: 100%;
      padding-right: 20px;
      box-sizing: border-box;
      input {
        width: 100%;
        box-sizing: border-box;
        height: 64px;
        padding: 0 20px;
        font-size: 14px;
        border-width: 2px;
      }
      .rmdp-arrow-container {
        width: 20px;
      }
      .rmdp-day span {
        height: 100%;
      }
    }
  }
  .option {
    width: 100%;
    display: grid;
    grid-template-columns: 60% 20% 20%;
    box-sizing: border-box;
    padding: 12px 0;
    border-bottom: 1px solid #aaa;
    fieldset {
      border-width: 2px;
      border-color: black;
    }
    span {
      align-self: center;
    }

    &:last-child {
      border-bottom: 0px solid #aaa;
    }
  }
  .active {
    .rmdp-container input {
      border-color: black;
    }
  }
`;
