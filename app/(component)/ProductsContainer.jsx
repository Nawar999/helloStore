"use client";
import React from "react";
import { useCatogryNav } from "../(stateStore)/useCatogryNav";
import Link from "next/link";
import ProductCard from "./ProductCard";

const ProductsContainer = ({ data }) => {
  const catogry = useCatogryNav((state) => state.catogry);

  if (catogry === "all") {
    return (
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-4 md:grid-cols-2">
        {/* <h1 className="text-right text-white text-2xl mb-3">جميع المنتجات</h1> */}
        {data?.map((item) => {
          return (
            <ProductCard
              timeInMonth={item?.time_in_month}
              name={item?.name}
              current_price={item?.current_price}
              id={item?.id}
              key={item?.id}
            />
          );
        })}
      </div>
    );
  }
  return (
    <div className="flex gap-2">
      {data?.map((item) => {
        if (item.catogry === catogry)
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

function Card({ product }) {
  // const incrementCartState = useCart((state) => state.inc);
  function handleClick(product) {
    let exCart = [];
    localStorage.getItem("shopingCart") === null
      ? localStorage.setItem("shopingCart", JSON.stringify(product))
      : (exCart = JSON.parse(localStorage.getItem("shopingCart")));

    exCart[exCart.length] = product;
    localStorage.setItem("shopingCart", JSON.stringify(exCart));
    // incrementCartState();
  }
  return (
    <>
      <Link href={`/product_details/${product?.id}`}>
        <div>
          <h1>{product?.name}</h1>
          <p>{product?.currentPrice}</p>
          <p>{product?.time}</p>
        </div>
      </Link>
      <button onClick={() => handleClick(product)}>Add to cart</button>
    </>
  );
}
