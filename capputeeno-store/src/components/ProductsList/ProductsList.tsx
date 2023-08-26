"use client";

import useProducts from "@/hooks/useProducts";
import styled from "styled-components";
import ProductCard from "./ProductCard";

interface ProductsListProps {}

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 32px;
  max-width: 100%;
  margin-top: 32px;
`;

export default function ProductsList(props: ProductsListProps) {
  const { data } = useProducts();

  return (
    <ProductsGrid>
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          image_url={product.image_url}
          price={product.price_in_cents}
        />
      ))}
    </ProductsGrid>
  );
}
