'use client';
import React from 'react';
import {SfBadge, SfButton, SfIconShoppingCart} from "@storefront-ui/react";
import Link from "next/link";
import {useAppSelector} from "@/store/store";
import {selectCart} from "@/store/reducer/cartSlice";

const CartButton = () => {
  const cart = useAppSelector(selectCart);
  let count = 0;
  if(cart && cart.lineItems) {
    count = cart.lineItems.length;
  }
  console.log({cart});


  return (
    <SfButton
      variant="secondary"
      square
      slotPrefix={<SfIconShoppingCart/>}
    >
      Cart
      <SfBadge content={count}/>
    </SfButton>

  );
};

export default CartButton;