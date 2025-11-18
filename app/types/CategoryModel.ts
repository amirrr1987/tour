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

export namespace CategoryDTO {
  export type Content = Category;

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
