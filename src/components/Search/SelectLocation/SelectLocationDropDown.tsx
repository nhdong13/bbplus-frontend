import IMAGES from "@/assets/images";
import HorizontalContainer from "../../Layout/HorizontalContainer";
import { H4 } from "../../Typography";
import { StyledSelectLocationDropDown } from "./StyledSelectLocationDropDown";

interface SelectLocationDropDown {
  isShown?: boolean
  leaving?: boolean
}

export default function SelectLocationDropDown({ isShown, leaving }: SelectLocationDropDown) {
  return (
    <>
      <StyledSelectLocationDropDown isShown={isShown} isLeaving={leaving}>
        <div className="popular-places__container">
          <div className="popular-places">
            <div className="popular-places__title">
              <H4>Popular places</H4>
            </div>
          </div>
          <div className="popular-places__list">
            <HorizontalContainer gap="20px" alignItems="center" margin="15px 0">
              <img src={IMAGES.locationIcon} />
              <span>Sydney Airport</span>
            </HorizontalContainer>
            <HorizontalContainer gap="20px" alignItems="center" margin="15px 0">
              <img src={IMAGES.locationIcon} />
              <span>Sydney Airport</span>
            </HorizontalContainer>
          </div>
        </div>
      </StyledSelectLocationDropDown>
    </>
  )
}
