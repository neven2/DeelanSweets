import React from "react";
import ProductCardKurdish from "./ProductCardKurdish";
const ProductsListKurdish = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <ProductCardKurdish item={item} key={index} />
      ))}
    </>
  );
};

export default ProductsListKurdish;
