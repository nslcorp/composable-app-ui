"use client";
import React from "react";
import { SfBadge, SfButton, SfIconShoppingCart } from "@storefront-ui/react";
import Link from "next/link";
import { useAppSelector } from "@/store/store";
import { selectCart } from "@/store/reducer/cartSlice";
import { spans } from "next/dist/build/webpack/plugins/profiling-plugin";

const CartButton = () => {
  const { loading, data } = useAppSelector(selectCart);

  const cartMessage = loading ? "Loading cart ..." : "Cart";

  return (
    <SfButton
      variant="secondary"
      square
      slotPrefix={<SfIconShoppingCart />}
      disabled={loading}
    >
      {cartMessage}
      {!loading && <SfBadge content={data.lineItems.length} />}
    </SfButton>
  );
};

export default CartButton;
