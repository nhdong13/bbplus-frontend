import IMAGES from "@/assets/images";
import { COLORS } from "@/utils/colors";
import { RoomOptions, SelectedRoomType } from "@/utils/types/CardHotel";
import { FormControl, FormControlLabel, RadioGroup } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { MODAL_TYPES, useGlobalModalContext } from "../Modal";
import { H3, H4, Typography as Span } from "../Typography";
import { TAXES_AND_FEES } from "@/utils/dataTest";

interface IRoomCard {
  index?: number;
  type: string;
  checkbox?: boolean;
  roomOptions: RoomOptions[];
  selected?: boolean;
  onSelect?: (type: SelectedRoomType, option: number) => void;
}

export default function RoomCard({
  index,
  type,
  checkbox,
  roomOptions,
  selected,
  onSelect = () => {},
}: IRoomCard) {
  const [selectedOption, setSelectedOption] = useState<number>();
  const { showModal } = useGlobalModalContext();

  const onChecked = (option: number) => {
    setSelectedOption(option);
  };

  const onShowModal = (typeModal?: string) => {
    let title = "";
    let paragraph = "";
    const typeM = typeModal || type;
    if (typeM === MODAL_TYPES.ROOM_MODAL) title = "Garden View Room";
    if (typeM === MODAL_TYPES.ROOM_EXTRAS) title = "Hotel Extras";
    if (typeM === MODAL_TYPES.ROOM_TRANSFER)
      title = "Tewaka Fiji: Warwick Fiji Resort & Spa";
    if (typeM === MODAL_TYPES.TEXT) {
      title = "Taxes & fees";
      paragraph = TAXES_AND_FEES;
    }
    showModal(typeM, {
      title: title,
      paragraph: paragraph,
      details: {},
    });
  };
  return (
    <>
      <StyledRoomCard
        className={selected ? "selected" : ""}
        onClick={() => onSelect(checkbox ? "single" : "multiple", index || 0)}
      >
        <div
          className={
            checkbox ? "room-card__container" : "room-card__option-container"
          }
        >
          {checkbox && <H4>1 x Suite, Ocean view</H4>}
          <RoomOptions>
            <StyledFormControl>
              {roomOptions.map((item, index) => {
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
                        <div className="checkbox-item">
                          <div className="checkbox-label">
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
                              label={
                                <div className="title">
                                  <Span>{item.title}</Span>
                                  <Span>$XXX</Span>
                                </div>
                              }
                            />
                            {[2, 3].includes(index) ? (
                              <Span className="detail">Breakfast buffet</Span>
                            ) : index === 4 ? (
                              <Span className="detail">
                                All-inclusive + Special deal
                              </Span>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      ) : (
                        <H4>{item.title}</H4>
                      )}
                      {item.detail ? (
                        <p className="option-detail">{item.detail}</p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </RadioGroup>
                );
              })}
              {checkbox ? (
                <>
                  <DashDivider />
                  <div className="room-card__price-detail-container">
                    {[1, 3].includes(index || 0) ? (
                      <div className="spacing"></div>
                    ) : (
                      <>
                        <H3 lineHeight="28px" fontSize="24px">
                          FJ$XXX
                        </H3>
                      </>
                    )}

                    <div className="room-card__price-detail">
                      {[1, 3].includes(index || 0) ? (
                        <Span color={COLORS.red}>No availability</Span>
                      ) : (
                        <p onClick={() => onShowModal(MODAL_TYPES.TEXT)}>
                          Price details
                        </p>
                      )}
                      <div>
                        <p onClick={() => onShowModal()}>More details</p>
                        <img
                          className="info-icon"
                          src={IMAGES.iconInfo}
                          onClick={() => onShowModal()}
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="room-card__option">
                    <p>$XXX</p>
                    <div className="room-card__option-detail">
                      <p onClick={() => onShowModal()}>More details</p>
                      <img
                        className="info-icon"
                        src={IMAGES.iconInfo}
                        onClick={() => onShowModal()}
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
  &.selected {
    border: 2px solid ${COLORS.commandBlue};
    background-color: ${COLORS.aliceBlue};
  }
  &:hover {
    border: 2px solid ${COLORS.commandBlue};
    background-color: ${COLORS.aliceBlue};
  }
  .room-card__container {
    padding: 30px 20px;
  }
  .room-card__option-container {
    padding: 30px 20px 10px 20px;
    height: 100%;
    box-sizing: border-box;
  }
`;

const RoomOptions = styled.div`
  height: 100%;
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

  .spacing {
    margin-top: 28px;
  }
  .MuiSvgIcon-root {
    width: 32px;
    height: 32px;
  }

  .MuiTypography-body1 {
    width: calc(100% - 40px);
  }
  .MuiFormControl-root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    .checkbox-label {
      width: 100%;
      display: flex;
      flex-direction: column;
      .detail {
        margin-left: 40px;
        margin-top: -8px;
      }
    }
    .checkbox-item {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .title {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
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
    margin-right: 0px;
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
