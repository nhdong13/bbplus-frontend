import { COLORS } from "@/utils/colors";
import Divider from "../Layout/Divider"
import { GradientButton } from "../Button";
import {
  StyledRoomOptions,
  StyledTravelerDropDown,
  ButtonContainer,
  StyledQuantityButton,
  StyledSelectAges,
} from "./StyledTravelerDropDown";
import { TravelerDropDown } from "@/utils/types/CardHotel";
import { H4, H5 } from "../Typography";
import { VerticalContainer } from "../Layout/VerticalContainer";
import HorizontalContainer from "../Layout/HorizontalContainer";

const TravelerDropDown = ({ isShown }: TravelerDropDown) => {
  return (
    <StyledTravelerDropDown className={true ? "open" : "close"} gap="20px">
      <RoomOptions isShown={isShown} />
    </StyledTravelerDropDown>
  )
}

export default TravelerDropDown;

interface RoomOptions {
  isShown?: boolean
}
const RoomOptions = ({ isShown }: RoomOptions) => {
  return (
    <>
      <StyledRoomOptions isShown={true}>
        <div className="room-option__container">
          <div className="room-option__left">
            <H4>Room 1</H4>
          </div>
          <Divider color={COLORS.silver} height="100%" width="1px" margin="0" />
          <div className="room-option__right">
            <H4>Primary party name (Optional)</H4>

            <div className="room-option__name-input-container">
              <input placeholder="Name of primary contact" />
            </div>

            <div className="room-option__adults-children-container">
              <VerticalContainer>
                <H5>Adults</H5>
                <p style={{ visibility: "hidden" }}>Adults</p>
                <QuantityButton />
              </VerticalContainer>
              <VerticalContainer>
                <H5>Children</H5>
                <p>Ages 0 to 16</p>
                <QuantityButton />
              </VerticalContainer>
              <VerticalContainer>
                <H5>Children’s ages</H5>
                <p style={{ visibility: "hidden" }}>Adults</p>
                <HorizontalContainer gap="33px">
                  <SelectAges />
                  <SelectAges />
                </HorizontalContainer>
              </VerticalContainer>
            </div>
          </div>
        </div>
      </StyledRoomOptions>
    </>
  )
}

const QuantityButton = () => {
  return (
    <>
      <StyledQuantityButton>
        <button className="button">-</button>
        <span>2</span>
        <button className="button">+</button>
      </StyledQuantityButton>
    </>
  )
}

const SelectAges = () => {
  return (
    <>
      <StyledSelectAges>
        <span>Children 1</span>
      </StyledSelectAges>
    </>
  )
}
