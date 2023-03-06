import { BREAKPOINTS } from "@/utils/breakpoints"
import { COLORS } from "@/utils/colors"
import { FONTS } from "@/utils/fonts"
import styled from "styled-components"

const StyledComboButton = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`

const StyledFinishedButton = styled.button`
  background: ${COLORS.gradient1};
  border-radius: 17px;
  max-width: 191px;
  height: 62px;
  width: 100%;

  span {
    color: ${COLORS.white};
    font-family: ${FONTS.manropeBold};
    font-size: 16px;
    line-height: 20px;
  }

  @media ${BREAKPOINTS.laptop} {
    width: 85px;
    height: 36px;
    border-radius: 5px;
    span {
      font-size: 12px;
    }
  }

  
`

const StyledAddButton = styled.button`
  background: ${COLORS.endeavour};
  border-radius: 17px;
  max-width: 135px;
  height: 62px;
  width: 100%;
  span {
    color: ${COLORS.white};
    font-family: ${FONTS.manropeBold};
    font-size: 16px;
    line-height: 20px;
  }

  @media ${BREAKPOINTS.laptop} {
    width: 85px;
    height: 36px;
    border-radius: 5px;
    span {
      font-size: 12px;
    }
  }

`

export default function ComboButton() {
  return (
    <>
      <StyledComboButton>
        <StyledAddButton>
          <span>Add</span>
        </StyledAddButton>
        <StyledFinishedButton>
          <span>Finish</span>
        </StyledFinishedButton>
      </StyledComboButton>
    </>
  )
}
