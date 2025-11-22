export interface IFilter {
  search: string;
  category: string;
  location: string;
  price: [number, number];
  count: number;
  startDate: string;
  vehicle: string;
}