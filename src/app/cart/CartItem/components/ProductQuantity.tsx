"use client";
import React from "react";
import SimpleQuantitySelector from "@/components/SimpleQuantitySelect/SimpleQuantitySelect";
import { addProductToCart } from "@/api/cart/addProductToCart";
import { CartLineItem } from "@/types";
import { changeProductQuantity } from "@/api/cart/changeProductQuantity";

interface ProductQuantityProps {
  item: CartLineItem;
}

const ProductQuantity = (props: ProductQuantityProps) => {
  const [loading, setLoading] = React.useState(false);

  const handleIncrementItem = async (qty: number) => {
    setLoading(true);
    try {
      await addProductToCart({ sku: props.item.variant.sku, qty: "1" });
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
    }
  };
  const handleDecrementItem = async (qty: number) => {
    setLoading(true);
    try {
      await changeProductQuantity(props.item.id, qty);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
    }
  };

  return (
    <SimpleQuantitySelector
      quantity={props.item.quantity}
      onIncrement={handleIncrementItem}
      onDecrement={handleDecrementItem}
      disabled={loading}
    />
  );
};

export default ProductQuantity;
