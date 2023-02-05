import { COLORS } from "@/utils/colors"
import styled from "styled-components"

const StyledDivider = styled.div.attrs((props: {
  color?: string
  height?: string
  width?: string
}) => props)`
  background: ${props => props.color || COLORS.white};
  height: ${props => props.height};
  width: ${props => props.width};
`

interface Divider {
  color?: string
  height?: string
  width?: string
}

export default function Divider({
  color,
  height,
  width,
}: Divider) {
  return (
    <>
      <StyledDivider className="divider" color={color} height={height} width={width} />
    </>
  )
}
