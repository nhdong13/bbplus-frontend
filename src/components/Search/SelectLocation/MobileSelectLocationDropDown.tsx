import IMAGES from "@/assets/images";
import HorizontalContainer from "@/components/Layout/HorizontalContainer";
import { H4 } from "@/components/Typography";
import { useEffect, useState } from "react";
import { StyledMobileSelectLocationDropDown } from "./StyledMobileSelectLocationDropDown";


interface MobileSelectLocationDropDown {
  isShown: boolean,
  closePopup: (n: boolean) => void,
}

export default function MobileSelectLocationDropDown({ isShown, closePopup }: MobileSelectLocationDropDown) {
  const [popup, setPopup] = useState<boolean>(false);
  let getBodyElement: any = document.querySelector("body");

  const handleClosePopup = () => {
    if (getBodyElement) {
      getBodyElement.style.overflow = "scroll";
    }
    setPopup(false);
  };

  useEffect(() => {
    const getBodyElement: any = document.querySelector("body");
    if (isShown) {
      getBodyElement.style.overflow = "hidden";
      setPopup(isShown);
      closePopup(popup)
    }
  }, [isShown])
  return (
    <>
      <StyledMobileSelectLocationDropDown isShown={popup}>
        <div className="dropdown-header">
          <div className="dropdown-header__container">
            <H4>Where are you flying from</H4>
            <button onClick={handleClosePopup}>
              <img src={IMAGES.iconClose} />
            </button>
          </div>
          <div className="dropdown-search">
            <div className="dropdown-search__container">
              <input placeholder="Search by city or airport" />
              <img src={IMAGES.iconSearchOutline}/>
            </div>
            <div className="popular-places">
              <div className="popular-places__title">
                <H4>Popular places</H4>
              </div>
            </div>
            <div className="popular-places__list">
              <HorizontalContainer gap="13px" alignItems="center" margin="15px 0">
                <img src={IMAGES.locationIcon} />
                <span>Sydney Airport</span>
              </HorizontalContainer>
              <HorizontalContainer gap="13px" alignItems="center" margin="15px 0">
                <img src={IMAGES.locationIcon} />
                <span>Sydney Airport</span>
              </HorizontalContainer>
            </div>
          </div>
        </div>
      </StyledMobileSelectLocationDropDown>
    </>
  )
}
