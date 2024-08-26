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
  stayTypeEnum: "HOTEL" | "MOTEL" | "HOUSE" | "VILLA" | "CAMP";
  transferTypeEnum: "AIRPLANE" | "TRAIN" | "BUS" | "SHIP";
  mealTypeEnum:
    | "BREAKFAST"
    | "BRUNCH"
    | "LUNCH"
    | "AFTERNOON_TEA"
    | "dinner"
    | "FULL";
  tourLevelTypeEnum: "EASY" | "MEDIUM" | "HARD";
  tourTypeEnum: "ECONOMY" | "STANDARD" | "LUXURY";
  categoryId: [];
  rate: number;
  id: number;
}
export namespace TourDTO {
  export type Content = Tour;

  export namespace GetAll {
    export type Response = Content[];
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
