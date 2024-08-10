export interface ServicesRequest {
  name: string;
  parentId: number;
  url: string;
  imageAddress: string;
  description: string;
  priority: number;
  subCategoryModel: string[];
  id: number;
}

export namespace Service {
  export namespace GetAll {
    export type Response = ServicesRequest[];
  }
  export namespace Create {
    export interface Request extends Omit<ServicesRequest, "id"> {}
  }
  export namespace Update {
    export interface Request extends ServicesRequest {}
  }
  export namespace Delete {
    export type Request = ServicesRequest["id"];
  }
}

