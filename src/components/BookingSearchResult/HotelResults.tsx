import _ from "lodash";
import styled from "styled-components";
import RoomCard from "../RoomCard";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { Typography as Span } from "../Typography";

import { useState } from "react";
import IMAGES from "@/assets/images";
import { COLORS } from "@/utils/colors";
import { HOTEL_RESULT_DATA } from "./dataTest";

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
  }

  .hotel-result__left {
    background-color: #f0f1f2;
  }

  .hotel-result__room-list {
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
  }
  .hotel-result__option-list{
    display: grid;
    grid-template-columns: auto auto auto;
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
`;
export default function HotelResults() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [expandedAll, setExpandedAll] = useState<boolean>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const expandAll = () => {
    setExpandedAll(true);
  };
  const collapseAll = () => {
    setExpandedAll(false);
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
              <Accordion
                expanded={expanded === item.name || expandedAll}
                onChange={handleChange(item.name)}
              >
                <AccordionSummary
                  expandIcon={
                    <img
                      className="select-ages__dropdown-icon"
                      src={IMAGES.iconDropDownBlue}
                      width="31px"
                      height="15px"
                    />
                  }
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    sx={{ width: "33%", flexShrink: 0 }}
                    fontWeight="bold"
                  >
                    {item.name} -{" "}
                    <Typography display="inline-block" fontWeight="500">
                      {item.description}
                    </Typography>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={item.type === "checkbox" ? "hotel-result__room-list" : "hotel-result__option-list"}>
                    {item.type === "checkbox"
                      ? _.range(0, 4).map(() => {
                          return (
                            <RoomCard checkbox roomOptions={item.roomOptions} />
                          );
                        })
                      : item.roomOptions.map((item) => (
                          <RoomCard roomOptions={[item]}></RoomCard>
                        ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </StyledHotelResult>
    </>
  );
}
