import IMAGES from "@/assets/images";
import { useEffect, useState } from "react";
import HorizontalContainer from "../../Layout/HorizontalContainer";
import { H5 } from "../../Typography";
import { StyledSelectLocationDropDown } from "./StyledSelectLocationDropDown";

interface IItem {
  _id: number,
  label: string
}
interface IProps {
  isShown?: boolean
  leaving?: boolean
  innerRef?: any,
  onClickItem: (item: Object) => void,
  options?: Array<IItem>,
}
const data = [
  { _id: 1, label: 'Sydney Airport (SYD)' },
  { _id: 2, label: 'Melbourne Airport (MEL)' },
  { _id: 3, label: 'Brisbane Airport (BNE)' },
  { _id: 4, label: 'Adelaide Airport (ADL)' },
  { _id: 5, label: 'Gold Coast Airport (OOL)' },
  { _id: 6, label: 'Auckland Airport (AKL)' },
  { _id: 7, label: 'Christchurch Airport (CHC)' },
  { _id: 8, label: 'Wellington Airport (WLG)' },
  { _id: 9, label: 'Los Angeles International Airport (LAX)' },
]

export default function SelectLocationDropDown({
  isShown, leaving, innerRef, onClickItem, options
}: IProps) {
  // const filteredData = data.filter((el: any) => {
  //   console.log(valueFilter)
  //   if (valueFilter === '' || valueFilter === undefined) {
  //     return el;
  //   }
  //   else {
  //     return el.label.toLowerCase().includes(valueFilter)
  //   }
  // })

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
              options?.map((d: any) => {
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
