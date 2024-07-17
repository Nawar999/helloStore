import React from "react";
import { prisma } from "@/prisma/prismaClient";
import ProductsContainer from "./ProductsContainer";
import CatogryNavBar from "./CatogryNavBar";
const ProductsView = async () => {
  const products = await prisma.product.findMany();
  return (
    <div>
      <CatogryNavBar />
      <ProductsContainer data={products} />
    </div>
  );
};

export default ProductsView;
