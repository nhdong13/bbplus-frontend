import { COLORS } from "@/utils/colors";
import Divider from "../Layout/Divider"
import {
  StyledRoomOptions,
  StyledTravelerDropDown,
  StyledQuantityButton,
  StyledSelectAges,
  StyledAddAnotherRoom,
  ResultContainer,
} from "./StyledTravelerDropDown";
import { TravelerDropDown } from "@/utils/types/CardHotel";
import { H4, H5 } from "../Typography";
import { VerticalContainer } from "../Layout/VerticalContainer";
import IMAGES from "@/assets/images";
import { Children, useCallback, useEffect, useState } from "react";
import { QuantityButton } from "@/utils/types/Button";
import _ from "lodash";
import { GradientButton } from "../Button";

interface ListRoom {
  adults?: number,
  children?: number,
}

const TravelerDropDown = ({ isShown }: TravelerDropDown) => {
  const [showNumberOfAdults, setShowNumberOfAdults] = useState<number>(0);
  const [showNumberOfChildren, setShowNUmberOfChildren] = useState<number>(0);
  const [numberOfRoom, setNumberOfRoom] = useState<number>(1);
  let roomOptions: any = [];

  const handleRoomOptions = (e: React.MouseEvent) => {
    e.preventDefault();
    const localStoreRoomOptions = JSON.parse(localStorage.getItem('roomOptions'));

    if (localStoreRoomOptions) {
      localStoreRoomOptions.push({
        roomId: numberOfRoom,
        adults: showNumberOfAdults,
        children: showNumberOfChildren
      })
      localStorage.setItem('roomOptions', JSON.stringify(localStoreRoomOptions));
    } else localStorage.setItem('roomOptions', JSON.stringify(roomOptions));
    setNumberOfRoom(numberOfRoom + 1);
  };

  useEffect(() => {
    roomOptions.push({
      roomId: numberOfRoom,
      adults: showNumberOfAdults,
      children: showNumberOfChildren
    })
  }, [showNumberOfAdults, showNumberOfChildren])

  return (
    <StyledTravelerDropDown isShown={isShown} gap="20px">
      {_.range(0, numberOfRoom).map((index: number) =>
        <div key={index}>
          <RoomOptions
            isShown={isShown}
            adults={(e: number) => setShowNumberOfAdults(e)}
            children={(e: number) => setShowNUmberOfChildren(e)}
            numberOfRoom={index}
          />
        </div>
      )}
      <StyledAddAnotherRoom onClick={(e: React.MouseEvent) => handleRoomOptions(e)}>
        <H4>+ Add another room</H4>
      </StyledAddAnotherRoom>
      <Divider color={COLORS.silver} height="1px" width="100%" margin="0" />
      <ResultContainer justifyContent="space-between">
        <span>{showNumberOfAdults} adults, {showNumberOfChildren} children ({numberOfRoom} room)</span>
        <GradientButton
          color={COLORS.gradient1}
          text="Apply"
          isSelected={true}
          maxWidth="162px"
          fontSize="16px"
          height="60px"
          textPadding="4px 33px" />
      </ResultContainer>
    </StyledTravelerDropDown>
  );
}
export default TravelerDropDown;

interface RoomOptions {
  isShown?: boolean
  adults: (n: number) => void,
  children: (n: number) => void,
  numberOfRoom: number,
}

const RoomOptions = ({ isShown, adults, children, numberOfRoom }: RoomOptions) => {
  const [numberOfAdults, setNumberOfAdults] = useState<number>(0);
  const [numberOfChildren, setNumberOfChildren] = useState<number>(0);

  useEffect(() => {
    adults(numberOfAdults);
    children(numberOfChildren);
  }, [numberOfAdults, numberOfChildren])


  return (
    <>
      <StyledRoomOptions>
        <div className="room-option__container">
          <div className="room-option__left">
            <H4>Room {numberOfRoom + 1}</H4>
          </div>
          <Divider color={COLORS.silver} height="auto" width="1px" margin="0" />
          <div className="room-option__right">
            <H4>Primary party name (Optional)</H4>

            <div className="room-option__name-input-container">
              <input placeholder="Name of primary contact" />
            </div>

            <div className="room-option__adults-children-container">
              <VerticalContainer>
                <H5>Adults</H5>
                <p style={{ visibility: "hidden" }}>Adults</p>
                <QuantityButton
                  onClickDecreaseNumber={() => numberOfAdults > 0 ? setNumberOfAdults(numberOfAdults - 1) : false}
                  onClickIncreaseNumber={() => setNumberOfAdults(numberOfAdults + 1)}
                  numberOfPeople={numberOfAdults} />
              </VerticalContainer>
              <VerticalContainer>
                <H5>Children</H5>
                <p>Ages 0 to 16</p>
                <QuantityButton
                  onClickDecreaseNumber={() => numberOfChildren > 0 ? setNumberOfChildren(numberOfChildren - 1) : false}
                  onClickIncreaseNumber={() => setNumberOfChildren(numberOfChildren + 1)}
                  numberOfPeople={numberOfChildren} />
              </VerticalContainer>
              {numberOfChildren !== 0 &&
                <VerticalContainer>
                  <H5>Children’s ages</H5>
                  <p style={{ visibility: "hidden" }}>Adults</p>
                  <div className="room-option__children-container">
                    {_.range(0, numberOfChildren).map((index: number) =>
                      <div key={index}>
                        <SelectAges />
                      </div>
                    )}
                  </div>
                </VerticalContainer>
              }
            </div>
          </div>
        </div>
      </StyledRoomOptions>
    </>
  )
}

const QuantityButton = ({ onClickDecreaseNumber, onClickIncreaseNumber, numberOfPeople }: QuantityButton) => {
  return (
    <>
      <StyledQuantityButton>
        <button className="button" onClick={onClickDecreaseNumber}>-</button>
        <span>{numberOfPeople}</span>
        <button className="button" onClick={onClickIncreaseNumber}>+</button>
      </StyledQuantityButton>
    </>
  )
}

const SelectAges = () => {
  const [selectAges, setSelectAges] = useState<boolean>(false);
  const handleSelectAges = () => {
    setSelectAges(!selectAges);
  }

  return (
    <>
      <StyledSelectAges onClick={handleSelectAges} isOpen={selectAges}>
        <span>Children 1</span>
        <img className="select-ages__dropdown-icon" src={IMAGES.iconDropDownBlue} width="10px" height="7px" />
      </StyledSelectAges>
    </>
  )
}
