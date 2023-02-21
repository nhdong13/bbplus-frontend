import useWindowSize from "@/utils/windowResize";
import { useEffect, useState } from "react";

const useFullSearchWidget = () => {
  const [selectedBooking, setSelectedBooking] = useState<number>(0);
  const [travelerDropDown, setTravelerDropDown] = useState<boolean>(false);
  const [selectCreateItinerary, setSelectCreateItinerary] = useState<boolean>(true);
  const [slideCount, setSlideCount] = useState<number>(2);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [selectDateDropDown, setSelectDateDropDown] = useState<boolean>(false);
  const [getArriveDate, setGetArriveDate] = useState<string>("");
  const [totalDates, setTotalDates] = useState<number>(0);
  const [selectLeavingPlaces, setSelectLeavingPlaces] = useState<boolean>(false);
  const [selectGoingPlaces, setGoingPlaces] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const screenWidth = useWindowSize();

  const handleSelectBookingType = (id: number) => {
    setSelectedBooking(id);
    if (id === 2) {
      setSelectCreateItinerary(false);
    } else setSelectCreateItinerary(true);
  };

  const showTravelerDropDown = () => {
    if (selectDateDropDown) setSelectDateDropDown(false)
    if (selectGoingPlaces) setGoingPlaces(false)
    if (selectLeavingPlaces) setSelectLeavingPlaces(false)
    setTravelerDropDown(!travelerDropDown);
  }

  const showDatePicker = () => {
    if (travelerDropDown) setTravelerDropDown(false)
    if (selectGoingPlaces) setGoingPlaces(false)
    if (selectLeavingPlaces) setSelectLeavingPlaces(false)
    setSelectDateDropDown(!selectDateDropDown);
  }

  const showLeavingPlaces = () => {
    if (selectDateDropDown) setSelectDateDropDown(false)
    if (travelerDropDown) setTravelerDropDown(false)
    if (selectGoingPlaces) setGoingPlaces(false)
    setSelectLeavingPlaces(!selectLeavingPlaces);
  }

  const showGoingToPlaces = () => {
    if (selectDateDropDown) setSelectDateDropDown(false)
    if (travelerDropDown) setTravelerDropDown(false)
    if (selectLeavingPlaces) setSelectLeavingPlaces(false)
    setGoingPlaces(!selectGoingPlaces);
  }

  useEffect(() => {
    if (screenWidth < 768) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, [screenWidth, isMobile])

  return {
    selectedBooking,
    setSelectedBooking,
    travelerDropDown,
    setTravelerDropDown,
    selectCreateItinerary,
    setSelectCreateItinerary,
    handleSelectBookingType,
    showTravelerDropDown,
    slideCount,
    setSlideCount,
    currentSlide,
    setCurrentSlide,
    selectDateDropDown,
    showDatePicker,
    setGetArriveDate,
    getArriveDate,
    totalDates,
    setTotalDates,
    showLeavingPlaces,
    showGoingToPlaces,
    selectLeavingPlaces,
    setSelectLeavingPlaces,
    selectGoingPlaces,
    setGoingPlaces,
    setSelectDateDropDown,
    isMobile,
  }
}

export default useFullSearchWidget;
