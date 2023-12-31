import IMAGES from "@/assets/images";
import { COLORS } from "@/utils/colors";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import { Typography as Span } from "../Typography";
import { BREAKPOINTS } from "@/utils/breakpoints";

const StyledDropdown = styled.div.attrs(
  (props: { boxShadow?: string }) => props
)`
  box-shadow: ${(props) => props.boxShadow};
  @media ${BREAKPOINTS.tablet} {
    box-shadow: none;
    .MuiAccordionSummary-root {
      padding: 0;
      min-height: unset !important;
      margin-bottom: 20px;
      color: ${COLORS.black}
    }
    .MuiAccordionSummary-content {
      span {
        font-size: 18px;
        line-height: 25px;
        margin-left: 0;
      }
    }
    .MuiAccordionSummary-content {
      margin: 0 !important;
    }
    .MuiAccordionDetails-root {
      padding: 0px;
    }
  }
`;

interface IDropdown {
  className?: string;
  boxShadow?: string;
  order?: number;
  title: string | React.ReactNode;
  details: React.ReactNode;
  expandIcon?: React.ReactNode;
  expand: boolean;
  onExpand: () => void;
  id?: string;
  titleColor?: string;
}
export default function Dropdown({
  className,
  order,
  title,
  expand,
  details,
  expandIcon,
  onExpand,
  boxShadow,
  id,
  titleColor
}: IDropdown) {
  return (
    <StyledDropdown
      className={className}
      boxShadow={boxShadow}
      style={{ order: order }}
      id={id}
    >
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
                  src={IMAGES.iconArrowUp}
                  width="31px"
                  height="15px"
                />
              )}
            </>
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {typeof title === "string" ? (
            <Span
              className="title"
              fontSize="30px"
              fontWeight="bold"
              color={titleColor || COLORS.cyprus}
            >
              {title}
            </Span>
          ) : (
            title
          )}
        </AccordionSummary>
        <AccordionDetails>{details}</AccordionDetails>
      </Accordion>
    </StyledDropdown>
  );
}
