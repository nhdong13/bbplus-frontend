import IMAGES from "@/assets/images";
import { COLORS } from "@/utils/colors";
import { RoomOptions } from "@/utils/types/CardHotel";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { useGlobalModalContext } from "../Modal";
import { H3, H4 } from "../Typography";

interface IRoomCard {
  checkbox?: boolean;
  roomOptions: RoomOptions[];
}

export default function RoomCard({ checkbox, roomOptions }: IRoomCard) {
  const [selectedOption, setSelectedOption] = useState<number>();
  const { showModal } = useGlobalModalContext();

  const onChecked = (option: number) => {
    setSelectedOption(option);
  };
  return (
    <>
      <StyledRoomCard>
        <div
          className={
            checkbox ? "room-card__container" : "room-card__option-container"
          }
        >
          {checkbox && <H4>1 x Suite, Ocean view</H4>}
          <RoomOptions>
            <StyledFormControl>
              {roomOptions.map((item,index) => {
                return (
                  <RadioGroup
                    key={index}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <div
                      className={`${
                        checkbox
                          ? "room-card__room-option-item"
                          : "room-card__option-title"
                      }`}
                    >
                      {checkbox ? (
                        <FormControlLabel
                          value={item.value}
                          control={
                            <span
                              className="checkbox"
                              onClick={() => {
                                onChecked(item.id);
                              }}
                            >
                              {selectedOption === item.id && (
                                <span className="checked"></span>
                              )}
                            </span>
                          }
                          label={item.title}
                        />
                      ) : (
                        <H4>{item.title}</H4>
                      )}
                      {item.detail ? (
                        <p className="option-detail">{item.detail}</p>
                      ) : (
                        <></>
                      )}
                      <p>{item.price}</p>
                    </div>
                  </RadioGroup>
                );
              })}
              {checkbox ? (
                <>
                  <DashDivider />
                  <div className="room-card__price-detail-container">
                    <H3>FJ$XXX</H3>
                    <div className="room-card__price-detail">
                      <p>Price details</p>
                      <div>
                        <p>More details</p>
                        <img
                          className="info-icon"
                          src={IMAGES.iconInfo}
                          onClick={() => {
                            showModal("room_details", {
                              title: "Garden View Room",
                              details: {}
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="room-card__option">
                    <div className="room-card__option-detail">
                      <p>More details</p>
                      <img
                        className="info-icon"
                        src={IMAGES.iconInfo}
                        onClick={() => {
                          showModal("room_details");
                        }}
                      />
                    </div>
                  </div>
                </>
              )}
            </StyledFormControl>
          </RoomOptions>
        </div>
      </StyledRoomCard>
    </>
  );
}

const StyledRoomCard = styled.div`
  border: 2px solid ${COLORS.grayAf};
  border-style: dotted;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    border: 2px solid ${COLORS.commandBlue};
    background-color: ${COLORS.aliceBlue};
  }
  .room-card__container {
    padding: 30px 20px;
  }
  .room-card__option-container {
    padding: 30px 20px 10px 20px;
  }
  .PrivateSwitchBase-input {
    /* width: 42px;
    height: 42px; */
  }
`;

const RoomOptions = styled.div`
  margin-top: 8px;
  .room-card__room-option-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .room-card__price-detail {
    align-items: center;
    color: ${COLORS.blueRibbon};
    display: flex;
    justify-content: space-between;

    & > div {
      align-items: center;
      display: flex;
      gap: 18px;
    }
  }

  .info-icon {
    width: 27px;
    height: 27px;
  }

  .room-card__option {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .room-card__option-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      margin-bottom: 8px;
      text-align: center;
    }

    .option-detail {
      margin-bottom: 8px;
    }
  }

  .room-card__option-detail {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    p {
      color: ${COLORS.blueRibbon};
    }
    img {
      position: absolute;
      right: 0px;
    }
  }
  .MuiSvgIcon-root {
    width: 32px;
    height: 32px;
    &:first-child {
      path {
        /* fill: red; */
      }
    }
  }
  .checkbox {
    background: linear-gradient(
      90deg,
      rgba(0, 180, 146, 1) 0%,
      rgba(0, 159, 199, 1) 100%
    );
    width: 32px;
    height: 32px;
    border-radius: 100%;
    margin: 4px 8px 4px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &:after {
      display: block;
      content: "";
      width: 26px;
      height: 26px;
      border-radius: 100%;
      background: white;
    }
  }
  .checked {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    position: absolute;
    background: linear-gradient(
      90deg,
      rgba(0, 180, 146, 1) 0%,
      rgba(0, 159, 199, 1) 100%
    );
  }
  .MuiFormControlLabel-root {
    margin-left: 0px;
  }
`;

const DashDivider = styled.div`
  border: none;
  height: 2px;
  border-bottom: solid 2px ${COLORS.grayAf};
  border-bottom-style: dotted;
  margin-bottom: 23px;
  padding: 10px 0;
`;

const StyledFormControl = styled(FormControl)`
  width: 100%;
`;
