import { COLORS } from "@/utils/colors"
import styled from "styled-components"

const StyledDivider = styled.div.attrs((props: {
  color?: string
  height?: string
  margin?: string
  width?: string
}) => props)`
  background: ${props => props.color || COLORS.cyprus};
  display: flex;
  justify-content: center;
  margin: ${props => props.margin || "auto"};
  height: ${props => props.height};
  max-width: ${props => props.width};
  width: 100%;
`

interface Divider {
  color?: string
  height?: string
  margin?: string
  width?: string
}

export default function Divider({
  color,
  height,
  margin,
  width,
}: Divider) {
  return (
    <>
      <StyledDivider className="divider" color={color} height={height} width={width} margin={margin} />
    </>
  )
}
