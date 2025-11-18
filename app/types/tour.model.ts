import type { TransferTypeEnum, MealTypeEnum, StayTypeEnum, TourLevelTypeEnum, TourTypeEnum } from "~/enums";
import type {
  Pagebale
} from "./pageable.model";

interface Tour {
  name: string;
  capacity: number;
  startDate: string;
  endDate: string;
  tourUrl: string;
  description: string;
  price: number;
  priceOff: number;
  priceDiscount: number;
  mainImageAddress: string;
  imagesAddress: string[];
  stayTypeEnum: StayTypeEnum;
  transferTypeEnum: TransferTypeEnum;
  mealTypeEnum: MealTypeEnum;
  tourLevelTypeEnum: TourLevelTypeEnum;
  tourTypeEnum: TourTypeEnum;
  categoryId: [];
  rate: number;
  id: number;
  duration: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
}

export type TourDTOContent = Tour;

export type TourDTOGetAllResponse = TourDTOContent[];

export interface TourDTOSearchRequest
  extends Pick<
    TourDTOContent,
    | "mealTypeEnum"
    | "stayTypeEnum"
    | "tourLevelTypeEnum"
    | "tourTypeEnum"
    | "transferTypeEnum"
    | "duration"
  > {
  name: string;
  page: number;
  size: number;
  startDate: Date;
}

export interface TourDTOSearchResponse extends Pagebale {
  content: TourDTOContent[];
}

export type TourDTOCreateOneRequest = TourDTOContent;
export type TourDTOCreateOneResponse = TourDTOContent;

export type TourDTOUpdateOneRequest = Omit<TourDTOContent, "id">;
export type TourDTOUpdateOneResponse = TourDTOContent;

export type TourDTOGetOneRequest = TourDTOContent["id"];
export type TourDTOGetOneResponse = TourDTOContent;

export type TourDTODeleteOneRequest = TourDTOContent["id"];
