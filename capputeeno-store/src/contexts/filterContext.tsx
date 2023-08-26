"use client";
import { FilterType } from "@/types/filterTypes";
import { SortTypes } from "@/types/sortTypes";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterType.ALL,
  sort: SortTypes.NEWS,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
  setSort: (value: SortTypes) => {},
});

interface ProviderProps {
  children: ReactNode;
}

export default function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);
  const [sort, setSort] = useState(SortTypes.NEWS);

  return (
    <FilterContext.Provider
      value={{ search, page, type, sort, setSearch, setType, setPage, setSort }}
    >
      {children}
    </FilterContext.Provider>
  );
}
