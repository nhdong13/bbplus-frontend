import IMAGES from "@/assets/images";
import { H5 } from "../../Typography";
import { StyledSelectLocationDropDown } from "./StyledSelectLocationDropDown";
import { ISelect } from "@/utils/types/Select"
interface IProps {
  isShown?: boolean
  leaving?: boolean
  innerRef?: any,
  onClickItem: (item: ISelect) => void,
  options?: Array<ISelect>,
}

export default function SelectLocationDropDown({
  isShown, leaving, innerRef, onClickItem, options
}: IProps) {

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
              options?.map((d: ISelect) => {
                return <div className="list__item" key={d._id} onClick={() => onClickItem(d)}>
                  <img src={IMAGES.locationIcon} />
                  <span>{d.label}</span>
                </div>
              })
            }
          </div>
        </div>
      </StyledSelectLocationDropDown>
    </>
  )
}
