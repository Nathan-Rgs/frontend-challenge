"use client";

import { DefaultPageLayout } from "@/components/DefaultPageLayout";
import FilterBar from "@/components/Filters/FilterBar";
import ProductsList from "@/components/ProductsList/ProductsList";
import styled from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <ProductsList />
      </PageWrapper>
    </DefaultPageLayout>
  );
}
