import { CardProps } from "../components/card/Card.component";

export type SnapShot = {
  isVideo: boolean;
  url: string;
};

export interface FarmData extends CardProps {
  snapshots: SnapShot[];
  available: number;
  salesPerYear: number;
  averageQuantityAvailablePerYear: number;
  supplyPeriods: SupplyPeriod[];
  percentageLossPerYear: number;
}

export interface SupplyPeriod {
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  open: string;
  close: string;
}
export const farms: FarmData[] = [
  {
    id: 0,
    name: "Item_0",
    crops: ["Barley", "Wheat"],
    unit_price: 89,
    available: 1000,
    measurementUnit: "Ton",
    currency: "Xaf",
    cover: require("../assets/images/tomato.jpg"),
    salesPerYear: 100,
    averageQuantityAvailablePerYear: 30000,
    percentageLossPerYear: 13,
    supplyPeriods: [
      {
        day: "Monday",
        open: "8:00 am",
        close: "4:00 pm",
      },
      {
        day: "Wednesday",
        open: "8:00 am",
        close: "4:00 pm",
      },
      {
        day: "Saturday",
        open: "8:00 am",
        close: "4:00 pm",
      },
    ],
    snapshots: [
      {
        isVideo: false,
        url: require("../assets/images/tomato.jpg"),
      },
      {
        isVideo: true,
        url: require("../assets/videos/tomatoes.mp4"),
      },
    ],
  },
  {
    id: 1,
    name: "Item_1",
    crops: ["Maize", "Cocoa"],
    unit_price: 97,
    measurementUnit: "Kg",
    currency: "Usd",
    cover: require("../assets/images/tomato.jpg"),
    available: 1000,
    salesPerYear: 100,
    averageQuantityAvailablePerYear: 30000,
    percentageLossPerYear: 13,
    supplyPeriods: [
      {
        day: "Monday",
        open: "8:00 am",
        close: "4:00 pm",
      },
      {
        day: "Wednesday",
        open: "8:00 am",
        close: "4:00 pm",
      },
      {
        day: "Saturday",
        open: "8:00 am",
        close: "4:00 pm",
      },
    ],
    snapshots: [
      {
        isVideo: false,
        url: require("../assets/images/tomato.jpg"),
      },
      {
        isVideo: true,
        url: require("../assets/videos/tomatoes.mp4"),
      },
    ],
  },
  {
    id: 2,
    name: "Item_2",
    crops: ["Wheat", "Soybean"],
    unit_price: 83,
    measurementUnit: "Litre",
    available: 1000,
    salesPerYear: 100,
    averageQuantityAvailablePerYear: 30000,
    percentageLossPerYear: 13,
    supplyPeriods: [
      {
        day: "Monday",
        open: "8:00 am",
        close: "4:00 pm",
      },
      {
        day: "Wednesday",
        open: "8:00 am",
        close: "4:00 pm",
      },
      {
        day: "Saturday",
        open: "8:00 am",
        close: "4:00 pm",
      },
    ],
    currency: "Xaf",
    cover: require("../assets/images/tomato.jpg"),
    snapshots: [
      {
        isVideo: false,
        url: require("../assets/images/tomato.jpg"),
      },
      {
        isVideo: true,
        url: require("../assets/videos/tomatoes.mp4"),
      },
    ],
  },
  {
    id: 3,
    name: "Item_3",
    crops: ["Soybean", "Tomato"],
    unit_price: 30,
    measurementUnit: "Litre",
    currency: "Xaf",
    available: 1000,
    salesPerYear: 100,
    averageQuantityAvailablePerYear: 30000,
    percentageLossPerYear: 13,
    supplyPeriods: [
      {
        day: "Monday",
        open: "8:00 am",
        close: "4:00 pm",
      },
      {
        day: "Wednesday",
        open: "8:00 am",
        close: "4:00 pm",
      },
      {
        day: "Saturday",
        open: "8:00 am",
        close: "4:00 pm",
      },
    ],
    cover: require("../assets/images/tomato.jpg"),
    snapshots: [
      {
        isVideo: false,
        url: require("../assets/images/tomato.jpg"),
      },
      {
        isVideo: true,
        url: require("../assets/videos/tomatoes.mp4"),
      },
    ],
  },
  {
    id: 4,
    name: "Item_4",
    crops: ["Cocoa", "Tomato"],
    available: 1000,
    salesPerYear: 100,
    averageQuantityAvailablePerYear: 30000,
    percentageLossPerYear: 13,
    supplyPeriods: [
      {
        day: "Monday",
        open: "8:00 am",
        close: "4:00 pm",
      },
      {
        day: "Wednesday",
        open: "8:00 am",
        close: "4:00 pm",
      },
      {
        day: "Saturday",
        open: "8:00 am",
        close: "4:00 pm",
      },
    ],
    unit_price: 16,
    measurementUnit: "Kg",
    currency: "Xaf",
    cover: require("../assets/images/tomato.jpg"),
    snapshots: [
      {
        isVideo: false,
        url: require("../assets/images/tomato.jpg"),
      },
      {
        isVideo: true,
        url: require("../assets/videos/tomatoes.mp4"),
      },
    ],
  },
  {
    id: 5,
    name: "Item_5",
    crops: ["Tomato", "Cocoa"],
    available: 1000,
    salesPerYear: 100,
    averageQuantityAvailablePerYear: 30000,
    percentageLossPerYear: 13,
    supplyPeriods: [
      {
        day: "Monday",
        open: "8:00 am",
        close: "4:00 pm",
      },
      {
        day: "Wednesday",
        open: "8:00 am",
        close: "4:00 pm",
      },
      {
        day: "Saturday",
        open: "8:00 am",
        close: "4:00 pm",
      },
    ],
    unit_price: 44,
    measurementUnit: "Litre",
    currency: "Xaf",
    cover: require("../assets/images/tomato.jpg"),
    snapshots: [
      {
        isVideo: false,
        url: require("../assets/images/tomato.jpg"),
      },
      {
        isVideo: true,
        url: require("../assets/videos/tomatoes.mp4"),
      },
    ],
  },
];
