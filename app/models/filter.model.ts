export interface IFilter {
  search: string;
  category: string;
  location: string;
  price: [number, number];
  startDate: string;
  endDate: string;
  vehicle: string;
}