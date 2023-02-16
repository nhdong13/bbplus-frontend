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
import { useEffect, useMemo, useState } from "react";
import { QuantityButton } from "@/utils/types/Button";
import _ from "lodash";
import { GradientButton } from "../Button";
import HorizontalContainer from "../Layout/HorizontalContainer";

const TravelerDropDown = ({ isShown }: TravelerDropDown) => {
  const [showNumberOfAdults, setShowNumberOfAdults] = useState<number>(0);
  const [showNumberOfChildren, setShowNumberOfChildren] = useState<number>(0);
  const [numberOfRoom, setNumberOfRoom] = useState<number>(1);
  const [totalAdults, setTotalAdults] = useState<number>(0);
  const [totalChildren, setTotalChildren] = useState<number>(0);
  const [test, setTest] = useState<any>([]);
  let roomOptions: any = [];

  const handleRoomOptions = (e: React.MouseEvent) => {
    e.preventDefault();
    const localStoreRoomOptions = JSON.parse(localStorage.getItem('roomOptions') || '{}');

    if (localStoreRoomOptions.length) {
      localStoreRoomOptions.push({
        roomId: numberOfRoom,
        adults: showNumberOfAdults,
        children: showNumberOfChildren
      })
      localStorage.setItem('roomOptions', JSON.stringify(localStoreRoomOptions));
    } else localStorage.setItem('roomOptions', JSON.stringify(roomOptions));
    if (numberOfRoom < 5) setNumberOfRoom(numberOfRoom + 1);
    roomOptions = localStoreRoomOptions
    setTest(roomOptions)
  };

  useEffect(() => {
    const getLocalStoreRoomOptions = JSON.parse(localStorage.getItem('roomOptions') || '{}');

    if (getLocalStoreRoomOptions.length && !isShown) {
      setShowNumberOfChildren(getLocalStoreRoomOptions.children);
      setShowNumberOfAdults(getLocalStoreRoomOptions.adults);
      setNumberOfRoom(getLocalStoreRoomOptions.length);
    } else {
      roomOptions.push({
        roomId: numberOfRoom,
        adults: showNumberOfAdults,
        children: showNumberOfChildren
      })
    }

    let adults = 0;
    let children = 0;
    if (getLocalStoreRoomOptions.length) {
      getLocalStoreRoomOptions.forEach((element: any) => {
        adults += element.adults;
        children += element.children;
      });
    }
    setTotalAdults(adults);
    setTotalChildren(children);
    handleStoreOptions
  }, [showNumberOfAdults, showNumberOfChildren, test])

  const handleStoreOptions = useMemo(() => {
    const getLocalStoreRoomOptions = JSON.parse(localStorage.getItem('roomOptions') || '{}');
    setTest(roomOptions)
    console.log(test)
  }, [])

  const handleResetOption = () => {
    console.log(roomOptions)
  }

  return (
    <StyledTravelerDropDown isShown={isShown} gap="20px">
      {_.range(0, numberOfRoom).map((index: number) =>
        <div key={index}>
          <RoomOptions
            isShown={isShown}
            adults={(e: number) => setShowNumberOfAdults(e)}
            children={(e: number) => setShowNumberOfChildren(e)}
            numberOfRoom={index}
            handleRemoveRoom={() => numberOfRoom > 1 ? setNumberOfRoom(numberOfRoom - 1) : false}
            handleResetRoom={handleResetOption}
          />
        </div>
      )}
      <StyledAddAnotherRoom onClick={(e: React.MouseEvent) => handleRoomOptions(e)}>
        <H4>+ Add another room</H4>
      </StyledAddAnotherRoom>
      <Divider color={COLORS.silver} height="1px" width="100%" margin="0" />
      <ResultContainer justifyContent="space-between">
        <span>{totalAdults} adults, {totalChildren} children ({numberOfRoom} room)</span>
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
  handleRemoveRoom: () => void,
  handleResetRoom: () => void,
}

const RoomOptions = ({ isShown, adults, children, numberOfRoom, handleRemoveRoom, handleResetRoom }: RoomOptions) => {
  const [numberOfAdults, setNumberOfAdults] = useState<number>(0);
  const [numberOfChildren, setNumberOfChildren] = useState<number>(0);

  useEffect(() => {
    adults(numberOfAdults);
    children(numberOfChildren);
    handleRemoveRoom;
    handleResetRoom;
  }, [numberOfAdults, numberOfChildren]);

  const onChangeValue = (e: React.KeyboardEvent) => {
    console.log(e?.target?.value)
  }

  return (
    <>
      <StyledRoomOptions>
        <div className="room-option__container">
          <div className="room-option__left">
            <H4>Room {numberOfRoom + 1}</H4>
          </div>
          <Divider color={COLORS.silver} height="auto" width="1px" margin="0" />
          <div className="room-option__right">
            <HorizontalContainer justifyContent="space-between" width="100%">
              <VerticalContainer>
                <H4>Primary party name (Optional)</H4>
                <div className="room-option__name-input-container">
                  <input placeholder="Name of primary contact" />
                </div>
              </VerticalContainer>
              <VerticalContainer>
                <HorizontalContainer gap="30px">
                  {(numberOfAdults || numberOfChildren) ?
                    <div onClick={handleResetRoom} className="room-option__remove-room">
                      <span>Reset</span>
                    </div>
                    : <></>
                  }
                  <div onClick={handleRemoveRoom} className="room-option__remove-room">
                    <span>Remove</span>
                  </div>
                </HorizontalContainer>
              </VerticalContainer>
            </HorizontalContainer>

            <div className="room-option__adults-children-container">
              <VerticalContainer>
                <H5>Adults</H5>
                <p style={{ visibility: "hidden" }}>Adults</p>
                <QuantityButton
                  onClickDecreaseNumber={() => numberOfAdults > 0 ? setNumberOfAdults(numberOfAdults - 1) : false}
                  onClickIncreaseNumber={() => setNumberOfAdults(numberOfAdults + 1)}
                  numberOfPeople={numberOfAdults}
                  watchInputValue={(e: React.KeyboardEvent) => onChangeValue(e)}
                />
              </VerticalContainer>
              <VerticalContainer>
                <H5>Children</H5>
                <p>Ages 0 to 16</p>
                <QuantityButton
                  onClickDecreaseNumber={() => numberOfChildren > 0 ? setNumberOfChildren(numberOfChildren - 1) : false}
                  onClickIncreaseNumber={() => setNumberOfChildren(numberOfChildren + 1)}
                  numberOfPeople={numberOfChildren}
                  watchInputValue={(e: React.KeyboardEvent) => onChangeValue(e)}
                />
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

const QuantityButton = ({ onClickDecreaseNumber, onClickIncreaseNumber, numberOfPeople, watchInputValue }: QuantityButton) => {
  return (
    <>
      <StyledQuantityButton>
        <button className="button" onClick={onClickDecreaseNumber}>-</button>
        <input type="number" />
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
