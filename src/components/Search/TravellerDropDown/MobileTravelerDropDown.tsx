import IMAGES from "@/assets/images";
import { H4 } from "@/components/Typography";
import { useEffect, useState } from "react";
import { StyledMobileTravelerDropDown } from "./StyledMobileTravelerDropDown";

interface MobileTravelerDropDown {
  isShown: boolean,
  closePopup: (n: boolean) => void,
}

export default function MobileTravelerDropDown({ isShown, closePopup }: MobileTravelerDropDown) {
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
      <StyledMobileTravelerDropDown isShown={popup}>
        <div className="dropdown-header">
          <div className="dropdown-header__container">
            <H4>Who is going?</H4>
            <button onClick={handleClosePopup}>
              <img src={IMAGES.iconClose} />
            </button>
          </div>
          <div className="dropdown-room-options">
            <div className="dropdown-room-options__title-container">
              <H4>Room 1</H4>
            </div>
          </div>
        </div>
      </StyledMobileTravelerDropDown>
    </>
  )
}
