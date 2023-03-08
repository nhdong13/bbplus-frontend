import IMAGES from "@/assets/images";

export const HOTEL_RESULT_DATA = [
  {
    name: "Room",
    description: "Garden View Room",
    type: "room_details",
    roomOptions: [
      {
        id: 1,
        title: "Non-Refundable",
        price: "$XXX",
        value: "",
      },
      {
        id: 2,
        title: "Fully refundable",
        price: "$XXX",
        value: "",
      },
      {
        id: 3,
        title: "Non-Refundable",
        price: "$XXX",
        value: "",
      },
      {
        id: 4,
        title: "Breakfast buffet",
        price: "$XXX",
        value: "",
      },
      {
        id: 5,
        title: "Fully refundable ",
        price: "$XXX",
        value: "",
      },
    ],
  },
  {
    name: "Hotel Extras",
    description: "Half Board Meal Plan",
    type: "room_extras",
    roomOptions: [
      {
        id: 1,
        title: "Full board meal plan",
        price: "$XXX",
        value: "",
      },
      {
        id: 2,
        title: "Half board meal plan",
        price: "$XXX",
        value: "",
      },
      {
        id: 3,
        title: "1hour spa treatment",
        price: "$XXX",
        value: "",
      },
      {
        id: 4,
        title: "Kid nanny services",
        price: "$XXX",
        value: "",
      },
      {
        id: 5,
        title: "Bottle of wine on arrival",
        price: "$XXX",
        value: "",
      },
      {
        id: 6,
        title: "Bottle of wine on arrival",
        price: "$XXX",
        value: "",
      },
    ],
  },
  {
    name: "Transfer",
    description: "Tewaka Fiji, Airport Transfer",
    type: "room_transfer",
    roomOptions: [
      {
        id: 1,
        title: "Tewaka Fiji",
        detail: "Return: Airport Transfer",
        price: "$XXX",
        value: "",
      },
      {
        id: 2,
        title: "Heli Tours Fiji",
        detail: "Return: Airport Transfer",
        price: "$XXX",
        value: "",
      },
      {
        id: 3,
        title: "Tour Managers",
        detail: "Return: Airport Transfer",
        price: "$XXX",
        value: "",
      },
    ],
  },
];

export const FACILITIES = [
  {
    name: "1 Swimming pool",
    icon: IMAGES.swimming,
  },
  {
    name: "Free WIFI",
    icon: IMAGES.wifi,
  },
  {
    name: "Fitness centre",
    icon: IMAGES.fitness,
  },
  {
    name: "Facilities for disabled guests",
    icon: IMAGES.disabledGuest,
  },
  {
    name: "Restaurant",
    icon: IMAGES.restaurant,
  },
  {
    name: "Free parking",
    icon: IMAGES.parking,
  },
  {
    name: "Bar",
    icon: IMAGES.drink,
  },
  {
    name: "Golf course",
    icon: IMAGES.golf,
  },
  {
    name: "Tennis court",
    icon: IMAGES.tennis,
  },
];

export const AMENITIES = [
  {
    name: "Sanitation Procedures",
    list: [
      "Free face masks",
      "Physical/social distancing",
      "Contactless check-in/out",
      "Staff follow all safety protocols",
      "Hand sanitizer in key areas",
      "Doctor/nurse on call",
      "Hygiene certification",
      "Daily disinfection",
    ],
  },
  {
    name: "Room Amenties",
    list: [
      "Coffee/tea maker",
      "Ironing amenities",
      "Fan",
      "Safety deposit box",
      "Refrigerator",
      "Alarm clock",
      "Bathtub",
      "Room windows that open",
      "Air conditioning",
      "Room service",
      "Hair dryer",
      "Family rooms",
      "Kitchen",
    ],
  },
  {
    name: "Services and Conveniences",
    list: [
      "Laundry services",
      "Concierge services",
      "Luggage storage & lockers",
      "Currency exchange service",
      "Gift/souvenir shop",
      "Chapel/shrine",
      "Convenience store",
      "Shops on site",
      "Massage services",
      "Hair/beauty salon",
      "Daily housekeeping",
      "Tour Desk",
      "Doorman",
      "ATM or cash withdraw on site",
      "BBQ facilities",
    ],
  },
  {
    name: "Food & Drinks",
    list: [
      "Bar",
      "Poolside bar",
      "Coffee shop",
      "5 Restaurants",
      "Nearby restaurants",
    ],
  },
];

export const HOTEL_RULES = [
  {
    name: "Check-in",
    value: "After 2:00 PM",
  },
  {
    name: "Check-out",
    value: "Before 11:00 AM",
  },
  {
    name: "Cancellation",
    value:
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    name: "Child policy",
    value:
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    name: "Pets",
    value: "Pets are not allowed within the property",
  },
  {
    name: "Cards accepted",
    value: "Visa, Master, American express",
  },
];

export const FAQ = [
  {
    question: "Are there new cleaning standard to improve hygiene?",
    answer: "",
  },
  {
    question: "How far is Hotel Name from the Airport?",
    answer: "",
  },
  {
    question: "What kind of breakfast is served at Hotel?",
    answer: "",
  },
  {
    question: "Does Hotel have a restaurant on site?",
    answer: "",
  },
  {
    question: "What type of activities provided at the hotel?",
    answer: "",
  },
  {
    question: "How much does it cost to stay at the Hotel?",
    answer: "",
  },
  {
    question: "What are the check-in and check-out times at Hotel Name?",
    answer: "",
  },
  {
    question: "Does Hotel need an upfront deposit?",
    answer: "",
  },
];

export const RoomModalDetail = {
  benefits: [
    "34 m2",
    "Balcony",
    "Garden view ",
    "Air conditioning",
    "Terrace",
    "Free WiFi",
  ],
  area: "34 m2",
  bed: 1,
  maxPersons: "XX",
  bathroom: ["Free toiletries", "Shower", "Hairdryer"],
  view: "Garden view",
  facilities: [
    "Alarm clock",
    "Air Conditioning",
    "Safe",
    "Iron facilities",
    "Iron",
    "Refrigerator",
    "Electronic kettle",
    "Tea/Coffee",
    "Balcony",
    "Terrace",
  ],
  smocking: "No smocking",
};
