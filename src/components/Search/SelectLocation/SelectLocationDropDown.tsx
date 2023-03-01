import IMAGES from "@/assets/images";
import HorizontalContainer from "../../Layout/HorizontalContainer";
import { H5 } from "../../Typography";
import { StyledSelectLocationDropDown } from "./StyledSelectLocationDropDown";

interface SelectLocationDropDown {
  isShown?: boolean
  leaving?: boolean
  innerRef?: any
}
const data = [
  { _id: 1, name: 'Sydney Airport (SYD)' },
  { _id: 2, name: 'Melbourne Airport (MEL)' },
  { _id: 3, name: 'Brisbane Airport (BNE)' },
  { _id: 4, name: 'Adelaide Airport (ADL)' },
  { _id: 5, name: 'Gold Coast Airport (OOL)' },
  { _id: 6, name: 'Auckland Airport (AKL)' },
  { _id: 7, name: 'Christchurch Airport (CHC)' },
  { _id: 8, name: 'Wellington Airport (WLG)' },
  { _id: 9, name: 'Los Angeles International Airport (LAX)' },
]

export default function SelectLocationDropDown({ isShown, leaving, innerRef }: SelectLocationDropDown) {
  return (
    <>
      <StyledSelectLocationDropDown ref={innerRef} isShown={isShown} isLeaving={leaving}>
        <div className="popular-places__container">
          <div className="popular-places">
            <div className="popular-places__title">
              <H5 fontWeight={"700"}>Popular places</H5>
            </div>
          </div>
          <div className="popular-places__list">
            {
              data.map(d => {
                return <HorizontalContainer key={d._id} gap="20px" alignItems="center" margin="15px 0">
                  <img src={IMAGES.locationIcon} />
                  <span>{d.name}</span>
                </HorizontalContainer>
              })
            }
          </div>
        </div>
      </StyledSelectLocationDropDown>
    </>
  )
}
