import type { ICategory } from "./category.model"
import type { ITag } from "./tag.model"
import type { VehicleEnum } from "~/enums"

export interface ITour {
  id: number
  name: string
  description: string
  price: number
  originalPrice: number
  startDate: string
  endDate: string
  count: number
  vehicle: VehicleEnum
  rating: number
  reviews: number
  location: string
  category: ICategory['id']
  image: string
  featured: boolean
  tags: ITag['id'][]
  keywords: string[]
}