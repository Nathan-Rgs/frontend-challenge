import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductsFecthResponse } from "@/types/productsResponse";
import { useFilter } from "./useFilter";
import { FilterType } from "@/types/filterTypes";
import { getCategoryByType, getFieldBySort } from "@/utils/graphqlFilters";
import { SortTypes } from "@/types/sortTypes";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetchProducts = (query: string): AxiosPromise<ProductsFecthResponse> => {
  console.log(query);
  return axios.post(API_URL, {
    query,
  });
};

const generateQuery = (type: FilterType, sort: SortTypes) => {
  if (type === FilterType.ALL && sort === SortTypes.POPULARITY)
    return `query {
    allProducts(sortField: "sales", sortOrder: "DSC") {
      id
      name
      price_in_cents
      image_url
    }
  }
`;
  const sortSettings = getFieldBySort(sort);
  const categoryFilter = getCategoryByType(type);
  return `
query {
    allProducts(sortField: "${sortSettings.field}", sortOrder: "${
    sortSettings.order
  }", ${categoryFilter ? `filter: { category: "${categoryFilter}"}` : ""}) {
      id
      name
      price_in_cents
      image_url
      category
    }
  }
`;
};

export default function useProducts() {
  const { type, sort } = useFilter();
  const query = generateQuery(type, sort);
  const { data } = useQuery({
    queryFn: () => fetchProducts(query),
    queryKey: ["products", type, sort],
  });

  return {
    data: data?.data?.data?.allProducts,
  };
}
