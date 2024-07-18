"use client";
import React from "react";
import { useCatogryNav } from "../(stateStore)/useCatogryNav";
import ProductCard from "./ProductCard";

const ProductsContainer = ({ data }) => {
  const catogry = useCatogryNav((state) => state.catogry);

  return (
    <div className=" grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-4 md:grid-cols-2">
      {data?.map((item) => {
        if (item.catogry === catogry || catogry === "all")
          return (
            <ProductCard
              product={item}
              timeInMonth={item?.time_in_month}
              key={item.id}
              name={item?.name}
              current_price={item?.current_price}
              id={item?.id}
            />
          );
      })}
    </div>
  );
};

export default ProductsContainer;
