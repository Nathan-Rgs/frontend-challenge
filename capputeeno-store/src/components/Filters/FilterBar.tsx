"use client";

import styled from "styled-components";
import FilterTypes from "./FilterTypes";
import SortPriority from "../Sort/SortPriority";

interface FilterBarProps {}

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
`;

export default function FilterBar(props: FilterBarProps) {
  return (
    <FilterContainer>
      <FilterTypes />
      <SortPriority />
    </FilterContainer>
  );
}
