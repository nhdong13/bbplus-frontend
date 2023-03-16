import { Tooltip, TooltipProps } from "@mui/material";
import styled from "styled-components";

interface ITooltip extends TooltipProps {}

export default function Tooltips({ title, ...props }: ITooltip) {
  return (
    <Tooltip
      className="tooltip"
      {...props}
      title={<StyledTooltip>{title}</StyledTooltip>}
    />
  );
}

const StyledTooltip = styled.div`
  background-color: white;
  width: 696px;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 17px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  span {
    display: block;
    color: black;
  }
`;
