import useComponentVisible from "@/utils/clickOutSide";
import useWindowSize from "@/utils/windowResize";
import { useEffect, useState } from "react";
import { DateObject } from "react-multi-date-picker"
import { useSearchParams } from "react-router-dom";
interface IFilter {
  _id: string,
  name: string,
  adults: number,
  children: number,
}
interface ISelected {
  _id: string | number,
  label: string
}
const demoData = [
  { _id: '1', name: '', adults: 1, children: 0 },
]

function getDatesInRange(start: DateObject, end: DateObject): DateObject[] {
  const dates = [];
  let currentDate = start.toDate();

  while (currentDate <= end.toDate()) {
    dates.push(new DateObject(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

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
  const [dataFilter, setDataFilter] = useState<IFilter[]>(demoData);
  const [totalGuest, setTotalGuest] = useState<number>(0);
  const [selectedLeaving, setSelectedLeaving] = useState<ISelected>();
  const [filterLeaving, setFilterLeaving] = useState<string>('');

  //new state

  const [searchParams] = useSearchParams();
  const [dates, setDates] = useState<DateObject[]>([]);
  const [totalDay, setTotalDay] = useState<number>(0);
  const checkInParam = searchParams.get('checkIn') || '';
  const checkOutParam = searchParams.get('checkOut') || '';
  const roomParam = searchParams.getAll('room') || [];


  const screenWidth = useWindowSize();

  const {
    ref: leavingDropDownRef,
    isComponentVisible: leavingDropDownVisible,
    setIsComponentVisible: setLeavingDropDownVisible,
  } = useComponentVisible(false);

  const {
    ref: goingDropDownRef,
    isComponentVisible: goingDropDownVisible,
    setIsComponentVisible: setGoingDropDownVisible,
  } = useComponentVisible(false);

  const {
    ref: selectDateDropDownRef,
    isComponentVisible: selectDateDropDownVisible,
    setIsComponentVisible: setSelectDateDropDownVisible,
  } = useComponentVisible(false);

  const {
    ref: travelerDropDownRef,
    isComponentVisible: travelerDropDowVisible,
    setIsComponentVisible: setTravelerDropDownVisible,
  } = useComponentVisible(false);

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
    setTravelerDropDownVisible(!travelerDropDown);
  }

  const showDatePicker = () => {
    if (travelerDropDown) setTravelerDropDown(false)
    if (selectGoingPlaces) setGoingPlaces(false)
    if (selectLeavingPlaces) setSelectLeavingPlaces(false)
    setSelectDateDropDown(!selectDateDropDown);
    setSelectDateDropDownVisible(!selectDateDropDown);
  }

  const showLeavingPlaces = () => {
    if (selectDateDropDown) setSelectDateDropDown(false)
    if (travelerDropDown) setTravelerDropDown(false)
    if (selectGoingPlaces) setGoingPlaces(false)
    setSelectLeavingPlaces(!selectLeavingPlaces);
    setLeavingDropDownVisible(!selectLeavingPlaces);
  }

  const showGoingToPlaces = () => {
    if (selectDateDropDown) setSelectDateDropDown(false)
    if (travelerDropDown) setTravelerDropDown(false)
    if (selectLeavingPlaces) setSelectLeavingPlaces(false)
    setGoingPlaces(!selectGoingPlaces);
    setGoingDropDownVisible(!selectGoingPlaces);
  }

  useEffect(() => {
    if (screenWidth < 1024) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, [screenWidth, isMobile])

  useEffect(() => {
    if (!leavingDropDownVisible) setSelectLeavingPlaces(false);
    if (!goingDropDownVisible) setGoingPlaces(false);
    if (!selectDateDropDownVisible) setSelectDateDropDown(false);
    if (!travelerDropDowVisible) setTravelerDropDown(false);
  }, [leavingDropDownVisible, goingDropDownVisible, selectDateDropDownVisible, travelerDropDowVisible])

  useEffect(() => {

    const sumAdults = dataFilter.reduce((sum, item) => {
      return sum + item.adults;
    }, 0);

    const sumChildren = dataFilter.reduce((sum, item) => {
      return sum + item.children;
    }, 0);

    setTotalGuest(sumAdults + sumChildren)

  }, [JSON.stringify(dataFilter)])

  const getTotalDaysInRange = (datesInRange: DateObject[]): number => {
    if (!datesInRange || datesInRange.length === 0) {
      return 0;
    }
    const firstDate = datesInRange[0].toDate();
    const lastDate = datesInRange[datesInRange.length - 1].toDate();
    const diffTime = lastDate.getTime() - firstDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays + 1;
  }



  useEffect(() => {
    setTotalDay((getTotalDaysInRange(dates)))
  }, [dates])

  useEffect(() => {
    const startDate = new DateObject(new Date(checkInParam));
    const endDate = new DateObject(new Date(checkOutParam));
    const datesInRange = getDatesInRange(startDate, endDate);
    setDates(datesInRange)
  }, [checkInParam, checkOutParam])

  // Parse room values from search parameters and set data filter state
  useEffect(() => {
    const roomValues: IFilter[] = roomParam
      .map((value, index) => {
        const matches = value.match(/a(\d+),c(\d+)/);
        if (matches) {
          return { _id: String(index), name: '', adults: parseInt(matches[1]), children: parseInt(matches[2]) };
        } else {
          return null;
        }
      })
      .filter((value): value is IFilter => value !== null);
    setDataFilter(roomValues);
  }, [searchParams]);


  const handleAddRoom = (newRoom: IFilter) => {
    dataFilter.push(newRoom);
    setDataFilter([...dataFilter]);
  }

  const handleChangeDataRoom = (type: string, room_id: string) => {
    let index = dataFilter.findIndex(emp => emp._id === room_id);
    if (index > -1) {
      switch (type) {
        case 'add_adult':
          dataFilter[index].adults += 1;
          break;

        case 'remove_adult':
          dataFilter[index].adults -= 1;
          break;

        case 'add_children':
          dataFilter[index].children += 1;
          break;

        case 'remove_children':
          dataFilter[index].children -= 1;
          break;

        case 'reset_room':
          dataFilter[index].children = 0;
          if (dataFilter[index].adults > 1) {
            dataFilter[index].adults = 1;
          }
          break;

        case 'remove_room':
          dataFilter.splice(index, 1);
          break;

        default:
          break;
      }

      setDataFilter([...dataFilter]);

    }

  }


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
    leavingDropDownRef,
    leavingDropDownVisible,
    setLeavingDropDownVisible,
    goingDropDownRef,
    goingDropDownVisible,
    setGoingDropDownVisible,
    selectDateDropDownRef,
    travelerDropDownRef,
    dataFilter,
    totalGuest,
    handleAddRoom,
    handleChangeDataRoom,
    selectedLeaving, setSelectedLeaving,
    filterLeaving, setFilterLeaving,
    //new
    dates, setDates,
    totalDay, setTotalDay
  }
}

export default useFullSearchWidget;
