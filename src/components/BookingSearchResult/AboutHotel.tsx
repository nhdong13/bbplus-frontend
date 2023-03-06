import { Container } from "@/styles";
import { Typography as Span } from "../Typography";
import styled from "styled-components";
import { COLORS } from "@/utils/colors";
import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ReactSVG } from "react-svg";
import IMAGES from "@/assets/images";

const StyledAboutHotel = styled.div`
  .about-hotel__action {
    display: flex;
    flex-direction: row;
    justify-content: end;
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
  .MuiPaper-root {
    box-shadow: none!important;
  }
`;

export default function AboutHotel() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [expandedAll, setExpandedAll] = useState<boolean>(false);
  const expandAll = () => {
    setExpandedAll(true);
  };
  const collapseAll = () => {
    setExpandedAll(false);
  };
  return (
    <StyledAboutHotel>
      <Container display="block">
        <div className="about-hotel__action">
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
          <Accordion
            expanded={expandedAll}
            onChange={() => {
              setExpandedAll((expand) => !expand);
            }}
          >
            <AccordionSummary
              expandIcon={
                <ReactSVG
                  className="select-ages__dropdown-icon"
                  src={IMAGES.iconAnchorGrey}
                  width="31px"
                  height="15px"
                />
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Span fontWeight="bold" color={COLORS.cyprus}>
                Amenities
              </Span>
            </AccordionSummary>
            <AccordionDetails>
              <Span fontWeight="bold">Most popular facilities</Span>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </StyledAboutHotel>
  );
}
