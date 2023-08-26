import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductsFecthResponse } from "@/types/productsResponse";
import { useFilter } from "./useFilter";
import { FilterType } from "@/types/filterTypes";
import { getCategoryByType } from "@/utils/graphqlFilters";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetchProducts = (query: string): AxiosPromise<ProductsFecthResponse> => {
  return axios.post(API_URL, {
    query,
  });
};

const generateQuery = (type: FilterType) => {
  if (type == FilterType.ALL) {
    return `query{
        allProducts {
          id,
          name,
          price_in_cents,
          image_url
        }
      }`;
  } else {
    return `query{
      allProducts(filter: {category: "${getCategoryByType(type)}"}){
        id,
        name,
        price_in_cents,
        image_url
      }
    }`;
  }
};

export default function useProducts() {
  const { type } = useFilter();
  const query = generateQuery(type);
  const { data } = useQuery({
    queryFn: () => fetchProducts(query),
    queryKey: ["products", type],
  });

  return {
    data: data?.data?.data?.allProducts,
  };
}
