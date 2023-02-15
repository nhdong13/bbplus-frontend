import { H4 } from "../Typography";
import { StyledSelectLocationDropDown } from "./StyledSelectLocationDropDown";

export default function SelectLocationDropDown() {
  return (
    <>
      <StyledSelectLocationDropDown>
        <div className="popular-places">
          <div className="popular-places__title">
            <H4>Popular places</H4>
          </div>
        </div>
      </StyledSelectLocationDropDown>
    </>
  )
}
