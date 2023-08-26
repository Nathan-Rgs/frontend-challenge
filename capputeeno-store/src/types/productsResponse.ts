import { Products } from "./products";

export interface ProductsFecthResponse {
  data: {
    allProducts: Products[];
  };
}
