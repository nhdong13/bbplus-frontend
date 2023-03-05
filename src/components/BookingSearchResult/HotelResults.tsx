import _ from "lodash"
import styled from "styled-components"
import RoomCard from "../RoomCard"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

import { useState } from "react";
import IMAGES from "@/assets/images";

const StyledHotelResult = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 37px;

  .hotel-result__left,
  .hotel-result__right {
    height: 100%;
    width: 50%;
  }

  .hotel-result__left {
    background-color: #F0F1F2;
  }

  .hotel-result__room-list {
    display: flex;
    gap: 17px;
    flex-wrap: wrap;
  }
`


export default function HotelResults() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
      <StyledHotelResult>
        <div className="hotel-result__left">

        </div>
        <div className="hotel-result__right">
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<img className="select-ages__dropdown-icon" src={IMAGES.iconDropDownBlue} width="31px" height="15px" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Room - Garden View Room
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="hotel-result__room-list">
                {_.range(0, 4).map(() => {
                  return (
                    < RoomCard />
                  )
                })}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

      </StyledHotelResult>
    </>
  )
}
