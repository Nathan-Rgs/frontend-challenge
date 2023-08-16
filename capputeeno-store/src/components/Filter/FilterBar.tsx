"use client";

import styled from "styled-components";
import FilterTypes from "./FilterTypes";

interface FilterBarProps {}

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
`;

export default function FilterBar(props: FilterBarProps) {
  return (
    <FilterContainer>
      <FilterTypes />
    </FilterContainer>
  );
}
