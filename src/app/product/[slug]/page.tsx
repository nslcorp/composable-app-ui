"use client";
import React from "react";
import {
  SfButton,
  SfIconFavorite,
  SfIconShoppingCart,
  SfLink,
  SfSelect,
} from "@storefront-ui/react";

interface ProductDetailsProps {
  params: {
    slug: string;
  }
}

const ProductDetails = (props: ProductDetailsProps) => {
  console.log("ProductDetails", props);

  return (
    <div>
      <h1>Product Details Page</h1>
      <div>slug name: {props.params.slug}</div>
    </div>
  );
};

export default ProductDetails;
