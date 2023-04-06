import { range } from "lodash";
import styled from "styled-components";
import RoomCard from "../RoomCard";
import Typography from "@mui/material/Typography";
import { Typography as Span } from "../Typography";

import React, { useEffect, useState } from "react";
import { COLORS } from "@/utils/colors";
import { HOTELS_NAME, HOTEL_RESULT_DATA, IRoomOptions } from "../../utils/dataTest";
import Dropdown from "../Dropdown/Dropdown";
import { SelectedRoomType } from "@/utils/types/CardHotel";
import { BREAKPOINTS } from "@/utils/breakpoints";
import { GradientButton } from "../Button";
import { MODAL_TYPES, useGlobalModalContext } from "../Modal";
import { useParams } from "react-router-dom";
import { isMobileResponsive } from "@/utils/constant";

interface ICustomHotelOption {
  onChangeHotels?: (hotelName: string) => void;
}

export default function CustomHotelOption({
  onChangeHotels = () => {},
}: ICustomHotelOption) {
  const listExpanded = (index: number) =>
    HOTEL_RESULT_DATA.map((item) => item.name + index);
  const [expanded, setExpanded] = useState<string[]>(listExpanded(0));
  const [selectedOption, setSelectedOption] = useState<number[]>([]);
  const [addedComponent, setAddedComponent] = useState<string[]>([
    "room_details0",
  ]);
  const [hotelOptions, setHotelOptions] = useState([HOTEL_RESULT_DATA]);
  const { showModal } = useGlobalModalContext();
  const { bookingType } = useParams();
  const isMobile = isMobileResponsive()

  const onExpand = (accordion: string) => {
    setExpanded((expand) => {
      if (expanded.includes(accordion)) {
        return expand.filter((item) => item !== accordion);
      }
      return [...expand, accordion];
    });
  };

  const expandAll = (index: number) => {
    setExpanded((expanded) => [...expanded, ...listExpanded(index)]);
  };

  const collapseAll = (index: number) => {
    setExpanded((expandedItem) =>
      expandedItem.filter((item) => item.charAt(item.length - 1) !== `${index}`)
    );
  };

  const onSelectOption = (type: SelectedRoomType, selectedOpt: number) => {
    if (type === "single") {
      setSelectedOption((option) =>
        option.includes(selectedOpt) ? option : [selectedOpt]
      );
    }
  };

  const onAddComponent = (type: string, index: number) => {
    if (type === "room_another") {
      return showModal(MODAL_TYPES.ADD_HOTEL, {
        title: "Add Another Hotel",
        hotels: ["Fiji Gateway Hotel"],
        callback: () => {
          setExpanded((expanded) => [...expanded, ...listExpanded(index + 1)]);
          setAddedComponent((added) => [
            ...added,
            "room_details" + (index + 1),
          ]);
          onChangeHotels(HOTELS_NAME[1]);
          setHotelOptions((hotelData) => [...hotelData, HOTEL_RESULT_DATA]);
        },
      });
    }
    setAddedComponent((added) => [...added, type + index]);
  };

  useEffect(() => {
    onChangeHotels(HOTELS_NAME[0]);
  }, []);
  return (
    <>
      <StyledHotelResult>
        <div className="hotel-result__right">
          {hotelOptions.map((hotel, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className="action-wrapper"
                  key={index}
                  style={{
                    order: index * 10 - 1,
                  }}
                >
                  <GradientButton
                    isSelected
                    text="Hotel 1 - Warwick Fiji Beach Resort"
                    fontSize="25px"
                    height="62px"
                    borderRadius="17px"
                    color={COLORS.gradient2}
                    visibility={(isMobile && bookingType === "quick-book") ? "hidden" : "initial"}
                  />
                  <div className="hotel-result__action">
                    <Span
                      color={COLORS.blueFrench}
                      fontWeight="400"
                      onClick={() => expandAll(index)}
                    >
                      Expand all
                    </Span>
                    <div className="hotel-result__separate" />
                    <Span
                      color={COLORS.blueFrench}
                      fontWeight="400"
                      onClick={() => collapseAll(index)}
                    >
                      Collapse all
                    </Span>
                  </div>
                </div>
                {hotel.map((result) => {
                  if (addedComponent.includes(result.type + index)) {
                    return (
                      <Dropdown
                        key={result.name}
                        expand={expanded.includes(result.name + index)}
                        onExpand={() => onExpand(result.name + index)}
                        boxShadow={
                          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                        }
                        order={
                          addedComponent.findIndex(
                            (item) => item === result.type
                          ) +
                          index * 10
                        }
                        title={
                          <Typography
                            sx={{ width: "33%", flexShrink: 0 }}
                            fontWeight="bold"
                            whiteSpace="nowrap"
                            fontSize="25px"
                            marginLeft="20px"
                            component={"span"}
                            fontFamily="Manrope"
                          >
                            {result.name}{" "}
                            <Typography
                              display="inline-block"
                              fontWeight="500"
                              component={"span"}
                              fontSize="25px"
                              fontFamily="Manrope"
                            >
                              - {result.description}
                            </Typography>
                          </Typography>
                        }
                        details={
                          <div
                            className={
                              ["room_details", "room_another"].includes(
                                result.type
                              )
                                ? "hotel-result__room-list"
                                : "hotel-result__option-list"
                            }
                          >
                            {["room_details", "room_another"].includes(
                              result.type
                            )
                              ? range(0, 6).map((_, index) => {
                                  return (
                                    <RoomCard
                                      key={_ + index}
                                      index={index}
                                      checkbox
                                      roomOptions={result.roomOptions}
                                      type={result.type}
                                      selected={selectedOption.includes(index)}
                                      onSelect={onSelectOption}
                                    />
                                  );
                                })
                              : result.roomOptions.map((item:IRoomOptions, index) => (
                                  <RoomCard
                                    key={index}
                                    roomOptions={[item]}
                                    type={result.type}
                                    onSelect={onSelectOption}
                                    transferType={item?.transferType}
                                  ></RoomCard>
                                ))}
                          </div>
                        }
                      />
                    );
                  }
                  if ((bookingType === 'multi-hotel' && ["room_extras", "room_transfer", "room_tours"].includes(result.type)) || bookingType === 'itinerary' || (bookingType === 'quick-book' && ["room_extras", "room_transfer"].includes(result.type)))
                  return (
                    <div
                      className="inactive-component"
                      key={result.name}
                      style={{
                        order: addedComponent.length + index * 10,
                        display:
                          result.type === "room_another" &&
                          hotelOptions.length >= 2
                            ? "none"
                            : "",
                      }}
                    >
                      <Span
                        padding="0 0 0 36px"
                        fontWeight="bold"
                        fontSize="25px"
                      >
                        {result.name}
                      </Span>
                      <GradientButton
                        isSelected
                        text={isMobile ? "+ ADD Component" : "ADD Component"}
                        fontSize="25px"
                        height="62px"
                        borderRadius="17px"
                        fontWeight="bold"
                        color={COLORS.gradient2}
                        handleSubmit={() => onAddComponent(result.type, index)}
                      />
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      </StyledHotelResult>
    </>
  );
}

const StyledHotelResult = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .action-wrapper {
    display: flex;
    flex: row;
    justify-content: space-between;
    padding: 20px 10px 0 0;
    align-items: flex-end;
  }
  .MuiPaper-root {
    margin-bottom: 20px !important;
  }

  .inactive-component {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 2px solid ${COLORS.parkinglotGray};
    border-bottom-style: dotted;
  }

  .hotel-result__left,
  .hotel-result__right {
    height: 100%;
    width: 100%;
  }
  .hotel-result__right {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .MuiPaper-root {
    box-shadow: none;
    border-radius: 0 !important;
    margin-bottom: 20px;
    margin-top: 12px !important;
  }

  .hotel-result__left {
    background-color: #f0f1f2;
  }

  .hotel-result__room-list {
    display: grid;
    grid-template-columns: 350px 350px;
    gap: 30px;
    row-gap: 20px;
  }
  .hotel-result__option-list {
    display: grid;
    grid-template-columns: calc(33% - 10px) calc(33% - 10px) auto;
    gap: 20px;
  }
  .hotel-result__action {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    span {
      cursor: pointer;
    }
  }
  .hotel-result__separate {
    width: 2px;
    height: 28px;
    background-color: ${COLORS.doveGray};
    margin: 0 20px;
  }

  .select-ages__dropdown-icon {
    svg {
      width: 26px;
      height: 16px;
      path {
        stroke-width: 2px;
        fill: ${COLORS.blueFrench};
      }
    }
  }

  .MuiAccordionDetails-root {
    padding-bottom: 48px;
  }

  @media ${BREAKPOINTS.tablet} {
    .action-wrapper {
      .gradient-button {
        height: 32px;
        width: fit-content;
        & > div {
          height: fit-content;
          width: fit-content;
        }
        span {
          padding: 0 10px;
        }
      }
      padding-top: 10px;
      padding-right: 0px;
    }
    .hotel-result__action {
      span {
        font-size: 14px;
        line-height: 19px;
      }
    }
    .hotel-result__separate {
      height: 19px;
    }
    .hotel-result__room-list {
      grid-template-columns: auto;
      gap: 10px;
    }
    .hotel-result__option-list {
      grid-template-columns: calc(50% - 5px) calc(50% - 5px);
      gap: 10px;
    }
    .MuiAccordionDetails-root {
      padding-bottom: 0;
    }
    .MuiPaper-root {
      margin-top: 20px !important;
    }
    .inactive-component {
      span {
        font-size: 18px;
        padding: 0;
      }
      .gradient-button {
        height: fit-content;
        width: 200px;
        & > div {
          height: 34px;
        }
        span {
          font-size: 10px;
        }
      }
    }
  }
  @media ${BREAKPOINTS.mobileLg} {
    .hotel-result__separate{
      margin: 0 12.5px;
    } 
    .MuiPaper-root {
      margin-bottom: 0px !important;
      margin-top: 0px !important;
    }
    .inactive-component {
      padding-top: 0;
    }
  }
`;
