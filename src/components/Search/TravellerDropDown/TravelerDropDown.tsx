import { COLORS } from "@/utils/colors";
import Divider from "../../Layout/Divider"
import {
  StyledRoomOptions,
  StyledTravelerDropDown,
  StyledQuantityButton,
  StyledSelectAges,
  StyledAddAnotherRoom,
  ResultContainer,
} from "./StyledTravelerDropDown";
import { TravelerDropDown } from "@/utils/types/CardHotel";
import { H4, H5 } from "../../Typography";
import { VerticalContainer } from "../../Layout/VerticalContainer";
import IMAGES from "@/assets/images";
import { useEffect, useMemo, useState } from "react";
import { QuantityButton } from "@/utils/types/Button";
import _ from "lodash";
import { GradientButton } from "../../Button";
import HorizontalContainer from "../../Layout/HorizontalContainer";
import useWindowSize from "@/utils/windowResize";
import { useGlobalContext } from '../GlobalContext'


const TravelerDropDown = ({ isShown, innerRef, closePopup }: TravelerDropDown) => {
  const screenWidth = useWindowSize();
  const { dataFilter, handleAddRoom } = useGlobalContext();
  const [totalAdults, setTotalAdults] = useState<number>(0);
  const [totalChildren, setTotalChildren] = useState<number>(0);

  const handleRoomOptions = (e: React.MouseEvent) => {
    handleAddRoom({ _id: new Date().getTime().toString(), name: '', adults: 1, children: 0 });
  };

  useEffect(() => {

    const sumAdults = dataFilter.reduce((sum, item) => {
      return sum + item.adults;
    }, 0);

    const sumChildren = dataFilter.reduce((sum, item) => {
      return sum + item.children;
    }, 0);


    setTotalAdults(sumAdults)
    setTotalChildren(sumChildren)

  }, [dataFilter])


  useEffect(() => {
    if (screenWidth < 1024) {
      const getBodyElement: any = document.querySelector("body");
      if (isShown) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        getBodyElement.style.overflow = "hidden";
      }
    }
  }, [isShown, screenWidth])

  return (
    <StyledTravelerDropDown ref={innerRef} isShown={isShown} gap="20px">
      <div className="dropdown-header">
        <div className="dropdown-header__container">
          <H4>Who is going?</H4>
          <button onClick={() => closePopup(false)}>
            <img src={IMAGES.iconClose} />
          </button>
        </div>
      </div>

      <div className="room-option__mobile-container">
        {dataFilter.map((value: any, index: number) =>
          <div key={index}>
            <RoomOptions
              data={value}
              isShown={isShown}
              numberOfRoom={index}
            />
          </div>
        )}
      </div>
      <StyledAddAnotherRoom onClick={(e: React.MouseEvent) => handleRoomOptions(e)}>
        {dataFilter.length < 5 && <H4>+ Add another room</H4>}
      </StyledAddAnotherRoom>
      <Divider color={COLORS.silver} height="1px" width="100%" margin="0" />
      <ResultContainer justifyContent="space-between">
        <div className="info-count">
          <div className="total">{totalAdults} adults, {totalChildren} children ({dataFilter.length} room)</div>
          {
            dataFilter.length === 5
              ?
              <div>For bookings of more than 5 rooms please contact our customer service team on <span className="text-blue">(679) 6724244.</span></div>
              :
              null
          }
        </div>
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
  numberOfRoom: number,
  data: any,
}

const RoomOptions = ({ isShown, numberOfRoom, data }: RoomOptions) => {

  const {
    handleChangeDataRoom
  } = useGlobalContext()

  const [optionalName, setOptionalName] = useState<string>(data.name);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptionalName(e.target.value)
  }

  return (
    <>
      <StyledRoomOptions>
        <div className="room-option__container">
          <div className="room-option__left">
            <H5 fontWeight={"700"} className={"optional"}>Room {numberOfRoom + 1}</H5>
          </div>
          <Divider color={COLORS.silver} height="auto" width="1px" margin="0" />
          <div className="room-option__right">
            <HorizontalContainer justifyContent="space-between" width="100%">
              <VerticalContainer>
                <H5 fontWeight={"700"} className={"optional"}>Primary party name <span>(Optional)</span></H5>
                <div className="room-option__name-input-container">
                  <input placeholder="Name of primary contact" value={optionalName} onChange={onChangeName} />
                </div>
              </VerticalContainer>
              <VerticalContainer>
                <HorizontalContainer gap="30px">
                  {(data.adults > 1 || data.children > 0) ?
                    <div onClick={() => handleChangeDataRoom('reset_room', data._id)} className="room-option__remove-room">
                      <span>Reset</span>
                    </div>
                    : <></>
                  }
                  {(numberOfRoom > 0) ?
                    <div onClick={() => handleChangeDataRoom('remove_room', data._id)} className="room-option__remove-room">
                      <span>Remove</span>
                    </div>
                    : <></>
                  }
                </HorizontalContainer>
              </VerticalContainer>
            </HorizontalContainer>

            <div className="room-option__adults-children-container">
              <VerticalContainer className="room-option__adults-container">
                <H5>Adults</H5>
                <p style={{ visibility: "hidden" }}>Adults</p>
                <QuantityButton
                  onClickDecreaseNumber={() => data.adults > 1 ? handleChangeDataRoom('remove_adult', data._id) : false}
                  onClickIncreaseNumber={() => data.adults < 14 ? handleChangeDataRoom('add_adult', data._id) : false}
                  numberOfPeople={data.adults}
                />
              </VerticalContainer>
              <VerticalContainer className="room-option__children-container">
                <div>
                  <H5>Children</H5>
                  <HorizontalContainer>
                    <span className="bracket">{"("}</span>
                    <p>Ages 0 to 16</p>
                    <span className="bracket">{")"}</span>
                  </HorizontalContainer>
                </div>
                <QuantityButton
                  onClickDecreaseNumber={() => data.children > 0 ? handleChangeDataRoom('remove_children', data._id) : false}
                  onClickIncreaseNumber={() => data.children < 14 ? handleChangeDataRoom('add_children', data._id) : false}
                  numberOfPeople={data.children}
                />
              </VerticalContainer>
              {data.children !== 0 &&
                <VerticalContainer className="room-option__list-children">
                  <H5>Children’s ages</H5>
                  <p style={{ visibility: "hidden" }}>Adults</p>
                  <div className={data.children >= '3' ? 'room-option__list-children-container mb-10' : 'room-option__list-children-container'}>
                    {_.range(data.children).map((index: number) =>
                      <div key={index}>
                        <SelectAges index={index} />
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
        <span>{numberOfPeople}</span>
        <button className="button" onClick={onClickIncreaseNumber}>+</button>
      </StyledQuantityButton>
    </>
  )
}

type SelectAgeProps = {
  index: number
}

const SelectAges = ({ index }: SelectAgeProps) => {
  const [selectAges, setSelectAges] = useState<boolean>(false);
  const handleSelectAges = () => {
    setSelectAges(!selectAges);
  }

  return (
    <>
      <StyledSelectAges onClick={handleSelectAges} isOpen={selectAges}>
        <span>Children {index + 1}</span>
        <img className="select-ages__dropdown-icon" src={IMAGES.iconDropDownBlue} width="10px" height="7px" />
      </StyledSelectAges>
    </>
  )
}
