"use client";
import React, { useEffect } from "react";
import { createCart } from "@/api/cart/createCart";
import { useAppDispatch } from "@/store/store";
import { fetchCart } from "@/store/reducer/cartSlice";
import { useLocalStorage } from "react-use";

export const CART_ID_KEY = "userCartId";

const Bootstrap = (props: any) => {
  const [cartId, setCartId] = useLocalStorage(CART_ID_KEY, "");
  const dispatch = useAppDispatch();


  useEffect(() => {
    if(!cartId) {
      (async () => {
        const {cartId} = await createCart();
        setCartId(cartId);
      })();
      return;
    }
    dispatch(fetchCart(cartId));
  }, [cartId]);

  return <>{props.children}</>;
};

export default Bootstrap;
