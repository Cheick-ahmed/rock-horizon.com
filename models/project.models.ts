export namespace Project {
  export interface Root {
    id: string;
    slug: string;
    title: string;
  }

  export interface Detail {
    id: string | number;
    name: string;
    value: string | number;
  }

  interface Feature {
    id: string;
    name: string;
    available: boolean;
  }

  export interface Item {
    id: string;
    name: string;
    size: string;
    features: Feature[];
    price: string | number;
    currency: string;
  }
}
