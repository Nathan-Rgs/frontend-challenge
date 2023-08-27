import { FilterType } from "@/types/filterTypes";
import { SortTypes } from "@/types/sortTypes";

export function getCategoryByType(type: FilterType) {
  if (type == FilterType.MUG) return "mugs";
  if (type == FilterType.SHIRT) return "t-shirts";
  return "";
}

export function getFieldBySort(sort: SortTypes) {
  if (sort === SortTypes.NEWS) return { field: "created_at", order: "DSC" };
  if (sort === SortTypes.BIGGEST_PRICE)
    return { field: "price_in_cents", order: "DSC" };
  if (sort === SortTypes.MINOR_PRICE)
    return { field: "price_in_cents", order: "ASC" };
  return { field: "sales", order: "DSC" };
}

export const generateQuery = (type: FilterType, sort: SortTypes) => {
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
