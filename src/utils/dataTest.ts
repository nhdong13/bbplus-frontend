import IMAGES from "@/assets/images";

export interface IRoomOptions {
  id: number;
  title: string;
  price: string;
  value: string;
  transferType?: string;
}

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
        transferType: "",
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
        title: "1 hour spa treatment",
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
    ],
    modalOptions: [
      {
        id: 1,
        title: "Half Board Meal Plan",
        price: "$125",
        value: "",
      },
      {
        id: 2,
        title: "30% Spa Treatment",
        price: "$99",
        value: "",
      },
      {
        id: 3,
        title: "Full Board Meal Plan",
        price: "$115",
        value: "",
      },
      {
        id: 4,
        title: "Bottle Of Wine On Arrival",
        price: "$25",
        value: "",
      },
      {
        id: 5,
        title: "Meals: Buffet Breakfast",
        price: "$100",
        value: "",
      },
      {
        id: 6,
        title: "Kid Nanny Services",
        price: "$155",
        value: "",
      },
    ],
  },
  {
    name: "Land Transfer",
    description: "Tewaka Fiji, Airport Transfer",
    type: "room_transfer",
    roomOptions: [
      {
        id: 1,
        title: "Tewaka Fiji",
        detail: "Return: Airport Transfer",
        transferType: "air",
        price: "$XXX",
        value: "",
      },
      {
        id: 2,
        title: "Heli Tours Fiji",
        detail: "Return: Land Transfer",
        transferType: "land",
        price: "$XXX",
        value: "",
      },
      {
        id: 3,
        title: "Tour Managers",
        detail: "Return: Airport Transfer",
        transferType: "air",
        price: "$XXX",
        value: "",
      },
    ],
  },
  {
    name: "Tours",
    type: "room_tours",
    description: "River Safari Jet Boat Tour",
    roomOptions: [
      {
        id: 1,
        title: "Kula wild park",
        price: "$XXX",
        value: "",
      },
      {
        id: 2,
        title: "Sand dunes hike",
        price: "$XXX",
        value: "",
      },
      {
        id: 3,
        title: "EtroTrax Fiji",
        price: "$XXX",
        value: "",
      },
      {
        id: 4,
        title: "Discovery the waterfalls at Blauseva",
        price: "$XXX",
        value: "",
      },
      {
        id: 5,
        title: "River safari jet boat tour",
        price: "$XXX",
        value: "",
      },
    ],
  },
  {
    name: "Another Hotel",
    type: "room_another",
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
    "Refrigerator",
    "Air Conditioning",
    "Electronic kettle",
    "Safe",
    "Tea/Coffee",
    "Iron facilities",
    "Balcony",
    "Iron",
    "Terrace",
    "Toiletries",
    "Hairdryer",
  ],
  smocking: "No smocking",
};

export const ONE_WAY_SEAT = [
  "One-way - 6 seater",
  "One-way - 8 seater",
  "One-way - Seat in coach",
];

export const RETURN_SEAT = [
  "Return - 6 seater",
  "Return - 8 seater",
  "Return - Seat in coach",
];

export const TAXES_AND_FEES = `This charge includes estimated amounts the travel service provider
(i.e. hotel, car rental company) pays for their taxes, and/or taxes
that we pay, to taxing authorities on your booking (including but
not limited to, sales, occupancy, and value added tax). This amount
may also include any amounts charged to us for resort fees, cleaning
fees, and other fees and/or a fee we, the hotel supplier and/ or the
site you booked on, retain as part of the compensation for our
and/or their services, which varies based on factors such as
location, the amount, and how you booked.`;

export const HOTELS_NAME = ["Warwick Fiji Beach Resort", "Fiji Gateway Hotel"];
