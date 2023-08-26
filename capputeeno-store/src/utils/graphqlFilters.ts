import { FilterType } from "@/types/filterTypes";

export function getCategoryByType(type: FilterType) {
  if (type == FilterType.MUG) return "mugs";
  if (type == FilterType.SHIRT) return "t-shirts";
  return "";
}
