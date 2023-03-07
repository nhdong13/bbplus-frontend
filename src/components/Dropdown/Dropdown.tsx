import IMAGES from "@/assets/images";
import { COLORS } from "@/utils/colors";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import { Typography as Span } from "../Typography";

const StyledDropdown = styled.div``;

interface IDropdown {
  className?: string;
  title: string;
  details: React.ReactNode;
  expandIcon?: React.ReactNode;
  expand: boolean;
  onExpand: () => void;
}
export default function Dropdown({
  className,
  title,
  expand,
  details,
  expandIcon,
  onExpand,
}: IDropdown) {
  return (
    <StyledDropdown className={className}>
      <Accordion
        expanded={expand}
        onChange={() => {
          onExpand();
        }}
      >
        <AccordionSummary
          expandIcon={
            <>
              {expandIcon ? (
                expandIcon
              ) : (
                <ReactSVG
                  className="select-ages__dropdown-icon"
                  src={IMAGES.iconAnchorGrey}
                  width="31px"
                  height="15px"
                />
              )}
            </>
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Span className="title" fontSize="30px" fontWeight="bold" color={COLORS.cyprus}>
            {title}
          </Span>
        </AccordionSummary>
        <AccordionDetails>{details}</AccordionDetails>
      </Accordion>
    </StyledDropdown>
  );
}
