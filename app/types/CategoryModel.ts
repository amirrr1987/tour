export interface Category {
  id: null | number;
  name: string;
  parentId: null | number;
  url: null | string;
  imageAddress: null | string;
  description: null | string;
  priority: null | number;
  subCategoryModel: Category[];
}

export type CategoryDTOContent = Category;

export type CategoryDTOGetAllResponse = CategoryDTOContent[];
export type CategoryDTOCreateOneRequest = CategoryDTOContent;
export type CategoryDTOCreateOneResponse = CategoryDTOContent;
export type CategoryDTOUpdateOneRequest = Omit<CategoryDTOContent, "id">;
export type CategoryDTOUpdateOneResponse = CategoryDTOContent;
export type CategoryDTOGetOneRequest = CategoryDTOContent["id"];
export type CategoryDTOGetOneResponse = CategoryDTOContent;
export type CategoryDTODeleteOneRequest = CategoryDTOContent["id"];
