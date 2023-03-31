import { Tooltip, TooltipProps, tooltipClasses } from "@mui/material";
import styled from "styled-components";
import { BREAKPOINTS } from "@/utils/breakpoints";

interface ITooltip extends TooltipProps {}

export default function Tooltips({ title, ...props }: ITooltip) {
  return (
    <CustomMaxWidthTooltip
      className="tooltip"
      {...props}
      title={<StyledTooltip>{title}</StyledTooltip>}
    />
  );
}

const CustomMaxWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: '100%',
  },
  [`@media ${BREAKPOINTS.mobileLg}`]: {
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: '300px',
    },
  }
});

const StyledTooltip = styled.div`
  background-color: white;
  width: 696px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 17px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  span {
    display: block;
    color: black;
  }
`;
