import IMAGES from "@/assets/images"
import { COLORS } from "@/utils/colors"
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import styled from "styled-components"
import { H3, H4 } from "../Typography"


const StyledRoomCard = styled.div`
  border: 2px solid ${COLORS.doveGray};
  border-style: dashed;
  border-radius: 5px;
  cursor: pointer;
  height: 100%;
  max-width: 350px;
  padding: 30px 20px;
  width: 100%;

  &:hover{
    border: 2px solid ${COLORS.commandBlue};
    background-color: ${COLORS.aliceBlue};
  }
`

const RoomOptions = styled.div`
  .room-card__room-option-item {
    display: flex;
    justify-content: space-between;
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
`

const DashDivider = styled.div`
  border: none;
  height: 2px;
  border-bottom: dashed 2px ${COLORS.doveGray};
  margin-bottom: 23px;
`

const StyledFormControl = styled(FormControl)`
  width: 100%;
`

export default function RoomCard() {
  const roomOptions = [
    {
      id: 1,
      title: 'Non-Refundable',
      price: '$XXX',
      value: '',
    },
    {
      id: 2,
      title: 'Fully refundable',
      price: '$XXX',
      value: '',
    },
    {
      id: 3,
      title: 'Non-Refundable',
      price: '$XXX',
      value: '',
    },
    {
      id: 4,
      title: 'Breakfast buffet',
      price: '$XXX',
      value: '',
    },
    {
      id: 5,
      title: 'Fully refundable ',
      price: '$XXX',
      value: '',
    },
    {
      id: 6,
      title: 'Breakfast buffet',
      price: '$XXX',
      value: '',
    },
    {
      id: 7,
      title: 'Fully refundable ',
      price: '$XXX',
      value: '',
    },
  ]
  return (
    <>
      <StyledRoomCard>
        <div className="room-card__container">
          <H4>1 x Suite, Ocean view</H4>
          <RoomOptions>
            <StyledFormControl>
              {roomOptions.map((item) => {
                return (
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <div className="room-card__room-option-item">
                      <FormControlLabel value={item.value} control={<Radio />} label={item.title} />
                      <p>{item.price}</p>
                    </div>
                  </RadioGroup>
                )
              })}
              < DashDivider />
              <div className="room-card__price-detail-container">
                <H3>FJ$XXX</H3>
                <div className="room-card__price-detail">
                  <p>Price details</p>
                  <div>
                    <p>More details</p>
                    <img src={IMAGES.iconInfo} />
                  </div>
                </div>
              </div>
            </StyledFormControl>
          </RoomOptions>
        </div>
      </StyledRoomCard>
    </>
  )
}
