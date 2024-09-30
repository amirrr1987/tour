import type { TransferTypeEnum } from "~/enums";
import {
  MealTypeEnum,
  StayTypeEnum,
  TourLevelTypeEnum,
  TourTypeEnum,
} from "~/enums";
import type { Pageable, Pagebale } from "./Pageable";

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

export namespace TourDTO {
  export type Content = Tour;

  export namespace GetAll {
    export type Response = Content[];
  } 
  export namespace Search {
    export interface Request
      extends Pick<
        Content,
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
    export interface Response extends Pagebale {
      content: Content[];
    }
  }
  export namespace CreateOne {
    export type Request = Content;
    export type Response = Content;
  }
  export namespace UpdateOne {
    export type Request = Omit<Content, "id">;
    export type Response = Content;
  }
  export namespace GetOne {
    export type Request = Content["id"];
    export type Response = Content;
  }
  export namespace DeleteOne {
    export type Request = Content["id"];
  }
}
