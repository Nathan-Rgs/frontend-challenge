"use client";

import styles from "./page.module.css";
import FilterBar from "@/components/Filters/FilterBar";
import ProductsList from "@/components/ProductsList/ProductsList";

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar />
      <ProductsList />
    </main>
  );
}
