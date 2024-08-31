import {
  TourTypeEnum,
  TourLevelTypeEnum,
  StayTypeEnum,
  MealTypeEnum,
  TransferTypeEnum,
} from "~/enums";

export const findTransferType = (enumString: TransferTypeEnum) => {
  switch (enumString) {
    case "BUS":
      return "اتوبوس";
    case "SHIP":
      return "کشتی";
    case "TRAIN":
      return "قطار";
    case "AIRPLANE":
      return "هواپیما";
  }
};

export const findTourType = (enumString: TourTypeEnum) => {
  switch (enumString) {
    case "ECONOMY":
      return "اکونومی";
    case "STANDARD":
      return "استاندارد";
    case "LUXURY":
      return "لوکس";
  }
};

export const findTourLevelType = (enumString: TourLevelTypeEnum) => {
  switch (enumString) {
    case "HARD":
      return "سخت";
    case "EASY":
      return "آسان";
    case "MEDIUM":
      return "متوسط";
  }
};
export const findStayType = (enumString: StayTypeEnum) => {
  switch (enumString) {
    case "HOTEL":
      return "هتل";
    case "CAMP":
      return "کمپ";
    case "HOUSE":
      return "منزل";
    case "MOTEL":
      return "متل";
    case "VILLA":
      return "ویلا";
  }
};

export const findMealType = (enumString: MealTypeEnum) => {
  switch (enumString) {
    case "BRUNCH":
      return "صبحانه و ناهار";
    case "Dinner":
      return "شام";
    case "FULL":
      return "کامل";
    case "LUNCH":
      return "ناهار";
    case "BREAKFAST":
      return "صبحانه";
    case "AFTERNOON_TEA":
      return "چای عصرانه";
  }
};
