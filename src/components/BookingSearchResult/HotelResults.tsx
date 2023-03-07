import _ from "lodash";
import styled from "styled-components";
import RoomCard from "../RoomCard";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { Typography as Span } from "../Typography";

import { useEffect, useState } from "react";
import IMAGES from "@/assets/images";
import { COLORS } from "@/utils/colors";
import { HOTEL_RESULT_DATA } from "./dataTest";
import { ReactSVG } from "react-svg";
import Dropdown from "../Dropdown/Dropdown";

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
    border: 1px solid ${COLORS.platinum};
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
    background-color: black;
    margin: 0 20px;
  }

  .select-ages__dropdown-icon {
    svg {
      width: 14px;
      height: 27.25px;
      transform: rotate(90deg);
      path {
        stroke-width: 2px;
        stroke: ${COLORS.blueRibbon};
      }
    }
  }

  .MuiAccordionDetails-root{
    padding-bottom: 48px;
  }
`;
export default function HotelResults() {
  const listExpanded = HOTEL_RESULT_DATA.map((item) => item.name);
  const [expanded, setExpanded] = useState<string[]>(listExpanded);

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
  return (
    <>
      <StyledHotelResult>
        <div className="hotel-result__action">
          <Span color={COLORS.blueRibbon} fontWeight="400" onClick={expandAll}>
            Expand all
          </Span>
          <div className="hotel-result__separate" />
          <Span
            color={COLORS.blueRibbon}
            fontWeight="400"
            onClick={collapseAll}
          >
            Collapse all
          </Span>
        </div>
        <div className="hotel-result__right">
          {HOTEL_RESULT_DATA.map((item, index) => {
            return (
              <Dropdown
                expand={expanded.includes(item.name)}
                onExpand={() => onExpand(item.name)}
                title={
                  <Typography
                    sx={{ width: "33%", flexShrink: 0 }}
                    fontWeight="bold"
                    whiteSpace="nowrap"
                    fontSize="24px"
                    marginLeft="20px"
                  >
                    {item.name} -{" "}
                    <Typography display="inline-block" fontWeight="500">
                      {item.description}
                    </Typography>
                  </Typography>
                }
                details={
                  <div
                    className={
                      item.type === "room"
                        ? "hotel-result__room-list"
                        : "hotel-result__option-list"
                    }
                  >
                    {item.type === "room"
                      ? _.range(0, 6).map(() => {
                          return (
                            <RoomCard checkbox roomOptions={item.roomOptions} />
                          );
                        })
                      : item.roomOptions.map((item) => (
                          <RoomCard roomOptions={[item]}></RoomCard>
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
