import { range } from "lodash";
import styled from "styled-components";
import RoomCard from "../RoomCard";
import Typography from "@mui/material/Typography";
import { Typography as Span } from "../Typography";

import { useState } from "react";
import { COLORS } from "@/utils/colors";
import { HOTEL_RESULT_DATA } from "../../utils/dataTest";
import Dropdown from "../Dropdown/Dropdown";
import { SelectedRoomType } from "@/utils/types/CardHotel";
import { BREAKPOINTS } from "@/utils/breakpoints";

export default function HotelResults() {
  const listExpanded = HOTEL_RESULT_DATA.map((item) => item.name);
  const [expanded, setExpanded] = useState<string[]>(listExpanded);
  const [selectedOption, setSelectedOption] = useState<number[]>([]);

  const onExpand = (accordion: string) => {
    setExpanded((expand) => {
      if (expanded.includes(accordion)) {
        return expand.filter((item) => item !== accordion);
      }
      return [...expand, accordion];
    });
  };

  const expandAll = () => {
    setExpanded(listExpanded);
  };

  const collapseAll = () => {
    setExpanded([]);
  };

  const onSelectOption = (type: SelectedRoomType, selectedOpt: number) => {
    if (type === "single") {
      setSelectedOption((option) =>
        option.includes(selectedOpt) ? [] : [selectedOpt]
      );
    }
  };
  return (
    <>
      <StyledHotelResult>
        <div className="hotel-result__action">
          <Span color={COLORS.blueFrench} fontWeight="400" onClick={expandAll}>
            Expand all
          </Span>
          <div className="hotel-result__separate" />
          <Span
            color={COLORS.blueFrench}
            fontWeight="400"
            onClick={collapseAll}
          >
            Collapse all
          </Span>
        </div>
        <div className="hotel-result__right">
          {HOTEL_RESULT_DATA.map((result, index) => {
            return (
              <Dropdown
                key={result.name}
                expand={expanded.includes(result.name)}
                onExpand={() => onExpand(result.name)}
                boxShadow={
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                }
                title={
                  <Typography
                    sx={{ width: "33%", flexShrink: 0 }}
                    fontWeight="bold"
                    whiteSpace="nowrap"
                    fontSize="24px"
                    marginLeft="20px"
                    component={"span"}
                  >
                    {result.name} -{" "}
                    <Typography
                      display="inline-block"
                      fontWeight="500"
                      component={"span"}
                    >
                      {result.description}
                    </Typography>
                  </Typography>
                }
                details={
                  <div
                    className={
                      result.type === "room_details"
                        ? "hotel-result__room-list"
                        : "hotel-result__option-list"
                    }
                  >
                    {result.type === "room_details"
                      ? range(0, 6).map((_, index) => {
                          return (
                            <RoomCard
                              key={index}
                              index={index}
                              checkbox
                              roomOptions={result.roomOptions}
                              type={result.type}
                              selected={selectedOption.includes(index)}
                              onSelect={onSelectOption}
                            />
                          );
                        })
                      : result.roomOptions.map((item, index) => (
                          <RoomCard
                            key={item.title + index}
                            roomOptions={[item]}
                            type={result.type}
                            onSelect={onSelectOption}
                          ></RoomCard>
                        ))}
                  </div>
                }
              />
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

  .hotel-result__left,
  .hotel-result__right {
    height: 100%;
    width: 100%;
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
    grid-template-columns: auto auto;
    gap: 20px;
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
    padding: 20px 0;
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
    .hotel-result__action {
      padding-top: 30px;
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
  }
`;
