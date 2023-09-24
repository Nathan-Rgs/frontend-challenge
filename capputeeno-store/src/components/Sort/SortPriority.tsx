import styled from "styled-components";
import Arrow from "../icons/arrow";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { SortTypes } from "@/types/sortTypes";

interface SortPriority {}

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: var(--dark-text);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 15px;
    }
  }
`;

const PrioritySorter = styled.ul`
  position: absolute;
  width: max-content;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  list-style: none;
  z-index: 100;

  top: 100%;
  right: 8px;

  li {
    color: var(--dark-text);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`;

function SortPriority(props: SortPriority) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const { sort, setSort } = useFilter();

  const SortTypesList = [
    "Novidades",
    "Preço, Menor - Maior",
    "Preço, Maior - Menor",
    "Mais vendidos",
  ];

  const handleOpen = () => setIsSortOpen((prev) => !prev);
  const handleUpdateSort = (value: SortTypes) => {
    setSort(value);
    setIsSortOpen(false);
  };

  return (
    <SortContainer>
      <button onClick={handleOpen}>
        Organizar por: {SortTypesList[sort]}
        <Arrow />
      </button>
      {isSortOpen && (
        <PrioritySorter>
          <li onClick={() => handleUpdateSort(SortTypes.NEWS)}>
            {SortTypesList[SortTypes.NEWS]}
          </li>
          <li onClick={() => handleUpdateSort(SortTypes.MINOR_PRICE)}>
            {SortTypesList[SortTypes.MINOR_PRICE]}
          </li>
          <li onClick={() => handleUpdateSort(SortTypes.BIGGEST_PRICE)}>
            {SortTypesList[SortTypes.BIGGEST_PRICE]}
          </li>
          <li onClick={() => handleUpdateSort(SortTypes.POPULARITY)}>
            {SortTypesList[SortTypes.POPULARITY]}
          </li>
        </PrioritySorter>
      )}
    </SortContainer>
  );
}

export default SortPriority;
