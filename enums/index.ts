import { findIndex } from "lodash";
interface Item {
  label: string;
  value: string;
  icon: string;
}
export const enum TourLevelTypeEnum {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
}
export const TourLevelTypeEnumList = [
  {
    label: "آسان",
    value: TourLevelTypeEnum.EASY,
    icon: "mdi:flag-checkered",
  },
  {
    label: "متوسط",
    value: TourLevelTypeEnum.MEDIUM,
    icon: "mdi:flag-variant",
  },
  {
    label: "سخت",
    value: TourLevelTypeEnum.HARD,
    icon: "mdi:flag-triangle",
  },
];
export const findTourLevelType = (e: TourLevelTypeEnum) => {
  const index = findIndex(TourLevelTypeEnumList, (val) => val.value == e);
  if (index < 0) return {} as Item;
  return TourLevelTypeEnumList[index];
};
export const enum TourTypeEnum {
  ECONOMY = "ECONOMY",
  STANDARD = "STANDARD",
  LUXURY = "LUXURY",
}
export const TourTypeEnumList = [
  {
    label: "اقتصادی",
    value: TourTypeEnum.ECONOMY,
    icon: "mdi:currency-usd",
  },
  {
    label: "استاندارد",
    value: TourTypeEnum.STANDARD,
    icon: "mdi:star-outline",
  },
  {
    label: "لوکس",
    value: TourTypeEnum.LUXURY,
    icon: "mdi:crown",
  },
];
export const findTourType = (e: TourTypeEnum) => {
  const index = findIndex(TourTypeEnumList, (val) => val.value == e);
  if (index < 0) return {} as Item;
  return TourTypeEnumList[index];
};
export const enum MealTypeEnum {
  BREAKFAST = "BREAKFAST",
  BRUNCH = "BRUNCH",
  LUNCH = "LUNCH",
  AFTERNOON_TEA = "AFTERNOON_TEA",
  DINNER = "DINNER",
  FULL = "FULL",
}
export const MealTypeEnumList = [
  {
    label: "صبحانه",
    value: MealTypeEnum.BREAKFAST,
    icon: "mdi:coffee",
  },
  {
    label: "بین صبحانه و ناهار",
    value: MealTypeEnum.BRUNCH,
    icon: "mdi:food",
  },
  {
    label: "ناهار",
    value: MealTypeEnum.LUNCH,
    icon: "mdi:silverware-fork-knife",
  },
  {
    label: "چای عصرانه",
    value: MealTypeEnum.AFTERNOON_TEA,
    icon: "mdi:tea",
  },
  {
    label: "شام",
    value: MealTypeEnum.DINNER,
    icon: "mdi:silverware-spoon",
  },
  {
    label: "کامل",
    value: MealTypeEnum.FULL,
    icon: "mdi:food-drumstick",
  },
];
export const findMealType = (e: MealTypeEnum) => {
  const index = findIndex(MealTypeEnumList, (val) => val.value == e);
  if (index < 0) return {} as Item;
  return MealTypeEnumList[index];
};
export const enum TransferTypeEnum {
  AIRPLANE = "AIRPLANE",
  TRAIN = "TRAIN",
  BUS = "BUS",
  SHIP = "SHIP",
}
export const TransferTypeEnumList = [
  {
    label: "هواپیما",
    value: TransferTypeEnum.AIRPLANE,
    icon: "",
  },
  {
    label: "قطار",
    value: TransferTypeEnum.TRAIN,
    icon: "",
  },
  {
    label: "اتوبوس",
    value: TransferTypeEnum.BUS,
    icon: "",
  },
  {
    label: "کشتی",
    value: TransferTypeEnum.SHIP,
    icon: "",
  },
];
export const findTransferType = (e: TransferTypeEnum) => {
  const index = findIndex(TransferTypeEnumList, (val) => val.value == e);
  if (index < 0) return {} as Item;
  return TransferTypeEnumList[index];
};

export const enum StayTypeEnum {
  HOTEL = "HOTEL",
  MOTEL = "MOTEL",
  HOUSE = "HOUSE",
  VILLA = "VILLA",
  CAMP = "CAMP",
}
export const StayTypeEnumList = [
  {
    label: "هتل",
    value: StayTypeEnum.HOTEL,
    icon: "",
  },
  {
    label: "موتل",
    value: StayTypeEnum.MOTEL,
    icon: "",
  },
  {
    label: "خانه",
    value: StayTypeEnum.HOUSE,
    icon: "",
  },
  {
    label: "ویلا",
    value: StayTypeEnum.VILLA,
    icon: "",
  },
  {
    label: "کمپ",
    value: StayTypeEnum.CAMP,
    icon: "",
  },
];
export const findStayType = (e: StayTypeEnum) => {
  const index = findIndex(StayTypeEnumList, (val) => val.value == e);
  if (index < 0) return {} as Item;
  return StayTypeEnumList[index];
};
