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

  const handleClosePopup = () => {
    const getBodyElement = document.querySelector("body");
    if (getBodyElement) {
      getBodyElement.style.overflow = "scroll";
    }
    setPopup(false);
  };

  useEffect(() => {
    if (isShown) {
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
