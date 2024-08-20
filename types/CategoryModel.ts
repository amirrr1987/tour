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
