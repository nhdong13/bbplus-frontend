import IMAGES from "@/assets/images";
import { COLORS } from "@/utils/colors";
import { RoomOptions } from "@/utils/types/CardHotel";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import styled from "styled-components";
import { H3, H4 } from "../Typography";

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
`;

const RoomOptions = styled.div`
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
      margin-bottom: 20px;
    }
  }

  .room-card__option-detail {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const DashDivider = styled.div`
  border: none;
  height: 2px;
  border-bottom: solid 2px ${COLORS.grayAf};
  border-bottom-style: dotted;
  margin-bottom: 23px;
`;

const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

interface IRoomCard {
  checkbox?: boolean;
  roomOptions: RoomOptions[];
}

export default function RoomCard({ checkbox, roomOptions }: IRoomCard) {
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
              {roomOptions.map((item) => {
                return (
                  <RadioGroup
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
                          control={<Radio />}
                          label={item.title}
                        />
                      ) : (
                        <H4>{item.title}</H4>
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
                        <img className="info-icon" src={IMAGES.iconInfo} />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="room-card__option">
                    <div className="room-card__option-detail">
                      <div></div>
                      <p>More details</p>
                      <img className="info-icon" src={IMAGES.iconInfo} />
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
