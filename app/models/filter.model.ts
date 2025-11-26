import type { ICategory } from "./category.model";
import type { ILocation } from "./location.model";
import type { VehicleEnum } from "~/enums";

export interface IFilter {
  search: string;
  category: ICategory['id'];
  location: ILocation['id'];
  price: [number, number];
  startDate: string;
  endDate: string;
  vehicle: VehicleEnum | string;
  count: number | undefined;
}